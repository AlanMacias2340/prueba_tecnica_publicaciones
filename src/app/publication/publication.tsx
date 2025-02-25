import { createContext, useEffect } from "react";
import Filter  from "./components/filter";


type PublicationContextProps = {};

export const PublicationContext = createContext<PublicationContextProps>({});

type Props = {};

function Publication({}: Props) {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, []);

  

  return (
    <PublicationContext.Provider value={{}}>
      <Filter />
    </PublicationContext.Provider>
  );
}

export default Publication;
