import { Box, Stack, Typography } from "@mui/material";
import React, { useContext } from "react";
import themeContext from "../utils/themeContext";

import { useEffect, useState } from "react";
import fetchApi from "../utils/fetchApi";
import { SideBar, Videos } from "./";

export default function Feed() {
  const theme = useContext(themeContext);
  const themeProps = theme.theme;

  const [selectedCategory, SetselectedCategory] = useState("New");
  const [videos, Setvideos] = useState([]);

  useEffect(() => {
    fetchApi(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      Setvideos(data.items)
    );
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { xs: "auto", md: "92vh" },
          overflow: "scroll",
          borderRight: "1px solid #ededed",
          px: { xs: 0, md: 2 },
        }}
      >
        <SideBar
          themeProps={themeProps}
          selectedCategory={selectedCategory}
          SetselectedCategory={SetselectedCategory}
        />
        <Typography sx={{ display: { xs: "none", md: "block" } }}>
          Copyright @by shz-code
        </Typography>
      </Box>
      <Box p={2} sx={{ flex: 2, height: "92vh", overflowY: "scroll" }}>
        <Typography variant="h4" mb={2}>
          {selectedCategory}{" "}
          <span style={{ color: `${themeProps.themeColor}` }}>Videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
}
