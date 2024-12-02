"use client";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import { faqData } from "../data/faqData";

export default function FrequentlyAskedQuestions() {
  return (
    <Box key={"BoxFaq"}>
      <h3>Frequently asked questions</h3>
      {faqData.map((item, index) => (
        <>
          <Accordion
            key={index}
            sx={{ bgcolor: "#202124", boxShadow: "none", color: "white" }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{ paddingLeft: "0px" }}
            >
              {item.summary}
            </AccordionSummary>
            <AccordionDetails>{item.details}</AccordionDetails>
          </Accordion>
          {index !== faqData.length - 1 ? (
            <Divider sx={{ bgcolor: "#5f6368" }} />
          ) : (
            <div style={{ paddingBottom: "1rem" }} />
          )}
        </>
      ))}
    </Box>
  );
}
