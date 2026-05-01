package com.yasmim.To_DoList.service;

import com.yasmim.To_DoList.infrastructure.entity.Lista;
import com.yasmim.To_DoList.infrastructure.entity.Task;
import com.yasmim.To_DoList.infrastructure.repository.ListaRepository;
import jakarta.persistence.Id;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class ListaService {
    @Autowired
    private ListaRepository listaRepository;

    //cadastrar uma nova lista;
    public Lista cadastrarLista(Lista lista){
        lista.setDataCriacao(LocalDate.now());
        return listaRepository.save(lista);
    }
    //listar todas as listas;
    public List<Lista> listarListas(){
        return listaRepository.findAll();
    }
    //buscar uma lista por ID;
    public Lista encontrarPorId(Integer id){
        Optional <Lista> lista = listaRepository.findById(id);
        return lista.get();
    }
    //atualizar os dados de uma lista;
    public void atualizarListaPorId(Integer id, Lista lista){
        Lista listaEntity = listaRepository.findById(id).orElseThrow(
                () -> new RuntimeException("Lista não encontrado")
        );
        Lista listaAtualizada = Lista.builder()
                .id(listaEntity.getId())
                .titulo(lista.getTitulo() != null ?
                        lista.getTitulo() : listaEntity.getTitulo())
                .descricao(lista.getDescricao() != null ?
                        lista.getDescricao() : listaEntity.getDescricao())
                .build();

        listaAtualizada.setDataCriacao(listaEntity.getDataCriacao());
        listaRepository.saveAndFlush(listaAtualizada);
    }
    //remover uma lista por Id;
    public void deletarLista(Integer id){
        Lista lista = listaRepository.findById(id)
                .orElseThrow(
                        () -> new RuntimeException("Lista não encontrada")
                );
        listaRepository.delete(lista);
    }
}
