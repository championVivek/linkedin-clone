import React from "react";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord"
import "./Widgets.css";

export const Widgets = () => {

  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
       <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
          <h4>{heading}</h4>
          <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("React new version released", "Much awaited")}
      {newsArticle("Intro to Nodejs", "Javascript champion")}
      {newsArticle("Bitcoins for $5", "Take it before its finished")}
      {newsArticle("Be safe from Covid", "Wear a mask")}
    </div>
  );
};
