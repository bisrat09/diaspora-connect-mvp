import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../services/firestore.service';

@Component({
  selector: 'app-home',
  template: `
    <div class="container">
      <h1>Find Trusted Service Providers</h1>
      <div class="grid">
        <app-provider-card *ngFor="let p of providers" [provider]="p"></app-provider-card>
      </div>
    </div>
  `,
  styles: [`.grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 1rem; }`]
})
export class HomeComponent implements OnInit {
  providers: any[] = [];

  constructor(private fs: FirestoreService) {}

  ngOnInit() {
    this.fs.getProviders().subscribe(data => this.providers = data);
  }
}