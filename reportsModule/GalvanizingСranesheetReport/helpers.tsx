import { formatDateOrNull } from 'src/utils/date-utils';
import { CraneTableColumns, CraneReport } from './types';

export const getRows = (items?: CraneReport[]): CraneTableColumns[] => {
  if (!items) return [];

  return items.map((item) => {
    return {
      id: item.id,
      orderNumber: item.orderNumber,
      dateCreated: formatDateOrNull(item.rackCreatedAt),
      customer: item.customerName,
      PO: item.customerPO,
      tracking: item.tracking,
      lineItemType: item.lineItemType,
      lineItemDescription: item.description,
      pieces: item.quantity,
      status: item.status,
      rackNumber: item.rackNumber,
      rackType: item.rackType,
      firstDipKettleInTime: formatDateOrNull(item.firstDipKettleInTime),
      firstDipKettleOutTime: formatDateOrNull(item.firstDipKettleOutTime),
      firstDipTimeRange: formatDateOrNull(item.firstDipTimeRange),
      secondDipKettleInTime: formatDateOrNull(item.secondDipKettleInTime),
      secondDipKettleOutTime: formatDateOrNull(item.secondDipKettleOutTime),
      secondDipTimeRange: formatDateOrNull(item.secondDipTimeRange),
      rackWeight: item.rackWeight,
      firstDipWeightIn: item.firstDipWeightIn,
      firstDipWeightOut: item.firstDipWeightOut,
      secondDipWeightIn: item.secondDipWeightIn,
      secondDipWeightOut: item.secondDipWeightOut,
      zincPickUp: item.zincPickUp,
      notes: item.notes?.map((noteObject) => noteObject.notes).join('; ') ?? '',
    };
  });
};
