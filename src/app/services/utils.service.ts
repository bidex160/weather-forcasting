import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root',
})
export class UtilService {
  constructor(private snackBar: MatSnackBar) {}

  /**
   * open snackbar notification
   * @param message message to display
   * @param duration  optional - durations
   */
  openSnackBar(message: string, duration: number = 3) {
    this.snackBar.open(message, '', {
      duration: duration * 1000,
    });
  }
}
