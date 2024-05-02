import { useParams } from "react-router-dom";
import dayjs from "dayjs";
import posts from "../assets/blog.json";
import { Post } from '../types/Post.types'; 

function BlogPost() {
   // Access the dynamic parameter from the URL
  const { id = "647af7d034445f594176ae2b" } = useParams();
  const post = (posts as Post)[id];
  
  if(!post){
    return (<div className="flex flex-col justify-center items-center px-10 pb-10">Not found</div>)
  }

  return (
    <div className="flex flex-col justify-center items-center px-10 pb-10">
      <div className="flex flex-col justify-center items-center w-full pt-5 mt-5 sm:w-3/4">
        <div className="pb-2 w-24 mr-auto">
          <p className="font-medium text-lg">
            {" "}
            |{" "}
            <span className="font-medium text-lg">
              {dayjs(post['createdAt']).format("MMM YYYY")}
            </span>
          </p>
        </div>
        <div className="w-full sm:pl-2">
          <p className="font-large text-3xl pb-2">{post['title']}</p>
          <img className="py-2" src={post['coverImage']} />
          <p className="font-extralight text-lg pb-2">{post['subtitle']}</p>
          <div dangerouslySetInnerHTML={{ __html: post['content'] }} />
        </div>
      </div>
    </div>
  );
}

export default BlogPost;
