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
          <br/><br/>
          <TextField
            id="outlined"
            label="Studies"
            defaultValue=""
          />
          <br/><br/>
          <TextField
            id="outlined"
            label="Email"
            defaultValue=""
          />
          <br/><br/>
          <TextField
            id="outlined"
            label="Phone"
            defaultValue=""
          />
          <br/><br/>
          <Button variant="contained">SAVE</Button>
        </Box>
      )}
    </div>
  );
}
