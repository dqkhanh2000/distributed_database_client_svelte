<script context="module">
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
	export const prerender = true;
</script>

<script>
   let listPlane = [];
   onMount (async function() {
    let manv = localStorage.getItem("idnv") !== undefined ? JSON.stringify(localStorage.getItem("idnv")) : "";
    let server =  localStorage.getItem("server") !== undefined ? JSON.stringify( localStorage.getItem("server")) : "";
    let nameTable = "MayBay";
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
      listPlane= json.data;
  })


  let namePlane, num1, num2, firm;
  async function addPlane() {
    let server =  localStorage.getItem("server") !== undefined ? JSON.stringify( localStorage.getItem("server")) : '';
    let manv = localStorage.getItem("idnv") !== undefined ? JSON.stringify(localStorage.getItem("idnv")) : '';
    let url = `${import.meta.env.VITE_HOST_API}/add-plane`;
    let body =  new URLSearchParams({
      "TenMayBay" : namePlane,
      "SoGheLoai1" : ''+num1,
      "SoGheLoai2": ''+num2,
      "HangSanXuat": firm,
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
        alert("Thêm máy bay thành công")
        window.location.href = '/quan-ly-may-bay';
      }
      else {
        alert("Thêm máy bay thất bại")
      }
  }

  async function deletePlane(id) {
    let server =  localStorage.getItem("server") !== undefined ? JSON.stringify( localStorage.getItem("server")) : '';
    let manv = localStorage.getItem("idnv") !== undefined ? JSON.stringify(localStorage.getItem("idnv")) : '';
    let url = `${import.meta.env.VITE_HOST_API}/delete-plane`;
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
          "MaMayBay": id
        }),
      })

      const json = await res.json();
      if (json.message === 1) {
        alert("Xóa thành công")
        goto("/quan-ly-may-bay");
      }
      else {
        alert("Xóa thất bại")
      }
  }

  let curIdPlaneChange, curName, curNum1, curNum2, curFirm;
  async function choosePlane(plane) {
    curIdPlaneChange = plane.MaMayBay;
    curName = plane.TenMayBay;
    curNum1 = plane.SoGheLoai1;
    curNum2 = plane.SoGheLoai2;
    curFirm = plane.HangSanXuat;
  }

  async function updatePlane() { 
    let server =  localStorage.getItem("server") !== undefined ? JSON.stringify( localStorage.getItem("server")) : '';
    let manv = localStorage.getItem("idnv") !== undefined ? JSON.stringify(localStorage.getItem("idnv")) : '';
    let url = `${import.meta.env.VITE_HOST_API}/update-plane`;
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
          "MaMayBay": curIdPlaneChange,
          "TenMayBay" : curName,
          "SoGheLoai1": ''+curNum1,
          "SoGheLoai2" : ''+curNum2,
          "HangSanXuat" : curFirm,
        }),
      })
      const json = await res.json();
      if (json.message === 1) {
        alert("Sửa thành công");
        window.location.href = '/quan-ly-may-bay';
      }
      else {
        alert("Sửa thất bại");
      }
      curIdPlaneChange = "";
      curName = "";
      curNum1 = "";
      curNum2 = "";
      curFirm = "";
  }

</script>

<section>
    <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <section class="content-header">
          <div class="container-fluid">
            <div class="row mb-2">
              <div class="col-sm-6">
                <h1>Quản Lý Máy Bay</h1>
              </div>
              <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                  <li class="breadcrumb-item"><a href="#">Home</a></li>
                  <li class="breadcrumb-item active">Quản lý máy bay</li>
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
                    <h3 class="card-title">Bảng thông tin máy bay</h3>
                  </div>
                  <!-- /.card-header -->
                  <div class="card-body">
                    <table id="example1" class="table table-bordered table-striped">
                      <thead>
                      <tr>
                        <th>Mã máy bay</th>
                        <th>Tên máy bay</th>
                        <th>Số ghế loại 1</th>
                        <th>Số ghế loại 2</th>
                        <th>Hãng</th>
                        <th>Công cụ</th>
                      </tr>
                      </thead>
                      <tbody>
                        {#each listPlane as plane}
                      <tr>
                        <td>{plane.MaMayBay}</td>
                        <td>{plane.TenMayBay}</td>
                        <td>{plane.SoGheLoai1}</td>
                        <td>{plane.SoGheLoai2}</td>
                        <td>{plane.HangSanXuat}</td>
                        <td>
                            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#add-new">Thêm</button>
                            <button type="button" class="btn btn-danger" on:click={deletePlane(plane.MaMayBay)}>Xóa</button>
                            <button type="button" class="btn btn-success" on:click={choosePlane(plane)} data-toggle="modal" data-target="#edit">Sửa</button>
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
                    <h4 class="modal-title">Thêm máy bay</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <form>
                    <div class="modal-body">
                        <div class="card-body">
                            <div class="form-group">
                                <label for="exampleInputEmail1">Tên máy bay</label>
                                <input type="text" class="form-control" bind:value={namePlane} id="exampleInputEmail1" placeholder="Tên máy bay">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Số ghế loại 1</label>
                                <input type="number" class="form-control" bind:value={num1} id="exampleInputEmail1" placeholder="Số ghế loại 1">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Số ghế loại 2</label>
                                <input type="number" class="form-control" bind:value={num2} id="exampleInputEmail1" placeholder="Số ghế loại 2">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Hãnh sản xuất</label>
                                <input type="text" class="form-control" bind:value={firm} id="exampleInputEmail1" placeholder="Hãnh sản xuất">
                            </div>
                        
                        </div>
                    </div>
                    <div class="modal-footer justify-content-between">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" on:click={addPlane}>Save changes</button>
                    </div>
                </form>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>
   <div class="modal fade" id="edit">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">Chỉnh sửa máy bay</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <form>
                    <div class="modal-body">
                        <div class="card-body">
                            <div class="form-group">
                                <label for="exampleInputEmail1">Tên máy bay</label>
                                <input type="text" class="form-control" bind:value={curName} id="exampleInputEmail1" placeholder="Tên máy bay">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Số ghế loại 1</label>
                                <input type="text" class="form-control" bind:value={curNum1} id="exampleInputEmail1" placeholder="Số ghế loại 1">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Số ghế loại 2</label>
                                <input type="text" class="form-control" bind:value={curNum2} id="exampleInputEmail1" placeholder="Số ghế loại 2">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Hãnh sản xuất</label>
                                <input type="text" class="form-control" bind:value={curFirm} id="exampleInputEmail1" placeholder="Hãnh sản xuất">
                            </div>
                        
                        </div>
                    </div>
                    <div class="modal-footer justify-content-between">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" on:click={updatePlane}>Save changes</button>
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
