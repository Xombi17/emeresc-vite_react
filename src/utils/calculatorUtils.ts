export interface TreatmentCost {
  name: string;
  basePrice: number;
  category: string;
}

export interface InsurancePlan {
  name: string;
  coverage: number;
  deductible: number;
}

export const calculateTotalCost = (
  baseCost: number,
  insurance: InsurancePlan | null,
  additionalCharges: number = 0
): { total: number; covered: number; outOfPocket: number } => {
  const total = baseCost + additionalCharges;
  
  if (!insurance) {
    return {
      total,
      covered: 0,
      outOfPocket: total,
    };
  }

  const covered = Math.min((total - insurance.deductible) * (insurance.coverage / 100), total);
  const outOfPocket = total - covered;

  return {
    total,
    covered,
    outOfPocket: Math.max(outOfPocket, 0),
  };
};