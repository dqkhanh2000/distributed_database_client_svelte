<script context="module">
import { browser } from '$app/env';
  import { goto } from '$app/navigation';
    import { onMount, tick } from 'svelte';
  import About from './about.svelte';
  import * as jquery from 'jquery';
	export const prerender = true;
</script>

<script>
  let listStaff = [];
  onMount (async function() {
    let manv = localStorage.getItem("idnv") !== undefined ? JSON.stringify(localStorage.getItem("idnv")) : "";
    let server =  localStorage.getItem("server") !== undefined ? JSON.stringify( localStorage.getItem("server")) : "";
    let nameTable = "NhanVien";
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
      listStaff = json.data;
  });
  let TenNhanVien = "", NgaySinh = "", QueQuan = "", CMND = "", TenDangNhap= "", MatKhau= "";
  async function addStaff() {
    let server =  localStorage.getItem("server") !== undefined ? JSON.stringify( localStorage.getItem("server")) : '';
    let manv = localStorage.getItem("idnv") !== undefined ? JSON.stringify(localStorage.getItem("idnv")) : '';
    let url = `http://192.168.31.74:8000/add-employee`;

    if (TenNhanVien !=="" && NgaySinh !=="" && QueQuan!=="" && CMND !=="" && TenDangNhap !=="" && MatKhau !=="") {
      let body =  new URLSearchParams({
        'MaNhanVien' : manv,
        "TenNhanVien" : TenNhanVien,
        "NgaySinh" : NgaySinh,
        "QueQuan":QueQuan,
        "SoCMND": CMND,
        "TenDangNhap" : TenDangNhap,
        "MatKhau": MatKhau,
        "server" : server,
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
        // MaChuyenBay = "";
        // MaKhachHang = "";
        if (json.message === 1) {
          alert("Thêm nhân viên thành công")
          window.location.href = '/quan-ly-nhan-vien';
        }
        else {
          alert("Thêm nhân viên thất bại")
        }
    }
    else{
      alert("điền đủ thông tin")
    }
  }


  async function deleteStaff(id) {
    let server =  localStorage.getItem("server") !== undefined ? JSON.stringify( localStorage.getItem("server")) : '';
    let manv = localStorage.getItem("idnv") !== undefined ? JSON.stringify(localStorage.getItem("idnv")) : '';
    let url = `http://192.168.31.74:8000/delete-employee`;
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
          "MaNhanVienDelete": id
        }),
      })

      const json = await res.json();
      if (json.message === 1) {
        alert("Xóa thành công")
        window.location.href = '/quan-ly-nhan-vien';
      }
      else {
        alert("Xóa thất bại")
      }

  }

  let MaNhanVienSua, TenNhanVienSua, NgaySinhSua, SoCMNDSua, QueQuanSua, TenDangNhapSua, MatKhauSua;
  async function chooseStaff(staff) {
    MaNhanVienSua = staff.MaNhanVien[0];
    TenNhanVienSua = staff.TenNhanVien;
    NgaySinhSua = staff.NgaySinh;
    SoCMNDSua =staff.SoCMND;
    QueQuanSua = staff.QueQuan;
    TenDangNhapSua = staff.TenDangNhap;
  }

  async function updateStaff() { 
    let server =  localStorage.getItem("server") !== undefined ? JSON.stringify( localStorage.getItem("server")) : '';
    let manv = localStorage.getItem("idnv") !== undefined ? JSON.stringify(localStorage.getItem("idnv")) : '';
    let url = `http://192.168.31.74:8000/update-employee`;
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
          "MaNhanVienUpdate": MaNhanVienSua,
          "TenNhanVien": TenNhanVienSua,
          "NgaySinh" : NgaySinhSua,
          "QueQuan": QueQuanSua,
          "SoCMND" : SoCMNDSua,
          "TenDangNhap" : TenDangNhapSua,
          "MatKhau" : MatKhauSua,
        }),
      })
      const json = await res.json();
      if (json.message === 1) {
        alert("Sửa thành công");
        window.location.href = '/quan-ly-nhan-vien';
      }
      else {
        alert("Sửa thất bại");
      }
      MaNhanVienSua = "";
      TenNhanVienSua = "";
      NgaySinhSua ="";
      SoCMNDSua ="";
      QueQuanSua = "";
  }
</script>


