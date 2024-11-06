import { Box, Container, Stack, Typography } from "@basetoolkit/ui";
import React from "react";
import OutlinedButton from "../components/Buttons/OutlinedButton";
import Title from "../components/Title";
import { section8Content } from "../utils/content";

const { title, subtitle, caption, ShieldImage } = section8Content;

const Section8 = () => {
  return (
    <Container
      maxWidth="md"
      sx={{
        xs: { mt: 10 },
        sm: { mt: 15 },
        md: { mt: 20 },
        lg: { mt: 25 },
        textAlign: "center",
      }}
    >
      <Stack alignItems="center">
        <Title variant={{ xs: "h3", md: "h2" }} sx={{ mb: 2 }}>
          {title}
        </Title>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mb: 8, xs: { mb: 5 } }}
        >
          {subtitle}
        </Typography>

        <Box sx={{ px: 5, xs: { px: 2 }, md: { px: 5 }, lg: { px: 7 } }}>
          <img
            src={ShieldImage}
            style={{ width: "100%", objectFit: "contain" }}
          />
        </Box>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mt: 8, xs: { mt: 5 }, mb: 3 }}
        >
          {caption}
        </Typography>

        <OutlinedButton fit arrow>
          Learn more
        </OutlinedButton>
      </Stack>
    </Container>
  );
};

export default Section8;
