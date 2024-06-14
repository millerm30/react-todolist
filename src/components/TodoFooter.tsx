import { BsGithub, BsLinkedin } from "react-icons/bs";

const TodoFooter = () => {
  return (
    <div>
      <p className="text-center my-4">Designed By Michael Miller</p>
      <span className="flex flex-row justify-center pb-6">
        <a href="http://linkedin.com/in/michael-miller-0aa2bb229" target="_blank" rel="noopener noreferrer"><BsLinkedin className="text-4xl mx-4 cursor-pointer text-[#0E76A8] hover:scale-150 transition duration-700" /></a>
        <a href="http://www.github.com/millerm30" target="_blank" rel="noopener noreferrer"><BsGithub className="text-4xl mx-4 cursor-pointer hover:scale-150 transition duration-700" /></a>
      </span>
    </div>
  );
}

export default TodoFooter