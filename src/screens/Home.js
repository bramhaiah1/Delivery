import React, { Component } from 'react';
import { 
  View,
  Text,
  FlatList,
  Image,
  Button,
  TextInput,
  StyleSheet 
} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadProducts } from '../store/products/products.actions';

import ItemCard from '../components/ItemCard';

class Home extends Component {
  static navigationOptions = {
    headerTitle: '',
  }

  _keyExtractor = (item) => `product_${item.id}`;

  _renderItem = ({item}) => (
    <ItemCard item={ item } />
  );

  render() {
    return (
      <View style={ styles.container }>
        <Text style={ styles.sectionTitle }>Product List</Text>
        <FlatList 
        
          data={ [{ id: 0, name: 'Mr Puff Coffee Shop', price: 700, image: 'https://doki.co.id/image/cache/data/Handphone/Motorola/Moto%20z/Motorola-moto-z-black-500x500.jpg' },
          { id: 1, name: 'Ballroom Restaurant', price: 500, image: 'https://doki.co.id/image/cache/data/Handphone/xiaomi/Note%205A/Redmi-note-5a-Grey-500x500.jpg' },
          { id: 2, name: 'veretto Restaurant', price: 1000, image: 'https://doki.co.id/image/cache/data/Accessories/Tempered Glass/Tempered-Samsung-Galaxy-s8-s8+-500x500h.jpg' },
          { id: 3, name: 'Little Bite Restaurant', price: 7000, image: 'https://doki.co.id/image/cache/data/Handphone/Elephone/s1/Elephone-s1-black-doki-500x500.jpg' },
           ] }
          renderItem={ this._renderItem }
          keyExtractor={ this._keyExtractor }
        />
      </View>   
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
  },
  sectionTitle: {
    fontSize: 24,
  },
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  loadProducts
}, dispatch);

const mapStateToProps = (state) => ({
  products: state.products
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);