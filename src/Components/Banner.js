import "./Banner.css";

const Banner = () => {
  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + "/background.jpg"})`,
        backgroundRepeat: "no-repeat",
        height: "80vh",
        width: "100%",
        backgroundSize: "cover",
      }}
    >
      <div className="banner__content">
        <h2 className="banner__content-heading">
          Endless entertainment and knowledge
        </h2>
        <p className="banner__content-para-a">
          Read or listen anytime, anywhere.
        </p>
        <button className="banner__content-button">
          Read free for 30 days
        </button>
        <p className="banner__content-para-b">
          Only ₹299/month after. Cancel anytime.
        </p>
      </div>
    </header>
  );
};

export default Banner;
