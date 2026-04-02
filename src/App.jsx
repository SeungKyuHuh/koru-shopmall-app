import { useEffect, useState } from 'react'
import './App.css'
import {Routes, Route} from "react-router-dom";
import Login from "./pages/Login.jsx"
import ProductAll from "./pages/ProductAll.jsx"
import ProductDetail from "./pages/ProductDetail.jsx"
import PrivateRoute from "./route/PrivateRoute.jsx"
import Navbar from "./pages/NavBar.jsx"
import 'bootstrap/dist/css/bootstrap.min.css';

//1. 전체상품페이지, 로그인, 상품상세페이지 필요(O)
//1-1 네비게이션바 생성(O)
//2. 전체 상품페이지에서는 전체 상품을 볼 수 있다(O)
//3. 로그인 버튼을 누르면 로그인 페이지가 나온다(O)
//4. 상품디테일을 눌렀으나, 로그인이 안 되어 있을경우에 로그인 페이지 나온다.(O)
//5. 로그인이 되어 있을 경우에만 상품 디테일 페이지를 볼 수 있다.(O)
//6. 로그아웃 버튼을 클릭하면 로그아웃이 된다(O)
//7. 로그아웃이 되면 상품 디테일 페이지를 볼수 없고, 로그인 페이지가 보인다.(O)
//8. 상품을 검색할 수 있는 기능이 있다.(O)
function App() {
  const [authenticate, setAuthenticate] = useState(false);

  useEffect(() => {
    console.log("authenticate:", authenticate);
  }, [authenticate])

  return (
    <div>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate}/>
      <Routes>
        <Route path="/" element={<ProductAll/>}></Route>
        <Route path="/login" element={<Login setAuthenticate={setAuthenticate}/>}></Route>
        <Route path="product/:id" element={<PrivateRoute authenticate={authenticate}/>}></Route>
      </Routes>
    </div>
  )
}

export default App
