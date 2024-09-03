import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./Users";
import CreateUser from "./CreateUser";
import UpdateUser from "./UpdateUser";
import UserHistory from "./UserHistoty";
// import {Provider, useDispatch} from "react-redux"
// import { store } from "./store";
// import { useEffect } from "react";
// import { getUser } from "./slices/userSlice";



function App() {
  // const dispatch = useDispatch()
//  useEffect(()=>{
//   const fetchData = async()=>{
//     try{
//       const response = await axios.get("http://localhost:3001");
//       dispatch(getUser(response.data));
//     } catch(err){
//       console.log(err)
//     }
//   }
// fetchData();
//  },[])



  return (

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Users />}></Route>
          <Route path="/create" element={<CreateUser />}></Route>
          <Route path="/update/:id" element={<UpdateUser />}></Route>
          <Route path="/history/:id" element={<UserHistory />}></Route>
        </Routes>
      </BrowserRouter>
  
    
  );
}

export default App;
