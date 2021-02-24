import React, { Component } from 'react';
import { 
  View,
  Text,
  FlatList,
  StyleSheet,
} from 'react-native';

import ItemShopingCart from '../components/ItemShoppingCart';

import { connect } from 'react-redux';

class ShopingCart1 extends Component {

  _keyExtractor = (item, idx) => item.id;

  _renderItem = ({ item }) => (
    <ItemShopingCart item={ item }/>
  );

  render() {
    const { cartItems, total } = this.props;
    return (
      <View style={ styles.container }>
        <Text style={ styles.sectionTitle }>Logout page</Text>
        {/* <FlatList
         style={{ flexGrow: 0 }}
         data={ cartItems }
         keyExtractor={ this._keyExtractor }
         renderItem={ this._renderItem }
        /> */}
        <Text style={ styles.total }>Logout Sucess</Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  cartItems: state.carts.items,
  total: state.carts.total,
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
  },
  sectionTitle: {
    fontSize: 24,
  },
  total: { 
    padding: 8,
    backgroundColor: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'right',
    marginTop: 4,
    marginBottom: 4,
  }
});

export default connect(mapStateToProps)(ShopingCart1);