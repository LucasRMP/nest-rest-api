import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Body,
  Param,
} from '@nestjs/common';
import { ItemsService } from './items.service';
import Item from './interfaces/item.interface';
import { CreateItemDto } from './dto/create-item.dto';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  index(): Item[] {
    return this.itemsService.index();
  }

  @Get(':id')
  show(@Param('id') id: string): Item | object {
    return this.itemsService.show(id);
  }

  @Post()
  store(@Body() item: CreateItemDto): Item | object {
    return this.itemsService.store(item);
  }

  @Put(':id')
  update(@Body() item: CreateItemDto, @Param('id') id: string): Item | object {
    return this.itemsService.update(id, item);
  }

  @Delete(':id')
  destroy(@Param('id') id: string): void {
    return this.itemsService.delete(id);
  }
}
