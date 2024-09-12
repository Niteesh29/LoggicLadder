import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { FormsModule } from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu'
import {MatButtonModule} from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-multilevel-dropdown',
  templateUrl: './multilevel-dropdown.component.html',
  styleUrls: ['./multilevel-dropdown.component.scss'],
  standalone:true,
  imports: [CommonModule, MultilevelDropdownComponent,FormsModule,MatMenuModule,MatButtonModule,MatIconModule]
})
export class MultilevelDropdownComponent {
  @Input() data: any[] = [];
   selectedChild: any = null;
   selectedSubChild: any = null;
   selectedSubSubChild: any = null;
   onSelectionChange(event: any, currentNode: any) {
     const selectedValue = event.target.value;
 
     if (!currentNode) {
       this.selectedChild = this.data.find(item => item.name === selectedValue);
       this.selectedSubChild = null; 
       this.selectedSubSubChild = null;
     } else if (currentNode.child) {
       this.selectedSubChild = currentNode.child.find((child: { name: any; }) => child?.name === selectedValue);
       this.selectedSubSubChild = null;
     } else if (currentNode.child) {
       this.selectedSubSubChild = currentNode.child.find((subChild: { name: any; }) => subChild.name === selectedValue);
     }
   }
}