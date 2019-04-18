import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addApplicantRank } from '../../store/matching/ranking';

import Button from '../base/Button';

import RankingCard from './RankingCard';

const PositionList = ({
  positions,
  addRank = () => {},
}) => (
  <React.Fragment>
    {
        positions.map((position => (
          <RankingCard
            key={position.id}
            title={position.name}
            value={position.money}
            subtitle={position.location}
            capacity={position.capacity}
            actionButton={(
              <Button
                className="mt-2"
                type="button"
                onClick={() => addRank(position)}
              >
                Add to rank
              </Button>
            )}
          />
        )))
    }
  </React.Fragment>
);

const mapStateToProps = state => ({
  positions: state.ranking.positions,
});

const mapDispatchToPositionProps = dispatch => ({
  addRank: bindActionCreators(addApplicantRank, dispatch),
});

export default connect(mapStateToProps, mapDispatchToPositionProps)(PositionList);
