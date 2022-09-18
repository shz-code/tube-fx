import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Box, Stack, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import fetchApi from "../utils/fetchApi";
import themeContext from "../utils/themeContext";
import { Loader, Videos } from "./";

export default function VideoDetails() {
  const [video, Setvideo] = useState();
  const [videos, Setvideos] = useState([]);
  const [loadingvid, Setloadingvid] = useState(false);
  const [loadingvids, Setloadingvids] = useState(false);
  const { id } = useParams();
  const theme = useContext(themeContext);
  const { textColor } = theme.theme;

  useEffect(() => {
    Setloadingvid(true);
    Setloadingvids(true);
    fetchApi(`videos?part=snippet&id=${id}`).then((data) => {
      Setvideo(data.items[0]);
      Setloadingvid(false);
    });

    fetchApi(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => {
        Setvideos(data.items);
        Setloadingvids(false);
      }
    );
  }, [id]);

  return (
    <Box>
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box
          flex={2}
          sx={{
            height: "92vh",
            overflowY: "scroll",
          }}
        >
          {loadingvid ? (
            <Loader />
          ) : (
            <Box>
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${id}`}
                className="react-player"
                controls
              />
              <Typography
                sx={{ color: `${textColor}` }}
                variant="h5"
                fontWeight="bold"
                p={2}
              >
                {video?.snippet?.title}
              </Typography>
              <Stack
                direction="row"
                justifyContent="space-between"
                sx={{ color: `${textColor}` }}
                py={1}
                px={2}
              >
                <Link to={`/channel/${video?.snippet?.channelId}`}>
                  <Typography
                    variant={{ sm: "subtitle1", md: "h6" }}
                    sx={{ color: `${textColor}` }}
                  >
                    {video?.snippet?.channelTitle}
                    <CheckCircleIcon
                      sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                    />
                  </Typography>
                </Link>
                <Stack
                  px={2}
                  direction="row"
                  gap="20px"
                  alignItems="center"
                  flex={1}
                  sx={{ color: `${textColor}` }}
                >
                  <Typography sx={{ opacity: 0.7 }}>
                    {parseInt(video?.statistics?.viewCount).toLocaleString()}{" "}
                    views
                  </Typography>
                  <Typography sx={{ opacity: 0.7 }}>
                    {parseInt(video?.statistics?.likeCount).toLocaleString()}{" "}
                    likes
                  </Typography>
                </Stack>
              </Stack>
              <Stack px={2} pb={2}>
                <Typography sx={{ textAlign: "justify" }}>
                  {video?.snippet?.description}
                </Typography>
              </Stack>
            </Box>
          )}
        </Box>
        <Box
          px={2}
          py={1}
          justifyContent="center"
          alignItems="center"
          flex={1}
          sx={{ height: "92vh", overflowY: "scroll" }}
        >
          {loadingvids ? (
            <Loader />
          ) : (
            <Videos videos={videos} direction="column" />
          )}
        </Box>
      </Stack>
    </Box>
  );
}
