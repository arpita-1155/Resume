
import React from 'react';
import { Grid, Typography, Card, CardContent, CardMedia, Button } from '@mui/material';
import './Portfolio.css';
import resumeData from '../../utils/resumeData'; 

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <Grid container spacing={4} className="section pb_45">
        <Grid item xs={12} className="section_title mb_30">
          <Typography variant="h4" className="section_title_text">
            Portfolio
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Grid container spacing={4}>
            {resumeData.projects.map((project, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card className="project_card">
                  <CardMedia
                    // className="project_image"
                    // component="img"
                    // alt={project.title}
                    // height="140"
                    // image={project.image}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {project.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {project.description}
                    </Typography>
                  </CardContent>
                  <Button size="small" color="primary" href={project.link}>
                    Learn More
                  </Button>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Portfolio;
