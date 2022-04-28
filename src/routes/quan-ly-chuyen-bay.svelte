<script context="module">
	import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
	export const prerender = true;
</script>

<script>
   let listFlight = [];
   onMount (async function() {
    let manv = localStorage.getItem("idnv") !== undefined ? JSON.stringify(localStorage.getItem("idnv")) : "";
    let server =  localStorage.getItem("server") !== undefined ? JSON.stringify( localStorage.getItem("server")) : "";
    let nameTable = "ChuyenBay";
    let url = `${import.meta.env.VITE_HOST_API}/table/${nameTable}`;
    let body = new URLSearchParams({
      'MaNhanVien' : manv,
      'server': server,
	  });
    const res = await fetch(url, {
      headers: {        
        'Accept': '*/*',
        'Content-Type': 'application/X-www-form-urlencoded'
        },
        mode: "cors",
        cache: 'default',
        method: 'POST',
        body,
      })

      const json = await res.json();
      listFlight = json.data;
  })


  let idPlane, time, idFrom, idTo;

  async function addFlight() {
    let server =  localStorage.getItem("server") !== undefined ? JSON.stringify( localStorage.getItem("server")) : '';
    let manv = localStorage.getItem("idnv") !== undefined ? JSON.stringify(localStorage.getItem("idnv")) : '';
    let url = `${import.meta.env.VITE_HOST_API}/add-flight`;
    let date;
    date = new Date(time);
    date = date.getUTCFullYear() + '-' +
    ('00' + (date.getUTCMonth()+1)).slice(-2) + '-' +
    ('00' + date.getUTCDate()).slice(-2) + ' ' + 
    ('00' + date.getUTCHours()).slice(-2) + ':' + 
    ('00' + date.getUTCMinutes()).slice(-2) + ':' + 
    ('00' + date.getUTCSeconds()).slice(-2);
    let body =  new URLSearchParams({
      "MaMayBay" : idPlane,
      "ThoiGian" : date,
      "MaSanBayDi": idFrom,
      "MaSanBayDen": idTo,
      "server":server,
      "MaNhanVien": manv,
    });
    const res = await fetch(url, {
      headers: {        
        'Accept': '*/*',
        'Content-Type': 'application/X-www-form-urlencoded'
        },
        mode: "cors",
        cache: 'default',
        method: 'POST',
        body,
      })

      const json = await res.json();
      if (json.message === 1) {
        alert("Thêm chuyến bay thành công")
        window.location.href = '/quan-ly-chuyen-bay';
      }
      else {
        alert("Thêm chuyến bay thất bại")
      }
  }


  async function deleteFlight(id) {
    let server =  localStorage.getItem("server") !== undefined ? JSON.stringify( localStorage.getItem("server")) : '';
    let manv = localStorage.getItem("idnv") !== undefined ? JSON.stringify(localStorage.getItem("idnv")) : '';
    let url = `${import.meta.env.VITE_HOST_API}/delete-flight`;
    const res = await fetch(url, {
      headers: {        
        'Accept': '*/*',
        'Content-Type': 'application/X-www-form-urlencoded'
        },
        mode: "cors",
        cache: 'default',
        method: 'POST',
        body: new URLSearchParams({
          "server":server,
          "MaNhanVien": manv,
          "MaChuyenBay": id
        }),
      })

      const json = await res.json();
      if (json.message === 1) {
        alert("Xóa thành công")
        window.location.href = '/quan-ly-chuyen-bay';
      }
      else {
        alert("Xóa thất bại")
      }
  }
</script>


<section>
    <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <section class="content-header">
          <div class="container-fluid">
            <div class="row mb-2">
              <div class="col-sm-6">
                <h1>Quản Lý Chuyến Bay</h1>
              </div>
              <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                  <li class="breadcrumb-item"><a href="#">Home</a></li>
                  <li class="breadcrumb-item active">Quản lý chuyến bay</li>
                </ol>
              </div>
            </div>
          </div><!-- /.container-fluid -->
        </section>
    
        <!-- Main content -->
        <section class="content">
          <div class="container-fluid">
            <div class="row">
              <div class="col-12">
                <div class="card">
                  <div class="card-header">
                    <h3 class="card-title">Bảng thông tin chuyến bay</h3>
                  </div>
                  <!-- /.card-header -->
                  <div class="card-body">
                    <table id="example1" class="table table-bordered table-striped">
                      <thead>
                      <tr>
                        <th>Mã chuyến bay</th>
                        <th>Mã máy bay</th>
                        <th>Thời gian</th>
                        <th>Mã sân bay đi</th>
                        <th>Mã sân bay đến</th>
                        <th>Công cụ</th>
                      </tr>
                      </thead>
                      <tbody>
                      {#each listFlight as flight}
                      <tr>
                        <td>{flight.MaChuyenBay}</td>
                        <td>{flight.MaMayBay}</td>
                        <td>{flight.ThoiGian}</td>
                        <td>{flight.MaSanBayDi}</td>
                        <td>{flight.MaSanBayDen}</td>
                        <td>
                            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#add-new">Thêm</button>
                            <button type="button" class="btn btn-danger" on:click={deleteFlight(flight.MaChuyenBay)}>Xóa</button>
                            <!-- <button type="button" class="btn btn-success" data-toggle="modal" data-target="#edit">Sửa</button> -->
                        </td>
                      </tr>
                      {/each}
                      </tbody>
    
                    </table>
                  </div>
                  <!-- /.card-body -->
                </div>
                <!-- /.card -->
              </div>
              <!-- /.col -->
            </div>
            <!-- /.row -->
          </div>
          <!-- /.container-fluid -->
        </section>
        <!-- /.content -->
      </div>
    
    
      <!-- Control Sidebar -->
      <aside class="control-sidebar control-sidebar-dark">
        <!-- Control sidebar content goes here -->
      </aside>
      <!-- /.control-sidebar -->
    
    <!-- modal add new -->
    <div class="modal fade" id="add-new">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">Thêm chuyến bay</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <form>
                    <div class="modal-body">
                        <div class="card-body">
                            <div class="form-group">
                                <label for="exampleInputEmail1">Mã máy bay</label>
                                <input type="text" class="form-control" bind:value={idPlane} id="exampleInputEmail1" placeholder="Mã máy bay">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Thời gian</label>
                                <input type="datetime-local" class="form-control" bind:value={time} id="exampleInputEmail1" placeholder="Thời gian">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Mã sân bay đi</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" bind:value={idFrom} placeholder="Mã sân bay đi">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Mã sân bay đến</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" bind:value={idTo} placeholder="Mã sân bay đến">
                            </div>
                        
                        </div>
                    </div>
                    <div class="modal-footer justify-content-between">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" on:click={addFlight}>Save changes</button>
                    </div>
                </form>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>
</section>

<style>
</style>
