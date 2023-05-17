import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {

  constructor(
    private snackBar: MatSnackBar
  ) { }

    notifyMsg(msg: string){
      this.snackBar.open(msg, "OK", {
        duration: 2000,
        verticalPosition: "top",
        horizontalPosition: "center"
      });
    }

}
