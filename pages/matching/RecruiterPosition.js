import React from 'react';
import { connect } from 'react-redux';

import { serverInstance } from '../../tools/request';
import cookie from '../../tools/cookie';
import adapter from '../../store/match/match-adapter';

import { setMatch } from '../../store/match';
import { setPositions } from '../../store/match/recruiter';

import RecruiterPositionPage from '../../components/matches/RecruiterPositionPage';

class RecruiterPositionController extends React.Component {
  static async getInitialProps({ store, query, req }) {
    const matchAdapter = adapter(serverInstance(cookie.getToken(req)));
    const match = await matchAdapter.getMatchByMatchId(query.matchId);
    const positions = await matchAdapter.getRecruiterPositionsByMatchId(query.matchId);
    await store.dispatch(setMatch(match));
    await store.dispatch(setPositions(positions));
    return {};
  }

  render() {
    return <RecruiterPositionPage />;
  }
}

export default connect()(RecruiterPositionController);