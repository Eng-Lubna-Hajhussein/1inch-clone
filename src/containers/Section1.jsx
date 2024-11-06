import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  useMediaQueryMatch,
  useTheme,
  useMeasure,
  SvgIcon,
} from "@basetoolkit/ui";
import React from "react";
import LaunchButton from "../components/Buttons/LaunchButton";
import { section1Content } from "../utils/content";
import Title from "../components/Title";

const {
  MainBG,
  TreesImage,
  CliffImage,
  HorseImage,
  ShootingStarImage,
  title,
  subtitle,
} = section1Content;

const CustomButton = ({ children, ...props }) => (
  <Button
    variant="outlined"
    color="text.primary"
    sx={{
      borderRadius: (t) => t.spacing(2) + " !important",
      height: 58 + " !important",
      px: (t) => t.spacing(3) + " !important",
    }}
    {...props}
  >
    {children}
  </Button>
);

const Section1 = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQueryMatch(theme.breakpoints.down("md"));

  const [ref, { height }] = useMeasure();

  return (
    <Box sx={{ width: "100%", px: 2 }}>
      {/* Main Background */}
      <Box sx={{ position: "fixed", zIndex: -10, top: 0, left: 0, right: 0 }}>
        <img src={MainBG} style={{ width: "100%" }} />
      </Box>

      {/* backgrounds elements */}
      <div
        ref={ref}
        style={{
          position: "absolute",
          width: "100%",
          zIndex: -1,
          top: 0,
          left: 0,
          right: 0,
        }}
      >
        <img src={MainBG} style={{ width: "100%", opacity: 0 }} />

        {/* Star */}
        <img
          src={ShootingStarImage}
          style={{
            position: "absolute",
            top: "30px",
            right: "15%",
            width: "500px",
          }}
        />

        {/* Trees */}
        {/* <Hidden mdDown> */}
        {!isSmallScreen && (
          <img
            src={TreesImage}
            style={{
              position: "absolute",
              width: "100%",
              right: 0,
              left: 0,
              bottom: "13%",
            }}
          />
        )}
        {/* </Hidden> */}

        {/* Cliff */}
        <img
          src={CliffImage}
          style={{
            height: "100%",
            position: "absolute",
            right: 0,
            top: 0,
            backgroundSize: "cover",
          }}
        />

        {/* Horse */}
        <img
          src={HorseImage}
          style={{
            position: "absolute",
            height: "38%",
            right: "14%",
            bottom: "45%",
            transform: "rotate(7deg)",
          }}
        />

        <Box
          sx={{
            bgcolor: "background.default",
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "800px",
            top: `calc(${height}px - 13%)`,
          }}
        ></Box>
      </div>

      {/* Content */}
      <Container
        sx={{
          height: "100vh",
          mt: 8,
          [theme.breakpoints.up("md")]: { mt: 6, height: "80vh" },
        }}
      >
        <Stack sx={{ height: "100%" }} justifyContent="center">
          <Title
            variant={{ xs: "h3", sm: "h2", md: "h1" }}
            sx={{ letterSpacing: "0.02em", mb: 1 }}
          >
            {title}
          </Title>

          <Title
            variant={{ xs: "h4", sm: "h3", md: "h2" }}
            sx={{ fontWeight: 500, letterSpacing: "0.05em", mb: 5 }}
          >
            {subtitle}
          </Title>

          <Stack
            direction={{ xs: "column", md: "row", lg: "row", sm: "row" }}
            alignItems="center"
            spacing={4}
          >
            <LaunchButton
              fullWidth={isSmallScreen}
              sx={{ height: 58, px: 3 }}
            />

            <CustomButton fullWidth={isSmallScreen}>
              <SvgIcon icon="local_grocery_store" color="white" fontSize={36} ml={-1} />
              <Stack sx={{ textAlign: "left", ml: 1 }}>
                <Typography variant="caption" lineHeight={1}>
                  Download on the
                </Typography>
                <Typography variant="subtitle1" mt={1} lineHeight={1}>
                  App Store
                </Typography>
              </Stack>
            </CustomButton>

            <CustomButton fullWidth={isSmallScreen}>
              <SvgIcon icon="g_translate" color="white" fontSize={36} ml={-1} />

              <Stack sx={{ textAlign: "left", ml: 1 }}>
                <Typography variant="caption" lineHeight={1}>
                  Get in on
                </Typography>
                <Typography variant="subtitle2" mt={1} lineHeight={1}>
                  Google Play
                </Typography>
              </Stack>
            </CustomButton>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Section1;
