import { Box } from "@mui/material";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import themeContext from "./utils/themeContext.js";

import {
  ChannelDetails,
  Feed,
  Navbar,
  SearchFeed,
  VideoDetails,
} from "./components";

function App() {
  const [theme, Settheme] = useState({
    themeColor: "#C21010",
    themeBg: "#000",
    textColor: "#fff",
  });

  return (
    <Router>
      <themeContext.Provider value={{ theme: theme, Settheme: Settheme }}>
        <Box
          sx={{
            backgroundColor: `${theme.themeBg}`,
            color: `${theme.textColor}`,
          }}
        >
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Feed />} />
            <Route exact path="/video/:id" element={<VideoDetails />} />
            <Route exact path="/channel/:id" element={<ChannelDetails />} />
            <Route exact path="/search/:searchTerm" element={<SearchFeed />} />
          </Routes>
        </Box>
      </themeContext.Provider>
    </Router>
  );
}

export default App;
