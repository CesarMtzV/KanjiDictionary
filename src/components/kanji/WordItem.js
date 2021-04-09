import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'



const WordItem = ({ wordItem }) => {
    return (
        <Grid container justify="space-between" className="word-item">
          {/* Kanji Word */}
            <Grid container item xs={6} alignItems="center">
                <Typography variant="h5">{wordItem.variants[0].written}</Typography>
            </Grid>
          {/* Hiragana and meanings */}
            <Grid container item xs={6} direction="column" alignItems="flex-end">
                <Typography variant="h6">{wordItem.variants[0].pronounced}</Typography>
                <Typography variant="subtitle1">{wordItem.meanings[0].glosses[0]}</Typography>
            </Grid>
        </Grid>
    )
}

export default WordItem
