const dados = new Array();

const alunosRepository = {
    isEmpty() {
        return dados.length === 0;
    },
    size() {
        return dados.length;
    },
    getAll() {
        return dados;
    },
    getById(id) {
        return dados.find((aluno) => aluno.id === id);
    },
    add(aluno) {
        dados.push(aluno);
    }
};

export default alunosRepository;
