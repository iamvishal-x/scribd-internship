import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <ul className="about">
          <h4 className="footer__heading"> About</h4>
          <li>About Scribd</li>
          <li>Press</li>
          <li>Our blog</li>
          <li>Join our team!</li>
          <li>Contact us</li>
          <li>Scribd for enterprise</li>
        </ul>
        <ul className="support">
          <h4 className="footer__heading">Support</h4>
          <li>About Scribd</li>
          <li>Press</li>
          <li>Our blog</li>
          <li>Join our team!</li>
        </ul>
        <ul className="legal">
          <h4 className="footer__heading">Legal</h4>
          <li>About Scribd</li>
          <li>Press</li>
          <li>Our blog</li>
        </ul>
        <ul className="social">
          <h4 className="footer__heading">Social</h4>
          <li>About Scribd</li>
          <li>Press</li>
          <li>Our blog</li>
        </ul>
      </div>

      <div className="downloads">
        <ul>
          <h4 className="footer__heading"> Get our free apps</h4>
          <li>
            <img src="appstore.svg" alt="" />
          </li>
          <li>
            <img src="playstore.svg" alt="" />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
