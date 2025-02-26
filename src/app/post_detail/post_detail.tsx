import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type Props = {};

function PostDetail({}: Props) {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<{
    title: string;
    body: string;
    id: number;
    userId: number;
  } | null>(null);
  const [comments, setComments] = useState<
    | {
        postId: number;
        id: number;
        name: string;
        email: string;
        body: string;
      }[]
    | null
  >(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        const data = await response.json();
        setPost(data);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };

    fetchPost();
  }, [id]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/comments?postId=${id}`
        );
        const data = await response.json();
        setComments(data);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchComments();
  }, [id]);

  useEffect(() => {
    console.log(post);
    console.log(comments);
  }, [post]);

  if (!post) {
    return <div>Cargando...</div>;
  } else {
    return (
      <div className="p-6 h-full w-full">
        <div className="bg-blue-400 p-8 pl-10 pr-10 rounded-2xl text-white h-96 flex flex-col gap-y-3">
          <h5 className="font-medium">Id: {post.id}</h5>
          <h5 className="font-medium">UserId: {post.userId}</h5>
          <h1 className="font-black text-3xl">{post.title}</h1>
          <p className="font-medium text-xl mt-2.5">{post.body}</p>
        </div>
        <div>
          <div className="w-full h-20 flex items-center bg-blue-950 text-white rounded-2xl mt-5 mb-5">
            <h2 className="font-black p-2.5 text-3xl">Comentarios</h2>
          </div>
          {comments?.map((comment) => (
            <div
              key={comment.id}
              className="bg-blue-200 p-8 pl-10 pr-10 rounded-2xl text-blue-900 h-50 min-h-50 flex flex-col gap-y-3 mt-2.5 mb-2"
            >
              <h3 className="font-black text-lg">{comment.name}</h3>
              <p className="font-light ">{comment.email}</p>
              <p className="font-medium">{comment.body}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default PostDetail;
