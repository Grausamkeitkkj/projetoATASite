const express = require('express');
const app = express();
const pool = require('./db'); // Importe a conexão

app.use(express.urlencoded({ extended: true }));

app.post('/aluno', (req, res) => {
  const {nome, data_nascimento, genero, cpf, rg, telefone, nome_pais_responsaveis, telefone_emergencia, faixa, condicoes_medicas, alergias, medicacoes, historico_lesoes, avaliacao_medica} = req.body;

  const query = `
  INSERT INTO aluno (nome, data_nascimento, genero, cpf, rg, telefone, nome_pais_responsaveis, telefone_emergencia, faixa, condicoes_medicas, alergias, medicacoes, historico_lesoes, avaliacao_medica)
  VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14);`;

  pool.query(query, [nome, data_nascimento, genero, cpf, rg, telefone, nome_pais_responsaveis, telefone_emergencia, faixa, condicoes_medicas, alergias, medicacoes, historico_lesoes, avaliacao_medica], (err, result) => {
    if (err) {
      console.error('Erro ao inserir dados:', err);
      res.status(500).send('Erro ao inserir dados no banco de dados.');
    } else {
      console.log('Dados inseridos com sucesso!');
      res.status(200).send('Dados inseridos com sucesso!');
    }
  });
});

app.listen(3003, () => {
  console.log('Servidor rodando na porta 3003');
});