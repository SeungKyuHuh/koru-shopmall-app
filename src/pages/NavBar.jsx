import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faMagnifyingGlass  } from '@fortawesome/free-solid-svg-icons'


const NavBar = () => {
    const menuList = ['여성', 'Divided', '남성', '신생아/유아', 'H&M Home', 'Sale', '지속가능성'];
  return (
    <div>
        <div>
            <div className="login-botton">
                <FontAwesomeIcon icon={faUser} />
                <div>로그인</div>
            </div>
        </div>
        <div className="nav-section">
            <img width={100} src="https://assets.turbologo.com/blog/en/2021/07/07050018/hm-color-logo.png"></img>
        </div>
        <div className="menu-area">
            <ul className="menu-list">
                {menuList.map(menu => 
                <li>{menu}</li>
                )}
            </ul>
            <div className="search-box">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <input type="text" placeholder='제품검색'></input>
            </div>
        </div>
    </div>
  )
}

export default NavBar