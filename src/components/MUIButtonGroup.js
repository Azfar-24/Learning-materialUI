import {
  ButtonGroup,
  Button,
  ToggleButtonGroup,
  ToggleButton,
  Stack,
} from "@mui/material";
import React from "react";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";

const MUIButtonGroup = () => {
  return (
    <>
      <ButtonGroup
        color="primary"
        size="small"
        variant="contained"
        aria-label="outlined primary button group"
        spacing={2}
      >
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <ButtonGroup
        color="secondary"
        size="mediam"
        orientation="vertical"
        variant="outlined"
        aria-label="outlined primary button group"
        spacing={2}
      >
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <ButtonGroup
        size="large"
        variant="text"
        aria-label="outlined primary button group"
        spacing={2}
      >
        <Button
          onClick={() => {
            alert("clicked");
          }}
        >
          One
        </Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <Stack>
        <ToggleButtonGroup size="small">
          <ToggleButton value="bold" aria-label="bold">
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value="italic" aria-label="italic">
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value="underlined" aria-label="underlined">
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </>
  );
};

export default MUIButtonGroup;
