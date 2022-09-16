import { Stack } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import themeContext from "../utils/themeContext.js";
import Logo from "./Logo.jsx";
import SearchBar from "./SearchBar.jsx";

export default function Navbar() {
  const theme = useContext(themeContext);
  const themeProps = theme.theme;

  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        background: `${themeProps.themeBg}`,
        top: "0",
        justifyContent: "space-between",
      }}
    >
      <Link
        to="/"
        style={{
          color: `${themeProps.textColor}`,
          display: "flex",
          alignItems: "center",
          columnGap: "0.5rem",
        }}
      >
        Tube Fx <Logo className="logo" fill={themeProps.themeColor} />
      </Link>
      <SearchBar />
    </Stack>
  );
}
