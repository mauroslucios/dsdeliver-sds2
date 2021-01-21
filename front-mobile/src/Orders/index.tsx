import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, Alert } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import fetchOrders from '../api';
import Header from '../Header';
import OrderCard from '../OrderCard';
import { Order } from '../types';


function Orders() {
  const [orders, setorders] = useState<Order[]>([]);

  useEffect(() => {
    fetchOrders()
      .then(response => setorders(response.data))
      .catch(() => Alert.alert('Houve erro ao buscar os pedidos!'));
  }, []);

  return (
    <>
      <Header />
      <ScrollView style={styles.container}>
        {orders.map(order => (
          <TouchableWithoutFeedback key={order.id}>
            <OrderCard order={order}/>
          </TouchableWithoutFeedback>
        ))}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingRight: '5%',
    paddingLeft: '5%',

  }
});
export default Orders;