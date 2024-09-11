"use client";
import React from "react";
import {
  Box,
  Tabs,
  Tab,
  Grid,
  Paper,
  CardMedia,
  Typography,
  styled,
} from "@mui/material";
import Image from "next/image";
import { tabLabels } from "../constant/commonConstant";

type ArrayItem = {
  id: number;
  label: string;
  image: string;
};

type ArraysType = {
  [key: number]: ArrayItem[];
};

const MainContent: React.FC = () => {
  const [value, setValue] = React.useState<number>(0);


  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const CustomTabs = styled(Tabs)({
    "& .MuiTabs-indicator": {
      backgroundColor: "white",
      height: "3px",
    },
    "& .MuiTabs-flexContainer": {
      justifyContent: "flex-start",
      borderBottom: "1px solid #707070",
    },
  });

  return (
    <Box sx={{ px: 4, pt: 4, width: "70%", borderLeft: "1px solid #707070" }}>
      <CustomTabs
        value={value}
        onChange={handleChange}
        textColor="inherit"
        sx={{
          mb: 2,
        }}
      >
      {tabLabels.map((item, index) => (
        <Tab key={item.id} label={item.label} />
      ))}
      </CustomTabs>
      <Box
        sx={{
          height: "530px",
          overflowY: "auto",

          "&::-webkit-scrollbar": {
            display: "none",
          },
          "-ms-overflow-style": "none", // IE and Edge
          "scrollbar-width": "none",
        }}
      >
        <Grid container spacing={4}>
      
          {tabLabels[value].items.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <Paper
                sx={{ backgroundColor: "#25272C", border: "1px solid #707070" }}
              >
                <div
                  style={{
                    height: "200px",
                    width: "150px",
                  }}
                >
                  <Image
                    src={item.image}
                    alt={item.label}
                    width={150}
                    height={200}
                  />
                </div>
                <Typography
                  variant="body1"
                  sx={{
                    mt: 2,
                    pl: 2,
                    py: 1,
                    color: "white",
                    borderTop: "1px solid #707070",
                  }}
                >
                  {item.label}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default MainContent;
