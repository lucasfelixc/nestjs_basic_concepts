import { Injectable } from '@nestjs/common';

@Injectable()
export class ManualConceptsService {
  home(): string {
    return 'This is the home data';
  }
}
