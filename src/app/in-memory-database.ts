import {InMemoryDbService} from "angular-in-memory-web-api"

export class InMemoryService implements InMemoryDbService
{

    createDb()
    {
        const categories =[
            {id:1, name:'Moradia' , description: 'Contas de casa'},
            {id:2, name:'Saúde' , description: 'Plano de saúde'},
            {id:3, name:'Lazer' , description: 'Passeios, Viagens'},
            {id:4, name:'Salário' , description: 'Recebimento de salário'},
            {id:5, name:'Freelas' , description: 'Trabalhos extras'},
        ];
        return {categories}
    }
}


