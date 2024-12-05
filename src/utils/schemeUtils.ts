export interface HealthcareScheme {
  id: string;
  name: string;
  description: string;
  eligibilityCriteria: string[];
  benefits: string[];
  coverageAmount: number;
  documents: string[];
}

export const checkEligibility = (
  scheme: HealthcareScheme,
  userCriteria: Record<string, boolean>
): boolean => {
  return scheme.eligibilityCriteria.every(
    (criteria) => userCriteria[criteria] === true
  );
};