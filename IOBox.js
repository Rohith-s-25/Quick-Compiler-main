import React from "react";
import { Card, Typography } from "@mui/material";

export default function IOBox(props) {
  return (
    <>
      <center>
        <Typography variant="h5" fontWeight="600" sx={{ marginTop: "2%" }}>
          {props.title}
        </Typography>
        <Card variant="outlined" sx={{ padding: "3%", margin: "1% 0% 2%" }}>
          <Typography fontFamily="roboto" fontSize="1.5rem" className="ioBox">
            {props.text}
          </Typography>
        </Card>
      </center>
    </>
  );
}

Navbar.js
import { Container, Typography } from "@mui/material";

function Navbar() {
  return (
    <Container
      sx={{
        margin: "4% auto 2% auto",
      }}
    >
      <Typography textAlign="center" fontSize={"4.5rem"} fontWeight="600">
        {"Phases of Compiler"}
      </Typography>
    </Container>
  );
}

export default Navbar;
