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
  { field: 'dateCreated', width: 130, headerName: 'Creation Date' },
  { field: 'customer', width: 120, headerName: 'Customer' },
  { field: 'PO', width: 120, headerName: 'PO' },
  { field: 'tracking', width: 100, headerName: 'Tracking Number' },
  { field: 'description', width: 120, headerName: 'Line Item Description' },
  {
    field: 'status',
    width: 140,
    headerName: 'Line Item Status',
  },
  { field: 'dip', headerName: 'Dip', width: 120 },
  { field: 'pieces', headerName: 'Pieces of Line Item', width: 100 },
  { field: 'unitWeight', headerName: 'Weight of Each Piece', width: 100 },
  { field: 'totalWeight', headerName: 'Total Weight of Line Item', width: 100 },
  { field: 'zincPickUp', headerName: 'Zinc Pick-Up Percentage', width: 100 },
  {
    field: 'galvanizingCost',
    headerName: 'Galvanizing Charge',
    width: 100,
    cellClassName: styles.galvanizinColumn,
    headerClassName: styles.galvanizinColumn,
  },
  { field: 'additionalWorkCost', headerName: 'Additional Work Cost', width: 100 },
  { field: 'whileYouWaitCost', headerName: 'While You Wait', width: 100 },
  { field: 'specialPackagingCost', headerName: 'Special Package', width: 100 },
  { field: 'totalPrice', headerName: 'Total Price', width: 100 },
];

export const columnGroupingModel = [
  {
    groupId: 'costBreakdown',
    headerName: 'Cost Breakdown',
    width: 500,
    headerClassName: styles.costBreakdownHeader,
    children: [
      { field: 'galvanizingCost' },
      { field: 'additionalWorkCost' },
      { field: 'whileYouWaitCost' },
      { field: 'specialPackagingCost' },
      { field: 'totalPrice' },
    ],
  },
];
