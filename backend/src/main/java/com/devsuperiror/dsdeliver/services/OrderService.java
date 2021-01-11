package com.devsuperiror.dsdeliver.services;

import java.time.Instant;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperiror.dsdeliver.dto.OrderDTO;
import com.devsuperiror.dsdeliver.dto.ProductDTO;
import com.devsuperiror.dsdeliver.entities.Order;
import com.devsuperiror.dsdeliver.entities.OrderStatus;
import com.devsuperiror.dsdeliver.entities.Product;
import com.devsuperiror.dsdeliver.repositories.OrderRepository;
import com.devsuperiror.dsdeliver.repositories.ProductRepository;

@Service
public class OrderService {

	@Autowired
	private OrderRepository orderRepository;
	
	@Autowired
	private ProductRepository productRepository;
	
	@Transactional(readOnly = true)
	public List<OrderDTO> findAll(){
		List<Order> list = orderRepository.findOrderWithProducts();		
		return list.stream().map(x -> new OrderDTO(x)).collect(Collectors.toList());
		
	}
	
	@Transactional
	public OrderDTO insert(OrderDTO dto) {
		Order order = new Order(null, dto.getAddress(), dto.getLatitude(), dto.getLongitude(), Instant.now(),OrderStatus.PENDING);
		//craindo a tabela tb_order_products
		for(ProductDTO p: dto.getProducts()) {
			Product product = productRepository.getOne(p.getId());
			order.getProducts().add(product);
		}
		order = orderRepository.save(order);
		return new OrderDTO(order);
		
	}
}
