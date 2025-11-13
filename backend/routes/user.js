import express from 'express';
import connection from '../db/connection.js';

const router = express.Router();

router.post('/', (req,res)=>{
    const {nome, email,senha} = req.body;

    if(!nome ||!email||!senha){
        return res.status(400).json({erro:'preencha todos os campos!'})
    }

    const sql = 'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)'

    connection.query(sql, [nome, email, senha], (err, result)=>{
        if (err) return res.status(500).json({ erro: err.message });
        res.status(201).json({ mensagem: 'Usuário cadastrado com sucesso!' });
    })
})

router.get('/', (req, res) => {
  connection.query('SELECT * FROM usuarios', (err, results) => {
    if (err) return res.status(500).json({ erro: err.message });
    res.json(results);
  });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { nome, email, senha } = req.body;

  const sql = 'UPDATE usuarios SET nome=?, email=?, senha=? WHERE id=?';
  connection.query(sql, [nome, email, senha, id], (err, result) => {
    if (err) return res.status(500).json({ erro: err.message });
    res.json({ mensagem: 'Usuário atualizado com sucesso!' });
  });
});