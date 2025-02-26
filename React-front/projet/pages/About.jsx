import {  React,useEffect, useState } from 'react';
import Loading from '../components/Loading.jsx';
import {PortableText} from '../../../sanity-CMS/node_modules/@portabletext/react'
import {getaboutpage} from '../SanityApi/SanityApi';

function About() { 
  const [data , setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getaboutpage().then(data => {
      setData(data);
      setLoading(false);
    }).catch(console.error);
  }, []);

  return (
    <>
      { !loading ? (  
        <div className="about">
      <main>
        <section className="article-grid">
          <div className="row">
            <div className="col">
              <div className="img">
              <img src={data.imageUrl} alt="" width="100%" height="100%" />
              </div>
            </div>
            <div className="col">
              <div className="article">
                <h3> {data.title}</h3>
                <div className="description">
                  <PortableText value={data.body} />
                </div>
              </div>
            </div>
          </div>
        </section>
      
        <section className="clients">
          <div className="wrapper">
            <h3>{data.titleSection2}</h3>
            <div className="items">
              { data.gallerySection2?.map((e) =>
                <div className="item">
                  <img src={e} alt="" width="100%" height="auto" />
                </div>
              )} 
            </div>
          </div>
        </section>
        <section className="images-grid">
          <div className="wrapper">
            <div className="items">
              { data.gallerySection3?.map((e) =>
                <div className="item">
                  <img src={e} alt="" width="100%" height="100%" />
                </div>
              )} 
            </div>
          </div>
        </section>
      </main>
        </div>
      
      ):<Loading />}   
    </>
  )
}
export default About
