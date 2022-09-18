import { Box, Stack } from "@mui/material";
import React from "react";
import { ChannelCard, VideoCard } from "./";

export default function Videos({ videos }) {
  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      gap={2}
      sx={{ justifyContent: "center" }}
    >
      {videos.map((item, index) => (
        <Box key={index}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channel={item} />}
        </Box>
      ))}
    </Stack>
  );
}
