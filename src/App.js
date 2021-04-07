import './App.css';
import Header from './components/ui/Header';
import Content from './components/ui/Content';
import AppBarKanji from './components/ui/AppBarKanji';

function App() {
  return (
    <div className="App">

      <AppBarKanji />

      <main>

        <Header />
        <Content />
        
      </main>
      
    </div>
  );
}

export default App;
