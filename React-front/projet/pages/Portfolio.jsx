import React, { useEffect, useState } from 'react'
import {getAlldata , getcategories } from '../SanityApi/SanityApi.jsx';
import Loading from '../components/Loading.jsx';
import PostComponent from '../components/PostComponent.jsx';


function PostsPage() {
  const [data , setData] = useState()
  const [articels , setArticels] = useState()
  const [loading, setLoading] = useState(true)
  const [activeClass , setActiveClass] = useState('all')
  const [category , setCategory] = useState()


    const filterSelection = (category) => {
        setActiveClass(category)
        const newlist = data.filter((ar)=> ar.categories == category);
    
        if(category == 'all'){
          setArticels(data);
        }else{
          setArticels(newlist);
        }
      }

  useEffect(()=>{
    getAlldata().then(data => {
      setData(data) ;
      setArticels(data);
      setLoading(false);
    }).catch(console.error);

    getcategories().then(cate => {
      setCategory(cate) ;
    }).catch(console.error);
    
  },[])

  return (
    <>
      { loading ?   <Loading /> : (
          <div className="posts">
            <main>
              <section className="content">
                <div className="wrapper">
                    
                  <div className="buttons" id="buttons">
                      <button className={`btn ${ activeClass == 'all' ? 'active' : ''}`} onClick={()=> filterSelection('all')}>All</button>

                      {category && category.map((cat) => 
                      <button className={`btn ${ activeClass == cat.title ? 'active' : ''}`} onClick={()=> filterSelection(cat.title)}>{cat.title}</button>)
                      }
                  </div> 

                  <div className="articles-grid">
                    <div className="row">

                    { articels.map((posts) => ( <PostComponent key={posts._id} post={posts} /> ))}

                    </div>
                  </div>
                </div>

              </section>
            </main>
    </div>)} 
    </>)
}export default PostsPage
