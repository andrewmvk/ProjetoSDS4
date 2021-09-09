package com.devsuperior.programvendas.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devsuperior.programvendas.dto.SaleDTO;
import com.devsuperior.programvendas.dto.SaleSuccessDTO;
import com.devsuperior.programvendas.dto.SaleSumDTO;
import com.devsuperior.programvendas.service.SaleService;

@RestController //Indica que essa classe é um controlador Rest
@RequestMapping(value = "/sales") //Indica o caminho desse recurso WEB
public class SaleController {

	@Autowired
	private SaleService service;
	
	@GetMapping
	public ResponseEntity<Page<SaleDTO>> findAll(Pageable pageable) {
		Page<SaleDTO> list = service.findAll(pageable); //O pageable tem que ser passado como argumento do service
		return ResponseEntity.ok(list); //OK indica a resposta 200 que indica execução com sucesso, no corpo da resposta irá vir essa "list"
	}
	
	@GetMapping(value = "/amount-by-seller")
	public ResponseEntity<List<SaleSumDTO>> amountGroupedBySeller() {
		List<SaleSumDTO> list = service.amountGroupedBySeller();
		return ResponseEntity.ok(list);
	}
	
	@GetMapping(value = "/success-by-seller")
	public ResponseEntity<List<SaleSuccessDTO>> successGroupedBySeller() {
		List<SaleSuccessDTO> list = service.successGroupedBySeller();
		return ResponseEntity.ok(list);
	}
}
