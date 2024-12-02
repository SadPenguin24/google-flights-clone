import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import React from "react";
import Link from "@mui/material/Link";
import {quickFindData} from "../data/quickFindData";
import {Divider} from "@mui/material";

export default function QuickFind() {
  return (
    <Box key={"BoxQuickFind"} sx={{flexGrow: 1}}>
      <h3>Find cheap flights on popular routes</h3>
      <div style={{paddingBottom: "1rem"}} />
      <Grid container wrap="wrap" spacing={2}>
        {quickFindData.map((item, index) => (
          <Grid key={index} size={{xs: 12, md: 6, lg: 4}}>
            <Link
              color={"#7da3df"}
              underline="none"
              sx={{":hover": {color: "#8ab4f8"}}}
              href="#"
            >
              {item.title}
            </Link>
          </Grid>
        ))}
      </Grid>
      <Divider sx={{bgcolor: "#5f6368", my: "2rem"}} />
    </Box>
  );
}
