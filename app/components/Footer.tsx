import {Box, Button, Link} from "@mui/material";
import React from "react";
import LanguageIcon from "@mui/icons-material/Language";

export default function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        px: 9,
        color: "#7c8086",
      }}
    >
      <Box sx={{mx: "8rem", display: "flex", justifyContent: "space-evenly"}}>
        <Button
          variant="outlined"
          startIcon={<LanguageIcon />}
          sx={{
            my: 2,
            display: "flex",
            borderColor: "#3c4043",
            color: "#acc6f9",
            alignItems: "center",
            flexWrap: "wrap",
            borderRadius: 12,
          }}
        >
          Language English(United States)
        </Button>
        <Button
          variant="outlined"
          startIcon={<LanguageIcon />}
          sx={{
            my: 2,
            display: "flex",
            borderColor: "#3c4043",
            color: "#acc6f9",
            alignItems: "center",
            flexWrap: "wrap",
            borderRadius: 12,
          }}
        >
          Location Philippines
        </Button>
        <Button
          variant="outlined"
          startIcon={<LanguageIcon />}
          sx={{
            my: 2,
            display: "flex",
            borderColor: "#3c4043",
            color: "#acc6f9",
            alignItems: "center",
            flexWrap: "wrap",
            borderRadius: 12,
          }}
        >
          Currency PHP
        </Button>
      </Box>

      <p
        style={{
          fontSize: "0.9rem",
          paddingLeft: "12rem",
          paddingRight: "12rem",
        }}
      >
        Current language and currency options applied: English (United States) -
        Philippines - PHP Displayed currencies may differ from the currencies
        used to purchase flights. <Link>Learn more</Link>
      </p>

      <p
        style={{
          fontSize: "0.9rem",
          marginTop: "1.5rem",
          marginBottom: "1.5rem",
        }}
      >
        Prices are final prices and include all taxes and fees, including
        payment fees for the cheapest common payment method (which may differ
        depending on the provider). Additional charges may apply for other types
        of payment, luggage, meals, WLAN or other additional services. Prices,
        availability and travel details are provided based on the latest
        information received from our partners. This information is reflected in
        the results within a period of less than 24 hours. Additional conditions
        may also be applied by our partners. You should then check prices and
        conditions with the services providers before booking.
      </p>

      <div>
        <strong style={{marginRight: "1rem"}}>
          <Link underline="none" href="#">
            About
          </Link>
        </strong>
        <strong style={{marginRight: "1rem"}}>
          <Link underline="none" href="#">
            Privacy
          </Link>
        </strong>
        <strong style={{marginRight: "1rem"}}>
          <Link underline="none" href="#">
            Terms
          </Link>
        </strong>
        <strong style={{marginRight: "1rem"}}>
          <Link underline="none" href="#">
            Join user studies
          </Link>
        </strong>
        <strong style={{marginRight: "1rem"}}>
          <Link underline="none" href="#">
            Feedback
          </Link>
        </strong>
        <strong>
          <Link underline="none" href="#">
            Help Center
          </Link>
        </strong>
      </div>
    </Box>
  );
}
