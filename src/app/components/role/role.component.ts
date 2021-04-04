import { Component, OnInit } from '@angular/core';
import { Role } from './role';
import { RoleService } from './role.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {
  roles: Role[];
  constructor(private roleService:RoleService) { }

  ngOnInit() {
   this.getRoleFromService();
  }

  getRoleFromService(){
    this.roles =  this.roleService.getRoles();
  }

}
