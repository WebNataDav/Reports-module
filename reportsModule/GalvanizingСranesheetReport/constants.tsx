import { GridColDef } from '@mui/x-data-grid';
import styles from './styles.module.scss';

export const DefaultReportTableFilters = {
  customer: [],
  createdAfter: null,
  createdBefore: null,
};

export const columns: GridColDef[] = [
  {
    field: 'orderNumber',
    headerName: 'Order Number',
    width: 150,
    cellClassName: styles.stickyColumn,
    headerClassName: styles.stickyColumn,
  },
  {
    field: 'dateCreated',
    width: 130,
    headerName: 'Creation Date',
    cellClassName: `${styles.stickyColumn} ${styles.stickyDateCreated}`,
    headerClassName: `${styles.stickyColumn} ${styles.stickyDateCreated}`,
  },
  { field: 'customer', width: 120, headerName: 'Customer' },
  { field: 'PO', width: 120, headerName: 'PO' },
  { field: 'tracking', width: 100, headerName: 'Tracking Number' },
  { field: 'lineItemType', width: 120, headerName: 'Line Item Type' },
  { field: 'lineItemDescription', width: 120, headerName: 'Line Item Description' },
  { field: 'pieces', width: 120, headerName: 'Pieces of Line Item' },
  { field: 'status', width: 120, headerName: 'Line Item Status' },
  { field: 'rackNumber', width: 120, headerName: 'Rack Number' },
  { field: 'rackType', width: 120, headerName: 'Rack Type' },
  { field: 'firstDipKettleInTime', width: 120, headerName: 'First Dip Kettle In Time' },
  { field: 'firstDipKettleOutTime', width: 120, headerName: 'First Dip Kettle Out Time' },
  { field: 'firstDipTimeRange', width: 120, headerName: 'First Dip Time Range' },
  { field: 'secondDipKettleInTime', width: 120, headerName: 'Second Dip Kettle In Time' },
  { field: 'secondDipKettleOutTime', width: 120, headerName: 'Second Dip Kettle Out Time' },
  { field: 'secondDipTimeRange', width: 120, headerName: 'Second Dip Time Range' },
  { field: 'rackWeight', width: 120, headerName: 'Rack Weight' },
  { field: 'firstDipWeightIn', width: 120, headerName: 'First Dip Weight In' },
  { field: 'firstDipWeightOut', width: 120, headerName: 'First Dip Weight Out' },
  { field: 'secondDipWeightIn', width: 120, headerName: 'Second Dip Weight In' },
  { field: 'secondDipWeightOut', width: 120, headerName: 'Second Dip Weight Out' },
  { field: 'zincPickUp', width: 100, headerName: 'Zinc Pick-Up Percentage' },
  { field: 'notes', width: 100, headerName: 'Notes' },
];
