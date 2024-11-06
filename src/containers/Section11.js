import { Box, Container, Grid } from "@basetoolkit/ui";
import React from "react";
import OutlinedButton from "../components/Buttons/OutlinedButton";
import Title from "../components/Title";
import { Section11Content } from "../utils/content";

const { title, ITEMS } = Section11Content;

const Section11 = () => {
  return (
    <Container
      sx={{ xs: { my: 10 }, sm: { my: 15 }, md: { my: 20 }, lg: { my: 25 } }}
    >
      <Title variant={{ xs: "h3", md: "h2" }} sx={{ mb: 8, xs: { mb: 5 } }}>
        {title}
      </Title>

      <Grid
        container
        rowSpacing={6}
        spacing={3}
        sx={{ position: "relative" }}
        mb={3}
      >
        {ITEMS.map(({ link, image }) => (
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <Box
              sx={{ cursor: "pointer", "&:hover": { filter: "contrast(40%)" } }}
            >
              <img
                src={image}
                style={{ maxHeight: "60px", objectFit: "contain" }}
              />
            </Box>
          </Grid>
        ))}

        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            right: 0,
            left: 0,
            height: 100,
            background: "linear-gradient(180deg, #06070a85, #06070a)",
          }}
        />
      </Grid>

      <OutlinedButton arrow fit>
        Explore ecosystem
      </OutlinedButton>
    </Container>
  );
};

export default Section11;