<section>
    <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <section class="content-header">
          <div class="container-fluid">
            <div class="row mb-2">
              <div class="col-sm-6">
                <h1>Quản Lý Nhân Viên</h1>
              </div>
              <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                  <li class="breadcrumb-item"><a href="#">Home</a></li>
                  <li class="breadcrumb-item active">Quản lý nhân viên</li>
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
                    <h3 class="card-title">Bảng thông tin nhân viên</h3>
                  </div>
                  <!-- /.card-header -->
                  <div class="card-body">
                    <table id="example1" class="table table-bordered table-striped">
                      <thead>
                      <tr>
                        <th>Mã nhân viên</th>
                        <th>Tên nhân viên</th>
                        <th>Mã đơn vị</th>
                        <th>Ngày sinh</th>
                        <th>CMND</th>
                        <th>Quê quán</th>
                        <th>Tên đăng nhập</th>
                        <th>Công cụ</th>
                      </tr>
                      </thead>
                      <tbody>
                        {#each listStaff as staff}
                        <tr>
                        <td>{staff.MaNhanVien[0]}</td>
                        <td>{staff.TenNhanVien}</td>
                        <td>{staff.MaDonViBan}</td>
                        <td>{staff.NgaySinh}</td>
                        <td>{staff.SoCMND}</td>
                        <td>{staff.QueQuan}</td>
                        <td>{staff.TenDangNhap}</td>
                        <td>
                            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#add-new">Thêm</button>
                            <button type="button" class="btn btn-danger" on:click={deleteStaff(staff.MaNhanVien[0])}>Xóa</button>
                            <button type="button" class="btn btn-success" on:click={chooseStaff(staff)} data-toggle="modal" data-target="#edit">Sửa</button>
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
                    <h4 class="modal-title">Thêm nhân viên</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <form>
                    <div class="modal-body">
                        <div class="card-body">
                            <div class="form-group">
                                <label for="exampleInputEmail1">Tên nhân viên</label>
                                <input type="text" class="form-control" bind:value={TenNhanVien} id="exampleInputEmail1" placeholder="Tên nhân viên" required>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Ngày sinh</label>
                                <input type="date" class="form-control" bind:value={NgaySinh} id="exampleInputEmail1" placeholder="Ngày sinh" required>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Quê quán</label>
                                <input type="text" class="form-control" bind:value={QueQuan} id="exampleInputEmail1" placeholder="Quê quán" required>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">CMND</label>
                                <input type="text" class="form-control" bind:value={CMND} id="exampleInputEmail1" placeholder="CMND" required>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Tên đăng nhập</label>
                                <input type="text" class="form-control" bind:value={TenDangNhap} id="exampleInputEmail1" placeholder="Tên đăng nhập" required>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Mật khẩu</label>
                                <input type="text" class="form-control" bind:value={MatKhau} id="exampleInputEmail1" placeholder="Mật khẩu" required>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer justify-content-between">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" on:click={addStaff}>Save changes</button>
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
                    <h4 class="modal-title">Chỉnh sửa nhân viên</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <form>
                    <div class="modal-body">
                        <div class="card-body">
                            <div class="form-group">
                                <label for="exampleInputEmail1">Mã nhân viên</label>
                                <input type="text" class="form-control" value={MaNhanVienSua} id="exampleInputEmail1" placeholder="Tên nhân viên">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Tên nhân viên</label>
                                <input type="text" class="form-control" bind:value={TenNhanVienSua} id="exampleInputEmail1" placeholder="Tên nhân viên">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Ngày sinh</label>
                                <input type="date" class="form-control" bind:value={NgaySinhSua} id="exampleInputEmail1" placeholder="Ngày sinh">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Quê quán</label>
                                <input type="text" class="form-control" bind:value={QueQuanSua} id="exampleInputEmail1" placeholder="Quê quán">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">CMND</label>
                                <input type="text" class="form-control" bind:value={SoCMNDSua} id="exampleInputEmail1" placeholder="CMND">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Tên đăng nhập</label>
                                <input type="text" class="form-control" bind:value={TenDangNhapSua} id="exampleInputEmail1" placeholder="Tên đăng nhập">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Mật khẩu</label>
                                <input type="text" class="form-control" bind:value={MatKhauSua} id="exampleInputEmail1" placeholder="Mật khẩu">
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer justify-content-between">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary"  on:click={updateStaff}>Save changes</button>
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
