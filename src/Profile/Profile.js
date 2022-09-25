import {
  Avatar,
  CardHeader,
  Container,
  Divider,
  Grid,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import ProfileInfo from "./ProfileInfo";
import ProfileSkills from "./ProfileSkills";

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function Profile() {
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container sx={{ mt: 4 }}>
      <CardHeader
        sx={{ width: "10%" }}
        avatar={<Avatar alt="fcicio" />}
        title={<Typography variant="h5">fcicio</Typography>}
      /><br/>
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: "background.paper",
          display: "flex",
          //   height: 350,
        }}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: "divider" }}
        >
          <Tab label="Info" {...a11yProps(0)} />
          <Tab label="Skills" {...a11yProps(1)} />
        </Tabs>
        <ProfileInfo value={value} index={0}/>
        <ProfileSkills value={value} index={1}/>
      </Box>
    </Container>

    //   <Grid container spacing={2}>
    //     <Grid item xs={6}>
    //       <Stack spacing={2}>
    //         <Typography>Skills</Typography>
    //         <Typography>Info</Typography>
    //       </Stack>
    //     </Grid>
    //     {/* <Grid item xs={6}>
    //       <Divider orientation="vertical" />
    //     </Grid> */}
    //   </Grid>
    // </Container>
  );
}
