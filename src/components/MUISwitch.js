import { Box, FormControlLabel, Switch } from "@mui/material";
import React, { useState } from "react";

export const MUISwitch = () => {
  const [checked, setChecked] = useState(false);
  console.log(checked);
  const changeHandler = (e) => {
    setChecked(e.target.checked);
  };
  return (
    <Box>
      <FormControlLabel
        label="Dark Mode"
        control={
          <Switch
            checked={checked}
            onChange={changeHandler}
            size="small"
            color="warning"
          />
        }
      ></FormControlLabel>
    </Box>
  );
};
