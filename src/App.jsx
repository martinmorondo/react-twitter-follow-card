import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

const users = [
  {
    userName: 'martinMorondo',
    name: 'Martín Morondo',
    isFollowing: 'true',
  },
  {
    userName: 'lionelMessi',
    name: 'Lionel Messi',
    isFollowing: 'false',
  },
  {
    userName: 'davidBeckam',
    name: 'David Beckam',
    isFollowing: 'true',
  },
  {
    userName: 'Neymar',
    name: 'Neymar',
    isFollowing: 'false',
  }
];

export function App() {

  return (
    <section className='App'>
      {
        users.map(({ userName, name, isFollowing}) => (
          <TwitterFollowCard
          key = {userName}
          userName = {userName}
          initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        ))
      }
    </section>
  )
}

