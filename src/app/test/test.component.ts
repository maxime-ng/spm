import {Component,OnInit} from '@angular/core';
import {NodeService} from './nodeservice';
import {TreeNode} from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './test.component.html',
  styleUrls: ["./test.component.scss"],

})
export class TestComponent { 
    files: TreeNode[] = [];

    cols: any[] = [];

    constructor(private nodeService: NodeService) { }

    ngOnInit() {
        this.nodeService.getFilesystem().then((files: TreeNode<any>[]) => this.files = files);

        this.cols = [
            { field: 'name', header: 'Name' },
            { field: 'size', header: 'Size' },
            { field: 'type', header: 'Type' }
        ];
    }
}
