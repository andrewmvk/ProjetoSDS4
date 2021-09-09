package com.devsuperior.programvendas.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.programvendas.dto.SaleDTO;
import com.devsuperior.programvendas.entities.Sale;
import com.devsuperior.programvendas.repositories.SaleRepository;
import com.devsuperior.programvendas.repositories.SellerRepository;

@Service /*Essa anotation registra a nossa classe para que ela passe a ser um componente do nosso sistema, 
			podendo ser injetada em outros componentes*/
public class SaleService {

	//O objeto de serviço está dependendo do objeto de repository
	@Autowired //Injeta a dependência de forma transparente (não precisamos de um = new Objeto...)
	private SaleRepository repository; 
	
	@Autowired
	private SellerRepository sellerRepository; /*Essa é uma forma de evitar que que a Jpa fique buscando os vendedores no banco de dados,
	aqui buscamos do banco de dados todos os vendedores trazemos para a memória para a Jpa gerencie um cash dos objetos, percebendo que ja
	foram buscados para memória, a Jpa não irá buscá-los mais no banco de dados (é uma solução que só é possível para poucos vendedores)*/
	
	@Transactional(readOnly = true) //Evita que seja feito um "lock" de escrita no banco de dados, já que essa parte é responsável apenas pela leitura 
	public Page<SaleDTO> findAll(Pageable pageable) { //Diferente do SellerService, queremos páginas e não todas as vendas
		sellerRepository.findAll();
		Page<Sale> result = repository.findAll(pageable); 
		return result.map(x -> new SaleDTO(x));
	}
	
}
