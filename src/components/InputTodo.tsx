import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { InputTodoProps, InputTodoField } from "../../types";

const InputTodo: React.FC<InputTodoProps> = (props) => {
  const [inputText, setInputText] = useState<InputTodoField>({
    title: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputText.title.trim()) {
      props.addTodoProps(inputText.title);
      setInputText({
        title: "",
      });
    } else {
      alert("Please write item");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-around my-8">
      <input
        type="text"
        className="w-full mx-4 border-2 border-solid border-[#ccc] bg-[#f8f8f8] rounded-lg p-4 outline-none text-lg placeholder:text-[#4b4b4b]"
        placeholder="Add todo..."
        value={inputText.title}
        name="title"
        onChange={onChange}
      />
      <button className="mr-4 border-none bg-white">
        <FaCheck
          style={{ color: "#4857b7", fontSize: "30px", marginTop: "2px" }}
        />
      </button>
    </form>
  );
};

export default InputTodo;
