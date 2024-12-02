"use client";
import {Container} from "@mui/material";
import Navbar from "./components/Navbar";
import FrequentlyAskedQuestions from "./components/FrequentlyAskedQuestions";
import QuickFind from "./components/QuickFind";
import Footer from "./components/Footer";
import PopularDestinations from "./components/PopularDestinations";

// const darkTheme = createTheme({
//   palette: {
//     mode: "dark",
//   },
// });

export default function Home() {
  return (
    <div>
      {/* <ThemeProvider theme={darkTheme}> */}
      {/* <CssBaseline /> */}
      <Navbar />
      <Container
        sx={{
          marginTop: "6rem",
          display: "flex",
          flexDirection: "column",
          marginBottom: "1rem",
        }}
      >
        <PopularDestinations />
        <FrequentlyAskedQuestions />
        <QuickFind />
        <Footer />
      </Container>
      {/* </ThemeProvider> */}
    </div>
  );
}
