import "./Books.css";
const Books = () => {
  return (
    <div className="books">
      <h1 className="books__heading">
        THE BEST BOOKS AND AUDIOBOOKS ARE WAITING FOR YOU
      </h1>
      <ul className="books__ul">
        <li>
          <img src="author.png" alt="" />
        </li>
        <li>
          <img src="author.png" alt="" />
        </li>
        <li>
          <img src="author.png" alt="" />
        </li>
        <li>
          <img src="author.png" alt="" />
        </li>
        <li>
          <img src="author.png" alt="" />
        </li>
        <li>
          <img src="author.png" alt="" />
        </li>
        <li>
          <img src="author.png" alt="" />
        </li>
        <li>
          <img src="author.png" alt="" />
        </li>
        <li>
          <img src="author.png" alt="" />
        </li>
      </ul>
      <button className="books__btn">Register free for 30 Days</button>
      <p className="books__para">Cancel Anytime.</p>
    </div>
  );
};

export default Books;
