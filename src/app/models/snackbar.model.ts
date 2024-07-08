export interface SnackBarData {
  message: string;
  type: SnackBarType;
}

export enum SnackBarType {
  Error = 'error-snackbar',
  Info = 'info-snackbar',
  Success = 'success-snackbar'
}