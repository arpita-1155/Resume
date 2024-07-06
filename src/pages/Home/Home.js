import React from 'react';
import { Grid, Typography } from '@mui/material';
import resumeData from '../../utils/resumeData';
import './Home.css'

const Home = () => {
  return (
    <>
      {/* About Me */}
      <Grid container className="section pb_45">
        <Grid item className='section_title mb_30'>
          {/* <span></span> */}
          <h6 className='section_title_text'>
            About Me
          </h6>
          <Grid item xs={12}>
            <Typography className='aboutme_text'>
              {resumeData.about}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
