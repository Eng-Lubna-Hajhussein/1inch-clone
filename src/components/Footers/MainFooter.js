import React from "react";
import {
  Box,
  Container,
  Divider,
  Grid,
  IconButton,
  Typography,
  Stack,
  useTheme,
  SvgIcon
} from "@basetoolkit/ui";
import coloris from "@basetoolkit/ui/coloris";
import { footerContent } from "../../utils/content";
import OutlinedButton from "../Buttons/OutlinedButton";
import Title from "../Title";

const {
  subscribe,
  protocols,
  governance,
  support,
  developers,
  copyright,
  socials,
} = footerContent;


const LinkSection = ({ title, links }) => 
 
  (
  <Stack spacing={2.5}>
    <Title>{title}</Title>

    {links.map(({ title }) => (
      <Typography
        key={title}
        variant="body2"
        color="text.secondary"
        sx={{
          cursor: "pointer",
          "&:hover": {
            color: "text.primary",
          },
        }}
      >
        {title}
      </Typography>
    ))}
  </Stack>
);

const Footer = () => {
  const theme=useTheme();
  const dividerColor = coloris(theme.palette.divider).alpha(.2).hex()
  return (
    <Box bgcolor="background.default">
      <Divider  style={{background:dividerColor,marginBottom:theme.spacing(10)}} />

      <Container>
        <Grid container spacing={8} flexWrap="wrap-reverse">
          {/* Links */}
          <Grid item xs={12} md={6} lg={7} xl={8}>
            <Grid container spacing={2}>
              {/* Protocols */}
              <Grid item xs={6} sm={3} md={6} lg={3}>
                <LinkSection {...protocols} />
              </Grid>

              {/* Governance */}
              <Grid item xs={6} sm={3} md={6} lg={3}>
                <LinkSection {...governance} />
              </Grid>

              {/* Support */}
              <Grid item xs={6} sm={3} md={6} lg={3}>
                <LinkSection {...support} />
              </Grid>

              {/* Developers */}
              <Grid item xs={6} sm={3} md={6} lg={3}>
                <LinkSection {...developers} />
              </Grid>
            </Grid>
          </Grid>

          {/* Subscribe */}
          <Grid item xs={12} md={6} lg={5} xl={4}>
            <Stack>
              <Title sx={{ mb: 1 }}>{subscribe.title}</Title>

              <Typography variant="body2" color="text.secondary">
                {subscribe.subtitle}
              </Typography>

              <OutlinedButton arrow sx={{ height: 60, my: 3 }} fullWidth>
                Subscribe
              </OutlinedButton>

              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                justifyContent="space-between"
                flexWrap="wrap"
              >
                {socials.map((item, i) => (
                  <IconButton key={i}>
                    <SvgIcon color="white" icon={item.icon} />
                  </IconButton>
                ))}
              </Stack>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ mt: 6, mb: 5}} style={{background:dividerColor,marginTop:theme.spacing(6),marginBottom:theme.spacing(5)}}  />

        <Stack
          direction={{ xs: "column", md: "row",lg:"row",sm:"row" }}
          justifyContent="space-between"
          alignItems="center"
          spacing={1}
          sx={{ pb: 6 }}
        >
          <Typography variant="body2" color="text.secondary">
            {copyright.left}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {copyright.center}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {copyright.right}
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
