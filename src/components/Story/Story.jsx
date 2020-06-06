import React, { useCallback, useState } from "react";

import { Link } from 'react-router-dom';

import './Story.scss';

const Story = ({ story, user, handleClose }) => {
  
  return (
    <section className="story" data-testid="story">
      <div className="container">
        <div className="story__progress"></div>
        <div className="story__header">
          <div className="story__progress__elapsed"></div>
          <div className="user">
            <div className="user__thumb">
              <img src={user.avatar} alt={user.name}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
