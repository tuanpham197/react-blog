import React, { Component } from 'react';
import {Layout,Row,Col} from 'antd';
import Posts from './Posts/Posts';
import SideBar from './SideBar/SideBar';
import style from './style.scss';

class Main extends Component {
    render() {
        return (
            <>
                <Layout className={style.main}>
                    <Row>
                        <Col md={{span: 4}} lg={{span : 4}}>
                        </Col>
                        <Col md={{span: 11}} lg={{span : 11}}>
                            <Posts />
                        </Col>
                        <Col md={{span: 1}} lg={{span : 1}}>
                        </Col>
                        <Col md={{span: 4}} lg={{span : 4}}>
                            <SideBar />
                        </Col>
                        <Col md={{span: 4}} lg={{span : 4}}>
                        </Col>
                    </Row>
                </Layout>
            </>
        );
    }
}

export default Main;