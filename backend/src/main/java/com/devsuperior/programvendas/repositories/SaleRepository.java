package com.devsuperior.programvendas.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.devsuperior.programvendas.dto.SaleSuccessDTO;
import com.devsuperior.programvendas.dto.SaleSumDTO;
import com.devsuperior.programvendas.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long> { //JpaRepository já é um componente, não precisamos registrá-lo(@)

	@Query("SELECT new com.devsuperior.programvendas.dto.SaleSumDTO(obj.seller, SUM(obj.amount)) "
			+ " FROM Sale AS obj GROUP BY obj.seller") //Consulta específica
	List<SaleSumDTO> amountGroupedBySeller(); //Método "assinado", assinatura
	
	@Query("SELECT new com.devsuperior.programvendas.dto.SaleSuccessDTO(obj.seller, SUM(obj.visited), SUM(obj.deals)) "
			+ " FROM Sale AS obj GROUP BY obj.seller")
	List<SaleSuccessDTO> successGroupedBySeller();
}
