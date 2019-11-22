import items from '../../data/items'
import { FIND_SUGGESTIONS } from '../actions/findSuggestions'

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