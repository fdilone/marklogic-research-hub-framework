import React from 'react';
import HighlightMatch from 'components/HighlightMatch';

const YourEntityNameCard = props => {
  return (
    <div>
      <div className="description">
        {<HighlightMatch match={props.entity.name} />}
      </div>
      {props.children}
    </div>
  );
};

export default YourEntityNameCard;
