import { Component, OnInit } from '@angular/core';
import { DataService, Message } from '../services/data.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public messages: Message[];

  public refillList$: Observable<any> = this.data.getMailsList$()
    .pipe(
      tap((data) => console.log(data))
    );

  constructor(
    private data: DataService,
    public http: HttpClient
  ) { }

  ngOnInit(): void {
    this.data.loadMedicationPlan$();
  }

}
