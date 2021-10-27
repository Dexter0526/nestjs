import { Test, TestingModule } from '@nestjs/testing';
import { MoviesService } from './movies.service';

describe('MoviesService', () => {
  let service: MoviesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesService],
    }).compile();

    service = module.get<MoviesService>(MoviesService);
  });

  // it : 개별 테스트
  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it("shuoud be 4", () => {
    expect(2+2).toEqual(4);
  })
});
