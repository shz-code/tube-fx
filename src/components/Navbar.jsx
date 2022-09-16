import { Box, Stack } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import themeContext from "../utils/themeContext.js";
import Logo from "./Logo.jsx";
import SearchBar from "./SearchBar.jsx";

export default function Navbar() {
  const theme = useContext(themeContext);
  const { themeBg, textColor, themeColor } = theme.theme;

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
    </Stack>
  );
}
