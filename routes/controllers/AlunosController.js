import alunosServices from "../../services/AlunosServices.js";
const alunosController ={
    alunosPost: (req, res) =>{
        alunosServices.addAluno(req.body, (ralunoretornado) => {res.status(201).send(ralunoretornado)});
    },
    alunosGet: async (req, res) =>{
        res.send(await alunosServices.getAlunos());
    },
    alunosGetByRA: async (req, res) =>{
        res.send(await alunosServices.getAlunoByRA(req.params.ra));
    }
};
export default alunosController;