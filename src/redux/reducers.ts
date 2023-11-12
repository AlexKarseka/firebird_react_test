import { USER_SUCCESS, USER_FAILURE, USER_REMOVE, RESET_STATE } from "./actions";
import { IUsers, IUserState } from "../utils/interfaces";

const initialState: IUserState = {
    users: [],
    loading: false,
    error: null,
};

const userReducer = (state: IUserState = initialState, action: any) => {
    switch (action.type) {
        case USER_SUCCESS:
            return { ...state, loading: false, users: action.payload };

        case USER_FAILURE:
            return { ...state, loading: false, error: action.payload };

        case USER_REMOVE:
            return {
                ...state,
                users: state.users.filter((user: IUsers): boolean => user.id !== action.payload),
            };

        case RESET_STATE:
            return { ...initialState };

        default:
            return state;
    }
};

export default userReducer;

