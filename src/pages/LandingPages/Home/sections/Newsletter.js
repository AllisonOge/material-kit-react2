/* eslint-disable react/jsx-no-duplicate-props */
/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";

// Images
import macbook from "assets/images/macbook.png";

function Newsletter() {
  return (
    <MKBox component="section" bgColor="black" py={12}>
      <Container>
        <Grid container alignItems="center">
          <MKTypography
          variant="h2"
          color="white"
          mb={2}
          >
            Help Shape the Future of Learning — Get Our AI Insights Free
          </MKTypography>
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <MKBox component="label" color="white">Name</MKBox>
                <MKInput type="text" label="Name" fullWidth />
              </Grid>
              <Grid item xs={6}>
                <MKBox component="label" color="white">Email</MKBox>
                <MKInput type="email" label="Email" fullWidth />
              </Grid>
              <Grid item xs={6}>
                <MKBox component="label" color="white">Company</MKBox>
                <MKInput type="text" label="Company" fullWidth />
              </Grid>
              <Grid item xs={6}>
                <MKBox component="label" color="white">Position</MKBox>
                <MKInput type="text" label="Position" fullWidth />
              </Grid>
              <Grid item xs={12} sx={{ display: "flex", justifyContent: "flex-end" }}>
                <MKButton variant="contained" color="light" sx={{ height: "100%" }}>
                  Submit
                </MKButton>
              </Grid>
            </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Newsletter;
