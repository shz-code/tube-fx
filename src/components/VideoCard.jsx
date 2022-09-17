import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import styles from "../assets/css/VideoCard.module.css";
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
            {snippet?.title.length > 60 ? (
              <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
                {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}...
              </Typography>
            ) : (
              <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
                {snippet?.title || demoVideoTitle}
              </Typography>
            )}
          </Link>
          <Link
            to={
              snippet?.channelId
                ? `/channel/${snippet?.channelId}`
                : `/channel/${demoChannelUrl}`
            }
          >
            <Typography variant="subtitle2" color="gray">
              <span className={styles.channel_title}>
                {snippet?.channelTitle || demoChannelTitle}{" "}
              </span>
            </Typography>
          </Link>
        </CardContent>
      </Card>
    </>
  );
}
