import { createContext, useEffect, useState } from "react";
import Filter from "./components/filter";
import ListPublication from "./components/list_publication";

type PublicationContextProps = {
  filteredPosts?: any[];
  toggleSearch?: (e: any) => void;
};

export const PublicationContext = createContext<PublicationContextProps>({
  filteredPosts: [],
  toggleSearch: () => {},
});

type Props = {};

function Publication({}: Props) {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");


  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json))
      .catch((error) => console.log(error));
  }, []);

  const filteredPosts = posts.filter((post: { title: string }) => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleSearch = (e: any) => {
    setSearchTerm(e.target.value);
  };

  return (
    <PublicationContext.Provider value={{filteredPosts, toggleSearch}}>
      <Filter />
      <ListPublication />
    </PublicationContext.Provider>
  );
}

export default Publication;
