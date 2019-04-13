import Router from 'next/router';

import env from '../../config/env';

const MATCH_API = env.public.matchingApi;

function redirectToApplicantRanking(matchId) {
  return Router.push(`/matches/${matchId}/applicants/ranking`);
}

export function redirectToRecruiterRanking(matchId, positionId) {
  return Router.push(`/matches/${matchId}/positions/${positionId}/ranking`);
}

export default adapter => ({
  getMatchByMatchId(matchId) {
    return adapter.get(`${MATCH_API}/matches/${matchId}`)
      .then(({ data: match }) => match);
  },
  getMatchPositionsByMatchId(matchId) {
    return adapter.get(`${MATCH_API}/matches/${matchId}/positions`)
      .then(({ data: positions }) => positions);
  },
  postApplicantRankingByMatchId(matchId, applicantRanking) {
    return adapter.post(`${MATCH_API}/matches/${matchId}/applicants/ranking`, applicantRanking)
      .then(({ status }) => status === 200 && redirectToApplicantRanking(matchId));
  },
  updateApplicantRankingByMatchId(matchId, applicantRanking) {
    return adapter.put(`${MATCH_API}/matches/${matchId}/applicants/ranking`, applicantRanking)
      .then(({ status }) => status === 200 && redirectToApplicantRanking(matchId));
  },
  getApplicantRankingByMatchId(matchId) {
    return adapter.get(`${MATCH_API}/matches/${matchId}/applicants/ranking`)
      .then(({ data: ranks }) => ranks);
  },
  getRecruiterRankingByMatchIdAndPositionId(matchId, positionId) {
    return adapter.get(`${MATCH_API}/matches/${matchId}/positions/${positionId}/ranking`)
      .then(({ data: ranks }) => ranks);
  },
  getApplicantsByMatchId(matchId) {
    return adapter.get(`${MATCH_API}/matches/${matchId}/recruiters/positions`)
      .then(({ data: positions }) => positions);
  },
  getRecruiterPositionsByMatchId(matchId) {
    return adapter.get(`${MATCH_API}/matches/${matchId}/positions`)
      .then(({ data: positions }) => positions);
  },
});
