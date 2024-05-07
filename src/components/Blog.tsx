import { BlogCard } from "./BlogCard";
import posts from "../data/blog.json";

export function Blog() {
  return (
    <div className="flex flex-col justify-center items-center p-10">
      <div>
        <p className="font-nohemi text-center text-base sm:text-lg md:text-2xl font-semibold pb-2">
          Blogs 🖊️
        </p>
      </div>
      <div className="flex flex-col justify-center items-center">
        {Object.values(posts).map((post) => (
          <BlogCard post={post} />
        ))}
      </div>
    </div>
  );
}
