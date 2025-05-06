// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Carousel from 'react-material-ui-carousel'

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import BackgroundBlogCard from "examples/Cards/BlogCards/BackgroundBlogCard";

// Assets
import Illustration from "assets/images/illustrations/illustration-reset.jpg"
import MKTypography from "components/MKTypography";

function LatestNews() {
  const latestBlogs = [
    {
      image: Illustration,
      title: "Research: Generative AI for Personalized Learning and Self-development",
      description: "What's is personalized learning?",
      action: {
        type: "internal",
        route: "/blog/research-trends-n-innovation/",
        label: "research"
      }
    }
  ]
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container spacing={3} alignItems="center">
          <MKTypography
          variant="h3"
          color="black"
          mb={2}
          >
            Latest News
          </MKTypography>
          <Carousel
          next={ (next, active) => {/* Do stuff */} }
          prev={ (prev, active) => {/* Do other stuff */} }
          >
            {
            latestBlogs.map((blog, i) => {
              <BackgroundBlogCard
              key={i}
              image={blog.image}
              title={blog.title}
              description={blog.description}
              action={blog.action}
              />
            })
            }
          </Carousel>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default LatestNews;
