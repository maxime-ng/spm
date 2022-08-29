import {Component,OnInit} from '@angular/core';
import {NodeServices} from '../services/nodeservice';
import {TreeNode} from 'primeng/api';
import {TreeDragDropService} from 'primeng/api';
import {MessageService} from 'primeng/api';
import { Draggable } from 'primeng/dragdrop';


@Component({
  selector: 'app-dragdrop',
  templateUrl: './drag-drop.component.html',
  providers: [TreeDragDropService,MessageService],
  styleUrls: ['./drag-drop.component.scss']
})
 

export class DragDropComponent { 
  files1: TreeNode[] = [];

  files2: TreeNode[] = [];

  files3: TreeNode[] = [];

  files4: TreeNode[] = [];
  
  dialogVisible: boolean = false;
  dialogVisible2: boolean = false;

  
  constructor(private nodeService: NodeServices) { }


  ngOnInit() {
      this.nodeService.getFiles().then((files: TreeNode<any>[]) => this.files1 = files);
      this.nodeService.getFiles().then((files: TreeNode<any>[]) => this.files2 = files);
      this.files3 = [{
              label: "Backup",
              data: "Backup Folder",
              expandedIcon: "pi pi-folder-open",
              collapsedIcon: "pi pi-folder"
          }
      ];

      this.files4 = [{
              label: "Storages",
              data: "Storage Folder",
              expandedIcon: "pi pi-folder-open",
              collapsedIcon: "pi pi-folder"
          }
      ];
  }

showDialog() {
  this.dialogVisible = true;
}
shownewDialog(){
  this.dialogVisible2 = true; 
}

NodeDropfile2(e:any){
 console.log(e);
 this.files2.push(e.dragNode);
 }


NodeDropList1(e:any){
  console.log(e);
  this.files3.push(e.dragNode);
}

NodeDropList2(e:any){
  console.log(e);
  this.files4.push(e.dragNode);
}

NodeDropList(e:any){
  console.log(e);
  this.files1.push(e.dragNode);
}

}


