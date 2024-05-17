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

const AddProperty = () => {
  const classes = useStyles();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/properties', { title, description, price });
    setTitle('');
    setDescription('');
    setPrice('');
  };

  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Add Property
      </Typography>
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField label="Title" value={title} onChange={(e) => setTitle(e.target.value)} fullWidth />
        <TextField label="Description" value={description} onChange={(e) => setDescription(e.target.value)} fullWidth />
        <TextField label="Price" value={price} onChange={(e) => setPrice(e.target.value)} fullWidth />
        <Button type="submit" variant="contained" color="primary" className={classes.button}>
          Add Property
        </Button>
      </form>
    </Container>
  );
};

export default AddProperty;
