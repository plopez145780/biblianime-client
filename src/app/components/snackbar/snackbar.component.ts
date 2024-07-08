import { Component, Inject, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MAT_SNACK_BAR_DATA, MatSnackBarAction, MatSnackBarLabel, MatSnackBarRef } from '@angular/material/snack-bar';
import { SnackBarData, SnackBarType } from '../../models/snackbar.model';
import { NgClass } from '@angular/common';

@Component({
  standalone: true,
  imports: [MatSnackBarLabel, MatSnackBarAction, MatIconModule, NgClass],
  templateUrl: './snackbar.component.html',
  styleUrl: './snackbar.component.css'
})
export class SnackBarComponent {
  snackBarRef = inject(MatSnackBarRef);
  INFO_TYPE = SnackBarType.Info;
  SUCCESS_TYPE = SnackBarType.Success;
  ERROR_TYPE = SnackBarType.Error;

  constructor(@Inject(MAT_SNACK_BAR_DATA) public readonly data: SnackBarData) {}
}
