import React, { FC, useEffect, useState } from "react";
import { Control, Controller, FieldName } from "react-hook-form";
import "./style.css";
import { mainFormType } from "../../../pages/Main";
import { useDispatch } from "react-redux";
import { getData } from "../../../store/searchSlice";

type propsType = {
  name: FieldName<mainFormType>;
  control: Control<mainFormType>;
  onSubmit?: (search: string) => void;
};
export const SearchInput: FC<propsType> = (props) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  useEffect(() => {
    const timeoutSearch = setTimeout(() => dispatch(getData(value)), 1000);
    return () => clearTimeout(timeoutSearch);
  }, [value]);

  return (
    <div className="SearchInput">
      <Controller
        control={props.control}
        name={props.name}
        render={({ field }) => (
          <input
            {...field}
            value={value}
            placeholder="Введите название книги"
            onChange={(e) => {
              field.onChange(e);
              setValue(e.target.value);
            }}
          />
        )}
      />
    </div>
  );
};
