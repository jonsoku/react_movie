import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

// class Movie extends Component {
//
//     static propTypes = {
//         title:PropTypes.string.isRequired,
//         poster:PropTypes.string.isRequired,
//     }
//
//     render() {
//         console.log(this.props)
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <MoviePoster poster={this.props.poster}/>
//             </div>
//
//         );
//     }
// }

// class MoviePoster extends Component{
//
//     /*
//     * poster의 type은 string 이고, 필수요건이다.
//     * 부모컴포넌트에게서 받는 정보를 체크하고있다.
//     * 필수요건이라고 지정해서 만약 데이터가 없을 경우 메시지를 받을 수 있다.(콘솔)
//     * */
//     static propTypes = {
//         poster:PropTypes.string.isRequired,
//     }
//
//     render(){
//         return (
//             <img src={this.props.poster} alt=""/>
//         );
//     }
// }
function Movie({title,poster, genres, synopsis}){
    return (
        <div className="Movie">
            <div className="Movie__Colums">
                <MoviePoster poster={poster} alt={title}/>
            </div>
            <div className="Movie__Colums">
                <h1>{title}</h1>
                <div className="Movie__Genres">
                    {genres.map((genre,index) => <MovieGenre genre={genre} key={index} />)}
                </div>
                <p className="Movie__Synopsis">
                    {synopsis}
                </p>
            </div>
        </div>
    );
}


function MoviePoster({poster, alt}){
    return (
        <img src={poster} alt={alt} title={alt} className="Movie__Poster"/>
    );
}
function MovieGenre({genre}){
    return (
        <span className="Movie__Genres">{genre}</span>
    );
}


Movie.prototype = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres:PropTypes.string.isRequired,
    synopsis:PropTypes.string.isRequired,

}

MoviePoster.propTypes ={
    poster: PropTypes.string.isRequired
}

MovieGenre.propTypes ={
    genre: PropTypes.string.isRequired
}


export default Movie;
