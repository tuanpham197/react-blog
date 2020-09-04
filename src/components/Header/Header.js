import React, { Component } from 'react';
import style from './style.scss';
import {Layout,Col,Row} from 'antd';
import { BehanceOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo  } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faPinterestP, faBehance } from '@fortawesome/free-brands-svg-icons'
import { Input } from 'antd';
import {connect} from 'react-redux';

const { Search } = Input;

class Header extends Component {
    loadMenu = (menus)=>{
        return menus.map(ele=>{
            return <li>
                <a href={ele.url}>{ele.name}</a>
            </li>
        })
    }
    render() {
        const {menus} = this.props;
        return (
            <header>
                <Layout>
                    <div className={style.top}>
                        <Row>
                            <Col md={{ span: 10 }}  lg={{ span: 10 }}>
                            </Col>
                            <Col md={{ span: 4 }} lg={{ span: 4 }}>
                                <div className={style.logo}>
                                    <h1>BLOGNA</h1>
                                    <p>awordpress theme for bloggers</p>
                                </div>
                            </Col>
                            <Col md={{ span: 10 }} lg={{ span: 10 }}>
                            </Col>
                        </Row>  
                    </div>
                    <div className={style.menu}>
                        <Row className={style.menu__box}>
                            <Col md={{ span: 1 }}  lg={{ span: 1 }}>
                            </Col>
                            <Col md={{ span: 2 }}  lg={{ span: 2 }}>
                                <ul className={style.menu__social}>
                                    
                                    <li>
                                        <a href="#">
                                            <FontAwesomeIcon  icon={faBehance}/>      
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <FontAwesomeIcon  icon={faFacebookF}/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <FontAwesomeIcon icon={faInfo} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <FontAwesomeIcon icon={faPinterestP} />
                                        </a>
                                    </li>  
                                </ul>
                            </Col>
                            <Col md={{ span: 5 }}  lg={{ span: 5 }}>
                            </Col>
                            <Col md={{ span: 8 }} lg={{ span: 8 }}>
                                <ul className={style.menu__list}>
                                    {this.loadMenu(menus)}
                                    {/* <li>
                                        <a href="">Home</a>
                                    </li>
                                    <li>
                                        <a href="">Posttypes</a>
                                    </li>
                                    <li>
                                        <a href="">Feautres</a>
                                    </li>
                                    <li>
                                        <a href="">Pages</a>
                                    </li>
                                    
                                    <li>
                                        <a href="">Contact</a>
                                    </li> */}
                                </ul>
                            </Col>
                            <Col md={{ span: 7 }} lg={{ span: 7 }} className={style.menu__search}>
                                <Search
                                    placeholder="Tìm kiếm "
                                    onSearch={value => console.log(value)}
                                    style={{ width: 200 }}
                                />
                            </Col>
                            <Col md={{ span: 1 }} lg={{ span: 1 }}></Col>
                        </Row>
                    </div>
                </Layout>
            </header>
        );
    }
}

const mapStateToProps = state=>{
    return {
        menus : state.menus
    }
}
export default connect(mapStateToProps,null)(Header);