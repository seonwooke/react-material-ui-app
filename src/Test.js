import React from 'react';
import Button from '@mui/material/Button';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import styled from '@emotion/styled';
import { Box, Stack, Typography } from '@mui/material';
import { blue, green, red } from '@mui/material/colors';

const Test = () => {
  return (
    <div>
      <Stack direction="row" spaicing={2} justifyContent="space-between">
        <Box
          sx={{
            width: 100,
            height: 100,
            backgroundColor: 'primary.main',
            '&:hover': {
              backgroundColor: 'secondary.main',
              opacity: [0.9, 0.8, 0/7]
            }
          }}
        />
        <Box
          sx={{
            width: 100,
            height: 100,
            backgroundColor: 'primary.main',
            '&:hover': {
              backgroundColor: 'secondary.main',
              opacity: [0.9, 0.8, 0/7]
            }
          }}
        />
        <Box
          sx={{
            width: 100,
            height: 100,
            backgroundColor: 'primary.main',
            '&:hover': {
              backgroundColor: 'secondary.main',
              opacity: [0.9, 0.8, 0/7]
            }
          }}
        />
      </Stack>
      <br />
      <Stack direction="row" spaicing={2} justifyContent="space-between">
        <Box
          flex={1} p={2}
          sx={{
            width: 100,
            height: 100,
            backgroundColor: 'primary.main',
            '&:hover': {
              backgroundColor: 'secondary.main',
              opacity: [0.9, 0.8, 0/7]
            }
          }}
        />
        <Box
          flex={2} p={2}
          sx={{
            width: 100,
            height: 100,
            backgroundColor: 'primary.main',
            '&:hover': {
              backgroundColor: 'secondary.main',
              opacity: [0.9, 0.8, 0/7]
            }
          }}
        />
        <Box
          flex={3} p={2}
          sx={{
            width: 100,
            height: 100,
            backgroundColor: 'primary.main',
            '&:hover': {
              backgroundColor: 'secondary.main',
              opacity: [0.9, 0.8, 0/7]
            }
          }}
        />
      </Stack>
      <br />
      <Stack direction="row" spaicing={2} justifyContent="space-between">
        <Box
          flex={1} p={2}
          sx={{
            width: 100,
            height: 100,
            backgroundColor: 'primary.main',
            '&:hover': {
              backgroundColor: 'secondary.main',
              opacity: [0.9, 0.8, 0/7]
            }
          }}
        />
        <Box
          flex={2} p={2}
          sx={{
            width: 100,
            height: 100,
            backgroundColor: 'primary.main',
            display: {xs: 'none', sm: 'block'},
            '&:hover': {
              backgroundColor: 'secondary.main',
              opacity: [0.9, 0.8, 0/7]
            }
          }}
        />
        <Box
          flex={3} p={2}
          sx={{
            width: 100,
            height: 100,
            backgroundColor: 'primary.main',
            '&:hover': {
              backgroundColor: 'secondary.main',
              opacity: [0.9, 0.8, 0/7]
            }
          }}
        />
      </Stack>

      <Button size='large' variant='text'>HELLO WORLD</Button>
      <Button startIcon={<AcUnitIcon />} fullWidth='true' size='large' variant='contained'>HELLO WORLD</Button>
      <Button endIcon={<AccessibilityIcon />}variant='outlined'>HELLO WORLD</Button>
      <Button sx={{
        backgroundColor: 'gray',
        color: 'white',
        margin: 10,
        "&:hover": {
          backgroundColor: 'black'
        },
        "&:disabled": {
          backgroundColor: 'white',
          color: 'black'
        },
      }}>CUSTOM STYLE</Button>
      <CustomButton>CUSTOM BUTTON STYLE</CustomButton>

      <Typography variant='h1' gutterBottom>h1.Heading</Typography>

      <Button color='secondary'>THEME BUTTON</Button>

      <CustomThemeButton>CUSTOM THEME BUTTON</CustomThemeButton>
      
      <Root>
        <Typography>down(md) : red</Typography>
        <Typography>up(md) : blue</Typography>
        <Typography>up(lg) : green</Typography>
      </Root>
    </div>
  )
}

const Root = styled(`div`) (({theme}) => ({
  [theme.breakpoints.down('md')] : {
    backgroundColor: red[500]
  },
  [theme.breakpoints.up('md')] : {
    backgroundColor: blue[500]
  },
  [theme.breakpoints.up('lg')] : {
    backgroundColor: green[500]
  },
}));

const CustomThemeButton = styled(Button) (({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: 'white',
  margin: 10,
  "&:hover": {
    backgroundColor: 'black'
  },
  "&:disabled": {
    backgroundColor: 'white',
    color: 'black'
  },
}));

const CustomButton = styled(Button) ({
  backgroundColor: 'gray',
  color: 'white',
  margin: 10,
  "&:hover": {
    backgroundColor: 'black'
  },
  "&:disabled": {
    backgroundColor: 'white',
    color: 'black'
  },
});

export default Test;