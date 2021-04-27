import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.scss'],
})
export class ThankyouComponent implements OnInit {
  orderId: Number;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation.extras.state as {
      orderId: Number;
    };

    this.orderId = state.orderId;
  }

  ngOnInit(): void {}
}
