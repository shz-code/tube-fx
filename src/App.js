import { Box } from "@mui/material";
import { useEffect, useState } from "react";
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
  const [darkIcon, SetdarkIcon] = useState();

  useEffect(() => {
    if (localStorage.getItem("tube-fx-theme") === null)
      localStorage.setItem("tube-fx-theme", "dark");
    const themeFromLs = localStorage.getItem("tube-fx-theme");

    themeFromLs === "dark"
      ? Settheme({ themeColor: "#C21010", themeBg: "#000", textColor: "#fff" })
      : Settheme({ themeColor: "#C21010", themeBg: "#fff", textColor: "#000" });

    themeFromLs === "dark" ? SetdarkIcon(true) : SetdarkIcon(false);
  }, []);

  return (
    <Router>
      <themeContext.Provider
        value={{
          theme: theme,
          Settheme: Settheme,
          darkIcon: darkIcon,
          SetdarkIcon: SetdarkIcon,
        }}
      >
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
            <Route exact path="/search/:search" element={<SearchFeed />} />
          </Routes>
        </Box>
      </themeContext.Provider>
    </Router>
  );
}

export default App;
