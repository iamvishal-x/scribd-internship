import "./Subscription.css";
const Subscription = () => {
  return (
    <>
      <div className="subscription">
        <h1 className="subscription__heading">
          All in one simple subscription
        </h1>

        <ul className="subscription__list">
          <li>
            <img src="book.png" alt="" />

            <p>Books</p>
          </li>
          <li>
            <img src="book.png" alt="" />

            <p>Audiobooks</p>
          </li>
          <li>
            <img src="book.png" alt="" />

            <p>Magazines</p>
          </li>
          <li>
            <img src="book.png" alt="" />

            <p>Podcasts</p>
          </li>
          <li>
            <img src="book.png" alt="" />

            <p>Sheet Music</p>
          </li>
          <li>
            <img src="book.png" alt="" />

            <p>Documents</p>
          </li>
        </ul>
      </div>
      <div className="quote">
        <blockquote>
          <p className="quote__text">
            <img className="quote__img" src="quote.png" alt="" />
            Scribd is overall the best and most convenient deal for online
            reading.
          </p>
          <footer className="quote__footer">
            <cite className="quote__footer-cite">Business Insider</cite>
          </footer>
        </blockquote>
      </div>
    </>
  );
};

export default Subscription;
