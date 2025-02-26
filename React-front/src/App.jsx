import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from '../projet/pages/Home';
import PostPage from '../projet/pages/PostPage';
import Portfolio from '../projet/pages/Portfolio';
import About from '../projet/pages/About';
import Contact from '../projet/pages/Contact';
import NotFoundPage from '../projet/pages/404';


function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>

        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Portfolio/:slug" element={<PostPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Route>

      </Routes>
    </BrowserRouter>


    </>
  )
} export default App ;
