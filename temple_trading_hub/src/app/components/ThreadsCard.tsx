import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';

export default function ThreadsCard(props: any) {
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
            R
          </Avatar>
        }
        title='Shrimp and Chorizo Paella'
        subheader='September 14, 2016'
      />
      {props.image && (
        <CardMedia component='img' image={props.image} alt='Paella dish' />
      )}
      <CardContent>
        <Typography variant='body2' color='text.secondary'>
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
    </Card>
  );
}
