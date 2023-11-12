import { type FC, type ReactElement } from "react";

import classes from "./Button.module.scss";

interface ButtonProps {
    openModal: () => void;
    disabled: boolean;
    text: string;
}

export const Button: FC<ButtonProps> = ({ openModal, disabled, text }): ReactElement => {
    return (
        <>
            <button className={classes.button} type="button" onClick={openModal} disabled={disabled}>
                {text}
            </button>
        </>
    );
};
