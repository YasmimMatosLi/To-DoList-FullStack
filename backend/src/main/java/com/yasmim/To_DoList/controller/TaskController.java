package com.yasmim.To_DoList.controller;

import com.yasmim.To_DoList.infrastructure.entity.Task;
import com.yasmim.To_DoList.service.TaskService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/tasks")
@CrossOrigin("*")
public class TaskController {

    @Autowired
    private TaskService taskService;

    @PostMapping
    public ResponseEntity<Void> salvarTask(@RequestBody Task task){
        taskService.salvar(task);
        return ResponseEntity.ok().build();
    }

    @GetMapping
    public List<Task> listarTask(){
        return taskService.listar();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Task> atualizar(@PathVariable Long id,
                                          @RequestBody Task task) {
        return ResponseEntity.ok(taskService.atualizar(id, task));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletarPorId(@PathVariable Long id){
        taskService.deletar(id);
        return ResponseEntity.ok().build();
    }

    @PatchMapping("/{id}/concluir")
    public ResponseEntity<Task> concluir(@PathVariable Long id) {
        return ResponseEntity.ok(taskService.marcarComoConcluida(id));
    }


}
