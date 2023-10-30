import reactLogo from "../assets/react.svg"
const ImageHeader = () => {
  return (
    <div className="flex items-center mb-8">
      <img className="w-28 h-28 object-contain " src={reactLogo} alt="react Logo" />
      <span className="mx-5">+</span>
      <img className="w-28 h-28 object-contain" src="https://upload.wikimedia.org/wikipedia/commons/f/f5/Typescript.svg" alt="type Script" />
    </div>
  )
}

export default ImageHeader
