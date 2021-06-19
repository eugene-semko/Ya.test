import React, { FC } from "react";
import "./style.css";
import { SearchInput } from "../../components/ui/SearchInput";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../store/searchSlice";
import { StateType } from "../../store";
import { BookSnippet } from "../../components/ui/BookSnippet";
import { Button } from "../../components/ui/Button";
import classNames from "classnames";

type propsType = {};
export type mainFormType = {
  search: string;
};
export const Main: FC<propsType> = (props) => {
  const { control, handleSubmit } = useForm<mainFormType>();
  const dispatch = useDispatch();
  const status = useSelector((state: StateType) => state.searchSlice.status);
  const data = useSelector((state: StateType) => state.searchSlice.currentData);
  const onSubmit = (data: { search: string }) => {
    dispatch(getData(data.search));
  };
  return (
    <div className="Main">
      <div className="Main__wrapper">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={classNames({
            Main__form: true,
            "Main__form-center":
              ((data.docs == null || data.docs.length == 0) &&
                status != "loading") ||
              (status == "loading" && data.docs == null),
          })}
        >
          <SearchInput name={"search"} control={control} />
          <Button variant={"primary-search"}>Найти</Button>
        </form>
        <div className="Main__search-result">
          {status == "loading" ? (
            <>
              <div className="Main__loading-title">Загрузка</div>
              <div className="BookSnippet BookSnippet--animated" />
              <div className="BookSnippet BookSnippet--animated" />
              <div className="BookSnippet BookSnippet--animated" />
              <div className="BookSnippet BookSnippet--animated" />
            </>
          ) : status == "success" ? (
            data.docs.map((item: any, index: number) => {
              return <BookSnippet key={item.key} data={item} />;
            })
          ) : (
            ""
          )}
        </div>

        <div className="Main__search-result__bottom"></div>
      </div>
    </div>
  );
};
