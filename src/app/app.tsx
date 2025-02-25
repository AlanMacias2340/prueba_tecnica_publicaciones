import Publication from "./publication/publication";
import NavBar from "./components/navbar";

type Props = {};

function App({}: Props) {
  return (
    <>
      <NavBar />
      <Publication />
    </>
  );
}

export default App;
