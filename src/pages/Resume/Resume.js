import { Grid, Typography, Paper } from '@mui/material';
import React from 'react';
import resumeData from '../../utils/resumeData';
import './Resume.css';

const Resume = () => {
  return (
    <>
      {/* About Me */}
      <Grid container className="section pb_45">
        <Grid item className='section_title mb_30'>
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

      {/* Education History */}
      <Grid container className="section pb_45">
        <Grid item className="section_title mb_30">
          <h6 className='section_title_text'>
            Education History
          </h6>
        </Grid>

        <Grid item xs={12}>
          <Grid container className='resume_timeline'>
            {/* Education */}
            <Grid item sm={12} md={10}>
              <div name="edu" className="education">
                <div className="education_card">
                  <span className="education_header">
                    <h3 className="education_title">10th</h3>
                  </span>
                  <div className="education_content">
                    <p className="education_text">{resumeData.education.school_10.name}</p>
                    <p className="education_text">{resumeData.education.school_10.year}</p>
                    <p className="education_text">{resumeData.education.school_10.board}</p>
                  </div>
                </div>
              </div>

              <div name="edu" className="education">
                <div className="education_card">
                  <span className="education_header">
                    <h3 className="education_title">12th</h3>
                  </span>
                  <div className="education_content">
                    <p className="education_text">{resumeData.education.school_12.name}</p>
                    <p className="education_text">{resumeData.education.school_12.year}</p>
                    <p className="education_text">{resumeData.education.school_12.board}</p>
                  </div>
                </div>
              </div>

              <div name="edu" className="education">
                <div className="education_card">
                  <span className="education_header">
                    <h3 className="education_title">Graduation</h3>
                  </span>
                  <div className="education_content">
                    <p className="education_text">{resumeData.education.college.name}</p>
                    <p className="education_text">{resumeData.education.college.year}</p>
                    <p className="education_text">{resumeData.education.college.board}</p>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Skills */}
      <Grid container className="section pb_45">
        <Grid item className='section_title mb_30'>
          <h6 className='section_title_text'>
            Skills
          </h6>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={6} className="skills_container">
            {resumeData.skills.map((skill, index) => (
              <Grid item xs={12} sm={2} key={index}>
                <Paper className="skills_card">
                  <Typography variant="h6" className="skills_text">{skill}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Resume;

