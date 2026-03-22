package com.yasmim.To_DoList.service;

import com.yasmim.To_DoList.infrastructure.entity.Task;
import com.yasmim.To_DoList.infrastructure.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskService {
    @Autowired
    private TaskRepository taskRepository;

    public List<Task> listar(){
        return taskRepository.findAll();
    }

    public Task salvar(Task task){
        return taskRepository.save(task);
    }

    public Task atualizar(Long id, Task taskAtualizada){
        Task task = taskRepository.findById(id).
                orElseThrow(() -> new RuntimeException("Tarefa não encontrada!"));

        task.setTitulo(taskAtualizada.getTitulo());
        task.setDescricao(taskAtualizada.getDescricao());
        task.setConcluida(taskAtualizada.isConcluida());

        return taskRepository.save(task);
    }

    public void deletar(Long id){
        taskRepository.deleteById(id);
    }

    public Task marcarComoConcluida(Long id) {
        Task task = taskRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Tarefa não encontrada"));

        task.setConcluida(true);

        return taskRepository.save(task);
    }
}
