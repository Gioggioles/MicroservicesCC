import dayjs from 'dayjs/esm';

import { NotificationType } from 'app/entities/enumerations/notification-type.model';

import { INotification, NewNotification } from './notification.model';

export const sampleWithRequiredData: INotification = {
  id: 30621,
  date: dayjs('2023-01-27T21:21'),
  sentDate: dayjs('2023-01-27T14:14'),
  format: NotificationType['SMS'],
  userId: 55330,
  productId: 77848,
};

export const sampleWithPartialData: INotification = {
  id: 25492,
  date: dayjs('2023-01-27T20:50'),
  details: 'Music Danemark',
  sentDate: dayjs('2023-01-27T09:28'),
  format: NotificationType['SMS'],
  userId: 900,
  productId: 32606,
};

export const sampleWithFullData: INotification = {
  id: 36914,
  date: dayjs('2023-01-27T03:36'),
  details: 'teal card',
  sentDate: dayjs('2023-01-27T13:59'),
  format: NotificationType['SMS'],
  userId: 65653,
  productId: 75473,
};

export const sampleWithNewData: NewNotification = {
  date: dayjs('2023-01-27T08:37'),
  sentDate: dayjs('2023-01-27T16:12'),
  format: NotificationType['SMS'],
  userId: 79381,
  productId: 16952,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
