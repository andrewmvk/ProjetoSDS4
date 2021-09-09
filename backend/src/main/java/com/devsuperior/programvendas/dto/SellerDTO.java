package com.devsuperior.programvendas.dto;

import java.io.Serializable;

import com.devsuperior.programvendas.entities.Seller;

public class SellerDTO implements Serializable { 
	private static final long serialVersionUID = 1L;
	/*Serializable é só uma medida para que possa garantir que os objetos SellerDTO
 	realmente possam ser convertidos para bits, para que possa ser navegado em rede, acessado em arquivo*/

	private Long id;
	private String name;
	
	public SellerDTO() {
		
	}

	public SellerDTO(Long id, String name) {
		this.id = id;
		this.name = name;
	}
	
	public SellerDTO(Seller entity) { //Esse construtor é para que seja possível (e fácil) de copiar os dados de uma entidade para um DTO
		id = entity.getId();
		name = entity.getName();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	
}
