import {
  ADD_LINK_SUCCESS,
  VOTE_SUCCESS,
  ORDER_FUNC_SUCCESS,
  DELETE_ITEM_SUCCESS,
  RESET
} from '../constants';
import LocalStorage from '../../../utils/localStorage';

const initialState = {
  data: LocalStorage.get('linkData')|| [],
  isLoading: false,
  error: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_LINK_SUCCESS:{
      const linkData = LocalStorage.get('linkData')

       linkData ? LocalStorage.set('linkData', action.payload.concat(linkData)) : LocalStorage.set('linkData', action.payload);

      return {
        data: action.payload.concat(state.data), isLoading: false, error: null
      };
    }

    case VOTE_SUCCESS:{
      const newData= state.data.map(item => {
        if (item.id === action.payload.data.id) {
          if(action.payload.type==="up"){
            item.votes=++item.votes
          }else if (item.votes > 0){
            item.votes=--item.votes
          }
        }
        return item;
      });
      LocalStorage.set('linkData',newData)

      return {
        data: newData, isLoading: false, error: null
      };
    }
    
      case ORDER_FUNC_SUCCESS:{

        const newData = state.data.sort((a, b) => {
          if (action.payload.type === 'mostVoted') {
            return b.votes - a.votes;
          } else if (action.payload.type === 'lessVoted') {
            return a.votes - b.votes;
          }else if(action.payload.type === 'lastAdded') {
            return b.id - a.id
          }
          return state.data;
        })
        return {
          data: newData
        };
      }

      case DELETE_ITEM_SUCCESS:{
        const newData = state.data.filter(function(item) {
          return item.id !== action.payload.id
        })
        return {
          data :newData, isLoading: false, error: null
        };
      }

      case RESET : {
        return {...initialState}
      }

      default:
        return state;
  }
}