import {ReactSetState, type Items } from "../types/utils";
import Button from "./Button";

type ItemsType  ={
    setItems :  ReactSetState<Items[]>
    items :  Items[],
}

const ItemList = ({ items, setItems }:ItemsType) => {
  const handleDelete = (id: string) => {
    setItems((prev) => prev.filter((data) => data.id !== id));
  };

  return items.map((data) => (
    <div
      key={data.id}
      className="flex justify-between items-center border border-slate-600 pl-2 mb-2 mr-1 py-2"
    >
      <p className="">{data.title}</p>
      <Button onClick={() => handleDelete(data.id)}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="red" // Change the fill color to red
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-14H11v10h2V6z" />
        </svg>
      </Button>
    </div>
  ));
};

export default ItemList;
