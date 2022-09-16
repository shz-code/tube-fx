import { Box } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import {
  ChannelDetails,
  Feed,
  Navbar,
  SearchFeed,
  VideoDetails,
} from "./components";

function App() {
  return (
    <Router>
      <Box sx={{ backgroundColor: "#000", color: "#fff" }}>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Feed />} />
          <Route exact path="/video/:id" element={<VideoDetails />} />
          <Route exact path="/chaneel/:id" element={<ChannelDetails />} />
          <Route exact path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
