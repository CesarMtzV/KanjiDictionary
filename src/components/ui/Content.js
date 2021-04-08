import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { makeStyles, Paper, Container } from '@material-ui/core'
import { yellow } from '@material-ui/core/colors'

const useStyles = makeStyles((theme) => ({
    paper: {
        background: yellow
    }
}))


const Content = () => {
    return (
        <Grid container className="content" direction="row" justify="center">

          <Grid container item xs={6} sm={4} className="kanjiBigContainer" justify="center" >
            <Paper className="kanjiBig" >字</Paper>
          </Grid>

          {/* KANJI DETAILS - START */}
          <Grid container item xs={6} sm={4} className="kanjiDetail" alignItems="center" justify="center">

            {/* NESTED GRID - START */}
            <Grid container direction="column" xs={6}>

              <Grid container item direction="row" justify="space-between">
                <Typography variant="subtitle2">Grade</Typography>
                <Typography variant="body1">1</Typography>
              </Grid>
              <Grid container item direction="row" justify="space-between">
                <Typography variant="subtitle2">JLPT</Typography>
                <Typography variant="body1">3</Typography>
              </Grid>
              <Grid container item direction="row" justify="space-between">
                <Typography variant="subtitle2">Strokes</Typography>
                <Typography variant="body1">6</Typography>
              </Grid>
              <Grid container item direction="row" justify="space-between">
                <Typography variant="subtitle2">Unicode</Typography>
                <Typography variant="body1">5B57</Typography>
              </Grid>
              <Grid container item direction="row" justify="space-between">
                <Typography variant="subtitle2">Heisig Keyword</Typography>
                <Typography variant="body1">character</Typography>
              </Grid>

            </Grid>
            {/* NESTED GRID - FINISH */}

          </Grid>
          {/* KANJI DETAILS - FINISH */}

          {/* Kun Reading - START*/}
          <Grid container item xs={6} alignItems="center" className="kunReadingContainer">

            <Grid container justify="space-between">
                <Grid container item xs={3} className="kanjiLabel">
                    <Typography variant="body1">kun</Typography>
                </Grid>
                <Grid container item xs={3} className="kanjiLabel" justify="space-around">
                    <Typography variant="body1">あ</Typography>
                    <Typography variant="body1">あ</Typography>
                    <Typography variant="body1">あ</Typography>
                </Grid>
            </Grid> 
            
          </Grid> {/* Kun Reading - END */}

        </Grid>
    )
}

export default Content
