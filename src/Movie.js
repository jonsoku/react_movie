import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component {
    render() {
        return (
            <div>
                <h1>movie component</h1>
                <MoviePoster/>
            </div>

        );
    }
}

class MoviePoster extends Component{
    render(){
        return (
            <img src="https://images.kbench.com/kbench/article/2013_08/k122549p1n1.jpg" alt=""/>
        );
    }
}

export default Movie;
