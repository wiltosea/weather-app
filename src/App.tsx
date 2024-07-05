import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { useState } from 'react';
import "./App.css"

const status = {
  "location": {
    "name": "Belo Horizonte",
    "region": "Minas Gerais",
    "country": "Brazil",
    "lat": -19.92,
    "lon": -43.93,
    "tz_id": "America/Sao_Paulo",
    "localtime_epoch": 1720015926,
    "localtime": "2024-07-03 11:12"
  },
  "current": {
    "last_updated_epoch": 1720015200,
    "last_updated": "2024-07-03 11:00",
    "temp_c": 22,
    "temp_f": 71.6,
    "is_day": 1,
    "condition": {
      "text": "Parcialmente nublado",
      "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
      "code": 1003
    },
    "wind_mph": 12.5,
    "wind_kph": 20.2,
    "wind_degree": 40,
    "wind_dir": "NE",
    "pressure_mb": 1024,
    "pressure_in": 30.24,
    "precip_mm": 0,
    "precip_in": 0,
    "humidity": 57,
    "cloud": 50,
    "feelslike_c": 23.5,
    "feelslike_f": 74.3,
    "windchill_c": 25.9,
    "windchill_f": 78.5,
    "heatindex_c": 25.5,
    "heatindex_f": 77.8,
    "dewpoint_c": 8.1,
    "dewpoint_f": 46.6,
    "vis_km": 10,
    "vis_miles": 6,
    "uv": 8,
    "gust_mph": 17,
    "gust_kph": 27.4
  }
}

function App() {

  const [data,setData] = useState(status);

  return (
    <Box
      sx={{ flexGrow: 1 }}
      component="section"
    >
      <Grid container spacing={2}>
        <Grid xs={12} display="flex" justifyContent="center" flexDirection="column" alignItems="center"> 
          <h1>Meu Local</h1>
          <span className="subtitle">{data.location.name}</span>
          <Grid display="flex" alignItems="start"><span className="temperature">{data.current.temp_c}</span><span className='temp_symbol'>º C</span></Grid>
          <img src={data.current.condition.icon} />
          <span className="conditions">{data.current.condition.text}</span>
          <Grid xs={12} display="flex" flexDirection="row" spacing={2}>
            <span className="max-temperature">H.: 27º</span>
            <span className="min-temperature">L.: 11º</span>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
