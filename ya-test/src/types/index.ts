export type currentResponseDataType = {
  docs: docsType;
};
export type docsType =
  | {
      author_name?: [];
      isbn?: [];
      publisher?: [];
      publish_date?: [];
      cover_edition_key: number;
    }
  | null
  | any;
