import { type FC, type ReactElement } from "react";

import classes from "./Button.module.scss";

interface ButtonProps {
    buttonClick: () => void;
    text: string;
}

export const Button: FC<ButtonProps> = ({ buttonClick, text }): ReactElement => {
    return (
        <>
            <button className={classes.button} type="button" onClick={buttonClick} >
                {text}
            </button>
        </>
    );
};
