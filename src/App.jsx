import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';
import { useState } from 'react';

const users = [
  {
    userName: 'martinMorondo',
    name: 'Martín Morondo',
    isFollowing: true,
    followerCount: 1000,
  },
  {
    userName: 'lionelMessi',
    name: 'Lionel Messi',
    isFollowing: false,
    followerCount: 100000,
  },
  {
    userName: 'Rihanna',
    name: 'Rihanna',
    isFollowing: true,
    followerCount: 40000,
  },
  {
    userName: 'Shakira',
    name: 'Shakira',
    isFollowing: false,
    followerCount: 50000,
  }
];

export default function App() {
  const [customizationOptions, setCustomizationOptions] = useState({
    backgroundColor: 'black', // Valor inicial del color de fondo
    fontFamily: 'Arial, sans-serif', // Valor inicial de la tipografía
    fontSize: '14px', // Nuevo estado para el tamaño de fuente
    textColor: '#fff', // Nuevo estado para el color del texto
  });

  const handleCustomizationChange = (options) => {
    setCustomizationOptions(options);
  };  

  const handleColorChange = (color) => {
    const updatedOptions = {
      ...customizationOptions,
      backgroundColor: color,
    };
    handleCustomizationChange(updatedOptions);
  };
  
  const handleFontChange = (font) => {
    const updatedOptions = {
      ...customizationOptions,
      fontFamily: font,
    };
    handleCustomizationChange(updatedOptions);
  };

  const handleFontSizeChange = (size) => {
    const updatedOptions = {
      ...customizationOptions,
      fontSize: size,
    };
    handleCustomizationChange(updatedOptions);
  };

  const handleTextColorChange = (color) => {
    const updatedOptions = {
      ...customizationOptions,
      textColor: color,
    };
    handleCustomizationChange(updatedOptions);
  };

  return (
    <section className='App'>
      <h1>Twitter Follow Cards</h1>
      <div className="customization-controls">
        <label className="background-label" htmlFor="color-picker">
          Background Color:
        </label>
        <input
          type="color"
          id="color-picker"
          value={customizationOptions.backgroundColor}
          onChange={(e) => handleColorChange(e.target.value)}
        />
        <label className="text-label" htmlFor="text-color-picker">
          Text Color:
        </label>
        <input
          type="color"
          id="text-color-picker"
          value={customizationOptions.textColor}
          onChange={(e) => handleTextColorChange(e.target.value)}
        />
        <label htmlFor="font-picker">Font Family:</label>
        <select
          id="font-picker"
          value={customizationOptions.fontFamily}
          onChange={(e) => handleFontChange(e.target.value)}
        >
          <option value="Arial, sans-serif">Arial</option>
          <option value="Verdana, sans-serif">Verdana</option>
          <option value="Times New Roman, serif">Times New Roman</option>
        </select>
        <label htmlFor="font-size-slider">Font Size:</label>
        <input
          type="range"
          id="font-size-slider"
          min="10"
          max="24"
          step="2"
          value={parseInt(customizationOptions.fontSize)}
          onChange={(e) => handleFontSizeChange(e.target.value + 'px')}
        />
      </div>

      {users.map(({ userName, name, isFollowing, followerCount }) => (
        <TwitterFollowCard
          key={userName}
          userName={userName}
          initialIsFollowing={isFollowing}
          followerCount={followerCount}
          customizationOptions={customizationOptions}
        >
          {name}
        </TwitterFollowCard>
      ))}
    </section>
  );
}
