import { Box, Stack, Typography } from "@mui/material";
import React, { useContext } from "react";
import themeContext from "../utils/themeContext";

import { useEffect, useState } from "react";
import fetchApi from "../utils/fetchApi";
import { Loader, SideBar, Videos } from "./";

export default function Feed() {
  const theme = useContext(themeContext);
  const themeProps = theme.theme;

  const [selectedCategory, SetselectedCategory] = useState("New");
  const [videos, Setvideos] = useState([]);
  const [loading, Setloading] = useState(false);

  useEffect(() => {
    Setloading(true);
    fetchApi(`search?part=snippet&q=${selectedCategory}`).then((data) => {
      Setvideos(data.items);
      Setloading(false);
    });
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
          <span>
            {" "}
            Developed by{" "}
            <a
              href="https://github.com/shz-code/"
              style={{ color: `${themeProps.themeColor}` }}
            >
              {" "}
              @shz-code{" "}
            </a>
          </span>
        </Typography>
      </Box>
      <Box p={2} sx={{ flex: 2, height: "90.3vh", overflowY: "scroll" }}>
        <Typography variant="h4" mb={2}>
          {selectedCategory}{" "}
          <span style={{ color: `${themeProps.themeColor}` }}>Videos</span>
        </Typography>
        {loading ? <Loader /> : <Videos videos={videos} />}
      </Box>
    </Stack>
  );
}
