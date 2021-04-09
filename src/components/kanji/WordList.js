import React from 'react'
import Grid from '@material-ui/core/Grid'
import WordItem from './WordItem'
import Typography from '@material-ui/core/Typography'



//TODO: Add the prop "items" and render dynamically
const WordList = ({ wordlist }) => {
    return (
        <Grid container direction="column" >
          <Grid container item justify="center">
            <Typography variant="h6">Words</Typography>
          </Grid>
        {/* TODO: MAKE THIS DYNAMIC */}
          <Grid container item>
            {wordlist.map( (word, index) => (
              <WordItem wordItem={word} key={index}/>
            ))}
          </Grid>

        </Grid>
    )
}

export default WordList
