// import React from 'react'
// import "./components/App.css"
// import Navbar from "./components/Navbar"
// function App() {
//     return( <div className="App"><Navbar />
//         </div>
//     );
// }

// export default App;

//=========================================================
import React, {useState, useEffect} from 'react'
import NavbarComponent from './components/Navbar';
import HomeComponent from './components/Home';
import Contact from './components/Contact';
import Register from './components/Register';
import Login from './components/Login';
// import BuySell from './components/BuySell'
import BuyForm from './components/BuyForm'
import Order from './components/Orders'
import Navbar1Component from './components/Nav1';
import TransactionComponent from './components/Transaction';
import Work from './components/Work';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import './components/App.css';
import fire from './fire';

function App() {
  
/* const [user, setUser]= useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const []
  const [emailError, setEmailError] = useState('');
  const [passwordError , setPasswordError] = useState('');
  const [hasAccount ,setHasAccount] = useState('');
  

  const handleLogin = () =>{
    fire
       .auth()
       .signInWithEmailAndPassword(email,password)
       .catch((err)=>{
         switch(err.code){
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;


         }
       });
  };
*/
/*const [{}, dispatch] = useStateValue();

  const [loader,setLoader]=useState(false);

  useEffect(() => {
    // will only run once when the app component loads...

    setLoader(true);
    setTimeout(()=>{
       setLoader(false);
    },4000)

    auth.onAuthStateChanged(async(authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in
        const user = await db.collection('user').doc(user.Email).get();
        // console.log(user.data().id);
        dispatch({
          type:"SET_USER",
          user:user.data()
        });
        dispatch({
          type: "SET_USER_ID",
          userId: user.Email,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  const handleSignup = () =>{
    fire
       .auth()
       .createUserWithEmailAndPassword(email,password)
       .catch((err)=>{
         switch(err.code){
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;


         }
       });
  };

  const handlelogout = () => {
    fire.auth().signOut();
  };

  const authListener = () =>{
    fire.auth().onAuthStateChanged(user => {
      if(user){
        setUser(user);
      }else{
        setUser('');
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);
*/
  return (
    <BrowserRouter>  
      <div className="App">
        
        <div className="content">
          <Switch> 
            <Route exact path="/">
            <NavbarComponent />
              <HomeComponent />
            </Route>
            <Route exact path="/home">
            <NavbarComponent />
              < HomeComponent/>
            </Route>
            <Route exact path="/Register">
              <Register />
            </Route>
            <Route exact path="/Login">
              <Login />
            </Route>
            <Route exact path="/Home1">
            <Navbar1Component />
              < HomeComponent/>
            </Route>
            <Route exact path="/BuySell">
            <Navbar1Component />
              <Order />
            </Route>
            <Route exact path="/BuyForm">
            <Navbar1Component />
              <BuyForm />
            </Route>
            <Route exact path="/Logout">
              <NavbarComponent/>
              <HomeComponent />
            </Route>
            <Route exact path="/transaction">
            <Navbar1Component />
              <TransactionComponent />
            </Route>
            <Route exact path="/about">
              <NavbarComponent/>
              <Work/>
              </Route>
              <Route exact path="/getin">
              <Navbar1Component/>
              <Work/>
              </Route>
              <Route exact path="/contact">
                <NavbarComponent />
                <Contact />
              </Route>
              <Route exact path="/contact1">
                <Navbar1Component />
                <Contact />
              </Route>
            {/* <Route exact path="/council">
              <CouncilComponent />
            </Route>
            <Route exact path="/work">
              <WorkComponent />
            </Route>
            <Route exact path="/contact">
              <ContactComponent />
            </Route> */}
          </Switch>
        </div>
       <hr className="mx-4 mt-5" />
        <FooterComponent />
      </div>
    </BrowserRouter>
  );
}

export default App;
