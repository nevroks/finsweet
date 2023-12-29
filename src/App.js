import './reset.css'
import './App.css';
import Home from "./components/pages/Home/Home";
import MyHeader from "./components/UI/header/MyHeader";
import MyFooter from "./components/UI/footer/MyFooter";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AboutUs from "./components/pages/About Us/AboutUs";
import Sermons from "./components/pages/Sermons/Sermons";
import Blog from "./components/pages/Blog/Blog";
import BlogPost from "./components/pages/Blog_post/Blog_post";
import SermonEvent from "./components/pages/Sermons_event/Sermon_event";
import Contact from "./components/pages/Contact/Contact";
function App() {
  return (
      <div className={'App'}>
        <MyHeader/>
          <main className={"content"}>
              <BrowserRouter>
                  <Routes>
                      <Route path={''} element={<Home/>}/>
                      <Route path={'/home'} element={<Home/>}/>
                      <Route path={"/about"} element={<AboutUs/>}/>
                      <Route path={"/sermons"} element={<Sermons/>}/>
                      <Route path={"/blog"} element={<Blog/>}/>
                      <Route path={"/blog_post"} element={<BlogPost/>}/>
                      <Route path={'/sermon_event'} element={<SermonEvent/>}/>
                      <Route path={'/contact'} element={<Contact/>}/>
                  </Routes>
              </BrowserRouter>
          </main>
          <MyFooter/>
      </div>
  );
}

export default App;
