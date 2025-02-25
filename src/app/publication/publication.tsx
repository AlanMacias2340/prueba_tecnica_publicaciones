import { createContext, useEffect } from "react";

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
      Hola mundo
    </PublicationContext.Provider>
  );
}

export default Publication;
