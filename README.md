#MOVIEリストを作ります！

yarn install global create-react-app

create-react-app project name

yarn start

컴포넌트 만드는것 (ex: Header.js and Header.css)

import React, { Component } from 'react';
import './Header.css';

class Header extends Component{
    render(){
        return(
            <h2>header</h2>
        )
    }
}

export default Header;


#key

리액트는 앨리먼트가 많을 경우(map사용 시) 고유한 키를 줘야한다.
          {movies.map((movie, index) => {
              return <Movie title={movie.title} poster={movie.poster} key={index}/>
          })}
          
          
          
#PropTypes

yarn add prop-types

    import PropTypes from 'prop-types';

    static propTypes = {
        title:PropTypes.string,
        poster:PropTypes.string,
    }``
    
    => 검사하는 것
    
    
#State
