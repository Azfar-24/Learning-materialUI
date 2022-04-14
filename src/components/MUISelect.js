import React from "react";
import { Box } from "@mui/system";
import { TextField, MenuItem } from "@mui/material";
import { useState, useEffect } from "react";

const MUISelect = () => {
  const [countries, setCountries] = useState([]);
  console.log({ countries });

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCountries(value);
  };
  return (
    <Box width="200px">
      <TextField
        label="Select Country"
        value={countries}
        select
        onChange={changeHandler}
        fullWidth
        SelectProps={{ multiple: true }}
        size="small"
        color="secondary"
        helperText="Please select your country"
      >
        <MenuItem value="IN" disabled>
          India
        </MenuItem>
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="US">United States</MenuItem>
        <MenuItem value="NZ">New Zerland</MenuItem>
      </TextField>
    </Box>
  );
};

export default MUISelect;
