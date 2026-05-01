package com.yasmim.To_DoList.infrastructure.repository;

import com.yasmim.To_DoList.infrastructure.entity.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<Task, Integer> {
}
