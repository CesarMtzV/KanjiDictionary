import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { Paper } from '@material-ui/core'
import WordList from '../kanji/WordList'

const Content = ({ isLoading , itemDetails, itemWordlist}) => {
    return (
        <Grid container direction="row" justify="center">

          <Grid container item xs={6} sm={4} justify="center" >
            <Paper className="kanjiBig" >{itemDetails.kanji}</Paper>
          </Grid>

          {/* KANJI DETAILS - START */}
          <Grid container item xs={6} sm={4} alignItems="center" justify="center">

            {/* NESTED GRID - START */}
            <Grid container direction="column" xs={6}>

              <Grid container item direction="row" justify="space-between">
                <Typography variant="subtitle2">Grade</Typography>
                <Typography variant="body1">{itemDetails.grade}</Typography>
              </Grid>
              <Grid container item direction="row" justify="space-between">
                <Typography variant="subtitle2">JLPT</Typography>
                <Typography variant="body1">{itemDetails.jlpt}</Typography>
              </Grid>
              <Grid container item direction="row" justify="space-between">
                <Typography variant="subtitle2">Strokes</Typography>
                <Typography variant="body1">{itemDetails.stroke_count}</Typography>
              </Grid>
              <Grid container item direction="row" justify="space-between">
                <Typography variant="subtitle2">Unicode</Typography>
                <Typography variant="body1">{itemDetails.unicode}</Typography>
              </Grid>
              <Grid container item direction="row" justify="space-between">
                <Typography variant="subtitle2">Heisig Keyword</Typography>
                <Typography variant="body1">{itemDetails.heisig_en}</Typography>
              </Grid>

            </Grid>
            {/* NESTED GRID - FINISH */}

          </Grid>
          {/* KANJI DETAILS - FINISH */}

          {/* Readings / Meanings / Words - START*/}
          <Grid container item xs={12} sm={6} alignItems="center">

            <Grid container justify="space-between">

                {/* Kun reading */}
                <Grid container item xs={6}>
                    <Typography variant="h6">kun</Typography>
                </Grid>
                <Grid container item xs={6} justify="space-around">
                    {itemDetails.kun_readings.map( (reading) => (
                      <Typography variant="body1">{reading}</Typography>
                    ))}
                </Grid>

                {/* On readings */}
                <Grid container item xs={6}>
                    <Typography variant="h6">On</Typography>
                </Grid>
                <Grid container item xs={6} justify="space-around">
                    {itemDetails.on_readings.map( (reading) => (
                      <Typography variant="body1">{reading}</Typography>
                    ))}
                </Grid>

                {/* Meanings */}
                <Grid container item xs={6}>
                    <Typography variant="h6">Meanings</Typography>
                </Grid>
                <Grid container item xs={6} justify="space-around">
                    {itemDetails.meanings.map( (meaning) => (
                      <Typography variant="body1">{meaning}</Typography>
                    ))}
                </Grid>

                {/* Wordlist */}
                <Grid container item>
                    <WordList />
                </Grid>
                
            </Grid> 
            
          </Grid> {/* Readings / Meanings / Words - FINISH */}


        </Grid>
    )
}

export default Content
