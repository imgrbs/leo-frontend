import MatchReducer,
{
  setMatch, setMatchValueByAttribute, setIsCurrentMatch,
} from '../index';

describe('Test Match Reducer', () => {
  it('Test setMatch should return match correctly.', (done) => {
    const match = { id: 1, name: 'SIT Career Day' };
    const action = setMatch(match);

    const store = MatchReducer({}, action);

    expect(store).toEqual({ match });
    done();
  });

  it('Test setMatch should return inital match when match is undefined.', (done) => {
    const match = undefined;
    const action = setMatch(match);

    const store = MatchReducer({}, action);

    expect(store.match.id).toEqual(0);
    expect(store.match.name).toEqual('');
    expect(store.match.description).toEqual('');
    done();
  });

  it('Test setMatchValueByAttribute should return match with define attribute.', (done) => {
    const action = setMatchValueByAttribute('name', 'Junior Programmer');

    const store = MatchReducer({}, action);

    expect(store).toEqual({
      match: {
        name: 'Junior Programmer',
      },
    });
    done();
  });

  it('Test setIsCurrentMatch should return is current match.', (done) => {
    const action = setIsCurrentMatch(true);

    const store = MatchReducer({}, action);

    expect(store).toEqual({
      isCurrentMatch: true,
    });
    done();
  });
});
