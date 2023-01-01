import {Grid} from '@mui/material'

import useStyles from './styles'

import React from 'react'
import {Anime} from '../constants'
const AnimeList = ({animes}) => {
    const classes=useStyles();
  return (
    <Grid container className={classes.animeContainer}>
        {animes?.map((anime,i)=>(
            <Anime key={i} anime={anime} i={i} />
        ))}
    </Grid>
  )
}

export default AnimeList