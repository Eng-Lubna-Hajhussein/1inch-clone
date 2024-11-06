import React, { Children } from "react";
import {
  AppBar,
  Container,
  IconButton,
  Stack,
  Typography,
  useMediaQueryMatch,
  useTheme,
  SvgIcon
} from "@basetoolkit/ui";
import { NAVBAR_HEIGHT } from "../../constants";
import useScrollPosition from "../../hooks/useScrollPosition";
import { navbarContent } from "../../utils/content";
import LaunchButton from "../Buttons/LaunchButton";

const { Logo } = navbarContent;

const LinkButton = ({ children, ...props }) => (
  <Stack
    direction="row"
    alignItems="center"
    spacing={0.2}
    sx={{
      cursor: "pointer",
      color:t=>t.palette.text.secondary +" !important",
      "&:hover": { color: t=>t.palette.text.primary +" !important" },
    }}
    {...props}
  >
    {children}
  </Stack>
);

const Navbar = () => {
  const scrollPosition = useScrollPosition();

  const theme = useTheme();
  const isMobile = useMediaQueryMatch(theme.breakpoints.not("lg"));

  return (
    <AppBar
      elevation={0}
      sx={{
        bgcolor: scrollPosition > 10 ? "rgba(7,7,16,.7) !important" : "transparent !important",
        backdropFilter: scrollPosition > 10 && "blur(60px)",
      }}
      height={NAVBAR_HEIGHT}
      py={1}
      position="fixed"
    >
      <Container
        sx={{
          [theme.breakpoints.up("lg")]: {
            maxWidth: "1380px !important",
          },
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          flexWrap="wrap"
        >
          {/* Logo */}
          <img src={Logo} style={{ height: "100%", objectFit: "contain" }} />

          {/* Links */}
          {!isMobile && (
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              spacing={6}
              sx={{ flex: 1 }}
              flexWrap="wrap"
            >
              <LinkButton>
                <Typography variant="body2">Products</Typography>
                <SvgIcon icon="keyboard_arrow_down" size="small" />
              </LinkButton>

              <LinkButton>
                <Typography variant="body2">Developers</Typography>
                <SvgIcon icon="keyboard_arrow_down" size="small" />
              </LinkButton>

              <LinkButton>
                <Typography variant="body2">Governance</Typography>
                <SvgIcon icon="keyboard_arrow_down" size="small" />
              </LinkButton>

              <LinkButton>
                <Typography variant="body2">About</Typography>
                <SvgIcon icon="keyboard_arrow_down" size="small" />
              </LinkButton>

              <LinkButton spacing={0.5}>
                <Typography variant="body2">Blog</Typography>
                <SvgIcon icon="call_made" fontSize={12} />
              </LinkButton>
            </Stack>
          )}

          {/* Action Buttons */}
          {isMobile ? (
            <IconButton>
              <SvgIcon icon="menu" color= "text.secondary" />
            </IconButton>
          ) : (
            <Stack direction="row" spacing={5} alignItems="center">
              <LinkButton spacing={1}>
                <SvgIcon icon="language" size="small" />
                <Typography variant="body2">EN</Typography>
              </LinkButton>

              <LaunchButton sx={{ borderRadius:t=>t.spacing(1.5)+" !important" }} />
            </Stack>
          )}
        </Stack>
      </Container>
    </AppBar>
  );
};

export default Navbar;
