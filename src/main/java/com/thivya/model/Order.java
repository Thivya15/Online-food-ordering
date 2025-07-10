package com.thivya.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne
    private User customer;

    @JsonIgnore //whenever we fetch the order object we don't
    // need restaurant object within this order object.
    @ManyToOne
    private Restaurant restaurant;

    private Long totalAmount;//real price

    private String orderStatus; //"PLACED", "PROCESSING", "DELIVERED", "CANCELLED"

    private Date createdAt;

    @ManyToOne
    private Address deliveryAddress;

    @OneToMany
    private List<OrderItem> items;

    // private Payment payment;

    private int totalItem;

    private int totalPrice;// if any offers discount maybe change with total amount




}

