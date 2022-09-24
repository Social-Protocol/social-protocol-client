import { Avatar, Container, Divider, Grid, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";

export default function Profile() {
  return (
    <Container sx={{ mt: 4 }}>
        
    <Typography variant="h4">Profil</Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Stack spacing={2}>
            <Box>
              <Box component="div" sx={{ display: "inline" }}>
                <Avatar alt="fcicio" />
                {/* <Typography>fcicio.eth</Typography> */}
              </Box>
              <Box component="p" sx={{ display: "inline" }}>
                <Typography>fcicio.eth</Typography>
              </Box>
            </Box>
          </Stack>
        </Grid>
        {/* <Grid item xs={6}>
          <Divider orientation="vertical" />
        </Grid> */}
      </Grid>
    </Container>
  );
}
