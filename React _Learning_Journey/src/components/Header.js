import { LOGO_URL } from "../utils/constants";
export const Header=()=>{
  return(
    <div className='header'>
      <div className='logo-container'>
        <img className='logo' src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Contact Us</li>
          <li>About Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
};