package com.devsuperior.programvendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.programvendas.entities.Seller;

public interface SellerRepository extends JpaRepository<Seller, Long> { //JpaRepository já é um componente, não precisamos registrá-lo(@)

}
