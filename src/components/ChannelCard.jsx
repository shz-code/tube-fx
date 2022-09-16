import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { demoProfilePicture } from "../utils/lib";
import themeContext from "../utils/themeContext";

export default function ChannelCard({ channel }) {
  const theme = useContext(themeContext);
  const { themeColor } = theme.theme;
  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: { xs: "356px", md: "320px" },
        height: "326px",
        margin: "auto",
      }}
    >
      <Link to={`/channel/${channel?.id?.channelId}`}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <CardMedia
            image={
              channel?.snippet?.thumbnails?.high?.url || demoProfilePicture
            }
            alt={channel?.snippet?.title}
            sx={{
              borderRadius: "50%",
              height: "180px",
              width: "180px",
              mb: 2,
              border: "1px solid #e3e3e3",
            }}
          />
          <Typography variant="h6" sx={{ color: `${themeColor}` }}>
            {channel?.snippet?.title}
            <CheckCircleIcon
              sx={{ fontSize: "14px", color: "gray", ml: "5px" }}
            />
          </Typography>
          {channel?.statistics?.subscriberCount && (
            <Typography
              sx={{ fontSize: "15px", fontWeight: 500, color: "gray" }}
            >
              {parseInt(
                channel?.statistics?.subscriberCount,
                10
              ).toLocaleString("en-US")}
              Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
}
