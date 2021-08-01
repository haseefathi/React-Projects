import {useState, useEffect} from 'react'; 

// react components
import Loading from './Loading'
import Error from './Error'
import Tours from './Tours'

// styling
import './App.css';

const url = 'https://course-api.com/react-tours-project';

function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [tours, setTours] = useState([]);

  const deleteTour = (id) => {
    const newTours = tours.filter((tour) => tour.id!== id);
    setTours(newTours);
  }

  const fetchTours = async() => {
    setIsLoading(true);
    try {
      const response = await fetch(url);

      if(response.status >= 200 && response.status < 300) {
        const tours = await response.json();
        setIsLoading(false);
        setTours(tours);
        console.log(tours);
      } else { // 404
        console.log(response.statusText);
        setIsLoading(false);
        setIsError(true);
      }

      
    } catch (error) {
      // network error
      console.log(error.message);
      setIsLoading(false);
      setIsError(true);
    }
    
  
  }

  useEffect(() => {
    fetchTours();
  }, []);
  
  if (isLoading){
    return (
      <Loading/> 
    );
  }

  if (isError){
    return (
      <Error/> 
    );
  }

  if(tours.length === 0){
    return (
      <main>
        <h1>No Tours Remaining</h1>
        <button className = 'refresh-button' onClick = {() => fetchTours()}>&#8635; Refresh</button>
      </main>
    );

  }

  return (
    <main>
      <Tours tours = {tours} deleteTour = {deleteTour}/>
    </main>
  );
}

export default App;
