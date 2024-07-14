import React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import dima from '../img/mar/dima.jpg';
import geka from '../img/mar/geka.jpg';
import kris from '../img/mar/kris.jpg';
import polina from '../img/mar/polina.jpg';
import vika from '../img/mar/vika.jpg';

const guests = [
  { name: 'Константин Наталия', src: '/static/images/avatar/1.jpg' },
  { name: 'Никита Кристина', src: kris },
  { name: 'Борис Татьяна', src: '/static/images/avatar/1.jpg' },
  { name: 'Виктория Денис', src: vika },
  { name: 'Евгений', src: geka },
  { name: 'Виктор Мария', src: '/static/images/avatar/1.jpg' },
  { name: 'Яков', src: '/static/images/avatar/1.jpg' },
  { name: 'Дмитрий', src: dima },
  { name: 'Полина', src: polina },
  { name: 'Александр Дарья', src: '/static/images/avatar/1.jpg' },
];

const Guests = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 2,
        fontFamily: 'Snell Roundhand, cursive',
        color: 'teal',
      }}
    >
      {guests.map((guest, index) => (
        <Box
          key={index}
          sx={{
            textAlign: 'center',
            width: '60px'
          }}
        >
          <Avatar
            alt={guest.name}
            src={guest.src}
            sx={{width: 56, height: 56, marginBottom: 1}}
          />
          <Typography variant="caption">{guest.name}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default Guests;
