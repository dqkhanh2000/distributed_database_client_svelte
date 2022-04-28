<script context="module">
	import { browser } from '$app/env';
  import { goto } from '$app/navigation';
    import { onMount, tick } from 'svelte';
  import About from './about.svelte';
  import * as jquery from 'jquery';
	export const prerender = true;
</script>

<script>
  let listTicket = [];
  onMount (async function() {
    let manv = localStorage.getItem("idnv") !== undefined ? JSON.stringify(localStorage.getItem("idnv")) : "";
    let server =  localStorage.getItem("server") !== undefined ? JSON.stringify( localStorage.getItem("server")) : "";
    let nameTable = "Ve";
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
      listTicket = json.data;
  })

  // add ticket function
  let MaChuyenBay, MaLoaiVe, MaKhachHang, TrangThai;
  async function addTicket() {
    let server =  localStorage.getItem("server") !== undefined ? JSON.stringify( localStorage.getItem("server")) : '';
    let manv = localStorage.getItem("idnv") !== undefined ? JSON.stringify(localStorage.getItem("idnv")) : '';
    let url = `${import.meta.env.VITE_HOST_API}/add-ticket`;
    var date;
    date = new Date();
    date = date.getUTCFullYear() + '-' +
    ('00' + (date.getUTCMonth()+1)).slice(-2) + '-' +
    ('00' + date.getUTCDate()).slice(-2) + ' ' + 
    ('00' + date.getUTCHours()).slice(-2) + ':' + 
    ('00' + date.getUTCMinutes()).slice(-2) + ':' + 
    ('00' + date.getUTCSeconds()).slice(-2);

    let body =  new URLSearchParams({
      "MaChuyenBay" : MaChuyenBay,
      "MaLoaiVe" : MaLoaiVe,
      "MaKhachHang": MaKhachHang,
      "TrangThai": TrangThai,
      "MaDonViBan" : server,
      "ThoiGianLap": date,
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
      MaChuyenBay = "";
      MaKhachHang = "";
      if (json.message === 1) {
        alert("Thêm vé thành công")
        window.location.href = '/quan-ly-ve';
      }
      else {
        alert("Thêm vé thất bại")
      }
  }


  async function deleteTicket(id) {
    let server =  localStorage.getItem("server") !== undefined ? JSON.stringify( localStorage.getItem("server")) : '';
    let manv = localStorage.getItem("idnv") !== undefined ? JSON.stringify(localStorage.getItem("idnv")) : '';
    let url = `${import.meta.env.VITE_HOST_API}/delete-ticket`;
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
          "MaVe": id
        }),
      })

      const json = await res.json();
      if (json.message === 1) {
        alert("Xóa thành công")
        goto("/quan-ly-ve");
      }
      else {
        alert("Xóa thất bại")
      }

  }

  let curIdTicketChange, curIdPlane, curTicketType, curTicketStatus;
  async function chooseTicket(ticket) {
    curIdTicketChange = ticket.MaVe;
    curIdPlane = ticket.MaChuyenBay;
    curTicketType = ticket.MaLoaiVe;
    curTicketStatus = ticket.TrangThaiVe;
  }

  async function updateTicket() { 
    let server =  localStorage.getItem("server") !== undefined ? JSON.stringify( localStorage.getItem("server")) : '';
    let manv = localStorage.getItem("idnv") !== undefined ? JSON.stringify(localStorage.getItem("idnv")) : '';
    let url = `${import.meta.env.VITE_HOST_API}/update-ticket`;
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
          "MaVe": curIdTicketChange,
          "MaChuyenBay" : curIdPlane,
          "MaLoaiVe": curTicketType,
          "TrangThai" : curTicketStatus,
        }),
      })
      const json = await res.json();
      if (json.message === 1) {
        alert("Sửa thành công");
        window.location.href = '/quan-ly-ve';
      }
      else {
        alert("Sửa thất bại");
      }
      curIdTicketChange = "";
      curIdPlane = ""; 
      curTicketType = "";
      curTicketStatus = "";
  }
</script>

