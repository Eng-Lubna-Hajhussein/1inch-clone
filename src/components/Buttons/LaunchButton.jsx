import React from "react";
import { Button ,SvgIcon} from "@basetoolkit/ui";

const LaunchButton = ({ sx = {}, ...props }) => {
  return (
    <Button variant="contained" sx={{ borderRadius: t=>t.spacing(1.5) +" !important", ...sx }} {...props}>
      Launch App
      <SvgIcon icon="keyboard_arrow_right" color="common.white"  />
    </Button>
  );
};

export default LaunchButton;
