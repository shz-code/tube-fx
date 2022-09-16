import { Search } from "@mui/icons-material";
import { IconButton, Paper } from "@mui/material";
import React, { useContext, useState } from "react";
import themeContext from "../utils/themeContext";

export default function SearchBar() {
  const [search, Setsearch] = useState("");
  const theme = useContext(themeContext);
  const themeProps = theme.theme;

  return (
    <Paper
      component="form"
      sx={{
        borderRadius: "20px",
        border: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
      }}
    >
      <input
        className="search-bar"
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => Setsearch(e.target.value)}
      />
      <IconButton sx={{ color: `${themeProps.themeColor}` }}>
        <Search />
      </IconButton>
    </Paper>
  );
}
