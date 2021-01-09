package com.devsuperiror.dsdeliver.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperiror.dsdeliver.entities.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {

}
