import React, { Dispatch, FC, SetStateAction } from "react";
import "./style.css";

type propsType = {
  data: any;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
};
export const BookModal: FC<propsType> = (props) => {
  return (
    <div className="BookModal">
      <div className="BookModal__wrapper">
        <img
          src={`http://covers.openlibrary.org/b/olid/${props.data.cover_edition_key}-L.jpg`}
        />
        <div className="BookModal__description">
          <div className="BookModal__bio">
            <p className="BookModal__bio-author">
              {props.data.author_name?.map((item: string, index: number) =>
                props.data.author_name.length != index + 1 ? item + ", " : item
              )}
            </p>
            <p className="BookModal__bio-title">{props.data.title}</p>
          </div>
          <div className="BookModal__description-info">
            <div className="BookModal__description-info-left">
              <p>ISBN</p>
              <p>Издатель</p>
              <p>Дата публикации</p>
            </div>
            <div className="BookModal__description-info-right">
              <p>{props.data.isbn?.[0]}</p>
              <p>{props.data.publisher?.[0]}</p>
              <p>{props.data.publish_date?.[0]}</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="BookModal__background"
        onClick={() => props.setIsVisible(false)}
      />
    </div>
  );
};
