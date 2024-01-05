import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListaComponent {

  @Output() closeSidenav = new EventEmitter<void>();

  onClose() {
    this.closeSidenav.emit();
  }

}