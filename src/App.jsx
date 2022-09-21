import './App.css';
import Progressbar from './components/progress-bar/progress-bar'

const App = () => {

  const items = [
    { name: 'Sold', color: 'blueviolet', value: 377 },
    { name: 'Got free', color: 'cadetblue', value: 123 },
    { name: 'Burned', color: 'chartreuse', value: 0.5 },
    { name: 'Free float', color: 'grey', value: 223 }]
  const height = 30;
  const width = 15;

  return (
    <div>
      <Progressbar items={items} height={height} width={width} />
    </div>
  );
}

export default App;
