import { AppContext } from "./context/contextAPI";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Feed, Header, SearchResult, VideoDetails } from "./components";

function App() {
  return (
    <AppContext>
      <BrowserRouter>
        <div className="flex flex-col h-full">
          <Header />
          <Routes>
            <Route path="/" exact element={<Feed />} />
            <Route path="/search/:searchTerm" element={<SearchResult />} />
            <Route path="/video/:id" element={<VideoDetails />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AppContext>
  );
}

export default App;
