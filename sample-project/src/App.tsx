import { Route, Routes } from "react-router-dom"
import VideoPage from "./components/VideoPage"
import HomeLayout from "./layout/HomeLayout"
import HomePage from "./components/HomePage"
import LoginPage from "./components/LoginPage"


const App = () => {
  return (
    <Routes>
      <Route path ="/" element={<HomeLayout><HomePage/></HomeLayout>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/video" element={<VideoPage/>}/>
    </Routes>
  )
}

export default App
