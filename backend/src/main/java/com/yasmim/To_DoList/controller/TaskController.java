package com.yasmim.To_DoList.controller;

import com.yasmim.To_DoList.infrastructure.entity.Task;
import com.yasmim.To_DoList.service.TaskService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/tasks")
@CrossOrigin("*")
@RequiredArgsConstructor
public class TaskController {

    @Autowired
    private TaskService taskService;

    @PostMapping("/{listId}")
    public ResponseEntity<Task> criarTask(
            @PathVariable Integer listId,
            @Valid @RequestBody Task task) {

        return ResponseEntity.ok(taskService.criarTask(listId, task));
    }

    @GetMapping
    public ResponseEntity<List<Task>> listarTasks() {
        return ResponseEntity.ok(taskService.listarTasks());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Task> encontrarPorId(@PathVariable Integer id) {
        return ResponseEntity.ok(taskService.buscarTaskPorId(id));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Task> atualizarTask(
            @PathVariable Integer id,
            @RequestBody Task task) {

        return ResponseEntity.ok(taskService.atualizarTaskPorId(id, task));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletarPorId(@PathVariable Integer id){
        taskService.deletarTaskPorId(id);
        return ResponseEntity.ok().build();
    }

}
