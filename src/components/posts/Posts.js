
import { useSelector } from "react-redux"
import PostArticle from "../postArticle/PostArticle";
import { PostsStyled } from "./PostsStyled";


const Posts = () => {
    const data = useSelector(state=>state.posts)
  
 return (
     <PostsStyled className="container">
          <div className="blog-bg">
            <h1>From the Minds of Scouts</h1>
            <h5>Insights and Resources gathered from a globally distributed team of designers, developers, magicians, and a “go-to-innovators”.</h5>
        </div>
     <ul className="row">
     {
        data.posts?.length>1 && data.posts?.map(item=>(
             <li className="col-4" key={item.id}>
                 <PostArticle article={item}/>              
            </li>
         ))
     }   
     </ul>
     </PostsStyled>
 )   
}

export default Posts