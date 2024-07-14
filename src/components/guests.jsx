import React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import dima from '../img/mar/dima.jpg';
import geka from '../img/mar/geka.jpg';
import kris from '../img/mar/kris.jpg';
import polina from '../img/mar/polina.jpg';
import vika from '../img/mar/vika.jpg';
import yakov from '../img/mar/yakov.jpg';
import sasha from '../img/mar/sasha.jpg';
import boris from '../img/mar/boris.jpg';
import we from '../img/mar/we.jpg';
import viktor from '../img/mar/viktor.jpg';
import toyoda from '../img/mar/toyoda.jpg';

const guests = [
  { name: 'Тереховы', src: we },
  { name: 'Петровы', src: kris },
  { name: 'Московниковы', src: boris },
  { name: 'Дудуновы', src: vika },
  { name: 'Ситюковы', src: sasha },
  { name: 'Колпаковы', src: geka },
  { name: 'Красовские', src: viktor },
  { name: 'Медведев', src: yakov },
  { name: 'Шувалов', src: dima },
  { name: 'Сушкевич', src: polina },
  { name: 'Тойода', src: toyoda },
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
            flexGrow: 1,
            maxWidth: '80px', // Ширина блока
            flexBasis: '20%', // Базовая ширина для респонсивности
            marginBottom: 2,
            fontFamily: 'Snell Roundhand, cursive',
          }}
        >
          <Avatar
            alt={guest.name}
            src={guest.src}
            sx={{ width: 80, height: 80, marginBottom: 1 }}
          />
          <Typography variant="caption">{guest.name}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default Guests;
