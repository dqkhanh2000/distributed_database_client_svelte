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
                        <th>Id sân bay đi</th>
                        <th>Id sân bay đến</th>
                        <th>Tên sân bay đi</th>
                        <th>Tên sân bay đến</th>
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
                        <td>Internet Explorer 4.0</td>z
                        <td>Win 95+</td>
                        <td>
                            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#add-new">Thêm</button>
                            <button type="button" class="btn btn-danger">Xóa</button>
                            <!-- <button type="button" class="btn btn-success" data-toggle="modal" data-target="#edit">Sửa</button> -->
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
                                <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Mã máy bay">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Thời gian</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Thời gian">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Mã sân bay đi</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Mã sân bay đi">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Mã sân bay đến</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Mã sân bay đến">
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
