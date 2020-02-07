import { Injectable } from '@nestjs/common';
import Item from './interfaces/item.interface';
import { CreateItemDto } from './dto/create-item.dto';

@Injectable()
export class ItemsService {
  private items: Item[] = [
    { id: '1', name: 'apsqwd', qty: 3 },
    { id: '2', name: 'oijtwf', qty: 5 },
    { id: '3', name: 'oivdcv', qty: 2 },
    { id: '4', name: 'zpoqwe', qty: 1 },
    { id: '5', name: 'mbapxl', qty: 9 },
  ];

  index(): Item[] {
    return this.items;
  }

  show(id: string): Item {
    return this.items.find(i => i.id == id);
  }

  store(item: Item): Item {
    this.items.push({
      ...item,
      id: String(Number(this.items[this.items.length - 1].id) + 1),
    });
    return this.items[this.items.length - 1];
  }

  update(id: string, item: CreateItemDto): Item | object {
    const index = this.items.map(i => i.id).indexOf(id);
    this.items[index] = { ...item, id };
    return this.items[index];
  }

  delete(id: string): void {
    console.log(id);
    this.items = this.items.filter(item => item.id !== id);
    return;
  }
}
