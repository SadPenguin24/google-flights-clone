import {
  Box,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Typography,
} from "@mui/material";
import React from "react";
import Card from "@mui/joy/Card";

import Grid from "@mui/material/Grid2";
import { cheapFlightsData } from "../data/cheapFlightsData";

export default function CheapFlights() {
  return (
    <Box key={"BoxPopularDestinations"} sx={{ flexGrow: 1 }}>
      <h3>Find cheap flights from Manila to anywhere</h3>
      <div style={{ paddingBottom: "1rem" }} />
      <Grid
        container
        wrap="wrap"
        sx={{ display: "flex", flexDirection: "row" }}
      >
        {cheapFlightsData.map((item, index) => (
          <Grid size={{ xs: 12, md: 6, lg: 3 }}>
            <Card
              sx={{
                width: "18rem",
                variant: "plain",
                backgroundColor: "transparent",
                border: "none",
                // marginRight: "1rem",
              }}
            >
              <CardMedia
                sx={{
                  width: "100%",
                  background: "linearGradient",
                  borderRadius: 4,
                }}
                component="img"
                alt="flight 1"
                image={"https://media.nomadicmatt.com/2024/tokyothings.jpeg"}
                title="flight 1"
              />
              {/* <CardContent> */}
              <div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    color: "white",
                  }}
                >
                  <Typography gutterBottom variant="h6" component="div">
                    Tokyo
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div">
                    $10,123
                  </Typography>
                </div>
                <div style={{ marginTop: "0px", color: "#8ba0a6" }}>
                  <Typography variant="subtitle1">May 9 - May 15</Typography>
                  <Typography variant="subtitle1">Nonstop 4hr 20min</Typography>
                </div>
              </div>
              {/* </CardContent> */}
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
