import { Component, ViewChild } from '@angular/core';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from "../components/sidebar/sidebar.component";
import { TopBarComponent } from "../components/top-bar/top-bar.component";

@Component({
  selector: 'app-bodega-layout',
  imports: [RouterOutlet, SidebarComponent, MatSidenavModule, TopBarComponent],
  templateUrl: './bodega-layout.component.html',
  styleUrl: './bodega-layout.component.css'
})
export class BodegaLayoutComponent {

  @ViewChild('drawer') drawer!: MatDrawer;
  showFiller = false;

  toggleSidebar() {
    this.drawer.toggle();
  }
}
