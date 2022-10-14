import {
  Dns,
  KeyboardArrowDown,
  PermMedia,
  PersonSearch,
  Public,
} from "@mui/icons-material";
import {
  AppBar,
  Box,
  Checkbox,
  CssBaseline,
  Divider,
  Drawer,
  Grid,
  InputBase,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import React from "react";

const drawerWidth = 300;

const data = [
  { icon: <People />, label: "Authentication" },
  { icon: <Dns />, label: "Database" },
  { icon: <PermMedia />, label: "Storage" },
  { icon: <Public />, label: "Hosting" },
];

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#eeeeee",
  "&:hover": {
    backgroundColor: "#f3f6f4",
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export default function People() {
  const [open, setOpen] = React.useState(false);
  const [checked, setChecked] = React.useState([1]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            <ListItem disablePadding>
              <Search>
                <SearchIconWrapper>
                  <PersonSearch />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </ListItem>

            <ListItemButton
              alignItems="flex-start"
              onClick={() => setOpen(!open)}
              sx={{
                px: 3,
                pt: 2.5,
                mt: 1
                // pb: open ? 0 : 2.5,
                // "&:hover, &:focus": { "& svg": { opacity: open ? 1 : 0 } },
              }}
            >
              <ListItemText
                primary="Skills"
                primaryTypographyProps={{
                  fontSize: 15,
                  fontWeight: "medium",
                  lineHeight: "20px"
                }}
                secondary="Authentication, Firestore Database, Realtime Database, Storage, Hosting, Functions, and Machine Learning"
                secondaryTypographyProps={{
                  noWrap: true,
                  fontSize: 12,
                  lineHeight: "16px",
                  color: open ? "rgba(0,0,0,0)" : "rgba(255,255,255,0.5)",
                }}
                sx={{ my: 0 }}
              />
              <KeyboardArrowDown
                sx={{
                  mr: -1,
                  opacity: 1,
                  transform: open ? "rotate(-180deg)" : "rotate(0)",
                  transition: "0.2s",
                }}
              />
            </ListItemButton>

            {open && (
              <List>
                <ListItem
                  key="Programming"
                  secondaryAction={
                    <Checkbox
                      edge="end"
                      onChange={handleToggle("Programming")}
                      checked={checked.indexOf("Programming") !== -1}
                      inputProps={{
                        "aria-labelledby":
                          "checkbox-list-secondary-label-programming",
                      }}
                    />
                  }
                  disablePadding
                >
                  <ListItemButton
                    key="Programming"
                    sx={{ py: 0, minHeight: 32 }}
                  >
                    <ListItemText
                      primary="Programming"
                      primaryTypographyProps={{
                        fontSize: 14,
                        fontWeight: "medium",
                        ml: "25px",
                      }}
                    />
                  </ListItemButton>
                </ListItem>

                <ListItem 
                key="Marketing"
                secondaryAction={
                  <Checkbox
                    edge="end"
                    onChange={handleToggle("Marketing")}
                    checked={checked.indexOf("Marketing") !== -1}
                    inputProps={{
                      "aria-labelledby":
                        "checkbox-list-secondary-label-marketing",
                    }}
                  />
                }
                disablePadding>
                  <ListItemButton key="Marketing" sx={{ py: 0, minHeight: 32 }}>
                    <ListItemText
                      primary="Marketing"
                      primaryTypographyProps={{
                        fontSize: 14,
                        fontWeight: "medium",
                        ml: "25px",
                      }}
                    />
                  </ListItemButton>
                </ListItem>

                <ListItem 
                key="uiux"
                secondaryAction={
                  <Checkbox
                    edge="end"
                    onChange={handleToggle("uiux")}
                    checked={checked.indexOf("uiux") !== -1}
                    inputProps={{
                      "aria-labelledby":
                        "checkbox-list-secondary-label-uiux",
                    }}
                  />
                }
                disablePadding>
                  <ListItemButton key="uiux" sx={{ py: 0, minHeight: 32 }}>
                    <ListItemText
                      primary="UI/UX"
                      primaryTypographyProps={{
                        fontSize: 14,
                        fontWeight: "medium",
                        ml: "25px",
                      }}
                    />
                  </ListItemButton>
                </ListItem>

                <ListItem key="social"
                  secondaryAction={
                    <Checkbox
                      edge="end"
                      onChange={handleToggle("social")}
                      checked={checked.indexOf("social") !== -1}
                      inputProps={{
                        "aria-labelledby":
                          "checkbox-list-secondary-label-social",
                      }}
                    />
                  }
                  disablePadding>
                  <ListItemButton
                    key="social-media"
                    sx={{ py: 0, minHeight: 32 }}
                  >
                    <ListItemText
                      primary="Social Media"
                      primaryTypographyProps={{
                        fontSize: 14,
                        fontWeight: "medium",
                        ml: "25px",
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              </List>
            )}

            {/* <ListItem disablePadding>
            <ListItemText primary="Skills"/>
              <ListItemButton>
              </ListItemButton>
            </ListItem> */}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel. Risus at
          ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
          quisque non tellus. Convallis convallis tellus id interdum velit
          laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
          adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
          integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
          eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
          quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
          vivamus at augue. At augue eget arcu dictum varius duis at consectetur
          lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
          faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
          ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
          elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
          sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
          mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
          risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
          purus viverra accumsan in. In hendrerit gravida rutrum quisque non
          tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
          morbi tristique senectus et. Adipiscing elit duis tristique
          sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </Box>
    </Box>
    // <Grid container spacing={2}>
    //   <Grid item md={4}>
    //     <Typography>xs=8</Typography>
    //   </Grid>
    //   <Grid item md={8}>
    //     <Typography>xs=4</Typography>
    //   </Grid>
    // </Grid>
  );
}
