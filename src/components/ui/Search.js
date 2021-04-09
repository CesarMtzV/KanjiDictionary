import React from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'


const Search = () => {
    return (
        <section className="searchbox-wrap">
            <input type="text" placeholder="Search for a kanji" className="searchbox" />
        </section>        
        
    )
}

export default Search
