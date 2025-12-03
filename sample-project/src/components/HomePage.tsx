
// Props Spreading 
import SampleData from "./SampleData"
const HomePage = () => {
  const user = {
     name :"Thirumurugan",
     email:"thiru@gmail.com"
  }
  return (
    <div>

    {/* Comment Line*/}
    {/*  <SampleData name="ThiruMurugan" email="thiru@gmail.com"/>*/}

    <SampleData {...user}/>
      
    </div>
  )
}

export default HomePage
