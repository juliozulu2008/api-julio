import { CursosService } from './cursos.service';
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Res } from '@nestjs/common';
import { STATUS_CODES } from 'http';

@Controller('cursos') // Nome Controlador com o nome da rota geral
export class CursosController {
    constructor(private readonly cursosService: CursosService){

    }
    @Get("lista") // metodo get com um parametro de rota no caso lista entao ja temos curos/ e cursos/lista
    findAll(@Res() response){
        return response.status(200).send("Listagem de Cursos");
    }

    @Get(":id") // aqui conseguimos ampliar ainda mais o paramatros de rotas idicionando ID, podese colocar N parametros
    findOne(
        @Param("id") id: string
    ){
        return `Curso #${id}`;
    }

    @Post() // Decorator de Metodo POST
    @HttpCode(HttpStatus.ACCEPTED)// decorator util quando o retorno é estadtico e nao como condição logica
    create(@Body() body) {
        return body;
    }

    @Patch(":id")
    update(@Param("id") id: string, @Body() Body){
        return `Atualizaçãodo do Curso #${id}`;
    }

    @Delete(":id")
    deletar(@Param('id') id: string){
        return `Curso #${id}, deletado`;
    }
}
