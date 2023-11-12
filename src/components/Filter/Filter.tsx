import { type FC, type ReactElement, type ChangeEvent, useState, useEffect } from "react";

import classes from "./Filter.module.scss";

interface FilterProps {
    updateSearchParams: Function;
    placeholder: string;
}

export const Filter: FC<FilterProps> = ({ updateSearchParams, placeholder}): ReactElement => {
    const [value, setValue] = useState<string>("");

    useEffect((): void => {
        updateSearchParams(value);
    }, [value, updateSearchParams]);

    return (
        <div className={classes.filter}>
            <input
                className={classes.input}
                type="text"
                onChange={(event: ChangeEvent<HTMLInputElement>): void => {
                    setValue(event.target.value);
                }}
                placeholder={placeholder}
                value={value}
            />
        </div>
    );
};
