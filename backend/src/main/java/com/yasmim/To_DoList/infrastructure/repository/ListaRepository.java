package com.yasmim.To_DoList.infrastructure.repository;

import com.yasmim.To_DoList.infrastructure.entity.Lista;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ListaRepository extends JpaRepository<Lista, Integer> {
}
