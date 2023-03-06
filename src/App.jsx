import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

const users = [
  {
    userName: 'martinMorondo',
    name: 'Martín Morondo',
    isFollowing: true,
  },
  {
    userName: 'lionelMessi',
    name: 'Lionel Messi',
    isFollowing: false,
  },
  {
    userName: 'Rihanna',
    name: 'Rihanna',
    isFollowing: true,
  },
  {
    userName: 'Shakira',
    name: 'Shakira',
    isFollowing: false,
  }
];

export default function App() {

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

