
import './App.css';
import Navbar from './navbar';
import Hero from './hero';
import Card from './card';
import data from './data';

function App() {

  const cards = data.map(items => {
    return <Card
              key = {items.id}
              {...items}
              // items= {items} (add .items in cardjs)
            />
  })

  return (
    
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">
        {cards}
      </section>
    </div>
    
  );
}

export default App;
