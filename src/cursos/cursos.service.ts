import { Injectable } from '@nestjs/common';
import { Curso } from './entities/curso.entities';
//as regras sao implantadas no serviçe e nao no controller

@Injectable()
export class CursosService {
    private cursos: Curso[]=[
        {
            id: 1,
            nome: "Fundamentos JS",
            descricao: " Base solida que ira acompnhar o Dev JS",
            tags:["Js","Dev", "dev-web", "web"]
        },
        {
            id: 2,
            nome: "Fundamentos NEXST.JS",
            descricao: " Base solida que ira acompnhar o NEST.JS",
            tags:["Js","Dev", "dev-web", "web"]
        },
        {
            id: 3,
            nome: "Algoritimos e Logica de Programação",
            descricao: " Base solida para o Dev",
            tags:["Js","Dev", "dev-web", "web"]
        }
    ];
    findAll(){
        return this.cursos;
    }
    findOne(id: string){
        return this.cursos.find((curso:Curso)=>curso.id === Number(id));
    }

    create(createCursoDto: any){
        this.cursos.push(createCursoDto);
    }

    update(id:string, updateCursoDto: any){
        const indiceCurso = this.cursos.findIndex(curso => curso.id === Number(id));
        this.cursos[indiceCurso] = updateCursoDto;
    }

    delete(id: string){
        const indiceCurso = this.cursos.findIndex(curso => curso.id === Number(id));
        if (indiceCurso >= 0) {
            this.cursos.slice(indiceCurso, 1);
        }
    }
}
