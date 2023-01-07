import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { TextField, InputAdornment } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { searchAnime } from '../slices/currentGenreOrCategory';
import useStyles from './styles'

const Search = () => {
  const [query, setQuery] = useState('')
  const dispatch=useDispatch();
  const classes = useStyles();
const handleKeyPress=(e)=>{
if(e.key==='Enter'){
  dispatch(searchAnime(query));

}
}
  return (
    <div className={classes.searchContainer}>
      <TextField
        onKeyPress={handleKeyPress}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        variant="standard"
        InputProps={{
          className: classes.input,
          startAdornment: (
            <InputAdornment position="start"><SearchIcon /></InputAdornment>
          ),
        }}
      />
    </div>
  )
}

export default Search