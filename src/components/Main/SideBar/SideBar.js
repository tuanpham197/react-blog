import React, { Component } from 'react';
import style from './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo  } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faPinterestP, faBehance } from '@fortawesome/free-brands-svg-icons'
import { Input } from 'antd';

const { Search } = Input;

class SideBar extends Component {
    render() {
        return (
            <>
                <div className={style.aboutMe}>
                    <div className={style.aboutMe__avatar}>
                        <img src="public/assets/image/about.png"/>
                    </div>
                    <div className={style.aboutMe__info}>
                        <p>About me</p>
                        <h3>Mona-Kim</h3>
                        <p>
                            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" 
                        </p>
                    </div>
                    <div className={style.aboutMe__social}>
                        <ul>
                            <li>Follow</li>
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
                    </div>
                </div>
                <div className={style.subcribe}>
                    <h3>Subscribe to my Newsletter</h3>
                    <Search
                        placeholder="Your email"
                        enterButton="Search"
                        size="large"
                        onSearch={value => console.log(value)}
                    />
                </div>
                <div className={style.lastPost}>
                    <div className={style.lastPost__title}>
                        <h5>Lastest posts</h5>
                    </div>
                    <div className={style.lastPost__list}>
                        <div className={style.lastPost__list_item}>
                            <p>Beauty</p>
                            <h3>The Beauty Evolution of Gigi Hadid, from Child Model to Fashion</h3>
                            <p><span>Nov 25 </span>/ 2015</p>
                        </div>
                        <div className={style.lastPost__list_item}>
                            <p>Beauty</p>
                            <h3>The Beauty Evolution of Gigi Hadid, from Child Model to Fashion</h3>
                            <p><span>Nov 25 </span>/ 2015</p>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default SideBar;