import React, { useCallback, useState } from "react";

import { Link } from 'react-router-dom';

import './Story.scss';

const Story = ({ story, user, handleClose }) => {
  return (
    <section className="story" data-testid="story">
      <div className="container">
        <div className="story__progress"></div>
        <div className="story__header">

        </div>
      </div>
    </section>
  );
};

export default Story;
