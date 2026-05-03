package com.yasmim.To_DoList.infrastructure.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.*;

import java.time.LocalDate;

@Entity
@Table(name = "Task")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "titulo")
    @NotBlank(message = "O título é obrigatório")
    private String titulo;

    @Column(name = "descricao")
    private String descricao;

    @Column(name = "status")
    @Enumerated(EnumType.STRING)
    private TaskStatus status;

    @Column(name = "data_criacao")
    private LocalDate dataCriacao;

    @Column(name = "data_termino")
    private LocalDate dataTermino;

    @ManyToOne
    @JoinColumn(name = "lista_id")
    @JsonBackReference
    private Lista lista;

    @Column(name = "lista_id", insertable = false, updatable = false)
    private Integer listaId;

}
