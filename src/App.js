import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';
import Header from './Header';


class App extends Component {

    /*
    Lifecycle Events on React!

    #Render
    1. componentWillMount
    2. render
    3. componentDidMount

    예를들어 movie앱을 만들면,
    1. willmount => api에 작업을 요청
    2. render


    #Update
    1. componentWillReceiveProps
    2. shouldComponentUpdate
    : old props new props 를 살펴본 다음에, 이전과 새로운 props가 다르면,
    리액트는 '업데이트 = true'라고 생각
    3. componentWillUpdate
    : 앱에 로딩중 spinner를 붙히면 , 이탈유저 감소효과 상승
    4. render
    5. componentDidUpdate
    : hide spinner!
    */

    state = {

    }
    // 네번째 실행
    componentDidMount(){
        this._getMovies();
    }

    // 다섯째 실행
    _renderMovies = () => {
        const movies = this.state.movies.map(movie => {
            console.log(movie)
            return <Movie title={movie.title} poster={movie.large_cover_image} key={movie.id}/>
        })
        return movies;
    }
    // 세번째 실행
    _getMovies = async () => {
        const movies = await this._callApi()
        this.setState({
            movies
        })
    }


    // 두번째 실행
    _callApi = () => {
        return fetch('https://yts.am/api/v2/list_movies.json?sort_by=like_count')
            .then(jonsoku => jonsoku.json())
            .then(json => json.data.movies)
            .catch(err => console.log(err))
    }

    /* 처음엔 텅빈 state이기때문에 loading이 뜨지만, 5초후엔  setState로 채워지니 this._renderMovies()함수가 실행된다.   */

    // 첫번째 실행
    render() {
    return (
      <div className="App">
        <Header/>

          {this.state.movies ? this._renderMovies() : '❤ please hold on! loading...'}


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
