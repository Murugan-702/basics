

// Props Spreading and Prop drilling
interface Props {
     name : string;
     email : string;
}

const SampleData = ({name , email}:Props) => {
  return (
    <div className="navbar">
          <div className="link">{name}</div>
          <div className="link">{email}</div>
    </div>
  )
}

export default SampleData