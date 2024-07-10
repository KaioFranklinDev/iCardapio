// pages/api/hello.ts

import { NextApiRequest, NextApiResponse } from 'next';
import Cors from 'cors';


// Inicializar o middleware CORS
const cors = Cors({
  methods: ['GET', 'HEAD'],
});

// Função para executar middleware
function runMiddleware(req: NextApiRequest, res: NextApiResponse, fn: Function) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Executar o middleware CORS
  await runMiddleware(req, res, cors);

  res.status(200).json({ message: 'Hello, world! With Cors!' });
}
