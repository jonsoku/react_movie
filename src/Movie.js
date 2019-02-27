import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

class Movie extends Component {

    static propTypes = {
        title:PropTypes.string.isRequired,
        poster:PropTypes.string.isRequired,
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <h1>{this.props.title}</h1>
                <MoviePoster poster={this.props.poster}/>
            </div>

        );
    }
}

class MoviePoster extends Component{

    /*
    * poster의 type은 string 이고, 필수요건이다.
    * 부모컴포넌트에게서 받는 정보를 체크하고있다.
    * 필수요건이라고 지정해서 만약 데이터가 없을 경우 메시지를 받을 수 있다.(콘솔)
    * */
    static propTypes = {
        poster:PropTypes.string.isRequired,
    }

    render(){
        return (
            <img src={this.props.poster} alt=""/>
        );
    }
}

export default Movie;
