// import { Typography } from "@basetoolkit/ui";
// import React from "react";

// const Title = ({ variant = "h6", sx = {}, children, ...props }) => {
//   const _component =
//     typeof variant !== "object"
//       ? variant
//       : variant.xl ||
//         variant.lg ||
//         variant.md ||
//         variant.sm ||
//         variant.xs ||
//         "h6";

//   const _variantStyles =
//     typeof variant !== "object"
//       ? variant
//       : {
//           xs: variant.xs,
//           sm: variant.sm || variant.xs,
//           md: variant.md || variant.sm || variant.xs,
//           lg: variant.lg || variant.md || variant.sm || variant.xs,
//           xl:
//             variant.xl || variant.lg || variant.md || variant.sm || variant.xs,
//         };

//   return (
//     <Typography
//       variant={variant}
//       sx={{
//         ...sx,
//         typography: typeof _variantStyles === "object" && _variantStyles,
//         fontWeight: `${sx.fontWeight || 600}!important`,
//       }}
//       component={_component}
//       {...props}
//     >
//       {children}
//     </Typography>
//   );
// };

// export default Title;


import { Typography, useMediaQueryMatch, useTheme } from "@basetoolkit/ui";
import React from "react";

const Title = ({ variant = "h6", sx = {}, children, ...props }) => {
  const theme = useTheme();

  // Define screen size queries covering ranges
  const isXl = useMediaQueryMatch(theme.breakpoints.up("xl"));
  const isLg = useMediaQueryMatch(theme.breakpoints.up("lg"));
  const isMd = useMediaQueryMatch(theme.breakpoints.up("md"));
  const isSm = useMediaQueryMatch(theme.breakpoints.up("sm"));
  const isXs = useMediaQueryMatch(theme.breakpoints.up("xs"));

  // Determine the variant based on screen size, cascading fallbacks
  const responsiveVariant =
    (isXl && variant.xl) ||
    (isLg && variant.lg) ||
    (isMd && variant.md) ||
    (isSm && variant.sm) ||
    (isXs && variant.xs) ||
    variant; // Fallback to default if no match

  return (
    <Typography
      variant={responsiveVariant}
      sx={{
        ...sx,
        fontWeight: `${sx.fontWeight || 600}!important`,
      }}
      component="h6"
      {...props}
    >
      {children}
    </Typography>
  );
};

export default Title;
