import React, { FC } from "react";
import "./style.css";
import classNames from "classnames";
import { ReactComponent as SearchIcon } from "../../../assets/ui/SearchIcon.svg";

type propsType = {
  variant: "primary-search";
};
export const Button: FC<propsType> = (props) => {
  return (
    <button
      className={classNames({
        Button: true,
        [`Button--${props.variant}`]: props.variant,
      })}
      type="submit"
    >
      {React.createElement(SearchIcon)}
      {props.children}
    </button>
  );
};
