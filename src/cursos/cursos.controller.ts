import { CursosService } from './cursos.service';
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Res } from '@nestjs/common';
//import { STATUS_CODES } from 'http';

@Controller('cursos') // Nome Controlador com o nome da rota geral
export class CursosController {
    constructor(private readonly cursosService: CursosService){

    }
    @Get("lista") // metodo get com um parametro de rota no caso lista entao ja temos curos/ e cursos/lista
    findAll(){
        return this.cursosService.findAll();
    }

    @Get(":id") // aqui conseguimos ampliar ainda mais o paramatros de rotas idicionando ID, podese colocar N parametros
    findOne(@Param("id") id: string){
        return this.cursosService.findOne(id);
    }

    @Post() // Decorator de Metodo POST
    //@HttpCode(HttpStatus.ACCEPTED)// decorator util quando o retorno é estadtico e nao como condição logica
    create(@Body() body) {
        return this.cursosService.create(body);
    }

    @Patch(":id")
    update(@Param("id") id: string, @Body() body){
        return this.cursosService.update(id, body);
    }

    @Delete(":id")
    deletar(@Param('id') id: string){
        return this.cursosService.delete(id);
    }
}
