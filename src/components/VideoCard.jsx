import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import {
  demoChannelTitle,
  demoChannelUrl,
  demoThumbnailUrl,
  demoVideoTitle,
  demoVideoUrl,
} from "../utils/lib";

export default function VideoCard({
  video: {
    id: { videoId },
    snippet,
  },
}) {
  return (
    <>
      <Card
        sx={{
          width: { xs: "358px", md: "320px" },
          boxShadow: "none",
          borderRadius: 0,
        }}
      >
        <Link to={videoId ? `/video/${videoId}` : `/video/${demoVideoUrl}`}>
          <CardMedia
            image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
            alt={snippet?.title}
            sx={{
              width: { xs: "100%", sm: "358px" },
              height: 200,
            }}
          />
        </Link>
        <CardContent sx={{ backgroundColor: "#1E1E1E", height: "106px" }}>
          <Link to={videoId ? `/video/${videoId}` : `/video/${demoVideoUrl}`}>
            <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
              {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
            </Typography>
          </Link>
          <Link
            to={
              snippet?.channelId
                ? `/channel/${snippet?.channelId}`
                : `/channel/${demoChannelUrl}`
            }
          >
            <Typography variant="subtitle2" color="gray">
              {snippet?.channelTitle || demoChannelTitle}
            </Typography>
          </Link>
        </CardContent>
      </Card>
    </>
  );
}
