import React from "react";
import { Box } from "@mui/system";
import {
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
import { useState } from "react";

export const MUIRadioButton = () => {
  const [value, setValue] = useState("");
  function changeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
    console.log({ value });
  }
  return (
    <Box>
      <FormControl error>
        <FormLabel id="job-experiance">Years of Experiance</FormLabel>
        <RadioGroup
          name="job-experiance"
          value={value}
          onChange={changeHandler}
          row
        >
          <FormControlLabel
            control={<Radio size="small" />}
            label="0-2"
            value="0-2"
          />
          <FormControlLabel
            control={<Radio color="secondary" />}
            label="3-5"
            value="3-5"
          />
          <FormControlLabel control={<Radio />} label="+5" value="+5" />
        </RadioGroup>
      </FormControl>
    </Box>
  );
};
