import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import SearchSnippets from 'components/SearchSnippets.js';
import YourEntityNameCard from './YourEntityNameCard.js';
import GenericEntityCard from 'components/GenericEntityCard.js';

const YourEntityNameResult = ({ result, entity, ...props }) => {
  return (
    <GenericEntityCard entity={entity} detailPath={props.detailPath}>
      <YourEntityNameCard entity={entity}>
        <Row>
          <Col md={12}>
            <SearchSnippets result={result} />
          </Col>
        </Row>
      </YourEntityNameCard>
    </GenericEntityCard>
  );
};

YourEntityNameResult.defaultProps = {
  content: SearchSnippets,
  detailPath: '/detail'
};

YourEntityNameResult.propTypes = {
  detailPath: PropTypes.string,
  result: PropTypes.shape({
    id: PropTypes.string
  })
};

export default YourEntityNameResult;
