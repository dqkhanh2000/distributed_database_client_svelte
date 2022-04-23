<script context="module">
	export const prerender = true;
</script>

<script>

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
                        <th>Quê quán</th>
                        <th>Tên đăng nhập</th>
                        <th>Công cụ</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                        <td>Trident</td>
                        <td>Internet Explorer 4.0</td>
                        <td>Win 95+</td>
                        <td> 4</td>
                        <td>Trident</td>
                        <td>Trident</td>
                        <td>
                            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#add-new">Thêm</button>
                            <button type="button" class="btn btn-danger">Xóa</button>
                            <button type="button" class="btn btn-success" data-toggle="modal" data-target="#edit">Sửa</button>
                        </td>
                      </tr>
                      
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
                                <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Tên nhân viên">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Mã đơn vị</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Mã đơn vị">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Ngày sinh</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Ngày sinh">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Quê quán</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Quê quán">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">CMND</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" placeholder="CMND">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Tên đăng nhập</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Tên đăng nhập">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Mật khẩu</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Mật khẩu">
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
                                <label for="exampleInputEmail1">Tên nhân viên</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Tên nhân viên">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Mã đơn vị</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Mã đơn vị">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Ngày sinh</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Ngày sinh">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Quê quán</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Quê quán">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">CMND</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" placeholder="CMND">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Tên đăng nhập</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Tên đăng nhập">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Mật khẩu</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Mật khẩu">
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
