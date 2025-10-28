import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { NavbarComponent } from "./componentes/navbar/navbar.component";
import { FooterComponent } from "./componentes/footer/footer.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [RouterLink, IonApp, IonRouterOutlet, NavbarComponent, FooterComponent],
})
export class AppComponent {
  constructor() {}
}
