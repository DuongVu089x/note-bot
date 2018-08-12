import { Request, Response } from 'express';

export class ProductRoutes {
  public productRoutes(app): void {
    app.route('/product').get((req: Request, res: Response) => {
      res.status(200).send({
        message: 'GET product successfulll!!!!'
      });
    });
  }
}
