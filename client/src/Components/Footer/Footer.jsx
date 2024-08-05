import footer_logo from '../../assets/footer_logo.svg';
import user_icon from '../../assets/user_icon.svg';
import './Footer.css'
const Footer = () => {
  return (
      <div className="footer">
          <div className="footer-top">
              <div className="footer-top-left">
                  <img src={footer_logo} alt="" />
                  <p>I am a fullstack MERN developer from, Kolkata with 3 years of experience in companies like Solvit, Upwork and Third Party Clients.</p>
              </div>
              <div className="footer-top-right">
                  <div className="footer-email-input">
                      <img src={user_icon} alt="" />
                      <input type="email" placeholder="Enter your email"/>
                  </div>
                  <div className="footer-subscribe">
                      Subscribe
                  </div>
              </div>
          </div>
          <hr />
          <div className="footer-bootom">
              <p className="footer-bottom-left">
                  © 2024 Sandipan Das. All rights reserved.
                  <div className="footer-bottom-right">
                      <p>Terms of services</p>
                      <p>Privacy Policy</p>
                      <p>Connect With me</p>
                  </div>
              </p>
          </div>
   </div>
  )
}

export default Footer
