import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "../../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import Nav from './../Nav/Nav';
import ava from '../../utils/imgs/avatar.png';
import './Dashboard.css'
import { useDispatch, useSelector } from 'react-redux';
import { clearUserObj, getTariff, getUserInfo } from "../../features/userSlice";

const Dashboard = () => {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentPlan = useSelector(state => state.userProfile.tariff)
  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };
  useEffect(() => {
    if (loading) return;
    if (!user) navigate("/");
    fetchUserName();
    if (user)  dispatch(getUserInfo(user))
  }, [user, loading]);


  const buttons = [
    {id: 1, tariff:'Netflix Standart' ,quality: '1080p'},
    {id: 2, tariff:'Netflix Basic', quality: '480p'},
    {id: 3, tariff:'Netflix Premium', quality: '4K+HDR'},
  ]

  const tariff = () => {
    return !currentPlan? 'Not selected' : currentPlan
  }

  return (
    <div className="user">
      <Nav/>
      <div className="user__content">
        <h1 className="user__title">Edit profile</h1>
        <hr className="user__bar"/>
        <div className="user__info">
          <div>
            <img className="user__ava" src={ava} alt='ava'/>
          </div>
          <div className="user__payment">
            <h2 className="user__email">{user?.email}</h2>
            <p>Plans (Current Plan: {tariff()})</p>
            <hr className="user__bar"/>
            <h2 className="user__payment_renewal">Renewal Date: 24/03/2023</h2>

            <div className="user__tariffs">
              {buttons.map(({id, tariff, quality}) => {
                return <div key={id} data-tariff={tariff} className="user__tariffs_item">
                <h2>
                  {tariff}
                 <p>{quality}</p>
                </h2> 
                <button style={currentPlan === tariff ? {background: 'grey'} : {background: '#e50914'} } 
                disabled={currentPlan === tariff? true : false}
                onClick={() => {
                  dispatch(getTariff(tariff))
                  setTimeout(() => navigate(`/homepage`), 2000);
                  }}> 
                {currentPlan === tariff? "Subscribed" : "Subscribe"}
                </button>
              </div>
              })}
            </div>
            <button className="user__signout" onClick={(e)=>{
              e.preventDefault()
              console.log(user)
              logout()
              dispatch(clearUserObj())
              navigate("/");

              }}>Sign Out</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;