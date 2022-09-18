import ToggleOffIcon from "@mui/icons-material/ToggleOff";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import { Box, IconButton, Stack } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import themeContext from "../utils/themeContext.js";
import Logo from "./Logo.jsx";
import SearchBar from "./SearchBar.jsx";

export default function Navbar() {
  const theme = useContext(themeContext);
  const { themeBg, textColor, themeColor } = theme.theme;
  const Settheme = theme.Settheme;
  const SetdarkIcon = theme.SetdarkIcon;
  const darkIcon = theme.darkIcon;

  const handleThemeChng = () => {
    if (themeBg === "#000") {
      document.body.classList.add("light-theme");
      Settheme({ themeColor: "#C21010", themeBg: "#fff", textColor: "#000" });
      localStorage.setItem("tube-fx-theme", "light");
      SetdarkIcon(false);
    } else {
      document.body.classList.remove("light-theme");
      Settheme({ themeColor: "#C21010", themeBg: "#000", textColor: "#fff" });
      localStorage.setItem("tube-fx-theme", "dark");
      SetdarkIcon(true);
    }
  };

  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        background: `${themeBg}`,
        top: "0",
        justifyContent: "space-between",
        borderBottom: "1px solid #ededed",
        zIndex: 100,
      }}
    >
      <Link
        to="/"
        style={{
          color: `${textColor}`,
          display: "flex",
          alignItems: "center",
          columnGap: "0.5rem",
        }}
      >
        <Box sx={{ display: { xs: "none", sm: "block" } }}> Tube Fx </Box>{" "}
        <Logo className="logo" fill={themeColor} />
      </Link>
      <SearchBar />
      <IconButton sx={{ color: `${textColor}` }} onClick={handleThemeChng}>
        {darkIcon ? (
          <ToggleOnIcon sx={{ fontSize: "2rem" }} />
        ) : (
          <ToggleOffIcon sx={{ fontSize: "2rem" }} />
        )}
      </IconButton>
    </Stack>
  );
}
