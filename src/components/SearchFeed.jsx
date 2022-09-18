import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import fetchApi from "../utils/fetchApi";
import { Videos } from "./";

export default function SearchFeed() {
  const [videos, setVideos] = useState([]);
  const [loading, Setloading] = useState(false);

  const { search } = useParams();
  useEffect(() => {
    Setloading(true);
    fetchApi(`search?part=snippet&q=${search}`).then((data) => {
      setVideos(data.items);
      Setloading(false);
    });
  }, [search]);

  return (
    <Box p={2} minHeight="95vh">
      <Typography
        variant="h4"
        fontWeight={900}
        color="white"
        mb={3}
        ml={{ sm: "100px" }}
      >
        Search Results for <span style={{ color: "#FC1503" }}>{search}</span>{" "}
        videos
      </Typography>
      <Box display="flex">
        <Box sx={{ mr: { sm: "100px" } }} />
        {loading ? <p>Loading</p> : <Videos videos={videos} />}
      </Box>
    </Box>
  );
}
