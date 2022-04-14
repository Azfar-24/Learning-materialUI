import TextField from "@mui/material/TextField";
import React from "react";
import { Stack } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
// import startAdornment from "@mui/material/InputAdornment";

const MUITextField = () => {
  return (
    <Stack>
      <Stack spacing={4} direction="row">
        <TextField
          required
          id="outlined-required"
          label="First name"
          varient="standard"
        />
        <TextField
          required
          id="outlined-required"
          label="Last name"
          varient="filled"
        />
        <TextField
          required
          id="outlined-required"
          label="Password"
          type="password"
          varient="Password"
          helperText="Do not share your password with anyone"
        />
        <TextField
          color="primary"
          required
          id="outlined-required"
          label="E-Mail"
          varient="filled"
        />
        <TextField
          color="secondary"
          required
          error
          id="outlined-required"
          label="Address"
          varient="filled"
        />
        <TextField
          color="secondary"
          required
          id="outlined-required"
          label="Read Only"
          varient="filled"
          inputProps={{ readOnly: true }}
        />
      </Stack>
      <Stack spacing={4} direction="row">
        <TextField
          color="secondary"
          required
          id="outlined-required"
          label="Amount"
          varient="filled"
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
        />
        <TextField
          color="secondary"
          required
          id="outlined-required"
          label="Weight"
          varient="filled"
        />
      </Stack>
    </Stack>
  );
};

export default MUITextField;
