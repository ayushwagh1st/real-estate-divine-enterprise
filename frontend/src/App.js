import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container, AppBar, Toolbar, Typography, Button, CssBaseline, createTheme, ThemeProvider } from '@mui/material';
import Properties from './components/Properties';
import AddProperty from './components/AddProperty';
import Login from './components/Login';
import Register from './components/Register';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Container>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" style={{ flexGrow: 1 }}>
                Real Estate
              </Typography>
              <Button color="inherit" href="/login">Login</Button>
              <Button color="inherit" href="/register">Register</Button>
              <Button color="inherit" href="/add-property">Add Property</Button>
              <Button color="inherit" href="/">Properties</Button>
            </Toolbar>
          </AppBar>
          <Routes>
            <Route path="/" element={<Properties />} />
            <Route path="/add-property" element={<AddProperty />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
};

export default App;
