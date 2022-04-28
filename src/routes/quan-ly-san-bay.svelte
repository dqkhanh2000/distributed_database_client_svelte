<script context="module">
	import { browser } from '$app/env';
  import { goto } from '$app/navigation';
    import { onMount, tick } from 'svelte';
  import About from './about.svelte';
  import * as jquery from 'jquery';
	export const prerender = true;
</script>

<script>
let listAirport = [];
  onMount (async function() {
    let manv = localStorage.getItem("idnv") !== undefined ? JSON.stringify(localStorage.getItem("idnv")) : "";
    let server =  localStorage.getItem("server") !== undefined ? JSON.stringify( localStorage.getItem("server")) : "";
    let nameTable = "SanBay";
    let url = `http://192.168.31.74:8000/table/${nameTable}`;
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
      listAirport = json.data;
  })

  // add Airport function
  let MaSanBay, TenSanBay, DiaChi, SoDuongBang;
  async function addAirport() {
    let server =  localStorage.getItem("server") !== undefined ? JSON.stringify( localStorage.getItem("server")) : '';
    let manv = localStorage.getItem("idnv") !== undefined ? JSON.stringify(localStorage.getItem("idnv")) : '';
    let url = `http://192.168.31.74:8000/add-airport`;

    let body =  new URLSearchParams({
      "MaSanBay": MaSanBay,
      "TenSanBay" : TenSanBay,
      "DiaChi" : DiaChi,
      "SoDuongBang": SoDuongBang,
      "MaDonViBan" : server,
      "MaNhanVien" : manv,
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
      TenSanBay =""
      DiaChi =""
      SoDuongBang ="";
      if (json.message === 1) {
        alert("Thêm sân bay thành công")
        window.location.href = '/quan-ly-san-bay';
      }
      else {
        alert("Thêm sân bay thất bại")
      }
  }


  async function deleteAirport(id) {
    let server =  localStorage.getItem("server") !== undefined ? JSON.stringify( localStorage.getItem("server")) : '';
    let manv = localStorage.getItem("idnv") !== undefined ? JSON.stringify(localStorage.getItem("idnv")) : '';
    let url = `http://192.168.31.74:8000/delete-airport`;
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
          "MaSanBay": id
        }),
      })

      const json = await res.json();
      if (json.message === 1) {
        alert("Xóa thành công")
        goto("/quan-ly-san-bay");
      }
      else {
        alert("Xóa thất bại")
      }

  }

  let tenSanBaySua, diaChiSua, soDuongBangSua, maSanBaySua;
  async function chooseAirport(airport) {
    tenSanBaySua = airport.TenSanBay;
    diaChiSua = airport.DiaChi;
    soDuongBangSua = airport.SoDuongBang;
    maSanBaySua = airport.MaSanBay;
  }

  async function updateAirport() { 
    let server =  localStorage.getItem("server") !== undefined ? JSON.stringify( localStorage.getItem("server")) : '';
    let manv = localStorage.getItem("idnv") !== undefined ? JSON.stringify(localStorage.getItem("idnv")) : '';
    let url = `http://192.168.31.74:8000/update-airport`;
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
          "MaSanBay": maSanBaySua,
          "TenSanBay" : tenSanBaySua,
          "DiaChi": diaChiSua,
          "SoDuongBang" : soDuongBangSua,
        }),
      })
      const json = await res.json();
      if (json.message === 1) {
        alert("Sửa thành công");
        window.location.href = '/quan-ly-san-bay';
      }
      else {
        alert("Sửa thất bại");
      }
      tenSanBaySua = "";
      diaChiSua = "";
      soDuongBangSua = "";
      maSanBaySua = "";
  }
</script>


<section>
    <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <section class="content-header">
          <div class="container-fluid">
            <div class="row mb-2">
              <div class="col-sm-6">
                <h1>Quản Lý Sân Bay</h1>
              </div>
              <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                  <li class="breadcrumb-item"><a href="#">Home</a></li>
                  <li class="breadcrumb-item active">Quản lý sân bay</li>
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
                    <h3 class="card-title">Bảng thông tin sân bay</h3>
                  </div>
                  <!-- /.card-header -->
                  <div class="card-body">
                    <table id="example1" class="table table-bordered table-striped">
                      <thead>
                      <tr>
                        <th>Mã sân bay</th>
                        <th>Tên sân bay</th>
                        <th>Địa chỉ</th>
                        <th>Số đường băng</th>
                        <th>Công cụ</th>
                      </tr>
                      </thead>
                      <tbody>
                        {#each listAirport as airport}
                        <tr>
                        <td>{airport.MaSanBay}</td>
                        <td>{airport.TenSanBay}</td>
                        <td>{airport.DiaChi}</td>
                        <td>{airport.SoDuongBang}</td>
                        <td>
                            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#add-new">Thêm</button>
                            <button type="button" class="btn btn-danger" on:click={deleteAirport(airport.MaSanBay)}>Xóa</button>
                            <button type="button" class="btn btn-success" on:click={chooseAirport(airport)} data-toggle="modal" data-target="#edit">Sửa</button>
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
                    <h4 class="modal-title">Thêm sân bay</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <form>
                    <div class="modal-body">
                        <div class="card-body">
                          <div class="form-group">
                            <label for="exampleInputEmail1">Mẫ sân bay</label>
                            <input type="text" class="form-control" bind:value={MaSanBay} id="exampleInputEmail1" placeholder="Tên sân bay">
                        </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Tên sân bay</label>
                                <input type="text" class="form-control" bind:value={TenSanBay} id="exampleInputEmail1" placeholder="Tên sân bay">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Địa chỉ</label>
                                <input type="text" class="form-control" bind:value={DiaChi} id="exampleInputEmail1" placeholder="Địa chỉ">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Số đường băng</label>
                                <input type="number" class="form-control" bind:value={SoDuongBang} id="exampleInputEmail1" placeholder="Số đường băng">
                            </div>                    
                        </div>
                    </div>
                    <div class="modal-footer justify-content-between">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" on:click={addAirport}>Save changes</button>
                    </div>
                </form>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>
    <!-- modal Edit -->
    <div class="modal fade" id="edit">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">Chỉnh sửa sân bay</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <form>
                    <div class="modal-body">
                        <div class="card-body">
                            <div class="form-group">
                              <label for="exampleInputEmail1">Mã sân bay</label>
                              <input type="text" class="form-control" value={maSanBaySua} id="exampleInputEmail1" placeholder="Tên sân bay">
                          </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Tên sân bay</label>
                                <input type="text" class="form-control" bind:value={tenSanBaySua} id="exampleInputEmail1" placeholder="Tên sân bay">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Địa chỉ</label>
                                <input type="text" class="form-control" bind:value={diaChiSua} id="exampleInputEmail1" placeholder="Địa chỉ">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Số đường băng</label>
                                <input type="number" class="form-control" bind:value={soDuongBangSua} id="exampleInputEmail1" placeholder="Số đường băng">
                            </div>                    
                        </div>
                    </div>
                    <div class="modal-footer justify-content-between">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary"  on:click={updateAirport}>Save changes</button>
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
