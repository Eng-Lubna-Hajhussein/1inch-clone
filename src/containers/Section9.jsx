import { Container, Grid } from "@basetoolkit/ui";
import React from "react";
import ServiceCard from "../components/Cards/ServiceCard";
import Title from "../components/Title";
import { section9Content } from "../utils/content";

const { title, ITEMS } = section9Content;

const Section9 = () => {
  return (
    <Container
      sx={{ xs: { mt: 10 }, sm: { mt: 15 }, md: { mt: 20 }, lg: { mt: 25 } }}
    >
      <Title variant={{ xs: "h3", md: "h2" }} sx={{ mb: 8, xs: { mb: 5 } }}>
        {title}
      </Title>

      <Grid container spacing={3}>
        {ITEMS.map((item) => (
          <Grid item xs={12} md={6} key={item.title}>
            <ServiceCard {...item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Section9;
