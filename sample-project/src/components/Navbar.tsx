import { Avatar } from "@radix-ui/themes";
import CustomButton from "./CustomButton";


// Props Interface and Props Drilling
interface Props {
     name : string;
     email : string;
}

const Navbar = ({name , email}:Props) => {
  return (
    <div className="navbar">
          <Avatar className="avatar" variant="solid" fallback={name.toUpperCase()[0]}/>
          <CustomButton text="start here"/>
    </div>
  )
}

export default Navbar;