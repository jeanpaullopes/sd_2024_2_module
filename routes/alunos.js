//var express = require('express');
import express from 'express';
import alunosServices from '../services/AlunosServices.js';

var router = express.Router();

/* GET alunos listing. */
router.get('/', async function(req, res, next) {
  res.send(await alunosServices.getAlunos());
});

router.get('/:ra', async function(req, res, next) {
  console.log('entrou aqui');
  res.send(await alunosServices.getAlunoByRA(req.params.ra));
});
router.post('/', async function(req, res, next) {
  res.send(await alunosServices.addAluno(req.body));
});
//module.exports = router;
export default router;
