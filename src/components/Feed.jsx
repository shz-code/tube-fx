import { Box, Stack, Typography } from "@mui/material";
import React, { useContext } from "react";
import themeContext from "../utils/themeContext";

import { SideBar, Videos } from "./";

export default function Feed() {
  const theme = useContext(themeContext);
  const themeProps = theme.theme;
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          overflowY: "scroll",
          borderRight: "1px solid #ededed",
          px: { sx: 0, md: 2 },
        }}
      >
        <SideBar themeProps={themeProps} />
        <Typography>Copyright @by shz-code</Typography>
      </Box>
      <Box p={2}>
        <Typography variant="h4" mb={2}>
          New <span style={{ color: `${themeProps.themeColor}` }}>Videos</span>
        </Typography>
        <Videos />
      </Box>
    </Stack>
  );
}
