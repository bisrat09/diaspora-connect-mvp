import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-provider-card',
  template: `
    <div class="card">
      <img [src]="provider.photo" alt="profile" />
      <h3>{{ provider.name }}</h3>
      <p>{{ provider.category }} - {{ provider.location }}</p>
      <a [href]="'mailto:' + provider.email">Contact</a>
    </div>
  `,
  styles: [`.card { padding: 1rem; border: 1px solid #ccc; border-radius: 8px; }`]
})
export class ProviderCardComponent {
  @Input() provider: any;
}