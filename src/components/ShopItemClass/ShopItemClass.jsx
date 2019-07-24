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