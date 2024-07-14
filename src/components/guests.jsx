import React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const guests = [
  { name: 'Константин Наталия', src: '/static/images/avatar/1.jpg' },
  { name: 'Никита Кристина', src: '/static/images/avatar/1.jpg' },
  { name: 'Борис Татьяна', src: '/static/images/avatar/1.jpg' },
  { name: 'Виктория Денис', src: '/static/images/avatar/1.jpg' },
  { name: 'Евгений', src: '/static/images/avatar/1.jpg' },
  { name: 'Виктор Мария', src: '/static/images/avatar/1.jpg' },
  { name: 'Яков', src: '/static/images/avatar/1.jpg' },
  { name: 'Дмитрий', src: '/static/images/avatar/1.jpg' },
  { name: 'Полина', src: '/static/images/avatar/1.jpg' },
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
