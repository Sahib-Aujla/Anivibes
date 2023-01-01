import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  animeContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    overflow: 'auto',
    backgroundColor:'white',

    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
  },
}));
