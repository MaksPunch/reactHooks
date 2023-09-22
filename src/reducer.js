export default function(state, action) {
    switch(action.type) {
        case 'add':
            return [
                ...state,
                {
                    id: Date.now(),
                    title: action.payload,
                    completed: false
                }
            ]
        case 'remove':
            return state.filter(el => el.id !== action.payload)
        case 'toggle':
            return state.map((el) => {
                if (el.id === action.payload) {
                  el.completed = !el.completed
                }
                return el
              })
        default:
            return state
    }
}