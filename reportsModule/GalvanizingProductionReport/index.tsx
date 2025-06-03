'use client';

import { useEffect, useMemo, useState } from 'react';
import { Box } from '@mui/material';
import { useDebounce } from 'use-debounce';
import { PagesTitles } from '@constants';
import { Nullable } from '@types';
import Table from '@components/library/Table';
import { initialPaginationModel, userInputDebounceDelay } from '@constants';
import { useGalvanizingProductionReports } from '@hooks';
import { getRows } from './helpers';
import { columns, columnGroupingModel, DefaultReportTableFilters } from './constants';
import ReportHeader from '../ReportHeader';
import ReportFilters from '../ReportFilters';
import { filterReportRows } from '../ReportFilters/helpers';
import { ReportFiltersType, OptionType } from '../ReportFilters/types';
import styles from './styles.module.scss';

const GalvanizingProductionReport = (): JSX.Element => {
  const [paginationModel, setPaginationModel] = useState(initialPaginationModel);
  const [reportPagination, setReportPagination] = useState(initialPaginationModel);
  const [search, setSearch] = useState('');
  const [debouncedSearch] = useDebounce(search, userInputDebounceDelay);
  const [filters, setFilters] = useState<ReportFiltersType>(DefaultReportTableFilters);

  const onFilterChange = (value: string | Nullable<Date> | OptionType[], filterName: string) => {
    setFilters((prevState) => ({ ...prevState, [filterName]: value }));
  };

  const { galvanizingProductionReportsData, isLoadingGalvanizingProductionReport, mutateReports, paginationOptions } =
    useGalvanizingProductionReports({
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
    if (!galvanizingProductionReportsData?.data) return [];

    const allRows = getRows(galvanizingProductionReportsData?.data);

    return filterReportRows(allRows, filters, search);
  }, [galvanizingProductionReportsData, filters, search]);

  return (
    <Box className={styles.reportsWrapper}>
      <Box className={styles.reportsTabWrapper}>
        <ReportHeader title={PagesTitles.Reports.subtitles.GalvanizingProductionReport} />
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
              columnGroupingModel={columnGroupingModel}
              setPaginationModel={setPaginationModel}
              paginationInfo={reportPagination}
              loading={isLoadingGalvanizingProductionReport}
              showToolbarColumnsButton
              toolbarType="mui"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default GalvanizingProductionReport;
