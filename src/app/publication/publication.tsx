import { createContext, useEffect, useState } from "react";
import Filter from "./components/filter";
import ListPublication from "./components/list_publication";
import Navigation from "./components/navigation";

type PublicationContextProps = {
  sortedPosts?: any[];
  toggleSearch?: (e: any) => void;
  toggleSort?: (e: any) => void;
  toggleNext?: () => void;
  togglePrevious?: () => void;
};

export const PublicationContext = createContext<PublicationContextProps>({
  sortedPosts: [],
  toggleSearch: () => {},
  toggleSort: () => {},
  toggleNext: () => {},
  togglePrevious: () => {},
});

type Props = {};

function Publication({}: Props) {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [beggining, setBeggining] = useState(0);
  const [end, setEnd] = useState(12);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json))
      .catch((error) => console.log(error));
  }, []);

  const filteredPosts = posts.filter(
    (post: { title: string; body: string }) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.body.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedPosts = [...filteredPosts].sort(
    (a: { title: string }, b: { title: string }) => {
      if (sortOrder === "asc") {
        return a.title.localeCompare(b.title); // Sort by title (A → Z)
      } else {
        return b.title.localeCompare(a.title); // Sort by title (Z → A)
      }
    }
  );

  const toggleSearch = (e: any) => {
    setSearchTerm(e.target.value);
  };

  const toggleSort = (e: any) => {
    setSortOrder(e.target.value);
  };

  const toggleNext = () => {
    setBeggining(beggining + 12);
    setEnd(end + 12);
  }

  const togglePrevious = () => {
    setBeggining(beggining - 12);
    setEnd(end - 12);
  }

  return (
    <PublicationContext.Provider
      value={{ sortedPosts, toggleSearch, toggleSort, toggleNext, togglePrevious }}
    >
      <Filter />
      <ListPublication beggining={beggining} end={end}/>
      <Navigation beggining={beggining} end={end}/>
    </PublicationContext.Provider>
  );
}

export default Publication;
