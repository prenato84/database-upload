import { getCustomRepository } from 'typeorm';
import Transaction from '../models/Transaction';

import TransactionsRepository from '../repositories/TransactionsRepository';

class ImportTransactionsService {
  async execute(): Promise<Transaction[]> {
    const transactionsRepository = getCustomRepository(TransactionsRepository);

    const transactions = await transactionsRepository.loadCSV('file.csv');

    return transactions;
  }
}

export default ImportTransactionsService;
