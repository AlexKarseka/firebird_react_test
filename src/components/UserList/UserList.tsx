import { type FC, type ReactElement, useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';

import { getUsers } from "../../services/getUsers";
import { userRemove, resetState, userSuccess, userFailure } from '../../redux/actions';
import { RootState } from '../../redux/store';
import { Modal } from "../Modal/Modal";
import { Button } from "../Button/Button";

import classes from "./UserList.module.scss";

export const UserList: FC = (): ReactElement => {
    const dispatch = useDispatch();
    const clients = useSelector((state: RootState) => state.clients.clients);
    const loading: boolean = useSelector((state: RootState) => state.clients.loading);
    const error = useSelector((state: RootState) => state.clients.error);

    const [modalOpen, setModalOpen] = useState<boolean>(false);

    useEffect((): void => {
        getUsers()
            .then((users) => dispatch(userSuccess(users)))
            .catch((error) => dispatch(userFailure(error.data.message)))
    }, [dispatch]);

    const handleRemoveClient = (clientId: number): void => {
        dispatch(userRemove(clientId));
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
            <Modal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                modalData={{id: 1, name: "Vasia", perMonth: "Ka"}}
            />
            Тут будет список
            <Button
                openModal={() => setModalOpen(true)}
                disabled={false}
                text="тест"
            />
        </div>
    );
};
