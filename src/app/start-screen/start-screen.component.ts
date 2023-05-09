import { Component } from '@angular/core'
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-screen',
  templateUrl: 'start-screen.component.html',
  styleUrls: ['start-screen.component.css'],
})
export class StartScreenComponent {
  constructor(public router: Router) {}
}
