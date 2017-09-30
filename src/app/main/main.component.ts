import { Component, OnInit } from '@angular/core';
import { Contact } from '../model/contact.model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  contacts: Contact[];
  expanded: boolean[];
  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.fetchData().subscribe(res => {
      this.contacts = res.contacts;
      this.expanded = new Array<boolean>(this.contacts.length);
      this.expanded.fill(false);
    });
  }

  expand(i: number) {
    this.expanded[i] = !this.expanded[i];
  }

}
