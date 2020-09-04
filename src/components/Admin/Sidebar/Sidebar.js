import React,{useState,useEffect,useMemo} from 'react'

export default function Sidebar(props) {
    return (
        <div>
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                {/* Brand Logo */}
                <a href="index3.html" className="brand-link">
                    <img src="src/assets/dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
                    <span className="brand-text font-weight-light">Blog tuanpham</span>
                </a>
                {/* Sidebar */}
                <div className="sidebar">
                    {/* Sidebar user panel (optional) */}
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                            <img src="src/assets/dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
                        </div>
                        <div className="info">
                            <a href="#" className="d-block">Alexander Pierce</a>
                        </div>
                    </div>
                    {/* Sidebar Menu */}
                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            <li className="nav-item has-treeview menu-open">
                                <a href="#" className="nav-link active">
                                    <i className="nav-icon fas fa-tachometer-alt" />
                                    <p>
                                        Bảng tin
                                    </p>
                                </a>
                            </li>
                            <li className="nav-item has-treeview">
                                <a href="#" className="nav-link">
                                    <i className="nav-icon fas fa-newspaper"></i>
                                    <p>
                                        Bài viết
                                        <i className="right fas fa-angle-left" />
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <a href="pages/charts/chartjs.html" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>ChartJS</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/charts/flot.html" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Flot</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/charts/inline.html" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Inline</p>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item has-treeview">
                                <a href="#" className="nav-link">
                                    <i className="nav-icon fas fa-copy" />
                                    <p>
                                        Danh mục
                                        <i className="fas fa-angle-left right" />
                                        <span className="badge badge-info right">6</span>
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <a href="pages/layout/top-nav.html" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Top Navigation</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/layout/top-nav-sidebar.html" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Top Navigation + Sidebar</p>
                                            <p>Create new post messenger</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/layout/boxed.html" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Boxed</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/layout/fixed-sidebar.html" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Fixed Sidebar</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/layout/fixed-topnav.html" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Fixed Navbar</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/layout/fixed-footer.html" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Fixed Footer</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/layout/collapsed-sidebar.html" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Collapsed Sidebar</p>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item has-treeview">
                                <a href="#" className="nav-link">
                                    <i className="nav-icon fas fa-bars"></i>
                                    <p>
                                        Menu
                                        <i className="right fas fa-angle-left" />
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <a href="pages/charts/chartjs.html" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>ChartJS</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/charts/flot.html" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Flot</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/charts/inline.html" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Inline</p>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item has-treeview">
                                <a href="#" className="nav-link">
                                    <i className="nav-icon fas fa-wallet" />
                                    <p>
                                        Galerry
                                        <i className="fas fa-angle-left right" />
                                    </p>
                                </a>

                            </li>
                        </ul>
                    </nav>
                    {/* /.sidebar-menu */}
                </div>
                {/* /.sidebar */}
            </aside>
        </div>
    )
}
