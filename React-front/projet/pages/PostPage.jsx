import {React,useEffect,useState} from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router'
import Loading from '../components/Loading.jsx';
import {getdatabyslug} from '../SanityApi/SanityApi.jsx'

function PostPage() {
  const {slug} = useParams()
  const [article , setArticle] = useState()
  const [loading, setLoading] = useState(true)

useEffect(()=>{
      getdatabyslug(slug).then(data => {
          console.log(data)
          setArticle(data)
          setLoading(false)
        }).catch(console.error);       
},[])

  return (
    <>
      { loading ?  
       <Loading />
       : article  && ( <>
            <div className="post" key={article._id}  >
            <div className="img"  >
              <img src={article.imageUrl} alt="" />
            </div>
            <div className="content"  >
              <div className="title"  >
                <h3>{article.title}</h3>
                <h6>{article.categories}</h6>
              </div>
              <div className="desc"  >
                <p>{article.body?.map((e)=> e.children.map((el)=> el.text ))}</p>
              </div>
              <div className="Link">
                <Link href={article.link.url}>{article.link.title}</Link>
              </div>
            </div>
          </div>
          </> )}
    </>
  )
} export default PostPage ;
