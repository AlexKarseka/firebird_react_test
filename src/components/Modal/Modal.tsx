import { type FC, type ReactElement } from "react";

import { IUserAddress, IUserCompany } from "../../utils/interfaces";

import classes from "./Modal.module.scss";
import {Button} from "../Button/Button";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    address: IUserAddress;
    company: IUserCompany;
}

export const Modal: FC<ModalProps> = ({ isOpen, onClose, address, company }): ReactElement => {
    return (
        <div className={`${classes.modal} ${isOpen ? classes.modalOpen : ''}`} onClick={onClose}>
            <div onClick={(event) => event.stopPropagation()}>
                <div className={classes.wrapper}>
                    <div className={classes.header}>
                        <Button buttonClick={onClose} text='Close' />
                    </div>
                    <h4>User Information</h4>
                    <div className={classes.infoContainer}>
                        <div>
                            <div className={classes.data}>
                                <div className={classes.left}>Street:</div>
                                <div className={classes.right}>{address.street}</div>
                            </div>
                            <div className={classes.data}>
                                <div className={classes.left}>Suite:</div>
                                <div className={classes.right}>{address.suite}</div>
                            </div>
                            <div className={classes.data}>
                                <div className={classes.left}>City:</div>
                                <div className={classes.right}>{address.city}</div>
                            </div>
                            <div className={classes.data}>
                                <div className={classes.left}>Zipcode:</div>
                                <div className={classes.right}>{address.zipcode}</div>
                            </div>
                            <div className={classes.data}>
                                <div className={classes.left}>Geo Data:</div>
                                <div className={classes.right}>{`${address.geo.lat} ${address.geo.lng}`}</div>
                            </div>
                        </div>
                        <div>
                            <div className={classes.data}>
                                <div className={classes.leftCompany}>Company Name:</div>
                                <div className={classes.right}>{company.name}</div>
                            </div>
                            <div className={classes.data}>
                                <div className={classes.leftCompany}>Catch Phrase:</div>
                                <div className={classes.right}>{company.catchPhrase}</div>
                            </div>
                            <div className={classes.data}>
                                <div className={classes.leftCompany}>Business Direction:</div>
                                <div className={classes.right}>{company.bs}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
