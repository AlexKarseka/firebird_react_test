import { type FC, type ReactElement, useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';

import { getUsers } from "../../services/getUsers";
import { userRemove, resetState, userSuccess, userFailure } from '../../redux/actions';
import { RootState } from '../../redux/store';
import { IUsers } from "../../utils/interfaces";
import { ListRow } from "./components/ListRow/ListRow";
import { Button } from "../../components/Button/Button";

import classes from "./UserList.module.scss";
import {Filter} from "../../components/Filter/Filter";

export const UserList: FC = (): ReactElement => {
    const dispatch = useDispatch();
    const clients: IUsers[] = useSelector((state: RootState) => state.clients.users);
    const loading: boolean = useSelector((state: RootState) => state.clients.loading);
    const error = useSelector((state: RootState) => state.clients.error);

    const [searchText, setSearchText] = useState<string>("");

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

    const updateSearchParams = (text: string): void => {
        setSearchText(text);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className={classes.userList}>
            <div className={classes.header}>
                <h4>List With All Users</h4>
                <Filter updateSearchParams={updateSearchParams} placeholder="Search" />
                <Button buttonClick={() => handleResetState()} text="Reset" />
            </div>
            {clients.map(user => <ListRow
                key={user.id}
                user={user}
                deleteUser={() => handleRemoveUser(user.id)}
                searchText={searchText}
            />)}
        </div>
    );
};
