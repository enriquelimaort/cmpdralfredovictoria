export interface VaccineData {
  vacuna: string;
  consultas: number;
  cierres: number;
  noAgendo: number;
  conversion: number;
}

export enum AppTab {
  DASHBOARD = 'dashboard',
  IMAGE_EDITOR = 'image_editor'
}