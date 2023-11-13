import { type FC, type ReactElement } from "react";

import classes from "./Button.module.scss";

interface ButtonProps {
    buttonClick: () => void;
    text: string;
    buttonType: "button" | "reset"
}

export const Button: FC<ButtonProps> = ({ buttonClick, text, buttonType }): ReactElement => {
    return (
        <>
            <button className={buttonType === "reset" ? classes.buttonReset : classes.button } type="button" onClick={buttonClick} >
                {text}
            </button>
        </>
    );
};
