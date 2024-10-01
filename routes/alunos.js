//var express = require('express');
import express from 'express';
import alunosServices from '../services/AlunosServices.js';
import alunosController from './controllers/AlunosController.js';

var router = express.Router();

/* GET alunos listing. */
router.get('/', async function(req, res, next) {
  //res.send(await alunosServices.getAlunos());
  alunosController.alunosGet(req, res);
});

router.get('/:ra', async function(req, res, next) {
  alunosController.alunosGetByRA(req, res);
  //console.log('entrou aqui');
  //res.send(await alunosServices.getAlunoByRA(req.params.ra));
});
router.post('/', function(req, res, next) {
  alunosController.alunosPost(req, res);
});
//module.exports = router;
export default router;
