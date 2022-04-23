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
                      <tr>
                        <td>Trident</td>
                        <td>Internet Explorer 4.0</td>
                        <td>Win 95+</td>
                        <td> 4</td>
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
                                <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Tên máy bay">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Số ghế loại 1</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Số ghế loại 1">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Số ghế loại 2</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Số ghế loại 2">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Hãnh sản xuất</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Hãnh sản xuất">
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
                                <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Tên máy bay">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Số ghế loại 1</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Số ghế loại 1">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Số ghế loại 2</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Số ghế loại 2">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Hãnh sản xuất</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Hãnh sản xuất">
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
