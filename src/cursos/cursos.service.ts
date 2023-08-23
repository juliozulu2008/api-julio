import { Injectable } from '@nestjs/common';
import { Curso } from './entities/curso.entities';

@Injectable()
export class CursosService {
    private cursos: Curso[]=[
        {
            id: 1,
            nome: "Fundamentos JS",
            descricao: " Base solida que ira acompnhar o Dev JS",
            tags:["Js","Dev", "dev-web", "web"]
        }
    ];
}
