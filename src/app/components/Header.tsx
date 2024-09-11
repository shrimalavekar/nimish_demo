import React from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BrushIcon from "@mui/icons-material/Brush";
import PinterestIcon from "@mui/icons-material/Pinterest";
import JobTitleText from "./JobTitleText";

import styled from '@emotion/styled';
import { profileDetails } from "../constant/commonConstant";

const Buttons = styled.button`
  background: #25272C;
  border-radius: 8px;
  border: 1px solid;
  padding: 8px 16px;
  &:hover {
    background: rgba(0, 0, 0, 0.04);
  }
`;

const buttonStyles = {
  background: "#25272C",
  borderRadius: "8px",
  border: "1px solid",
};
const Header = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", mb: 1 ,width:"100%"}}>
        <Box>
          <Typography variant="h4" style={{fontSize:"30px"}} component="h3" sx={{ fontWeight: "bold" }}>
            Hi, I&apos;m {profileDetails.name}
          </Typography>
          <Typography variant="body1">{profileDetails.email}</Typography>
          <div className="flex items-center mt-2" style={{height:"50px"}}>

          <JobTitleText/>
          </div>
        </Box>
      </Box>
      <Box sx={{ display: "flex", gap: 2, width:"100%" }}>
        <Buttons
          // startIcon={<AccountCircleIcon />}
        >
          Full Profile
        </Buttons>
        <IconButton
          sx={buttonStyles}
          color="inherit"
          href={profileDetails.linkedIn}
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton
          sx={buttonStyles}
          color="inherit"
          href={profileDetails.behance}
        >
          <PinterestIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Header;
