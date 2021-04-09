import './App.css';
import Header from './components/ui/Header';
import Content from './components/ui/Content';
import AppBarKanji from './components/ui/AppBarKanji';
import Search from './components/ui/Search';

function App() {
  return (
    <div className="App">

      <AppBarKanji />

      <main>

        <Header />
        <Search />
        <Content />

      </main>
      
    </div>
  );
}

export default App;
