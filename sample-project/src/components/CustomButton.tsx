

const CustomButton = ({text,onClick}:{text:string,onClick:React.MouseEventHandler<HTMLButtonElement> | undefined
}) => {
  return (
    <button onClick={onClick} className="btn-custom">
          {text}
    </button>
  )
}

export default CustomButton