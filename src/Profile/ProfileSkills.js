import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import {
  Chip,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

export default function ProfileSkills(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <List sx={{ pt: 0 }}>
            <ListItem sx={{ pt: 0 }}>
              <ListItemButton>
                <ListItemText primary="Programming"/>
                <Chip label="109" />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <ListItemText primary="UI/UX" />
                <Chip label="36" />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <ListItemText primary="Social Media" />
                <Chip label="12" />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <ListItemText primary="Marketing" />
                <Chip label="7" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      )}
    </div>
  );
}

ProfileSkills.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
