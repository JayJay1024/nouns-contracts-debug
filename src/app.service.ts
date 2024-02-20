import { Injectable } from '@nestjs/common';
import { NounsTokenFactory } from '@nouns/contracts';

@Injectable()
export class AppService {
  getHello(): string {
    const nounsToken = new NounsTokenFactory();
    return 'Nouns Token Bytecode:' + nounsToken.bytecode;
  }
}
