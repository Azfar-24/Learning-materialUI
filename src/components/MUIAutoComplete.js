import React from "react";
import { Box } from "@mui/system";
import { Stack, Autocomplete, TextField } from "@mui/material";
import { useState } from "react";

type skill = {
  id: number,
  label: string,
};

const skills = ["HTML", "CSS", "javaScript", "React", "MUI", "SASS"];

export const MUIAutoComplete = () => {
  const [value, setValue] = useState(null);
  console.log(value);

  const skillsOption = skills.map((skill, index) => ({
    id: index + 1,
    label: skill,
  }));
  return (
    <Box>
      <Autocomplete
        sx={{ width: "250px" }}
        options={skills}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        freeSolo
      />{" "}
      <Autocomplete
        sx={{ width: "250px" }}
        value={value}
        options={skillsOption}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        onChange={(event: value, newValue: string | null) => {
          setValue(newValue);
        }}
      />
    </Box>
  );
};
