import { getStringNumberOrZero } from 'src/utils/number-utils';
import { formatDateOrNull } from 'src/utils/date-utils';
import { ReportsTableColumns, FlatLineItem } from './types';

export const getRows = (items?: FlatLineItem[]): ReportsTableColumns[] => {
  if (!items) return [];

  return items.map((item) => {
    const galvanizingCost = getStringNumberOrZero(item.galvanizingCost);
    const additionalWorkCost = getStringNumberOrZero(item.additionalWorkCost);
    const powderCoatingCost = getStringNumberOrZero(item.powderCoatingCost);
    const specialPackagingCost = getStringNumberOrZero(item.specialPackagingCost);
    const whileYouWaitCost = getStringNumberOrZero(item.whileYouWaitCost);

    const totalCost =
      galvanizingCost + additionalWorkCost + powderCoatingCost + specialPackagingCost + whileYouWaitCost;

    return {
      id: item.id,
      orderNumber: item.orderNumber,
      dateCreated: formatDateOrNull(item.lineItemCreatedAt),
      customer: item.customerName,
      PO: item.customerPO,
      tracking: item.tracking,
      description: item.description,
      status: item.galvanizingStatus,
      dip: item.dipType,
      pieces: item.quantity,
      unitWeight: `${item.weightForEachPiece} lbs`,
      totalWeight: `${item.totalWeight} lbs`,
      zincPickUp: item.zincPickUp,
      galvanizingCost,
      additionalWorkCost,
      whileYouWaitCost,
      specialPackagingCost,
      powderCoatingCost,
      totalPrice: totalCost,
    };
  });
};
