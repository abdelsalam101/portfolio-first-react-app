import { FaEnvelope, FaUser, FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa';
function Footer(){
return(
 <footer className="bg-dark text-white py-4 mt-5">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
        <div className="mb-2 mb-md-0">
          <h5>GET IN TOUCH</h5>
          <p className="mb-1">
            <FaEnvelope className="me-2" />
            abdelsalamhassan15@gmail.com
          </p>
          <p>
            <FaUser className="me-2" />
            +201278652320
          </p>
        </div>
        <div className="mb-3 mb-md-0">
          <a
            href="mailto:abdelsalamhassan15@gmail.com"
            className="btn btn-outline-light"
          >
            CONTACT ME
          </a>
        </div>
        <div className="text-end">
          <div className="mb-2">
            <a
              href="https://www.linkedin.com/in/abdelsalamhassan/"
              target="_blank"
              className="text-white me-3"
            >
              <FaLinkedin />
            </a>
            <a href="#" className="text-white me-3">
              <FaFacebook />
            </a>
            <a href="#" className="text-white">
              <FaTwitter />
            </a>
          </div>
          <small>Copyright © AbdElSalam Hassan</small>
        </div>
      </div>
    </footer>
);
}
export default Footer;