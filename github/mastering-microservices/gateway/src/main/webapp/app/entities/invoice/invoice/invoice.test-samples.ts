import dayjs from 'dayjs/esm';

import { InvoiceStatus } from 'app/entities/enumerations/invoice-status.model';
import { PaymentMethod } from 'app/entities/enumerations/payment-method.model';

import { IInvoice, NewInvoice } from './invoice.model';

export const sampleWithRequiredData: IInvoice = {
  id: 91509,
  date: dayjs('2023-01-27T06:51'),
  status: InvoiceStatus['ISSUED'],
  paymentMethod: PaymentMethod['CREDIT_CARD'],
  paymentDate: dayjs('2023-01-27T18:48'),
  paymentAmount: 24487,
};

export const sampleWithPartialData: IInvoice = {
  id: 45358,
  date: dayjs('2023-01-27T17:13'),
  status: InvoiceStatus['ISSUED'],
  paymentMethod: PaymentMethod['CASH_ON_DELIVERY'],
  paymentDate: dayjs('2023-01-27T10:52'),
  paymentAmount: 13016,
};

export const sampleWithFullData: IInvoice = {
  id: 55368,
  date: dayjs('2023-01-27T14:00'),
  details: 'Tugrik b users',
  status: InvoiceStatus['ISSUED'],
  paymentMethod: PaymentMethod['CASH_ON_DELIVERY'],
  paymentDate: dayjs('2023-01-27T00:18'),
  paymentAmount: 37477,
};

export const sampleWithNewData: NewInvoice = {
  date: dayjs('2023-01-27T14:50'),
  status: InvoiceStatus['CANCELLED'],
  paymentMethod: PaymentMethod['CASH_ON_DELIVERY'],
  paymentDate: dayjs('2023-01-27T04:12'),
  paymentAmount: 30708,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
