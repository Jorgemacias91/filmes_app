import React, { Component, createElement } from "react";
import { connect } from "react-redux";
import { NavLink } from 'react-router-dom';
import style from './Buscador.module.css'
import {addMovieFavorite, getMovies} from '../../actions/index'



export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }
  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies(this.state.title)
  }

  render() {
    const { title } = this.state;
    return (
      <div>
        <h2 className={style.text_white}>Buscador</h2>
        <form className={style.form_container} onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label className={style.label} htmlFor="title">Película: </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
          </div> 
          <button type="submit" className={style.boton}>BUSCAR</button>
        </form>
        <ul>
        {this.props.movies && this.props.movies.map((eve, i) => (
          <div>
            <div key={eve.imdbID}>

              <div className={style.container}>

                <div className={style.card}>
                    <NavLink to={`/movie/${eve.imdbID}`}>
                    <img src={eve.Poster} className={style.imagen}/>
                    </NavLink>
                    <h2>
                    <NavLink to={`/movie/${eve.imdbID}`} className={style.text_white}>{eve.Title}</NavLink>
                    </h2>
                    <button onClick={()=> this.props.addMovieFavorite({titulo:eve.Title, img:eve.Poster, Actores:eve.Actors, id:eve.imdbID ,desc:eve.Plot, Rango:eve.Rated, genero:eve.Genre})}>Fav</button>
                  </div>
                 
                  </div>
                </div>
            </div>
    
        ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.moviesLoaded,
    detail: state.MovieDetail
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addMovieFavorite: movie => dispatch(addMovieFavorite(movie)),
    getMovies: title => dispatch(getMovies(title))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Buscador);
