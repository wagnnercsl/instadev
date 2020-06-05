import React, { useState } from "react";

import Story from '../../components/Story';

import './Stories.scss';

const Stories = ({ stories, getUserHandler }) => {

  return (
    <React.Fragment>
      <section className="stories" data-testid="stories">
        <div className="container">
          {stories.map(story => {
              const user = getUserHandler(story.userId);
              console.log(user);
            return <Story key={story.id} user={user} />
          })}
        </div>
      </section>

      {true && (
        <Story />
        )}
    </React.Fragment>
  );
};

export default Stories;
