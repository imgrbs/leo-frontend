import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { clientInstance } from '../../tools/request';

import adapter from '../../store/match/match-adapter';
import { updateRank, removeRank } from '../../store/matching/applicant';

import RankingStep from './RankingStep';
import PositionList from './PositionList';
import RankingPageContainer from './RankingPageContainer';
import Confirmation from './Confirmation';
import UploadStep from './UploadStep';

const matchAdapter = adapter(clientInstance());

const steps = [
  'Add to rank',
  'Arrange rank',
  'Upload documents',
];

export const ApplicantRanking = ({
  match, isUpdateRank, ranks = [],
  updateRank: updateRanking = () => {},
  removeRank: removeRanking = () => {},
}) => {
  const [step, handleStep] = useState(0);
  const [isOpenConfirm, toggleConfirm] = useState(false);

  function handleConfirm() {
    if (!isUpdateRank) {
      matchAdapter.postApplicantRankingByMatchId(match.id, ranks);
    } else {
      matchAdapter.updateApplicantRankingByMatchId(match.id, ranks);
    }
    toggleConfirm(false);
  }
  return (
    <RankingPageContainer
      ranks={ranks}
      steps={steps}
      step={step}
      handleStep={handleStep}
      isOpenConfirm={isOpenConfirm}
      toggleConfirm={toggleConfirm}
    >
      { step === 0 && (<PositionList />) }
      { step === 1
              && (
                <RankingStep
                  ranks={ranks}
                  isOpenConfirm={isOpenConfirm}
                  toggleConfirm={toggleConfirm}
                  updateRanking={updateRanking}
                  removeRanking={removeRanking}
                />
              )
            }
      { step === 2 && (<UploadStep />) }
      <Confirmation
        handleConfirm={handleConfirm}
        isOpenConfirm={isOpenConfirm}
        toggleConfirm={toggleConfirm}
      />
    </RankingPageContainer>
  );
};

const mapStateToProps = state => ({
  match: state.match.match,
  ranks: state.applicant.ranks,
  isUpdateRank: state.applicant.isUpdateRank,
});

const mapDispatchToRankProps = dispatch => ({
  updateRank: bindActionCreators(updateRank, dispatch),
  removeRank: bindActionCreators(removeRank, dispatch),
});

export default connect(mapStateToProps, mapDispatchToRankProps)(ApplicantRanking);