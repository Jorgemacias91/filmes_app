import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';
import style from './Movie.module.css'
import {NavLink} from 'react-router-dom'

class Movie extends React.Component {

    componentDidMount(){
        const varId = this.props.match.params.id;
        this.props.getMovie(varId)

    } 



    render() {
        return (
            <div className={style.wc}>
                
                <div className={style.container}>
                <div className={style.card_container}>
                  <div className={style.header}>
                    <NavLink to={`/movie/${this.props.movie.imdbID}`}>
                    <img src={this.props.movie.Poster} className={style.imagen}/>
                    </NavLink>
                    <h2>
                    <NavLink to={`/movie/${this.props.movie.imdbID}`} className={style.text_white}>{this.props.movie.Title}</NavLink>
                    </h2>
                    <h4 className={style.text_white}>{this.props.movie.Genre}</h4>
                    <h4 className={style.text_white}>{this.props.movie.Rated}</h4>
                  </div>
                  <div className={style.description}>
                      <p className={style.wc}>
                  <strong >Detalle de la pelicula</strong>
                      </p>  
                    <p className={style.text_white}>
                      <strong>Descripción: </strong>
                      {this.props.movie.Plot}
                    </p>
                    <p className={style.text_white}>
                      Actores: {this.props.movie.Actors}
                    </p>
                    <p className={style.text_white}>
                      Director: {this.props.movie.Director}
                    </p>
                    <p className={style.text_white}>
                      Escritor: {this.props.movie.Writer}
                    </p>
                    <p className={style.text_white}>
                      Idioma: {this.props.movie.Language}
                    </p>
                    <p className={style.text_white}>
                      Ciudad: {this.props.movie.Country}
                    </p>
                    <p className={style.text_white}>
                      Fecha de Lanzamiento: {this.props.movie.Released}
                    </p>
                    <p className={style.text_white}>
                      Producción: {this.props.movie.Production}
                    </p>
                    
                  </div>
                </div>
              </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        movie: state.movieDetail
    }
}

function mapDispatchToProps(dispatch){
    return{
        getMovie:id => dispatch(getMovieDetail(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie);