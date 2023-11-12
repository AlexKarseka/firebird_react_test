import { type FC, type ReactElement } from "react";

import classes from "./Modal.module.scss";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    modalData: any;
}

export const Modal: FC<ModalProps> = ({ isOpen, onClose, modalData }): ReactElement => {
    return (
        <div className={`${classes.modal} ${isOpen ? classes.modalOpen : ''}`} onClick={onClose}>
            <div onClick={(event) => event.stopPropagation()}>
                <div className={classes.wrapper}>
                    <div className={classes.close} onClick={onClose}>Close</div>
                    <div className={classes.title}>This is your plan</div>
                    <div className={classes.data}>
                        <div className={classes.left}>Duration:</div>
                        <div className={classes.right}>{modalData.name}</div>
                    </div>
                    <div className={classes.data}>
                        <div className={classes.left}>Price:</div>
                        <div className={classes.right}>{modalData.perMonth}</div>
                    </div>
                    <button
                        className={classes.button}
                        type="button"
                        onClick={(): void => {
                            alert(`Payment ${modalData.perMonth}`)
                        }}
                    >
                        Proceed with payment
                    </button>
                </div>
            </div>
        </div>
    );
};
