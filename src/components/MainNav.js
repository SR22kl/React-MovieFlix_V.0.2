import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import YoutubeSearchedForIcon from '@mui/icons-material/YoutubeSearchedFor';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import '../style/MainNav.css'

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (value === 0) {
      navigate("/");
    } else if (value === 1) {
      navigate("/movies");
    } else if (value === 2) {
      navigate("/series");
    } else if (value === 3) {
      navigate("/search");
    }
  }, [value, navigate]);

  return (
    <Box sx={{ width: 1, position: 'fixed', bottom: 0, left: 0, right: 0, }} >
      <div className='btNav'>
        <BottomNavigation
          showLabels
          value={value}
          sx={{bgcolor: '#2d313a'}}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction sx={{color:"#fff"}} label="Trending" icon={<WhatshotIcon /> } />
          <BottomNavigationAction sx={{color:"#fff"}} label="Movies" icon={<MovieCreationIcon />} />
          <BottomNavigationAction sx={{color:"#fff"}} label="TV-Shows" icon={<OndemandVideoIcon />} />
          <BottomNavigationAction sx={{color:"#fff"}} label="Search" icon={<YoutubeSearchedForIcon />} />
        </BottomNavigation>
      </div>

    </Box>
  );
}
