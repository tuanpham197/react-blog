import React, { Component } from 'react'
import style from './style.scss';
import {Layout,Row} from 'antd';
import Post from './Post';
import {connect } from 'react-redux';


class Posts extends Component {
    loadPost = (posts)=>{
        return posts.map((ele,index)=>{
            return <Post 
                        image={ele.thumb}
                        category={ele.categories[0].name}
                        title={ele.title}
                        description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words..."
                        createdAt="Dec 09/2015"
                        key={index}
                    />
        })
    }
    render() {
        const {posts} =  this.props;
        
        return (
            <>
                <Layout className={style.listPost}>
                    <Row gutter={{ xs: 8, sm: 15, md: 15, lg: 15 }} className={style.box}>
                        {this.loadPost(posts)}
                         <Post 
                            image="public/assets/image/post1.png"
                            category="Fashion"
                            title="The Best Beauty Looks: Week of October 13, 2015"
                            description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words..."
                            createdAt="Dec 09/2015"
                        />
                      
                        <Post 
                            image="public/assets/image/post2.png"
                            category="My Life"
                            title="Quiz: What Kind of Gift Giver Are You?"
                            description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words..."
                            createdAt="Dec 09/2015"
                        
                        />
                        {/*
                        <Post 
                            image="public/assets/image/post3.png"
                            category="Audio"
                            title="Hugo- theme :If you love someone let them go"
                            description="There are many variations of passages of Lorem Ipsum available,"
                            createdAt="Dec 09/2015"
                        />
                        <Post 
                            image="public/assets/image/post1.png"
                            category="Fashion"
                            title="The Best Beauty Looks: Week of October 13, 2015"
                            description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words..."
                            createdAt="Dec 09/2015"
                        />
                        <Post 
                            image="public/assets/image/post2.png"
                            category="My Life"
                            title="Quiz: What Kind of Gift Giver Are You?"
                            description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words..."
                            createdAt="Dec 09/2015"
                        
                        />
                        <Post 
                            image="public/assets/image/post3.png"
                            category="Audio"
                            title="Hugo- theme :If you love someone let them go"
                            description="There are many variations of passages of Lorem Ipsum available,"
                            createdAt="Dec 09/2015"
                        />
                        <Post 
                            image="public/assets/image/post1.png"
                            category="Fashion"
                            title="The Best Beauty Looks: Week of October 13, 2015"
                            description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words..."
                            createdAt="Dec 09/2015"
                        />
                        <Post 
                            image="public/assets/image/post2.png"
                            category="My Life"
                            title="Quiz: What Kind of Gift Giver Are You?"
                            description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words..."
                            createdAt="Dec 09/2015"
                        
                        />
                        <Post 
                            image="public/assets/image/post3.png"
                            category="Audio"
                            title="Hugo- theme :If you love someone let them go"
                            description="There are many variations of passages of Lorem Ipsum available,"
                            createdAt="Dec 09/2015"
                        />
                        <Post 
                            image="public/assets/image/post3.png"
                            category="Audio"
                            title="Hugo- theme :If you love someone let them go"
                            description="There are many variations of passages of Lorem Ipsum available,"
                            createdAt="Dec 09/2015"
                        /> */}
                    </Row>
                </Layout>
            </>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
        posts : state.posts
    }
}
export default connect(mapStateToProps,null)(Posts);