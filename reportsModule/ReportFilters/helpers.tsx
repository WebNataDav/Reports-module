import { Nullable } from '@types';
import { ReportFiltersType } from './types';

export const filterReportRows = <
  T extends {
    dateCreated: Nullable<string>;
    customer: Nullable<string>;
    orderNumber: string;
  },
>(
  rows: T[],
  filters: ReportFiltersType,
  search: string,
): T[] => {
  return rows.filter((row) => {
    const createdAt = row.dateCreated ? new Date(row.dateCreated) : null;
    if (!createdAt) return false;

    const matchCustomer = filters.customer.length ? filters.customer.some((opt) => opt.label === row.customer) : true;
    const matchCreatedAfter = filters.createdAfter ? createdAt >= filters.createdAfter : true;
    const matchCreatedBefore = filters.createdBefore ? createdAt <= filters.createdBefore : true;
    const matchOrderNumber = search ? row.orderNumber.toLowerCase().includes(search.toLowerCase()) : true;

    return matchCustomer && matchCreatedAfter && matchCreatedBefore && matchOrderNumber;
  });
};
