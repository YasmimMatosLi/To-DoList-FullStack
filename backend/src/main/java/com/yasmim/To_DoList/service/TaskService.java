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

    public void deletar(Long id){
        taskRepository.deleteById(id);
    }
}
