import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Member } from '../../_model/member';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.css']
})
export class MemberCardComponent {
  @Input() member: Member | undefined;

  constructor() {

  }

  ngOnInit(): void {

  }

}
