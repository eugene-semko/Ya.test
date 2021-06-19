import React, { FC, useState } from "react";
import "./style.css";
import { ReactComponent as PlusIcon } from "../../../assets/ui/Plus.svg";
import { BookModal } from "../BookModal";

type propsType = {
  data: any;
};
export const BookSnippet: FC<propsType> = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <div className="BookSnippet" onClick={() => setIsVisible(true)}>
        <img
          src={`http://covers.openlibrary.org/b/olid/${props.data.cover_edition_key}-M.jpg`}
        />
        <div className="BookSnippet__description">
          <p className="BookSnippet__description-author">
            {props.data.author_name?.map((item: string, index: number) =>
              props.data.author_name.length != index + 1 ? item + ", " : item
            )}
          </p>
          <p className="BookSnippet__description-title">{props.data.title}</p>
        </div>
        <div className="BookSnippet__plus">{React.createElement(PlusIcon)}</div>
      </div>
      {isVisible && <BookModal data={props.data} setIsVisible={setIsVisible} />}
    </>
  );
};
