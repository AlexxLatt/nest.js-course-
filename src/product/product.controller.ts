import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
import { ProductModel } from './product.model';
import { FindProductDto } from './dto/find-product.dto';

@Controller('product')
export class ProductController {
	@Post("create")// отправка
	async create(@Body() dto: Omit<ProductModel, "_id">){

	}

	@Get(":id") // получение
	async get(@Param("id") id:string){
		
	}

	@Delete(":id") // удаление
	async delete(@Param("id") id:string){
		
	}

	@Patch(":id")
	async patch(@Param("id") id: string , @Body() dto: ProductModel){

	}

	@HttpCode(200)// код запроса
	@Post()//
	async find(@Body() dto: FindProductDto){

	}
}
