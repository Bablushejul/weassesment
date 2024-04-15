
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import SignInPage from './components/SignInPage';
import Home from './components/Home'
import { useSelector } from 'react-redux';

function App() {


  const isToken = useSelector(state=>state.auth.token)

  console.log(isToken)


  return (
    <div >
      {/* <Home /> */}
   {/* <SignInPage /> */}
   <Routes>
   <Route path="/" element={isToken?<Home />:<Navigate to="/login" />} />

    <Route path="/login" element={!isToken?<SignInPage />:<Navigate to="/" />} />
   </Routes>
    </div>
  );
}

export default App;
