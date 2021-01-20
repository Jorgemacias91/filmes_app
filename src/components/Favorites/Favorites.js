import React, { Component } from "react";
import { connect } from "react-redux";
import { removeMovieFavorite } from "../../actions";
import { NavLink } from 'react-router-dom';
import style from './Favorites.module.css';

export class ConnectedList extends Component {

  render() { 
    return (
      <div>
        <h2 className={style.text_wc}>Películas Favoritas</h2>
        <ul>
        <div className={style.container}>
          {this.props.movie && this.props.movie.map((eve) =>(
            <div>

            <div key={eve.imdbID}>
              
                <div className={style.card}>
                    <NavLink to={`/movie/${eve.id}`}>
                    <img src={eve.img} className={style.imagen}/>
                    </NavLink>
                    <h2>
                    <NavLink to={`/movie/${eve.id}`} className={style.text_white}>{eve.titulo}</NavLink>
                    </h2>
                    <button onClick={()=> this.props.remove({id:eve.id})}>Eliminar</button>
                </div>  
             </div>
          </div>
      
          ))}
            </div>
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state){
return{
  movie: state.movies
}
}

function mapDispatchToProps(dispatch){
return{
  remove: mov => dispatch(removeMovieFavorite(mov))
}
}

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedList);
