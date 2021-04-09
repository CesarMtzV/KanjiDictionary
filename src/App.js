import './App.css';
import Header from './components/ui/Header';
import Content from './components/ui/Content';
import AppBarKanji from './components/ui/AppBarKanji';
import Search from './components/ui/Search';
import axios from 'axios';
import { useState } from 'react';

function App() {

  const [itemsDetails, setItemDetails] = useState([])
  const [itemsWordlist, setItemWordlist] = useState([])
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(true)

  const search = async (e) => {
    if (e.key === "Enter"){
      const resultDetails = await axios(`https://kanjiapi.dev/v1/kanji/${query}`)
      const resultWordlist = await axios(`https://kanjiapi.dev/v1/words/${query}`)

      console.log(resultDetails.data)
      setItemDetails(resultDetails.data)
      setItemWordlist(resultWordlist.data)
      setLoading(false)
    }

  }

  return (
    <div className="App">

      <AppBarKanji />

      <main>

        <Header />
        <Search search={search} getQuery={(q) => setQuery(q)}/>
        <Content isLoading={loading} itemDetails={itemsDetails} itemWordlist={itemsWordlist} />

      </main>
      
    </div>
  );
}

export default App;
