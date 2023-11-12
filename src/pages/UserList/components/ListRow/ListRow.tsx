import { type FC, type ReactElement, useState } from "react";

import { IUsers } from "../../../../utils/interfaces";
import { Modal } from "../../../../components/Modal/Modal";
import { Button } from "../../../../components/Button/Button";

import classes from "./ListRow.module.scss";

interface ListRowProps {
    user: IUsers;
    deleteUser: () => void;
}

export const ListRow: FC<ListRowProps> = ({ deleteUser, user:
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
                    <div className={classes.infoText}>{name}</div>
                    <div className={classes.infoText}>{username}</div>
                    <div className={classes.infoText}>{email}</div>
                </div>
            </div>
            <Button
                openModal={deleteUser}
                disabled={false}
                text="Delete user"
            />
            <Modal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                company={company}
                address={address}
            />
        </div>
    );
};
