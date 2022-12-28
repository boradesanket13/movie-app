import React from 'react';
import './App.css';
import unirest from 'unirest';
import Movie from "./Movie.jsx";

class App extends React.Component {

  
 sendRequest = (title) => {
   const req = unirest("GET", "https://movie-database-imdb-alternative.p.rapidapi.com/");

   req.query({
     "page": "1",
     "r": "json",
     "s": title
   });

   req.headers({
     "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
     "x-rapidapi-key": "b253996e57msh6f64d27684a7fefp107ab2jsn953806e4c424"
   });


   req.end((res) => {
     if (res.error) throw new Error(res.error);

     console.log(res.body);
   });
 }

 render() {
  {
   this.state.movies.map((movie) => {
     return <Movie {...movie}/>
   })
 }
   return (
     <div className="App">
       <header className="App-header">
       {
        this.state.movies.map((movie) => {
        return <Movie {...movie}/>
   })
 }
        </header>
     </div>
   );
 }
}

export default App;