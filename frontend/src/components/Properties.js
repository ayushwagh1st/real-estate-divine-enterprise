import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Typography, Card, CardContent, Grid, makeStyles } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  card: {
    marginBottom: theme.spacing(2),
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

const Properties = () => {
  const classes = useStyles();
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/properties').then(response => {
      setProperties(response.data);
    });
  }, []);

  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Properties
      </Typography>
      <Grid container spacing={4}>
        {properties.map(property => (
          <Grid item key={property._id} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardContent>
                <Typography variant="h5" component="h2">
                  {property.title}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  {property.description}
                </Typography>
                <Typography variant="body2" component="p">
                  ${property.price}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Properties;
