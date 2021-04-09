import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

const Header = () => {
    return (
        <Container maxWidth="lg">
          <Typography variant="h2" color="textPrimary" align="center">Kanji Dictionary</Typography>
        </Container>
    )
}

export default Header
