package com.devsuperior.programvendas.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devsuperior.programvendas.dto.SellerDTO;
import com.devsuperior.programvendas.service.SellerService;

@RestController //Indica que essa classe é um controlador Rest
@RequestMapping(value = "/sellers") //Indica o caminho desse recurso WEB
public class SellerController {

	@Autowired
	private SellerService service;
	
	@GetMapping
	public ResponseEntity<List<SellerDTO>> findAll() {
		List<SellerDTO> list = service.findAll();
		return ResponseEntity.ok(list); //OK indica a resposta 200 que indica execução com sucesso, no corpo da resposta irá vir essa "list"
	}
	
}
