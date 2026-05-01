package com.yasmim.To_DoList.service;

import com.yasmim.To_DoList.infrastructure.entity.Lista;
import com.yasmim.To_DoList.infrastructure.entity.Task;
import com.yasmim.To_DoList.infrastructure.entity.TaskStatus;
import com.yasmim.To_DoList.infrastructure.repository.ListaRepository;
import com.yasmim.To_DoList.infrastructure.repository.TaskRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class TaskService {
    @Autowired
    private final TaskRepository taskRepository;
    @Autowired
    private final ListaRepository listaRepository;

    //criar tarefa
    public Task criarTask(Integer listId, Task task) {

        Lista lista = listaRepository.findById(listId)
                .orElseThrow(() -> new RuntimeException("Lista não encontrada"));
        task.setLista(lista);
        task.setDataCriacao(LocalDate.now());
        task.setStatus(TaskStatus.PENDENTE);
        return taskRepository.save(task);
    }

    //listar todas as tarefas
    public List<Task> listarTasks() {
        return taskRepository.findAll();
    }

    //buscar tarefa por ID
    public Task buscarTaskPorId(Integer id) {
        return taskRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Tarefa não encontrada"));
    }

    //atualizar tarefa
    public Task atualizarTaskPorId(Integer id, Task task) {
        Task taskEntity = taskRepository.findById(id).orElseThrow(
                () -> new RuntimeException("Tarefa não encontrado")
        );
        Task taskAtualizada = Task.builder()
                .id(taskEntity.getId())
                .titulo(task.getTitulo() != null ?
                        task.getTitulo() : taskEntity.getTitulo())
                .descricao(task.getDescricao() != null ?
                        task.getDescricao() : taskEntity.getDescricao())
                .status(task.getStatus() != null ?
                        task.getStatus() : taskEntity.getStatus())
                .lista(task.getLista() != null ?
                        task.getLista() : taskEntity.getLista())
                .build();

        taskAtualizada.setDataCriacao(taskEntity.getDataCriacao());

        if(taskAtualizada.getStatus() == TaskStatus.CONCLUIDA) {
            taskAtualizada.setDataTermino(LocalDate.now());
        }
        return taskRepository.saveAndFlush(taskAtualizada);
    }

    //deletar tarefa
    public void deletarTaskPorId(Integer id) {
        Task task = buscarTaskPorId(id);
        taskRepository.delete(task);
    }
}