import { type FC, type ReactElement } from "react";

import classes from "./Button.module.scss";

interface ButtonProps {
    openClick: () => void;
    text: string;
}

export const Button: FC<ButtonProps> = ({ openClick, text }): ReactElement => {
    return (
        <>
            <button className={classes.button} type="button" onClick={openClick} >
                {text}
            </button>
        </>
    );
};
