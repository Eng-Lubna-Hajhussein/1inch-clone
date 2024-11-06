import { Container, Grid, Stack, Tab, Tabs, Typography } from "@basetoolkit/ui";
import {tabClasses} from "@basetoolkit/ui/classes"
import React, { useState } from "react";
import OutlinedButton from "../components/Buttons/OutlinedButton";
import Title from "../components/Title";
import { section4Content } from "../utils/content";

const { top, bottom } = section4Content;

const Section4 = () => {
  const [tabValue, setTabValue] = useState(0);

  return (
    <Container sx={{ 
      xs: {mt:15}, md: {mt:20}, lg: {mt:25} 
      }}>
      {/* TOP */}
      <Grid container spacing={10} flexWrap="wrap-reverse" alignItems="center">
        {/* Left */}
        <Grid item xs={12} md={7}>
          <Stack spacing={2}>
            <Title 
            variant={{ xs: "h3", md: "h2" }}
            width="100%" 
            >{top.title}</Title>

            <Typography variant="body2" color="text.secondary" sx={{ pb: 2 ,maxWidth: 480}}>
              {top.subtitle}
            </Typography>

            <OutlinedButton arrow fit>
              Swap
            </OutlinedButton>
          </Stack>
        </Grid>

        {/* Right */}
        <Grid item xs={12} md={5}>
          <img
            src={top.image}
            style={{ width: "100%", objectFit: "contain" }}
          />
        </Grid>
      </Grid>

      {/* BOTTOM */}

      <Grid
        container
        spacing={{lg:10,md:5,sm:2,xs:2}}
        flexWrap="wrap-reverse"
        alignItems="center"
        // sx={{ mt: { xs: 10, md: 15 } }}
        sx={{ xs: {mt:10}, md: {mt:15},lg: {mt:15}}}
      >
        {/* Left */}
        <Grid item xs={12} md={6}>
          <img
            src={bottom.TABS[tabValue].image}
            style={{ width: "100%", objectFit: "contain" }}
          />
        </Grid>

        {/* Right */}
        <Grid item xs={12} md={6}>
          <Stack spacing={2} sx={{ minWidth: 480,xs:{minWidth:"100%"} }} >
            <Title 
            variant={{ xs: "h3", md: "h2"}}
            >{bottom.title}</Title>

            <Tabs
              value={tabValue}
              onChange={(e, v) => setTabValue(v)}
              variant="scrollable"
              m={0}
              scrollButtons="on"
              sx={{ "& svg": {
                fill: "white",
              },
              margin:"0px !important",
            }}
              
            >
              {bottom.TABS.map(({ name }) => (
                <Tab
                  label={name}
                  key={name}
                  color="text.secondary"
                  indicatorColor="primary"
                  sx={{
                    [`&.${tabClasses.selected}`]:{
                      color:t=> t.palette.text.primary+" !important",
                     } 
                  }}
                />
              ))}
            </Tabs>

            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ pb: 2, minHeight: 70}}
              textAlign="left"
            >
              {bottom.TABS[tabValue].subtitle}
            </Typography>

            <OutlinedButton arrow fit>
              Learn more
            </OutlinedButton>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Section4;
