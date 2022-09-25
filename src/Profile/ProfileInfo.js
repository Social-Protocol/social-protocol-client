import { Box, Button, TextField, Typography } from "@mui/material";

export default function ProfileInfo(props) {
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
        <Box sx={{ pl: 3 }}>
          <TextField
            required
            id="outlined"
            label="Name"
            defaultValue="Flaviu Cicio"
          />
        </Box>
      )}
    </div>
  );
}
