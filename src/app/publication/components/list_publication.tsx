import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { PublicationContext } from "../publication";


type Props = {
  beggining: number;
  end: number;
};

function ListPublication({beggining, end}: Props) {
  const {sortedPosts} = useContext(PublicationContext);

  const navigate = useNavigate();


  return (
    <div className="grid grid-cols-3 gap-5 p-6">
      {sortedPosts?.slice(beggining, end).map((post: { id: number; title: string; body: string }) => (
        <div key={post.id} className="flex flex-col gap-3 bg-blue-400 p-8 pl-10 pr-10 rounded-2xl text-white cursor-pointer duration-200 min-h-60 max-h-60 hover:bg-blue-500" onClick={() => navigate(`/post_detail/${post.id}`)}>
          <h3 className="font-black text-xl h-14 min-h-14">{post.title}</h3>
          <p className="font-medium">{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default ListPublication;
