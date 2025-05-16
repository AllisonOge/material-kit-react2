// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import ourTechnology from "assets/images/illustrations/our_technology.png";

// Assets
// import Illustration from "assets/images/illustrations/illustration-reset.jpg"
import MKTypography from "components/MKTypography";

function OurTechnology() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12}>
            <MKTypography variant="h3" color="black" mb={2}>
              Our Technology
            </MKTypography>
          </Grid>

          <Grid item xs={12} md={6}>
            <MKTypography variant="body1" color="black" mb={1}>
              At SWACTech, we believe the future of learning is adaptive, intelligent, and deeply
              personal.
            </MKTypography>
            <MKTypography variant="body1" color="black" mb={1}>
              Our AI&ndash;powered engine tailors learning experiences based on each user&apos;s
              behavior, pace, and performance. With every interaction, the system becomes smarter
              &mdash; ensuring better outcomes with less effort.
            </MKTypography>
            <MKTypography variant="body1" color="black" mb={1}>
              Designed with African learners in mind, our approach bridges digital gaps with
              intuitive tools and localized insights.
            </MKTypography>
            <MKTypography variant="body1" color="black" mb={1}>
              We are validating this hypothesis through real&ndash;world pilots, continuously
              improving our technology to serve communities more effectively.
            </MKTypography>
          </Grid>

          <Grid item xs={12} md={6}>
            <MKBox position="relative">
              <MKBox component="img" src={ourTechnology} alt="our technology" width="100%" />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default OurTechnology;
