import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Button from '@mui/material/Button'


function App() {
  return (
    <Box
      sx={{ flexGrow: 1 }}
      component="section"
    >
      <Grid container spacing={2}>
        <Grid xs={12} display="flex" justifyContent="center" flexDirection="column" alignItems="center"> 
          <h1>Meu Local</h1>
          <span className="subtitle">San Francisco</span>
          <span className="temperature">12º</span>
          <span className="conditions">Parcialmente Nublado</span>
          <Grid xs={12} display="flex" flexDirection="row" spacing={2}>
            <span className="max-temperature">Máx.: 17º</span>
            <span className="min-temperature">Min.: 11º</span>
          </Grid>
        </Grid>
        <Grid xs={12} display="flex" justifyContent="center" sx={{background: 'blue'}}>
          
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
