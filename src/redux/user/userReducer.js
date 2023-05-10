import * as types from './userTypes'

const initialState = {
    loading: false,
    users: [],
    error: ''
}

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.FETCH_USERS_REQUEST: return {
            ...state,
            loading: true
        }

        case types.FETCH_USERS_SUCCESS: return {
            ...state,
            loading: false,
            users: action.payload,
            error: ''
        }

        case types.FETCH_USERS_FAILURE: return {
            ...state,
            loading: false,
            users: [],
            error: action.payload
        }

        default: return state
    }
}

export default userReducer
