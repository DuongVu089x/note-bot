import { EMA } from 'technicalindicators';

export class EmaDto {
  private period: number;
  private values: number[];

  constructor() {}

  public caculator(period, values): number[] {
    return EMA.calculate({ period: period, values: values });
  }
}
