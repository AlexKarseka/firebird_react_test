import { IUsers } from "../utils/interfaces";

export const USER_SUCCESS = 'USER_SUCCESS';
export const USER_FAILURE = 'USER_FAILURE';
export const USER_REMOVE = 'REMOVE_CLIENT';
export const RESET_STATE = 'RESET_STATE';

export const userSuccess = (users: IUsers[]) => ({
    type: USER_SUCCESS,
    payload: users,
});

export const userFailure = (error: string) => ({
    type: USER_FAILURE,
    payload: error,
});

export const userRemove = (userId: number) => ({
    type: USER_REMOVE,
    payload: userId,
});

export const resetState = () => ({
    type: RESET_STATE,
});
