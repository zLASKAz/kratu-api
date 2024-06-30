import { Test, TestingModule } from '@nestjs/testing';
import { KratuService } from './kratu.service';

describe('KratuService', () => {
  let service: KratuService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KratuService],
    }).compile();

    service = module.get<KratuService>(KratuService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
