import { Box } from "@mui/system";
import { React, useState } from "react";
import {
  Checkbox,
  FormControlLabel,
  FormControl,
  FormLabel,
  FormGroup,
} from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";

export const MUICheckbox = () => {
  const [acceptTnC, setAcceptTnC] = useState(false);
  const [skills, setSkills] = useState([]);
  console.log({ skills });
  //   console.log(acceptTnC);
  const checkedHandler = (e) => {
    setAcceptTnC(e.target.checked);
    console.log(e.target);
  };

  const handleSkillsCheck = (e) => {
    const index = skills.indexOf(e.target.value);
    if (index === -1) {
      setSkills([...skills, e.target.value]);
    } else {
      setSkills(skills.filter((skill) => skill !== e.target.value));
    }
  };
  return (
    <Box>
      <Box>
        <FormControlLabel
          label="I accept all the T&C"
          control={
            <Checkbox
              icon={<BookmarkBorderIcon />}
              checkedIcon={<BookmarkIcon />}
            />
          }
          checked={acceptTnC}
          onChange={checkedHandler}
        ></FormControlLabel>
      </Box>
      <Box>
        <FormControlLabel
          label="Favorite"
          control={
            <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
          }
        ></FormControlLabel>
      </Box>
      <Box>
        <FormControl
          label="Skills"
          control={
            <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
          }
        >
          <FormLabel>Skills</FormLabel>
          <FormGroup>
            <FormControlLabel
              label="HTML"
              control={<Checkbox />}
              value="html"
              checked={skills.includes("html")}
              onChange={handleSkillsCheck}
            ></FormControlLabel>
            <FormControlLabel
              label="javaScript"
              control={<Checkbox />}
              value="javascript"
              checked={skills.includes("javascript")}
              onChange={handleSkillsCheck}
            ></FormControlLabel>
            <FormControlLabel
              label="React"
              control={<Checkbox />}
              value="react"
              checked={skills.includes("react")}
              onChange={handleSkillsCheck}
            ></FormControlLabel>
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  );
};
