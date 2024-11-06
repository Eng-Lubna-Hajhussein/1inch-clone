import React from "react";
import { Button ,SvgIcon} from "@basetoolkit/ui";
import coloris from "@basetoolkit/ui/coloris";

const OutlinedButton = ({ sx = {}, arrow, children, fit, ...props }) => {
  return (
    <Button
      variant="outlined"
      color="primary"
      sx={{
        borderRadius: t=>t.spacing(1.5) +" !important",
        color:t=> t.palette.text.primary+" !important",
        borderColor:t=> t.palette.text.primary +" !important",
        width: fit ? "fit-content" : "100%",
        "&:hover":{borderColor:t=>t.palette.primary.main+" !important",
          background:t=>coloris(t.palette.primary.main).alpha(.1).hex()+" !important"
        },
        ...sx,
      }}
      {...props}
    >
      {children}
      {arrow && <SvgIcon icon="keyboard_arrow_right" color="white" sx={{ ml: 0.5 }} />}
    </Button>
  );
};

export default OutlinedButton;
