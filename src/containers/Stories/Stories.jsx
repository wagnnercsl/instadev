import React, { useState } from "react";

import Story from '../../components/Story';

import './Stories.scss';

const Stories = ({ stories, getUserHandler }) => {

  return (
    <React.Fragment>
      <section className="stories" data-testid="stories">
        <div className="container">
          {stories.map((story, index) => {
              const user = getUserHandler(story.userId);
            
              return (
                <button key={index} className={`user__thumb ${index === 0 && 'user__thumb--hasNew'}`}>
                    <div className="user__thumb__wrapper">
                      <img src={user.avatar} alt={user.name}/>
                    </div>
                </button>
              )
          })}
        </div>
      </section>

      {//true && (
        //<Story />
        //)
      }
    </React.Fragment>
  );
};

export default Stories;
