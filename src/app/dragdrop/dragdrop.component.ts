import {Component,OnInit} from '@angular/core';
import {NodeServices} from './nodeservice';
import {TreeNode} from 'primeng/api';
import {TreeDragDropService} from 'primeng/api';
import {MessageService} from 'primeng/api';


@Component({
  selector: 'app-dragdrop',
  templateUrl: './dragdrop.component.html',
  providers: [TreeDragDropService,MessageService],
  styleUrls: ['./dragdrop.component.scss']
})


export class DragDropComponent { 
  files1: TreeNode[] = [];

  files2: TreeNode[] = [];

  files3: TreeNode[] = [];

  files4: TreeNode[] = [];
  
  dialogVisible: boolean = false;
  
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
}

