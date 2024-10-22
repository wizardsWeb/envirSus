import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import CircularProgress, {
  circularProgressClasses,
} from '@mui/material/CircularProgress';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[200],
      ...theme.applyStyles('dark', {
        backgroundColor: theme.palette.grey[800],
      }),
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: '#48FF1A',
      ...theme.applyStyles('dark', {
        backgroundColor: '#00FF00',
      }),
    },
  }));

const ProgressBar = () => {
    return (
        <Stack spacing={2} sx={{ flexGrow: 1 }}>
          <br />
          <BorderLinearProgress variant="determinate" value={50} />
        </Stack>
      );
}

export default ProgressBar
