<script>
	import { page } from '$app/stores';
	import logo from './svelte-logo.svg';
</script>


<header>
		  <!-- Main Sidebar Container -->
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
					<a href="/quan-ly-ve" class="nav-link">
					  <i class="nav-icon fas fa-table"></i>
					  <p>
						Quản lý vé
					  </p>
					</a>
				  </li>
				  <li class="nav-item">
					<a href="/quan-ly-khach-hang" class="nav-link">
					  <i class="nav-icon fas fa-table"></i>
					  <p>
						Quản lý khách hàng
					  </p>
					</a>
				  </li>
				  <li class="nav-item">
					<a href="/quan-ly-chuyen-bay" class="nav-link">
					  <i class="nav-icon fas fa-table"></i>
					  <p>
						Quản lý chuyến bay
					  </p>
					</a>
				  </li>
				  <li class="nav-item">
					<a href="/quan-ly-may-bay" class="nav-link">
					  <i class="nav-icon fas fa-table"></i>
					  <p>
						Quản lý máy bay
					  </p>
					</a>
				  </li>
				  <li class="nav-item">
					<a href="/quan-ly-san-bay" class="nav-link">
					  <i class="nav-icon fas fa-table"></i>
					  <p>
						Quản lý sân bay
					  </p>
					</a>
				  </li>
				  <li class="nav-item">
					<a href="/quan-ly-nhan-vien" class="nav-link">
					  <i class="nav-icon fas fa-table"></i>
					  <p>
						Quản lý nhân viên
					  </p>
					</a>
				  </li>
				  <li class="nav-item">
					<a href="/quan-ly-don-vi-ban" class="nav-link">
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
</header>

<style>

</style>
