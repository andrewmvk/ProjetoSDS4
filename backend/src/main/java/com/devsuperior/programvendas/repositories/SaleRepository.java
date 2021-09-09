package com.devsuperior.programvendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.programvendas.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long> { //JpaRepository já é um componente, não precisamos registrá-lo(@)

}
