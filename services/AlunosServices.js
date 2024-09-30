import { alunosCollection } from "./FirebaseAcess.js";
import { doc, query, set, where, getDoc, getDocs, getDocFromCache } from "firebase/firestore";
const alunosServices = {
    getAlunos: async () =>{
        const q = query(alunosCollection);
        const querySnapshot = await getDocs(q);
        const alunos = [];
        querySnapshot.forEach((doc) => {
            alunos.push(doc.data());
        });
        return alunos;
    },
    getAlunoByRA: async (ra) =>{
        const ref = doc(alunosCollection, ra);
        const aluno = await getDoc(ref);
        return aluno.data();

    },
    addAluno: async (aluno) =>{
        const ref = doc(alunosCollection, aluno.ra);
        await set(ref, aluno);
        return aluno;
    }

}

export default alunosServices;