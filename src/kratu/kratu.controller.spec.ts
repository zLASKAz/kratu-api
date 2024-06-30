import { Test, TestingModule } from '@nestjs/testing';
import { KratuController } from './kratu.controller';

describe('KratuController', () => {
  let controller: KratuController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KratuController],
    }).compile();

    controller = module.get<KratuController>(KratuController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
