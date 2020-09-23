//1
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

const umPorSegundo = async() => {
    await delay().then(()=>{console.log('1s')});
    await delay().then(()=>{console.log('2s')});
    await delay().then(()=>{console.log('3s')});
}
umPorSegundo();

//2
import axios from 'axios';

async function getUserFromGithub(user){
    try{
        const resp = await axios.get(`https://api.github.com/users/${user}`);
        console.log(resp);
    }catch(err){
        console.warn('API de usuário não encontrada.');
    }
}   

getUserFromGithub('diego3g');
getUserFromGithub('diego3g124123');
getUserFromGithub('dsquarza');

//3
import axios from 'axios';

class Github {
    static async getRepositories(repo) {
        try{
            const resp = await axios.get(`https://api.github.com/repos/${repo}`);
            console.log(resp);
        }catch(err){
            console.log('Repositório não existe.');
        }
    }
}
Github.getRepositories('rocketseat/rocketseat.com.br');
Github.getRepositories('rocketseat/dslkvmskv');
Github.getRepositories('dsquarza/CursoES6-Rocketseat');

//4
import axios from 'axios';

const buscaUsuario = async(user) => {
    try {
        const resp = await axios.get(`https://api.github.com/users/${user}`);
        console.log(resp);
    } catch (err) {
        console.log('Usuário não encontrado.');
    }
}
buscaUsuario('diego3g');
buscaUsuario('dsquarza');