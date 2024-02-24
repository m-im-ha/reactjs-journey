import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// import StarRating from './StarRating';

// function Test(){
//   const [movieRating, setMovieRating] = useState(0);
//   console.log(movieRating)
//   return (
//     <div>
//       <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />
//       <p>This Movie Rated {movieRating} Stars.</p>
//     </div>
//   )
// }


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating maxRating={5} messages={["Terrible","Bad","Okay","Good","Amazing"]} />
    <StarRating size={24} color='green' className="test" defaultRating={3}/>
    <Test/> */}
  </React.StrictMode>
);

