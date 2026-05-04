# Case Técnico - Desenvolvedor(a) de Software 
## Descrição 
 Este projeto consiste em uma aplicação Full Stack de gerenciamento de tarefas (To-Do List), desenvolvida como solução para o case técnico da Avante Tech Jr.
## Tecnologias utilizadas 
<h3>Frontend</h3>
Angular 17+<br>
TypeScript<br>
HTML5<br>
CSS3<br>
Angular Router<br>
Angular HTTP Client<br>
<h3>Backend</h3>
Java<br>
Spring Boot<br>
Spring Web<br>
Spring Data JPA<br>
Hibernate<br>
Lombok<br>
<h3>Banco de dados</h3>
PostgreSQL(Supabase)<br>
<h3>Ferramentas</h3>
Git<br>
GitHub<br>
Vercel<br>
Maven<br>
Render<br> 

## Links do projeto

### Aplicação online
🔗 https://to-do-list-full-stack-lilac.vercel.app

### Repositório GitHub
🔗 https://github.com/YasmimMatosLi/To-DoList-FullStack

---
<h2>Funcionalidades</h2> 
<h3>Gerenciamento de listas</h3>
 - Criar nova lista<br>
 - Visualizar listas cadastradas<br>
 - Editar listas<br>
 - Remover listas<br>
 <h3>Gerenciamento de tarefas</h3>
 - Criar tarefas vinculadas a uma lista<br>
 - Editar tarefas<br>
 - Remover tarefas<br>
 - Alterar status das tarefas<br>
- Visualizar tarefas por lista<br>
<h3>Status disponíveis</h3>
 - Pendente<br>
 - Em andamento<br>
 - Concluída<br>
<h3>Funcionalidades extras</h3>
 - Integração completa entre frontend e backend<br>
 - Navegação entre páginas<br>
 - Interface responsiva<br>
 - Organização modular do frontend<br>
 - Atualização dinâmica dos dados<br>
 <h2>Como executar o projeto</h2> 


### 1. Clonar o repositório

```bash
git clone https://github.com/YasmimMatosLi/To-DoList-FullStack.git
```

---

# Backend

### 2. Entrar na pasta do backend

```bash
cd backend
```

### 3. Executar a aplicação Spring Boot

#### Linux/macOS
```bash
./mvnw spring-boot:run
```

#### Windows
```bash
mvnw spring-boot:run
```

O backend estará disponível em:

```text
http://localhost:8080
```

---

# Frontend

### 4. Entrar na pasta do frontend

```bash
cd frontend
```

### 5. Instalar as dependências

```bash
npm install
```

### 6. Executar a aplicação Angular

```bash
ng serve
```

O frontend estará disponível em:

```text
http://localhost:4200
```
## Decisões tomadas 

### Relação entre listas e tarefas

Foi utilizado relacionamento:
- `OneToMany` entre `Lista → Task`;
- `ManyToOne` entre `Task → Lista`.

Isso permite que:
- uma lista possua várias tarefas;
- cada tarefa pertença obrigatoriamente a apenas uma lista.

---

### Exclusão de listas

Ao remover uma lista, todas as tarefas vinculadas também são removidas automaticamente.

Essa decisão foi implementada utilizando:

```java
cascade = CascadeType.ALL
```

e:

```java
orphanRemoval = true
```

Essa abordagem evita tarefas órfãs no banco de dados e mantém a integridade das informações.

---

### Armazenamento dos dados

Os dados da aplicação são armazenados em um banco de dados PostgreSQL hospedado no Supabase.

Foi utilizada integração com Spring Data JPA e Hibernate para persistência e gerenciamento das entidades.
## Observações 
### Organização do backend

O backend foi organizado utilizando arquitetura em camadas:

- Controller
- Service
- Repository
- Entity

Essa divisão facilita:
- manutenção;
- reutilização;
- escalabilidade;
- organização do código.

---

### Organização do frontend

O frontend foi estruturado utilizando:

- pages;
- components;
- services;
- interfaces.

---

## Observações

Durante o desenvolvimento, os principais desafios encontrados foram:

- integração entre frontend e backend;
- tratamento de relacionamentos bidirecionais;
- serialização JSON;
- deploy da aplicação;
- integração do Angular com APIs REST;
- configuração e conexão com banco PostgreSQL no Supabase.

O projeto foi importante para consolidar conhecimentos em:

- APIs REST;
- Angular;
- Spring Boot;
- PostgreSQL;
- Supabase;
- desenvolvimento Full Stack;
- integração frontend/backend;
- organização de aplicações em camadas.

---

### Melhorias futuras

- autenticação de usuários;
- busca de tarefas;
- documentação da API com Swagger;
- Dockerização;
- testes automatizados
 
