import { Box, Card, CardMedia, Divider, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";
import CardCover from "@mui/joy/CardCover";
import { popDest } from "../data/popDest";

export default function PopularDestinations() {
  return (
    <Box key={"BoxPopularDestinations"} sx={{ flexGrow: 1 }}>
      <h3>Popular destinations from Manila</h3>
      <div style={{ paddingBottom: "1rem" }} />
      <Grid
        container
        wrap="wrap"
        sx={{ display: "flex", flexDirection: "row" }}
      >
        {popDest.map((item, index) => (
          <Grid key={index} size={{ xs: 6, md: 2, lg: 1.7 }}>
            <Card
              sx={{
                position: "relative",
                borderRadius: 3,
                width: "9rem",
                height: "7rem",
                // marginRight: "1rem",
              }}
            >
              <CardMedia
                sx={{
                  width: "100%",
                  height: "100%",
                  background: "linearGradient",
                }}
                component="img"
                alt="Contemplative Reptile"
                image={item.imageLink}
                title="Contemplative Reptile"
              />
              <CardCover
                sx={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 25px), linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0) 50px)",

                  color: "white",
                  display: "relative",
                }}
              >
                <Typography
                  gutterBottom
                  variant="h6"
                  component="h6"
                  sx={{
                    alignItems: "flex-end !important",
                    justifyContent: "start !important",
                    padding: "0.5rem !important",
                    width: "2rem",
                    color: "white",
                    backgroundColor: "none",
                  }}
                >
                  {item.placeName}
                </Typography>
              </CardCover>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Divider sx={{ bgcolor: "#5f6368", my: "2rem" }} />
    </Box>
  );
}
