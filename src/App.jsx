import { Profile } from './components/Profile';
import { Statistics } from 'components/Statistics';

import user from './data/user.json';
import data from './data/data.json';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={data} />
    </>
  );
};
