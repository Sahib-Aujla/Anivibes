import React from 'react'
import { Divider, List, ListItem, ListItemText, ListSubheader, ListItemIcon, Box, CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';
import useTheme from '@mui/material/styles/useTheme';
import useStyles from './styles';
import blueLogo from '../../assets/blue_logo.png';
import blackLogo from '../../assets/black_logo.png';
import { selectGenreOrCategory } from '../slices/currentGenreOrCategory';
import { useSelector,useDispatch } from 'react-redux';

const categories = [
  { label: 'Popular', value: 'popular' },
  { label: 'Airing Now', value: 'recent-release' },
  { label: 'Anime Movies', value: 'anime-movies' },

];

const genres=[
  { label: 'Action', value: 'action' },
  { label: 'Adventure', value: 'adventure' },
  { label: 'Comedy', value: 'comedy' },
  { label: 'Crime', value: 'crime' },
  { label: 'Drama', value: 'drama' },

  { label: 'Game', value: 'game' },
  { label: 'Historical', value: 'historical' },
  { label: 'Horror', value: 'horror' },
  { label: 'Magic', value: 'magic' },
  { label: 'Martial Arts', value: 'martial-arts' },
  { label: 'Mecha', value: 'mecha' },
  { label: 'Mystery', value: 'mystery' },
  { label: 'Parody', value: 'parody' },
  { label: 'Psychological', value: 'psychological' },
  { label: 'Romance', value: 'Romance' },
  { label: 'School', value: 'school' },
  { label: 'Sci-Fi', value: 'sci-fi' },
  { label: 'Shounen', value: 'shounen' },
  { label: 'Slice of Life', value: 'slice-of-Life' },
  { label: 'Space', value: 'space' },
  { label: 'Sports', value: 'sports' },
  { label: 'Super Natural', value: 'supernatural' },
  { label: 'Thriller', value: 'thriller' },

]


const Sidebar = () => {
  const theme=useTheme();
  const classes=useStyles();
  const {genreIdOrCategoryName}=useSelector((state)=>state.currentGenreOrCategory)
const dispatch=useDispatch();
  return (
    <>
    <Link to="/" className={classes.imageLink}>
        <img
          className={classes.image}
          src={theme.palette.mode === 'light' ? blueLogo : blackLogo}
          alt="Movie Logo"
        />
      </Link>
      <Divider />
     <Divider />
      <List>
        <ListSubheader>Categories</ListSubheader>
        {categories.map(({ label, value }) => (
          <Link to="/" className={classes.links} key={value}>
            <ListItem onClick={() => dispatch(selectGenreOrCategory(value))} button>
              
              <ListItemText primary={label} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider /> 
      <List>
        <ListSubheader>Genres</ListSubheader>
        {genres.map(({ label, value }) => (
          <Link to="/" className={classes.links} key={value}>
            <ListItem onClick={() => dispatch(selectGenreOrCategory(value))} button>
              
              <ListItemText primary={label} />
            </ListItem>
          </Link>
        ))}
      </List>
    </>
  )
}

export default Sidebar