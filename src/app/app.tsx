import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Publication from "./publication/publication";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import PostDetail from "./post_detail/post_detail";

type Props = {};

function App({}: Props) {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/publication" element={<Publication />} />
        <Route path="/post_detail/:id" element={<PostDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
