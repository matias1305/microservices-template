import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req:Request, res:Response) => {
  res.json({
    ok: true,
    message: 'Hello World'
  });
});

export default router;