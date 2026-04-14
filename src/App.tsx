import './App.css';
import { Card } from './components/Card';

function App() {
  return (
    <>
      <div id="root">
        <div className="header">
          <h2>React - Övning 5</h2>
          <p>x</p>
        </div>
        <div className="assignment">
          <Card title="User">
            <p>Name: John Doe</p>
            <p>Email: john.doe@example.com</p>
          </Card>
          <Card title="Favorite Game">
            <p>Name: Pokémon Colosseum</p>
            <p>Publisher: Nintendo</p>
          </Card>
          <Card title="Favorite Film">
            <p>Inception</p>
            <p>Producer: Christopher Nolan</p>
          </Card>
        </div>
        <div>
          <small>Alexander Tjernström, IT-Högskolan JSU25</small>
        </div>
      </div>
    </>
  );
}

export default App;
