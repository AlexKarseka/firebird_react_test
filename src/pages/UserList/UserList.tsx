import { type FC, type ReactElement, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';

import { getUsers } from "../../services/getUsers";
import { userRemove, resetState, userSuccess, userFailure } from '../../redux/actions';
import { RootState } from '../../redux/store';
import { IUsers } from "../../utils/interfaces";
import { ListRow } from "./components/ListRow/ListRow";

import classes from "./UserList.module.scss";

export const UserList: FC = (): ReactElement => {
    const dispatch = useDispatch();
    const clients: IUsers[] = useSelector((state: RootState) => state.clients.users);
    const loading: boolean = useSelector((state: RootState) => state.clients.loading);
    const error = useSelector((state: RootState) => state.clients.error);

    useEffect((): void => {
        getUsers()
            .then((users) => dispatch(userSuccess(users)))
            .catch((error) => dispatch(userFailure(error.data.message)))
    }, [dispatch]);

    const handleRemoveUser = (userId: number): void => {
        dispatch(userRemove(userId));
    };

    const handleResetState = (): void => {
        dispatch(resetState());
        getUsers()
            .then((users) => dispatch(userSuccess(users)))
            .catch((error) => dispatch(userFailure(error.data.message)))
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className={classes.userList}>
            <h4>List With All Users</h4>
            {clients.map(user => <ListRow key={user.id} user={user} deleteUser={() => handleRemoveUser(user.id)} />)}
        </div>
    );
};