<section>
	<div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <section class="content-header">
          <div class="container-fluid">
            <div class="row mb-2">
              <div class="col-sm-6">
                <h1>Quản Lý Vé</h1>
              </div>
              <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                  <li class="breadcrumb-item"><a href="#">Home</a></li>
                  <li class="breadcrumb-item active">Quản lý vé</li>
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
                    <h3 class="card-title">Bảng thông tin vé</h3>
                  </div>
                  <!-- /.card-header -->
                  <div class="card-body">
                    <table id="example1" class="table table-bordered table-striped">
                      <thead>
                      <tr>
                        <th>Mã vé</th>
                        <th>Mã chuyến bay</th>
                        <th>Loại vé</th>
                        <th>Giá vé</th>
                        <th>Mã khách hàng</th>
                        <th>Thời gian lập</th>
                        <th>Trạng thái vé</th>
                        <th>Công cụ</th>
                      </tr>
                      </thead>
                      <tbody>
                        {#each listTicket as ticket}
                          <tr>
                          <td>{ticket.MaVe}</td>
                          <td>{ticket.MaChuyenBay}</td>
                          <td>{ticket.MaLoaiVe}</td>
                          <td>{ticket.GiaVe}</td>
                          <td>{ticket.MaKhachHang}</td>
                          <td>{ticket.ThoiGianLap}</td>
                          <td>{ticket.TrangThaiVe}</td>
                          <td>
                              <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#add-new">Thêm</button>
                              <button type="button" class="btn btn-danger" on:click={deleteTicket(ticket.MaVe)}>Xóa</button>
                              <button type="button" class="btn btn-success" on:click={chooseTicket(ticket)} data-toggle="modal" data-target="#edit">Sửa</button>
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
      <aside class="control-sidebar control-sidebar-dark" id="dark-theme">
        <!-- Control sidebar content goes here -->
      </aside>
      <!-- /.control-sidebar -->
    
    <!-- modal add new -->
    <div class="modal fade" id="add-new" >
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">Thêm vé mới</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div>
                    <div class="modal-body">
                        <div class="card-body">
                            <div class="form-group">
                                <label for="exampleInputEmail1">Mã chuyến bay</label>
                                <input type="text" class="form-control" bind:value={ MaChuyenBay } id="exampleInputEmail1" placeholder="Mã chuyến bay">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Loại vé</label>
                                <select class="form-select form-select-sm mb-3" bind:value={MaLoaiVe} style="margin-left: 20px;">
                                  <option selected value="BASIC">Gói cơ bản</option>
                                  <option value="EXTRA">Gói mở rộng</option>
                                  <option value="STANDARD">Gói tiêu chuẩn</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Mã khách hàng</label>
                                <input type="text" class="form-control" bind:value={ MaKhachHang } id="exampleInputEmail1" placeholder="Mã khách hàng">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Trạng thái vé</label>
                                <select class="form-select form-select-sm mb-3" bind:value={TrangThai} style="margin-left: 20px;">
                                  <option selected value="DA DAT">Đã đặt</option>
                                  <option value="HUY">Hủy</option>
                                  <option value="DA DI">Đã đi</option>
                                </select>
                            </div>
                        
                        </div>
                    </div>
                    <div class="modal-footer justify-content-between">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" on:click={addTicket}>Save changes</button>
                    </div>
                </div>
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
                    <h4 class="modal-title">Chỉnh sửa vé</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <form>
                    <div class="modal-body">
                        <div class="card-body">
                            <div class="form-group">
                                <label for="exampleInputEmail1">Mã chuyến bay</label>
                                <input type="text" class="form-control" bind:value={curIdPlane} id="exampleInputEmail1" placeholder="Mã chuyến bay" disabled>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Loại vé</label>
                                <select class="form-select form-select-sm mb-3" value={curTicketType} style="margin-left: 20px;">
                                  <option selected value="BASIC">Gói cơ bản</option>
                                  <option value="EXTRA">Gói mở rộng</option>
                                  <option value="STANDARD">Gói tiêu chuẩn</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Trạng thái vé</label>
                                <select class="form-select form-select-sm mb-3" value={curTicketStatus} style="margin-left: 20px;">
                                  <option selected value="DA DAT">Đã đặt</option>
                                  <option value="HUY">Hủy</option>
                                  <option value="DA DI">Đã đi</option>
                                </select>
                            </div>
                        
                        </div>
                    </div>
                    <div class="modal-footer justify-content-between">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" on:click={updateTicket}>Save changes</button>
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
