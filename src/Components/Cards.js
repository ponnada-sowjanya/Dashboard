import React from "react";
import { useNavigate,Link } from "react-router-dom";
import "./Cards.css";

const Card = ({ imgSrc, altText, title, progress, status, feedbackUrl, navigateTo, isAddCard }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (navigateTo) navigate(navigateTo);
  };

  const handleFeedbackClick = () => {
    if (feedbackUrl) navigate(feedbackUrl);
  };

  return (
    <div className={`card ${isAddCard ? "add" : ""}`} onClick={isAddCard ? handleClick : undefined}>
      {imgSrc && <img src={imgSrc} style={isAddCard ? { width: "150px", height: "150px" } : {}} />}
      {title && <p>{title}</p>}
      {progress !== undefined && (
        <>
          <div className="progress-bar">
            <div className="progress" style={{ width: `${progress}%` }}></div>
          </div>
          <p>
            <b>{progress}% completed</b>
          </p>
        </>
      )}
      {status && <h5>{status}</h5>}
      {feedbackUrl && (
        <button className="feedback-btn" onClick={handleFeedbackClick}>
          Feedback Form
        </button>
      )}
      {isAddCard && <button>Explore more...</button>}
    </div>
  );
};

const Cards = ({ sections = [] }) => {
  return (
    <div className="container">
      <main>
        <section className="content">
          {sections.map((section, index) => (
            <div style={{margin:"5vw 0"}} key={index}>
              <h2>{section.title}</h2>
              <div className="diagonal-line"></div>
              <Link to="/CloudComputing"> <div className="cards">
                {section.cards.map((card, idx) => (
                  <Card key={idx} {...card} />
                ))}
              </div></Link>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default Cards;
