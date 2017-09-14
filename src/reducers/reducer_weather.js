import { FETCH_WEATHER } from '../actions/index'

export default function(state = [], action){
  switch(action.type){
    case FETCH_WEATHER:
    // creating a new array with the cities
      return state.concat([action.payload.data])
      // return [action.payload.data, ...state] - alternative way to create new array. never use .push
  }
  console.log('Action:', action);
  return state;
}
