import React, { Component } from 'react'
import style from './style.scss';
import {Col} from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload } from '@fortawesome/free-solid-svg-icons'
import { faCommentAlt} from '@fortawesome/free-regular-svg-icons';

export default class Post extends Component {
    render() {
        return (
            <>
                <Col md={{span : 24}} lg={{span:24}} className={style.post}>
                    <div className={style.post__thumb}>
                        <img src={this.props.image} /> 
                        <div className={style.post__comment}>
                            <a href="">
                                <FontAwesomeIcon icon={faUpload} size="1x"/>
                            </a>
                            <a href="">
                                <FontAwesomeIcon icon={faCommentAlt} size="1x"/>
                            </a>
                        </div>  
                    </div> 
                    <div className={style.post__info}>
                        <div className={style.post__info__cate}>
                            <h5>{this.props.category}</h5>
                        </div>
                        <div className={style.post__info__title}>
                            <h3>
                                {this.props.title}
                            </h3>
                        </div>
                        <div className={style.post__info__description}>
                            <p>{this.props.description}</p>
                            <p><span>{this.props.createdAt}</span></p>
                        </div>
                    </div>
                </Col>
            </>
        )
    }
}
