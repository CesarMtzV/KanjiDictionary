import React, { useState } from 'react'

const Search = ({ getQuery, search }) => {

    const [text, setText] = useState('')

    const onChange = (q) => {
        setText(q)
        getQuery(q)
    }

    return (
        <section className="searchbox-wrap">
            <input 
                type="text" 
                placeholder="Search for a kanji" 
                className="searchbox" 
                value={text}
                onChange={(e) => onChange(e.target.value)}
                onKeyPress={search}
            />
        </section>        
        
    )
}

export default Search
