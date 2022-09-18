import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../assets/css/ChannelDetails.module.css";
import fetchApi from "../utils/fetchApi";
import { ChannelCard, Videos } from "./";

export default function ChannelDetails() {
  const [channel, Setchannel] = useState();
  const [videos, Setvideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchApi(`channels?part=snippet%2Cstatistics&id=${id}`).then((data) =>
      Setchannel(data?.items[0])
    );

    fetchApi(
      `search?channelId=${id}&part=snippet%2Cid&order=date&type=video`
    ).then((data) => Setvideos(data?.items));
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background: `url(${channel?.brandingSettings?.image?.bannerExternalUrl})no-repeat center center/cover`,
          }}
          className={styles.banner}
        />
        <ChannelCard channel={channel} marginTop="-93px" marginBotton="2rem" />
      </Box>
      <Box p={2} display="flex">
        <Box />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
}
