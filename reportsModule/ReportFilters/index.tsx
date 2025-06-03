'use client';

import { useMemo } from 'react';
import { Box, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import CustomAutocomplete from '@components/library/ControlledAutocomplete/CustomAutocomplete';
import { TextField } from '@components/library';
import { Nullable } from '@types';
import CustomDatePicker from '@components/library/CustomDatePicker';
import { useCustomers } from '@hooks';
import { ReportFiltersType, OptionType } from './types';
import styles from './styles.module.scss';

interface ReportFiltersProps {
  selectedFilters: ReportFiltersType;
  onFilterChange: (value: string | Nullable<Date> | OptionType[], filterName: string) => void;
  search: string;
  setSearch: (value: string) => void;
}

const ReportFilters: React.FC<ReportFiltersProps> = ({ search, setSearch, selectedFilters, onFilterChange }) => {
  const { customers, isLoadingCustomers } = useCustomers();

  const customersOptions = useMemo(
    () =>
      customers?.map((customer) => ({
        label: customer.name ?? '',
        value: String(customer.id),
      })) || [],
    [customers],
  );

  const handleClearDates = () => {
    onFilterChange(null, 'createdAfter');
    onFilterChange(null, 'createdBefore');
  };

  return (
    <Box className={styles.filterWrapper}>
      <Box className={styles.searchWrapper}>
        <TextField
          value={search}
          label="Search"
          placeholder="Search"
          variant="outlined"
          multiline
          icon={<SearchIcon color="action" />}
          className={styles.searchField}
          onChange={(event) => setSearch(event.target.value)}
        />
        <CustomAutocomplete
          className={styles.filter}
          options={customersOptions}
          value={selectedFilters.customer}
          onChange={(newValue) => {
            onFilterChange(newValue, 'customer');
          }}
          label="Customer"
          isLoading={isLoadingCustomers}
        />
      </Box>
      <Box className={styles.pickerWrapper}>
        <CustomDatePicker
          label="Create after"
          className={styles.dateFilter}
          value={selectedFilters.createdAfter}
          onChange={(value: Nullable<Date>) => onFilterChange(value, 'createdAfter')}
        />
        <CustomDatePicker
          label="Create before"
          className={styles.dateFilter}
          value={selectedFilters.createdBefore}
          onChange={(value: Nullable<Date>) => onFilterChange(value, 'createdBefore')}
        />
        <IconButton onClick={handleClearDates}>
          <CloseIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ReportFilters;
