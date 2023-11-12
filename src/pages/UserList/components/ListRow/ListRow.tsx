import { type FC, type ReactElement, useState } from "react";

import { IUsers } from "../../../../utils/interfaces";
import { Modal } from "../../../../components/Modal/Modal";
import { Button } from "../../../../components/Button/Button";

import classes from "./ListRow.module.scss";

interface ListRowProps {
    user: IUsers;
    deleteUser: () => void;
    searchText: string
}

export const ListRow: FC<ListRowProps> = ({ deleteUser, searchText, user:
    {
        username,
        name,
        email,
        company,
        address
    }}): ReactElement => {
    const [modalOpen, setModalOpen] = useState<boolean>(false);

    return (
        <div className={classes.userRow} onClick={() => setModalOpen(true)}>
            <div className={classes.container}>
                <div className={classes.header}>
                    <div className={classes.headerText}>Full Name</div>
                    <div className={classes.headerText}>User Name</div>
                    <div className={classes.headerText}>Email</div>
                </div>
                <div className={classes.info}>
                    <div className={classes.infoText}>{searchText === name ? <span>{name}</span> : name}</div>
                    <div className={classes.infoText}>{searchText === username ? <span>{username}</span> : username}</div>
                    <div className={classes.infoText}>{searchText === email ? <span>{email}</span> : email}</div>
                </div>
            </div>
            <Button buttonClick={deleteUser} text="Delete user" />
            <Modal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                company={company}
                address={address}
            />
        </div>
    );
};
