import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.css']
})
export class NodeComponent implements OnInit {
  expanded: boolean[];
  @Input() data;

  constructor() {
  }

  ngOnInit() {
    // console.log(this.data.length);
    this.expanded = new Array<boolean>(10);
    this.expanded.fill(false);
  }

  expand(i: number) {
    this.expanded[i] = !this.expanded[i];
  }
}
