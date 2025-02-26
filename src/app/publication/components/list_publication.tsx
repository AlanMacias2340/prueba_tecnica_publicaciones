import { useContext, useEffect } from "react";
import { PublicationContext } from "../publication";


type Props = {
  beggining: number;
  end: number;
};

function ListPublication({beggining, end}: Props) {
  const {sortedPosts} = useContext(PublicationContext);


  return (
    <div className="grid grid-cols-3 gap-5 p-6">
      {/* <div className="flex flex-col gap-3 bg-blue-400 p-8 pl-10 pr-10 rounded-2xl text-white cursor-pointer duration-200 hover:bg-blue-500">
        <h3 className="font-black text-xl">Hola mundo</h3>
        <p className="font-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit perferendis dolore velit reprehenderit commodi beatae at minus voluptatem qui. Quae perspiciatis excepturi quo sed sunt repellat veniam incidunt tempora eaque.</p>
      </div> */}
      {sortedPosts?.slice(beggining, end).map((post: { id: number; title: string; body: string }) => (
        <div key={post.id} className="flex flex-col gap-3 bg-blue-400 p-8 pl-10 pr-10 rounded-2xl text-white cursor-pointer duration-200 hover:bg-blue-500">
          <h3 className="font-black text-xl">{post.title}</h3>
          <p className="font-medium">{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default ListPublication;
