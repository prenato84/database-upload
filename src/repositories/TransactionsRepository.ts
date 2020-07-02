import { EntityRepository, Repository } from 'typeorm';

// import csvParse from 'csv-parse';
// import fs from 'fs';
// import path from 'path';

import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

@EntityRepository(Transaction)
class TransactionsRepository extends Repository<Transaction> {
  public async getBalance(): Promise<Balance> {
    const transactions = await this.find();

    const { income, outcome } = transactions.reduce(
      (accumulator, transaction) => {
        switch (transaction.type) {
          case 'income':
            accumulator.income += Number(transaction.value);
            break;
          case 'outcome':
            accumulator.outcome += Number(transaction.value);
            break;
          default:
            break;
        }

        return accumulator;
      },
      {
        income: 0,
        outcome: 0,
        total: 0,
      },
    );

    const total = income - outcome;

    return { income, outcome, total };
  }
  // public async loadCSV(fileName: string): any[] {
  //   const csvFilePath = path.resolve(__dirname, '..', '..', 'tmp', fileName);
  //   const readCSVStream = fs.createReadStream(csvFilePath);
  //   const parseStream = csvParse({
  //     from_line: 2,
  //     ltrim: true,
  //     rtrim: true,
  //   });
  //   const parseCSV = readCSVStream.pipe(parseStream);
  //   const lines = [];
  //   parseCSV.on('data', line => {
  //     lines.push(line);
  //   });
  //   await new Promise(resolve => {
  //     parseCSV.on('end', resolve);
  //   });
  //   return lines;
  // }
}

export default TransactionsRepository;
