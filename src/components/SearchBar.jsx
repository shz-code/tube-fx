import { Search } from "@mui/icons-material";
import { IconButton, Paper } from "@mui/material";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import themeContext from "../utils/themeContext";

export default function SearchBar() {
  const [search, Setsearch] = useState("");
  const navigate = useNavigate();
  const theme = useContext(themeContext);
  const themeProps = theme.theme;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (search) {
      navigate(`/search/${search}`);

      Setsearch("");
    }
  };

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        borderRadius: "20px",
        border: "1px solid #e3e3e3",
        pl: { xs: 1, sm: 2 },
        boxShadow: "none",
      }}
    >
      <input
        className="search-bar"
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => Setsearch(e.target.value)}
      />
      <IconButton type="submit" sx={{ color: `${themeProps.themeColor}` }}>
        <Search />
      </IconButton>
    </Paper>
  );
}
