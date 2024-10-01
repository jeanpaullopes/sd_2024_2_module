import { alunosCollection } from "./FirebaseAcess.js";
import { doc, query, setDoc,  getDoc, getDocs } from "firebase/firestore";
import alunosRepository from "./repositories/AlunosRepository.js";
const alunosServices = {

    getAlunos: async () =>{
        if (!alunosRepository.isEmpty()){
            return alunosRepository.getAll();
        }
        const q = query(alunosCollection);
        const querySnapshot = await getDocs(q);
        const alunos = [];
        querySnapshot.forEach((doc) => {
            alunosRepository.add(doc.data());
        });
        return alunosRepository.getAll();
    },
    getAlunoByRA: async (ra) =>{
        let alunoLocal = alunosRepository.getById(ra);
        if (alunoLocal){
            return alunoLocal;
        }
        const ref = doc(alunosCollection, ra);
        const aluno = await getDoc(ref);
        //alunosRepository.add(aluno.data());
        return aluno.data();

    },
    addAluno:(aluno, callback) =>{
        const ref = doc(alunosCollection, ""+aluno.ra);

        setDoc(ref, aluno).then(() => {
            if (callback){
                callback(aluno);
            }
        });
        
    }

}

export default alunosServices;