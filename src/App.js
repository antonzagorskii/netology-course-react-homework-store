import React from 'react';

import ShopItem from './models/ShopItem'
import ShopItemFunc from './components/ShopItemFunc/ShopItemFunc'
import ShopItemClass from './components/ShopItemClass/ShopItemClass'

function App() {
  const item = new ShopItem({
    brand: 'Tiger of Sweden',
    title: 'Leonard coat',
    description: 'Minimalistic coat in cotton-blend',
    descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
    price: 399,
    currency: '£'
  });
  
  return (
    <div className="App">
      <div className="ShopItemClass">
        <div className="container">
          <div className="background-element">
          </div>
          <div className="highlight-window">
            <div className='highlight-overlay'></div>
          </div>
          <div className="window">
            <ShopItemClass item={item} />
          </div>
        </div>
      </div>

      
      <div className="ShopItemFunc">
        <div className="container">
          <div className="background-element">
          </div>
          <div className="highlight-window">
            <div className='highlight-overlay'></div>
          </div>
          <div className="window">
            <ShopItemFunc item={item} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
