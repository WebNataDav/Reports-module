'use client';

import { useEffect, useMemo, useState } from 'react';
import { Box } from '@mui/material';
import { useDebounce } from 'use-debounce';
import { PagesTitles } from '@constants';
import { Nullable } from '@types';
import Table from '@components/library/Table';
import { initialPaginationModel, userInputDebounceDelay } from '@constants';
import { useGalvanizingCranesheetsReports } from '@hooks';
import ReportHeader from '../ReportHeader';
import { getRows } from './helpers';
import { columns, DefaultReportTableFilters } from './constants';
import ReportFilters from '../ReportFilters';
import { ReportFiltersType, OptionType } from '../ReportFilters/types';
import { filterReportRows } from '../ReportFilters/helpers';
import styles from './styles.module.scss';

const GalvanizingСranesheetReport = (): JSX.Element => {
  const [paginationModel, setPaginationModel] = useState(initialPaginationModel);
  const [reportPagination, setReportPagination] = useState(initialPaginationModel);
  const [search, setSearch] = useState('');
  const [debouncedSearch] = useDebounce(search, userInputDebounceDelay);
  const [filters, setFilters] = useState<ReportFiltersType>(DefaultReportTableFilters);

  const onFilterChange = (value: string | Nullable<Date> | OptionType[], filterName: string) =>
    setFilters((prevState) => ({ ...prevState, [filterName]: value }));

  const { galvanizingCranesheetsReportsData, isLoadingCranesheetsReport, mutateReports, paginationOptions } =
    useGalvanizingCranesheetsReports({
      ...paginationModel,
      ...filters,
      search: debouncedSearch,
    });

  useEffect(() => {
    if (paginationOptions) {
      setReportPagination({ ...paginationOptions, ...paginationModel });
      mutateReports();
    }
  }, [mutateReports, paginationModel, paginationOptions]);

  const rows = useMemo(() => {
    if (!galvanizingCranesheetsReportsData?.data) return [];

    const allRows = getRows(galvanizingCranesheetsReportsData?.data);

    return filterReportRows(allRows, filters, search);
  }, [galvanizingCranesheetsReportsData, filters, search]);

  return (
    <Box className={styles.reportsWrapper}>
      <Box className={styles.reportsTabWrapper}>
        <ReportHeader title={PagesTitles.Reports.subtitles.GalvanizingСranesheetReport} />
        <ReportFilters
          selectedFilters={filters}
          onFilterChange={onFilterChange}
          search={search}
          setSearch={setSearch}
        />
        <Box className={styles.scrollWrapper}>
          <Box>
            <Table
              rows={rows}
              columns={columns}
              disableVirtualization
              setPaginationModel={setPaginationModel}
              paginationInfo={reportPagination}
              loading={isLoadingCranesheetsReport}
              showToolbarColumnsButton
              toolbarType="mui"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default GalvanizingСranesheetReport;
