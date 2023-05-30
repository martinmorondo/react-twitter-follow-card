import React, { useState } from 'react';

export function TwitterFollowCard({ children, userName, initialIsFollowing, followerCount, customizationOptions }) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
  const [count, setCount] = useState(followerCount);
  const [isFollowingAnimation, setIsFollowingAnimation] = useState(false);

  const text = isFollowing ? 'Following' : 'Follow';
  const buttonClassName = isFollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button';

    const handleClick = () => {
        setIsFollowing(!isFollowing);
        setCount(isFollowing ? count - 1 : count + 1);
        setIsFollowingAnimation(true);
      
        setTimeout(() => {
          setIsFollowingAnimation(false);
        }, 500); // Duración de la animación (0.5 segundos)
      };

      const cardStyles = {
        backgroundColor: customizationOptions.backgroundColor,
        fontFamily: customizationOptions.fontFamily,
        color: customizationOptions.textColor,
      };
      
  return (
    <article className='tw-followCard' style={cardStyles}>
      <header className='tw-followCard-header'>
        <img className='tw-followCard-avatar' src={`https://unavatar.io/${userName}`} alt='Avatar' />
        <div className='tw-followCard-info' style={{ fontSize: customizationOptions.fontSize, color: customizationOptions.textColor }}>
          <strong>{children}</strong>
          <span className='tw-followCard-infoUserName'>@{userName}</span>
          <span className='tw-followCard-followerCount'>{count} followers</span>
        </div>
      </header>

      <aside>
        <button className={`${buttonClassName} ${isFollowingAnimation ? 'is-animating' : ''}`} onClick={handleClick}>
          <span className='tw-followCard-text'>{text}</span>
          <span className='tw-followCard-stopFollow'>Stop following</span>
        </button>
      </aside>
    </article>
  );
}
