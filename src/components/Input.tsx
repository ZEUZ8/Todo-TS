import { ReactSetState } from "../types/utils";

type Input={
    type:"text" | "checkbox" | "color"
    inputValue:string,
    setInputValue: ReactSetState<string>
}

const Input = ({type,inputValue,setInputValue}:Input) => {
  return (
    <input
      className="w-full p-2 rounded-sm mb-2"
      type={type}
      value={inputValue}
      onChange={(event) => setInputValue(event.target.value)}
    />
  );
};

export default Input;
