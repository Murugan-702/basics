import type React from "react"
import Navbar from "../components/Navbar"


// Props Spreading
const HomeLayout = ({children}:{children:React.ReactNode}) => {
    const user = {
        name :"demo",
        email:"email"
    }
  return (
    <div>
        <Navbar {...user}/>
      {children}
    </div>
  )
}

export default HomeLayout
