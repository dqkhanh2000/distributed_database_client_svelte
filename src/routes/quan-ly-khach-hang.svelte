<script context="module">
	import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
	export const prerender = true;
</script>

<script>
 let listCustomer = [];
  onMount (async function() {
    let manv = localStorage.getItem("idnv") !== undefined ? JSON.stringify(localStorage.getItem("idnv")) : "";
    let server =  localStorage.getItem("server") !== undefined ? JSON.stringify( localStorage.getItem("server")) : "";
    let nameTable = "KhachHang";
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
      listCustomer = json.data;
  })

  let customerName, customerPhone, customerMail, customerCard, customerBirthday, customerSex = "Nam";
  function onChange(event) {
		customerSex = event.currentTarget.value;
	}

  async function addCustomer() {
    let server =  localStorage.getItem("server") !== undefined ? JSON.stringify( localStorage.getItem("server")) : '';
    let manv = localStorage.getItem("idnv") !== undefined ? JSON.stringify(localStorage.getItem("idnv")) : '';
    let url = `${import.meta.env.VITE_HOST_API}/add-customer`;

    let body =  new URLSearchParams({
      "TenKhachHang" : customerName,
      "SDT" : customerPhone,
      "Email": customerMail,
      "CMND": customerCard,
      "NgaySinh" : customerBirthday,
      "GioiTinh": customerSex,
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
        alert("Thêm khách hàng thành công")
        window.location.href = '/quan-ly-khach-hang';
      }
      else {
        alert("Thêm khách hàng thất bại")
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
                <h1>Quản Lý Khách Hàng</h1>
              </div>
              <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                  <li class="breadcrumb-item"><a href="#">Home</a></li>
                  <li class="breadcrumb-item active">Quản lý khách hàng</li>
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
                    <h3 class="card-title">Bảng thông tin khách hàng</h3>
                  </div>
                  <!-- /.card-header -->
                  <div class="card-body">
                    <table id="example1" class="table table-bordered table-striped">
                      <thead>
                      <tr>
                        <th>Tên khách hàng</th>
                        <th>Sđt</th>
                        <th>Email</th>
                        <th>CMND</th>
                        <th>Ngày sinh</th>
                        <th>Giới tính</th>
                        <th>Công cụ</th>
                      </tr>
                      </thead>
                      <tbody>
                        {#each listCustomer as customer}
                        <tr>
                          <td>{customer.TenKhachHang}</td>
                          <td>{customer.SDT}</td>
                          <td>{customer.Email}</td>
                          <td>{customer.CMND}</td>
                          <td>{customer.NgaySinh}</td>
                          <td>{customer.GioiTinh}</td>
                          <td>
                              <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#add-new">Thêm</button>
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
                    <h4 class="modal-title">Thêm khách hàng</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <form>
                    <div class="modal-body">
                        <div class="card-body">
                            <div class="form-group">
                                <label for="exampleInputEmail1">Tên khách hàng</label>
                                <input type="text" class="form-control" bind:value={customerName} id="exampleInputEmail1" placeholder="Tên khách hàng">
                            </div>
                            <div class="form-group">
                              <label for="exampleInputEmail1">Giới tính</label>
                              <div class="form-check">
                                <input class="form-check-input" type="radio" name="radio1" value="Nam"  checked={customerSex==="Nam"} on:change={onChange}>
                                <!-- svelte-ignore a11y-label-has-associated-control -->
                                <label class="form-check-label">Nam</label>
                              </div>
                              <div class="form-check">
                                <input class="form-check-input" type="radio" name="radio1" value="Nữ"  checked={customerSex==="Nữ"} on:change={onChange}>
                                <!-- svelte-ignore a11y-label-has-associated-control -->
                                <label class="form-check-label">Nữ</label>
                              </div>
                            </div>
                            <div class="form-group">
                              <label for="exampleInputEmail1">Ngày sinh</label>
                              <input type="date" class="form-control" bind:value={customerBirthday} id="exampleInputEmail1" placeholder="Ngày sinh">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Số điện thoại</label>
                                <input type="text" class="form-control" bind:value={customerPhone} id="exampleInputEmail1" placeholder="Số điện thoại">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email</label>
                                <input type="email" class="form-control" bind:value={customerMail} id="exampleInputEmail1" placeholder="Email">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">CMND</label>
                                <input type="text" class="form-control" bind:value={customerCard} id="exampleInputEmail1" placeholder="CMND">
                            </div>
                         
                        </div>
                    </div>
                    <div class="modal-footer justify-content-between">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" on:click={addCustomer}>Save changes</button>
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
                                <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Mã chuyến bay">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Mã loại vé</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Mã loại vé">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Giá vé</label>
                                <input type="number" class="form-control" id="exampleInputEmail1" placeholder="Giá vé">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Mã đơn vị bán</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Mã đơn vị bán">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Mã khách hàng</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Mã khách hàng">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Thời gian lập</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Thời gian lập">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Trạng thái vé</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Trạng thái vé">
                            </div>
                        
                        </div>
                    </div>
                    <div class="modal-footer justify-content-between">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
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
