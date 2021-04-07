import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { Paper } from '@material-ui/core'




const Content = () => {
    return (
        <Grid container className="content" direction="row" justify="center">

          <Grid container item xs={6} sm={4} className="kanjiBigContainer" justify="center" >
            <Paper className="kanjiBig" >字</Paper>
          </Grid>

          <Grid container item xs={6} sm={4} className="kanjiDetail" alignItems="center" justify="center">

            {/* NESTED GRID */}
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
          </Grid>
        </Grid>
    )
}

export default Content
