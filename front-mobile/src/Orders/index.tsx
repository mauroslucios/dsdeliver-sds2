import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, Alert, Text, Image } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import fetchOrders from '../api';
import Header from '../Header';
import OrderCard from '../OrderCard';
import { Order } from '../types';


function Orders() {
  const [orders, setorders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchOrders()
      .then(response => setorders(response.data))
      .catch(() => Alert.alert('Houve erro ao buscar os pedidos!'))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      <Header />
      <ScrollView style={styles.container}>
        {isLoading ? (
          <>
          
          <Image style={styles.loadingImage} source={require('../assets/loading.gif')}/>
          <Text style={styles.loadingText}>Carregando pedidos...</Text>
          </>
          ) : (
            orders.map(order => (
              <TouchableWithoutFeedback key={order.id}>
                <OrderCard order={order} />
              </TouchableWithoutFeedback>
            ))
          )}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingRight: '5%',
    paddingLeft: '5%',

  },
  loadingImage: {
    marginTop: '50%',
    marginLeft:'25%'
  },
  loadingText:{
    color: '#263238',
    fontSize: 20,
    lineHeight: 35,
    fontWeight: 'normal',
    marginTop:'-15%',
    marginLeft:'25%'
  }
});
export default Orders;