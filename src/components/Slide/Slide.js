import React, { Component } from 'react';
import { Carousel } from 'antd';
import style from './style.scss';

class Slide extends Component {
    render() {
        return (
            <>
                <Carousel autoplay className={style.slide}>
                    <div className={style.slide_item}>
                        <img src="public/assets/image/banner.png"/>
                        <div className={style.slide_item__title}>
                            <p>MY LIFE</p>
                            <h3>These Beauty Queens Are Fighting For Transgender Rights</h3>
                        </div>
                    </div>
                    <div className={style.slide_item}>
                        <img src="public/assets/image/banner.png"/>
                        <div className={style.slide_item__title}>
                            <p>MY LIFE</p>
                            <h3>These Beauty Queens Are Fighting For Transgender Rights</h3>
                        </div>
                    </div>
                </Carousel>
            </>
        );
    }
}

export default Slide;