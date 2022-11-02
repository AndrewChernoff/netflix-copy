import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "../../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import Nav from './../Nav/Nav';
import ava from '../../utils/imgs/avatar.png';
import './Dashboard.css'

const Dashboard = () => {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();
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
    if (!user) return navigate("/");
    fetchUserName();
  }, [user, loading]);

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
            <p>Plans (Current Plan: Premium)</p>
            <hr className="user__bar"/>
            <h2 className="user__payment_renewal">Renewal Date: 24/03/2023</h2>

            <div className="user__tariffs">
              <div className="user__tariffs_item">
                <h2>
                  Netflix Standart
                 <p>1080p</p>
                </h2> 
                <button>Subscribe</button>
              </div>
              <div className="user__tariffs_item">
                <h2>
                  Netflix Basic
                 <p>480p</p>
                </h2> 
                <button>Subscribe</button>
              </div>
              <div className="user__tariffs_item">
                <h2>
                  Netflix Premium
                 <p>4K+HDR</p>
                </h2> 
                <button>Subscribe</button>
              </div>
            </div>
            <button className="user__signout">Sign Out</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;