import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmailsListFacade } from '../store/emails-list/emails-list.facade';
import { loadList } from '../store/emails-list/emails-list.actions';
import { Observable } from 'rxjs';
// import { loadMedicationPlan } from '../store/emails-list/emails-list.actions';

export interface Message {
  fromName: string;
  subject: string;
  date: string;
  id: number;
  read: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public messages: Message[] = [
    {
      fromName: 'Matt Chorsey',
      subject: 'New event: Trip to Vegas',
      date: '9:32 AM',
      id: 0,
      read: false
    },
    {
      fromName: 'Lauren Ruthford',
      subject: 'Long time no chat',
      date: '6:12 AM',
      id: 1,
      read: false
    },
    {
      fromName: 'Jordan Firth',
      subject: 'Report Results',
      date: '4:55 AM',
      id: 2,
      read: false
    },
    {
      fromName: 'Bill Thomas',
      subject: 'The situation',
      date: 'Yesterday',
      id: 3,
      read: false
    },
    {
      fromName: 'Joanne Pollan',
      subject: 'Updated invitation: Swim lessons',
      date: 'Yesterday',
      id: 4,
      read: false
    },
    {
      fromName: 'Andrea Cornerston',
      subject: 'Last minute ask',
      date: 'Yesterday',
      id: 5,
      read: false
    },
    {
      fromName: 'Moe Chamont',
      subject: 'Family Calendar - Version 1',
      date: 'Last Week',
      id: 6,
      read: false
    },
    {
      fromName: 'Kelly Richardson',
      subject: 'Placeholder Headhots',
      date: 'Last Week',
      id: 7,
      read: false
    }
  ];

  constructor(
    public http: HttpClient,
    public emailsListFacade: EmailsListFacade
  ) { }

  // public async getMessages() {
  //
  //   let res;
  //   await this.http.get('http://localhost:3000/users')
  //     .subscribe((data: Message[]) => {
  //       console.log('data', data);
  //       res = data;
  //     });
  //
  //   return res;
  //
  // }


  public loadMedicationPlan$() {
    this.emailsListFacade.dispatch(loadList());

    // return this.actionsSubject$.pipe(
    //   ofType(MedicationActions.LoadMedicationPlanCompleted, MedicationActions.LoadMedicationPlanFailed),
    //   switchMap((action) => {
    //     if (action.type === MedicationActions.LoadMedicationPlanFailed.type) {
    //       return throwError(action.error);
    //     }
    //     return scheduled([true], asyncScheduler)
    //   })
    // );
  }


  public getMailsList$(): Observable<Array<any>> {
    return this.emailsListFacade.list$;
  }

  public getMessageById(id: number): Message {
    return this.messages[id];
  }
}
