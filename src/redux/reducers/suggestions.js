import items from '../../data/items'
<<<<<<< HEAD
import { FIND_SUGGESTIONS } from '../actions/findSuggestions'
=======
>>>>>>> 436c310f2c4de585124af5b1a9045b1f7e624655

const defaultState = items

function reducer (state = defaultState, { type, payload }) {
    switch (type) {
        case FIND_SUGGESTIONS:{

            const regex = new RegExp(`^${payload}`,'i')

            return state.filter( (item,index) => (
                regex.test(item.title)
            ) )
        }
        default:
            return state
    }
}

export default reducer