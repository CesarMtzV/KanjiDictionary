import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'



const WordItem = () => {
    return (
        <Grid container justify="space-between" className="word-item">
          {/* Kanji Word */}
            <Grid container item xs={6} alignItems="center">
                <Typography variant="h5">漢字</Typography>
            </Grid>
          {/* Hiragana and meanings */}
            <Grid container item xs={6} direction="column" alignItems="flex-end">
                <Typography variant="h6">かんじ</Typography>
                <Typography variant="subtitle1">caracteres raros</Typography>
                <Typography variant="subtitle1">otra definicion</Typography>
            </Grid>
        </Grid>
    )
}

export default WordItem
