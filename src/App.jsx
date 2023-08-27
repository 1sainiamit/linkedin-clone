import { useEffect } from "react"; // Don't forget to import React
import "./App.css";
import { login, logout, selectUser } from "./features/userSlice"; // Import the selectUser selector
import { useSelector } from "react-redux";
import Feed from "./components/Feed/Feed";
import { useDispatch } from "react-redux";
import { auth } from "./firebase";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Sidebar from "./components/sidebar/Sidebar";
import Widgets from "./components/Widgets/Widgets";

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoURL: userAuth.photoURL,
        })
    );
        // user is logged in
      } else {
        // user is logged out
        dispatch(logout());
      }
    });
  }, [dispatch]); 

  return (
    <div className="app">
      <Header />

      {!user ? (
        <Login /> // Render the Login component if user is not authenticated
      ) : (
        <div className="app__body">
          <Sidebar />
          <Feed />
          {/* Widgets */}
          <Widgets />
        </div>
      )}
    </div>
  );
}

export default App;
