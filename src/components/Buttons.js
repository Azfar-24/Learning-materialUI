import { Button, Stack, Input } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Fingerprint from "@mui/icons-material/Fingerprint";
import React from "react";
import { IconButton } from "@mui/material";

const Buttons = () => {
  return (
    <>
      <Stack direction="row" spacing={2}>
        <Button variant="text" size="small">
          Text
        </Button>
        <Button variant="contained" color="error" size="mediam">
          Contained
        </Button>
        <Button variant="outlined" disableElevation size="large">
          Outlined
        </Button>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Button
          variant="contained"
          disableElevation
          color="success"
          size="small"
        >
          Outlined
        </Button>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Button
          variant="contained"
          color="primary"
          size="small"
          startIcon={<Fingerprint />}
        >
          Primary
        </Button>
        <Button variant="outlined" disabled startIcon={<DeleteIcon />}>
          Disabled
        </Button>
        <Button variant="outlined" href="https://www.google.com/" size="large">
          Link
        </Button>

        {/* Pass function on button click */}

        <Button
          color="secondary"
          variant="contained"
          onClick={() => {
            alert("clicked");
          }}
        >
          Click me
        </Button>
      </Stack>
      <Stack direction="row" spacing={2}>
        <label htmlFor="contained-button-file">
          <Input
            accept="image/*"
            id="contained-button-file"
            multiple
            type="file"
          />
          <Button
            color="info"
            variant="contained"
            component="span"
            startIcon={<DeleteIcon />}
          >
            Upload
          </Button>
        </label>
      </Stack>
      <Stack direction="row" spacing={1}>
        <IconButton aria-label="fingerprint" color="secondary">
          <Fingerprint />
        </IconButton>
        <IconButton aria-label="fingerprint" color="success">
          <Fingerprint />
        </IconButton>
      </Stack>
    </>
  );
};

export default Buttons;
