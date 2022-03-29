import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import store from "../redux/Store";
import LogOut from "../component/LogOut";
import Login from "../modal/Login";

export type RootState = ReturnType<typeof store.getState>; //reducer까지 보려면 typescript에서는 여기에서 사용하여야 한다.

const Main = () => {
  const dispatch = useDispatch();

  const [login, setLogin] = useState<boolean>(false); // 모달 useState

  const loginRequest = () => {
    setLogin(!login);
  };
  const localId = useSelector((localId: RootState) => localId.Reducer.id);
  const isLogin = useSelector(
    (isLogin: RootState) => isLogin.changeLoginStatus.isLogin
  );
  const localStorageTokenCheck = localStorage.getItem(localId);

  useEffect(() => {
    if (localStorageTokenCheck) {
      dispatch({ type: "login", payload: { isLogin: true } });
    } else {
      dispatch({ type: "login", payload: { isLogin: false } });
    }
  }); //login 하면 토큰이 있느냐 없느냐로 로그인 유지

  return (
    <div>
      <ul>
        <li>
          <Link to="/restaurant">Restaurant</Link>
        </li>
        <li>
          <Link to="/hotel">Hotel</Link>
        </li>
        <li>
          <Link to="/hospital">Hospital</Link>
        </li>
        <li>
          <Link to="/park">Park</Link>
        </li>
        <li>
          <Link to="/info">Info</Link>
        </li>
      </ul>
    </div>
  );
};

export default Main;
