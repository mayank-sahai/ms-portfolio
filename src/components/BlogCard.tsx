import dayjs from "dayjs";
import { Link } from "react-router-dom";
import { Post } from "../types/Post.types";
export function BlogCard({ post }: { post: Post[string] }) {
  return (
    <Link
      to={`/blog/${post.id}`}
      className="flex flex-col sm:flex-row w-full pt-5 mt-5 sm:w-3/4 hover:bg-slate-100 hover:border hover:shadow-sky-200 hover:border-sky-200 hover:rounded p-10"
      id={post.id}
    >
      <div className="pb-2 mr-2 w-24">
        <p className="font-light text-base">
          {" "}
          |{" "}
          <span className="font-medium text-base">
            {dayjs(post.createdAt).format("MMM YYYY")}
          </span>
        </p>
      </div>
      <div className="w-full sm:pl-2">
        <p className="font-medium text-base pb-2">{post.title}</p>
        <p className="font-light text-sm">{post.subtitle}</p>
        <p className="truncate ...">...</p>
        <p className="font-medium text-base pt-2 text-sky-500">
          Read article...
        </p>
      </div>
    </Link>
  );
}
