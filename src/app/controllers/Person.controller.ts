import { Context, Get, HttpResponseOK, Post, ValidateBody } from '@foal/core';
import { getRepository } from 'typeorm';
import { Person } from '../entities/person.entity';


export class PersonController {

  @Get('/')
  foo(ctx: Context) {
    return new HttpResponseOK();
  }

  @Post('/')
  // @ValidateBody()
  async createPerson(ctx: Context) {
    const person = await getRepository(Person).save(ctx.request.body) ;
    // if()
  }

}
