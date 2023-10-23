import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  menuItems!: MenuItem[];

  ngOnInit(): void {
    this.menuItems = [
      {
          label: 'File',
          icon: 'pi pi-fw pi-home',
      },
      {
          label: 'Edit',
          icon: 'pi pi-fw pi-pencil',
      },
      {
          label: 'Users',
          icon: 'pi pi-fw pi-user',
          items: [
              {
                  label: 'New',
                  icon: 'pi pi-fw pi-user-plus'
              },
              {
                  label: 'Delete',
                  icon: 'pi pi-fw pi-user-minus'
              },
          ]
      },
      {
          label: 'Events',
          icon: 'pi pi-fw pi-calendar',
      },
      {
          label: 'Quit',
          icon: 'pi pi-fw pi-power-off'
      }
  ];
  }

}
