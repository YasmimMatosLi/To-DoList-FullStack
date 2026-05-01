package com.yasmim.To_DoList.controller;

import com.yasmim.To_DoList.infrastructure.entity.Lista;
import com.yasmim.To_DoList.service.ListaService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/listas")
@CrossOrigin("*")
@RequiredArgsConstructor
public class ListaController {
    @Autowired
    private ListaService listaService;

    @PostMapping
    public ResponseEntity<Lista> cadastrarLista(@RequestBody Lista lista){
        Lista novaLista = listaService.cadastrarLista(lista);
        return ResponseEntity.ok(novaLista);
    }

    @GetMapping
    public ResponseEntity<List<Lista>> listarListas(){
        return ResponseEntity.ok(listaService.listarListas());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Lista> encontrarPorId(@PathVariable Integer id){
        return ResponseEntity.ok(listaService.encontrarPorId(id));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Void> atualizarLista(
            @PathVariable Integer id,
            @RequestBody Lista lista){

        listaService.atualizarListaPorId(id, lista);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> removerLista(@PathVariable Integer id){
        listaService.deletarLista(id);
        return ResponseEntity.ok().build();
    }
}
