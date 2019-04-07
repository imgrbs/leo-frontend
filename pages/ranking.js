import React from 'react';
import { connect } from 'react-redux';

import { serverInstance } from '../tools/request';
import adapter from '../store/match/match-adapter';

import { setPositions } from '../store/match';

import RankingPage from '../components/ranking';

class Ranking extends React.Component {
  static async getInitialProps({ store, query, req }) {
    const matchAdapter = adapter(serverInstance(req.cookies.token));
    const positions = await matchAdapter.getPositionsByMatchId(query.matchId);
    await store.dispatch(setPositions(positions));
    return {};
  }

  render() {
    return <RankingPage />;
  }
}

export default connect()(Ranking);
