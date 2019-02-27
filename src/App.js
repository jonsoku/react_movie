import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';
import Header from './Header';

const movies=[
    {

        title:"매트릭스",
        poster: "http://ticketimage.interpark.com/Movie/still_image/V16/V1601447p_s01.gif"
    },
    {
        title:"올드보이",
        poster: "http://artinsight.co.kr/n_news/peg/1508/thumb/a4cb4757610239a28cf0cba125b24a69_vpZESkDO68sOb6AbZkW9hFd.jpg"
    },
    {
        title:"secret",
        poster: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c6/Secret-Bunengshuodemimi2.jpg/220px-Secret-Bunengshuodemimi2.jpg",
    },
    {
        title:"스타워즈",
        poster: "https://upload.wikimedia.org/wikipedia/ko/thumb/6/6a/%EC%8A%A4%ED%83%80%EC%9B%8C%EC%A6%88_%EA%B9%A8%EC%96%B4%EB%82%9C_%ED%8F%AC%EC%8A%A4.jpg/250px-%EC%8A%A4%ED%83%80%EC%9B%8C%EC%A6%88_%EA%B9%A8%EC%96%B4%EB%82%9C_%ED%8F%AC%EC%8A%A4.jpg"
    },
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
          {movies.map((movie, index) => {
              return <Movie title={movie.title} poster={movie.poster} key={index}/>
          })}


          {/*{[*/}
              {/*<Movie title={movies[0].title} poster={movies[0].poster} />*/}
              {/*<Movie title={movies[1].title} poster={movies[1].poster} />*/}
              {/*<Movie title={movies[2].title} poster={movies[2].poster} />*/}
              {/*<Movie title={movies[3].title} poster={movies[3].poster} />*/}
          {/*]}*/}


      </div>
    );
  }
}

export default App;
