import { Injectable } from '@nestjs/common';

@Injectable()
export class AutomaticConceptsService {
  getAutomaticConcepts(): string {
    return 'This action returns alla automatic-concepts';
  }
}
