import { Nullable } from '@types';

export type ReportsTableColumns = {
  id: string;
  orderNumber: string;
  dateCreated: Nullable<string>;
  PO: string;
  customer: string;
  tracking: string;
  description: string;
  status: string;
  dip: string;
  pieces: number;
  unitWeight: string;
  totalWeight: string;
  zincPickUp: Nullable<string>;
  galvanizingCost: Nullable<number>;
  additionalWorkCost: Nullable<number>;
  whileYouWaitCost: Nullable<number>;
  specialPackagingCost: Nullable<number>;
  totalPrice: Nullable<number>;
};

export type FlatLineItem = {
  id: string;
  orderNumber: string;
  lineItemCreatedAt: string;
  customerPO: string;
  customerName: string;
  tracking: string;
  description: string;
  galvanizingStatus: string;
  dipType: string;
  quantity: number;
  weightForEachPiece: number;
  totalWeight: string;
  zincPickUp: string;
  galvanizingCost: string;
  powderCoatingCost: string;
  specialPackagingCost: string;
  additionalWorkCost: string;
  whileYouWaitCost: string;
};
