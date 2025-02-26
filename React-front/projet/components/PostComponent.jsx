import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

function PostComponent(props) {
    const [post , setPost] = useState(props.post)
  return (
    <>
           <div className="article" key={post._id}>
                 <Link to={`/Portfolio/${post.slug.current}`}   >
                <div className="img">
                    <img src={post.imageUrl}
                    alt="" width="100%" height="100%" />
                </div> 
                <div className="info">
                    <h6>{post.title}</h6>
                     <h6>{post.categories}</h6>
                    <p>{post.body?.map((ell)=> ell.children.map((el)=> el.text ))}</p>
                    <br />
                    <br />
                    <button onClick={(ev) => {
                        ev.stopPropagation();
                        ev.nativeEvent.stopImmediatePropagation();
                        ev.preventDefault();
                        window.open(`https://${post.link.url}`,"_blank");
                    }} 

                    style={{background:'',border:''}} >{post.link.title}</button> 
                </div>
                </Link>
            </div>
    </>)
} export default PostComponent
