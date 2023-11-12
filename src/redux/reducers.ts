import { USER_REQUEST, USER_SUCCESS, USER_FAILURE, USER_REMOVE, RESET_STATE } from './actions';
import { IUsers, IUserState } from "../utils/interfaces";

const initialState: IUserState = {
    clients: [],
    loading: false,
    error: null,
};

const userReducer = (state: IUserState = initialState, action: any) => {
    switch (action.type) {
        case USER_REQUEST:
            return { ...state, loading: true, error: null };

        case USER_SUCCESS:
            return { ...state, loading: false, clients: action.payload };

        case USER_FAILURE:
            return { ...state, loading: false, error: action.payload };

        case USER_REMOVE:
            return {
                ...state,
                clients: state.clients.filter((client: IUsers): boolean => client.id !== action.payload),
            };

        case RESET_STATE:
            return { ...initialState };

        default:
            return state;
    }
};

export default userReducer;

