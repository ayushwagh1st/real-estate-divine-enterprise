import React, { useState } from 'react';
import axios from 'axios';
import { Container, Typography, TextField, Button, makeStyles } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
  },
  button: {
    alignSelf: 'flex-start',
  },
}));

const Register = () => {
  const classes = useStyles();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/register', { username, password });
    setUsername('');
    setPassword('');
  };

  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Register
      </Typography>
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField label="Username" value={username} onChange={(e) => setUsername(e.target.value)} fullWidth />
        <TextField label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} fullWidth />
        <Button type="submit" variant="contained" color="primary" className={classes.button}>
          Register
        </Button>
      </form>
    </Container>
  );
};

export default Register;
