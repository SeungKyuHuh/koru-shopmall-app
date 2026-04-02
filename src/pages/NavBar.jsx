import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faMagnifyingGlass  } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';


const NavBar = ({authenticate, setAuthenticate}) => {
    const menuList = ['여성', 'Divided', '남성', '신생아/유아', 'H&M Home', 'Sale', '지속가능성'];
    const navigate = useNavigate();
    const gotoLogin = () => {
        if(authenticate === true){
            setAuthenticate(false);
        } else {
            navigate('/login');
        }
    }
    const search = (event) => {
        if(event.key === "Enter"){
            let keyword = event.target.value;
            navigate(`/?q=${keyword}`);
        }
    }

    const gotoHome = () => {
        navigate('/');
    }

  return (
    <div>
        <div>
            <div className="login-botton" onClick={gotoLogin}>
                <FontAwesomeIcon icon={faUser} />
                <div>{authenticate === true ? '로그아웃' : '로그인'}</div>
            </div>
        </div>
        <div className="nav-section">
            <img onClick={gotoHome} width={100} src="https://assets.turbologo.com/blog/en/2021/07/07050018/hm-color-logo.png"></img>
        </div>
        <div className="menu-area">
            <ul className="menu-list">
                {menuList.map(menu => 
                <li>{menu}</li>
                )}
            </ul>
            <div className="search-box">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <input onKeyPress={(event)=>search(event)} type="text" placeholder='제품검색'></input>
            </div>
        </div>
    </div>
  )
}

export default NavBar