<script context="module">
	export const prerender = true;
</script>

<script>

</script>


<section>
    <aside class="main-sidebar sidebar-dark-primary elevation-4">
        <!-- Brand Logo -->
        <a href="#" class="brand-link">
          <span class="brand-text font-weight-light">Hệ Cơ Sở Dữ Liệu Phân Tán</span>
        </a>
    
        <!-- Sidebar -->
        <div class="sidebar">
    
          <!-- SidebarSearch Form -->
          <div class="form-inline">
            <div class="input-group" data-widget="sidebar-search">
              <input class="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search">
              <div class="input-group-append">
                <button class="btn btn-sidebar">
                  <i class="fas fa-search fa-fw"></i>
                </button>
              </div>
            </div>
          </div>
    
          <!-- Sidebar Menu -->
          <nav class="mt-2">
            <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
              <!-- Add icons to the links using the .nav-icon class
                   with font-awesome or any other icon font library -->
              <li class="nav-item">
                <a href="quanLyVe.html" class="nav-link">
                  <i class="nav-icon fas fa-table"></i>
                  <p>
                    Quản lý vé
                  </p>
                </a>
              </li>
              <li class="nav-item">
                <a href="quanLyKhachHang.html" class="nav-link">
                  <i class="nav-icon fas fa-table"></i>
                  <p>
                    Quản lý khách hàng
                  </p>
                </a>
              </li>
              <li class="nav-item">
                <a href="quanLyChuyenBay.html" class="nav-link">
                  <i class="nav-icon fas fa-table"></i>
                  <p>
                    Quản lý chuyến bay
                  </p>
                </a>
              </li>
              <li class="nav-item">
                <a href="quanLyMayBay.html" class="nav-link">
                  <i class="nav-icon fas fa-table"></i>
                  <p>
                    Quản lý máy bay
                  </p>
                </a>
              </li>
              <li class="nav-item">
                <a href="quanLySanBay.html" class="nav-link">
                  <i class="nav-icon fas fa-table"></i>
                  <p>
                    Quản lý sân bay
                  </p>
                </a>
              </li>
              <li class="nav-item">
                <a href="quanLyNhanVien.html" class="nav-link">
                  <i class="nav-icon fas fa-table"></i>
                  <p>
                    Quản lý nhân viên
                  </p>
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="nav-icon fas fa-table"></i>
                  <p>
                    Quản lý đơn vị bán
                  </p>
                </a>
              </li>
            </ul>
          </nav>
          <!-- /.sidebar-menu -->
        </div>
        <!-- /.sidebar -->
      </aside>
    
      <!-- Content Wrapper. Contains page content -->
      <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <section class="content-header">
          <div class="container-fluid">
            <div class="row mb-2">
              <div class="col-sm-6">
                <h1>Quản Lý Đơn Vị Bán</h1>
              </div>
              <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                  <li class="breadcrumb-item"><a href="#">Home</a></li>
                  <li class="breadcrumb-item active">Quản lý đơn vị bán</li>
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
                    <h3 class="card-title">Bảng thông tin đơn vị bán</h3>
                  </div>
                  <!-- /.card-header -->
                  <div class="card-body">
                    <table id="example1" class="table table-bordered table-striped">
                      <thead>
                      <tr>
                        <th>Mã đơn vị bán</th>
                        <th>Tên đơn vị bán</th>
                        <th>SDT</th>
                        <th>Kênh bán</th>
                        <th>Công cụ</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                        <td>Trident</td>
                        <td>Internet Explorer 4.0</td>
                        <td>Win 95+</td>
                        <td> 4</td>
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
                    <h4 class="modal-title">Thêm đơn vị bán</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <form>
                    <div class="modal-body">
                        <div class="card-body">
                            <div class="form-group">
                                <label for="exampleInputEmail1">Tên đơn vị bán</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Tên đơn vị bán">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">SDT</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" placeholder="SDT">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Kênh bán</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Kênh bán">
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
                    <h4 class="modal-title">Chỉnh sửa đơn vị bán</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <form>
                    <div class="modal-body">
                        <div class="card-body">
                            <div class="form-group">
                                <label for="exampleInputEmail1">Tên đơn vị bán</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Tên đơn vị bán">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">SDT</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" placeholder="SDT">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Kênh bán</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Kênh bán">
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
