import React from 'react';
import { connect } from 'react-redux';

import { serverInstance } from '../../tools/request';
import cookie from '../../tools/cookie';
import adapter from '../../store/match/match-adapter';
import userAdapter from '../../store/user/user-adapter';

import { setRole, setId } from '../../store/user';
import { setMatch } from '../../store/match';

import MatchPage from '../../components/matches/MatchPage';

class MatchController extends React.Component {
  static async getInitialProps({ store, query, req }) {
    const matchAdapter = adapter(serverInstance(cookie.getToken(req)));
    const match = await matchAdapter.getMatchByMatchId(query.matchId);
    const userRequest = userAdapter(serverInstance(cookie.getToken(req)));


    const user = await userRequest.getUser();

    await store.dispatch(setId(user.id));
    await store.dispatch(setRole(user.role));
    await store.dispatch(setMatch(match));
    return {};
  }

  render() {
    return <MatchPage />;
  }
}

export default connect()(MatchController);
