import React from 'react'
import '../../assets/dist/css/adminlte.min.css'
import '../../assets/plugins/fontawesome-free/css/all.min.css';
import '../../assets/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css';
import '../../assets/plugins/icheck-bootstrap/icheck-bootstrap.min.css';
import '../../assets/plugins/jqvmap/jqvmap.min.css';
import '../../assets/plugins/overlayScrollbars/css/OverlayScrollbars.min.css';
import '../../assets/plugins/daterangepicker/daterangepicker.css';
import '../../assets/plugins/summernote/summernote-bs4.css';
import Sidebar from './Sidebar/Sidebar';
import Menu from './Menu/Menu';
import Footer from './Footer/Footer';
import Home from './Main/Home';

export default function Main() {
	return (
		<div>
			<div className="wrapper">
				{/* Navbar */}
				<Menu />
				{/* /.navbar */}
				{/* Main Sidebar Container */}
				<Sidebar />
				{/* Content Wrapper. Contains page content */}
				<div className="content-wrapper">
					{/* Content Header (Page header) */}
					<div className="content-header">
						<div className="container-fluid">
							<div className="row mb-2">
								<div className="col-sm-6">
									<h1 className="m-0 text-dark">Dashboard</h1>
								</div>{/* /.col */}
								<div className="col-sm-6">
									<ol className="breadcrumb float-sm-right">
										<li className="breadcrumb-item"><a href="#">Home</a></li>
										<li className="breadcrumb-item active">Dashboard v1</li>
									</ol>
								</div>{/* /.col */}
							</div>{/* /.row */}
						</div>{/* /.container-fluid */}
					</div>
					{/* /.content-header */}
					{/* Main content */}
					<section className="content">
						<div className="container-fluid">
							{/* Small boxes (Stat box) */}
							<div className="row">
								<div className="col-lg-3 col-6">
									{/* small box */}
									<div className="small-box bg-info">
										<div className="inner">
											<h3>150</h3>
											<p>New Orders</p>
										</div>
										<div className="icon">
											<i className="ion ion-bag" />
										</div>
										<a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
									</div>
								</div>
								{/* ./col */}
								<div className="col-lg-3 col-6">
									{/* small box */}
									<div className="small-box bg-success">
										<div className="inner">
											<h3>53<sup style={{ fontSize: '20px' }}>%</sup></h3>
											<p>Bounce Rate</p>
										</div>
										<div className="icon">
											<i className="ion ion-stats-bars" />
										</div>
										<a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
									</div>
								</div>
								{/* ./col */}
								<div className="col-lg-3 col-6">
									{/* small box */}
									<div className="small-box bg-warning">
										<div className="inner">
											<h3>44</h3>
											<p>User Registrations</p>
										</div>
										<div className="icon">
											<i className="ion ion-person-add" />
										</div>
										<a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
									</div>
								</div>
								{/* ./col */}
								<div className="col-lg-3 col-6">
									{/* small box */}
									<div className="small-box bg-danger">
										<div className="inner">
											<h3>65</h3>
											<p>Unique Visitors</p>
										</div>
										<div className="icon">
											<i className="ion ion-pie-graph" />
										</div>
										<a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
									</div>
								</div>
								{/* ./col */}
							</div>
							{/* /.row */}
							{/* Main row */}
							<div className="row">
								<Home />
							</div>
							{/* /.row (main row) */}
						</div>{/* /.container-fluid */}
					</section>
					{/* /.content */}
				</div>
				{/* /.content-wrapper */}
				<Footer />
				{/* Control Sidebar */}
				<aside className="control-sidebar control-sidebar-dark">
					{/* Control sidebar content goes here */}
				</aside>
				{/* /.control-sidebar */}
			</div>
			{/* ./wrapper */}

		</div>
	)
}
