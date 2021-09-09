package com.devsuperior.programvendas.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.devsuperior.programvendas.dto.SellerDTO;
import com.devsuperior.programvendas.entities.Seller;
import com.devsuperior.programvendas.repositories.SellerRepository;

@Service /*Essa anotation registra a nossa classe para que ela passe a ser um componente do nosso sistema, 
			podendo ser injetada em outros componentes*/
public class SellerService {

	//O objeto de serviço está dependendo do objeto de repository
	@Autowired //Injeta a dependência de forma transparente (não precisamos de um = new Objeto...)
	private SellerRepository repository; 
	
	public List<SellerDTO> findAll() {
		List<Seller> result = repository.findAll(); //Devemos retornar uma lista SellerDTO para isso vamos fazer a conversão (map)
		return result.stream().map(x -> new SellerDTO(x)).collect(Collectors.toList()); //O .collect é para converter a stream em lista novamente
	}
	
}
