import { Router } from 'express';

// import TransactionsRepository from '../repositories/TransactionsRepository';
// import CreateTransactionService from '../services/CreateTransactionService';
// import DeleteTransactionService from '../services/DeleteTransactionService';
// import ImportTransactionsService from '../services/ImportTransactionsService';

const transactionsRouter = Router();

// transactionsRouter.get('/', async (request, response) => {
//   // TODO
// });

// transactionsRouter.post('/', async (request, response) => {
//   // TODO
// });

// transactionsRouter.delete('/:id', async (request, response) => {
//   // TODO
// });

// transactionsRouter.post('/import', async (request, response) => {
//   const importTransactionsService = new ImportTransactionsService();

//   const transactions = importTransactionsService.execute();

//   console.log(transactions);

//   return response.json(transactions);
// });

export default transactionsRouter;
