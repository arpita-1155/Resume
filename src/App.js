import React from 'react';
import { Container, Grid, Box } from '@mui/material';
import './App.css';
import Profile from './components/Profile/Profile';
import Portfolio from './pages/Portfolio/Portfolio';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Resume from './pages/Resume/Resume';
import Home from './pages/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// eslint-disable-next-line 
import CustomTimeline from './components/Profile/Timeline/Timeline';

function App() {
  return (  
    <Router>
      <Container className={'top_60'}>
        <Box mt={8}> 
          <Grid container spacing={3}>
            <Grid 
              item 
              xs={10} 
              sm={10} 
              md={4} 
              lg={3}
              style={{ padding: '20px' }} 
            >
              <Box mb={2}> 
                <Profile />
              </Box>
            </Grid>
            <Grid item xs style={{ paddingLeft: '20px' }}>
              <Box mb={2}> 
              </Box>
              <Header />
              <div className="main-content container_shadow">
                <Routes>
                  <Route path="/home" element={<Home />}/>
                  <Route path="/resume" element={<Resume />} />
                  <Route path="/portfolio" element={<Portfolio />} />
                </Routes>
              </div>
              <Footer />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Router>
  );
}

export default App;
