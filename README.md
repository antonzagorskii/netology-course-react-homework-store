## в App.js return
```jsx
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
```

## ShopItemClass.jsx
```jsx
import React from 'react';
import PropTypes from 'prop-types'

import ShopItem from '../../models/ShopItem'
import './shop_item_class.css'

class ShopItemClass extends React.Component {
  render(){
    const {item} = this.props

    return (
      <div className="main-content">
        <h2>{item.brand}</h2>
        <h1>{item.title}</h1>
        <h3>{item.description}</h3>
        <div className="description">{item.descriptionFull}</div>
        <div class="highlight-window mobile"><div class="highlight-overlay"></div></div>
        <div className="divider"></div>
        <div className="purchase-info">
          <div className="price">{item.currency}{item.price}</div>
          <button>Добавить в корзину</button>
        </div>
      </div>
    );
  }
}

ShopItemClass.propTypes = {
  item: PropTypes.instanceOf(ShopItem).isRequired
}

export default ShopItemClass;
```

## ShopItemFunc.jsx
```jsx
import React from 'react';
import PropTypes from 'prop-types'

import ShopItem from '../../models/ShopItem'
import './shop_item_func.css'

function ShopItemFunc(props){
  const { item } = props;
  
  return (
    <div className="main-content">
      <h2>{item.brand}</h2>
      <h1>{item.title}</h1>
      <h3>{item.description}</h3>
      <div className="description">{item.descriptionFull}</div>
      <div class="highlight-window mobile"><div class="highlight-overlay"></div></div>
      <div className="divider"></div>
      <div className="purchase-info">
        <div className="price">{item.currency}{item.price}</div>
        <button>Добавить в корзину</button>
      </div>
    </div>
  );
}

ShopItemFunc.propTypes = {
  item: PropTypes.instanceOf(ShopItem)
}

export default ShopItemFunc;

```