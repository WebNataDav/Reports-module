import { Nullable } from '@types';

export interface OptionType {
  label: string;
  value?: string;
}

export interface ReportFiltersType {
  customer: OptionType[];
  createdAfter: Nullable<Date>;
  createdBefore: Nullable<Date>;
}
