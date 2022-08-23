import { NgModule } from "@angular/core";

import { TableModule } from "primeng/table";
import { ConfirmationService, MessageService } from "primeng/api";
import { ButtonModule } from "primeng/button";
import { InputTextModule } from "primeng/inputtext";
import { ToolbarModule } from "primeng/toolbar";
import { FileUploadModule } from "primeng/fileupload";
import { ToastModule } from "primeng/toast";
import { CalendarModule } from "primeng/calendar";
import { SliderModule } from "primeng/slider";
import { MultiSelectModule } from "primeng/multiselect";
import { ContextMenuModule } from "primeng/contextmenu";
import { DialogModule } from "primeng/dialog";
import { DropdownModule } from "primeng/dropdown";
import { ProgressBarModule } from "primeng/progressbar";
import { RatingModule } from "primeng/rating";
import { RadioButtonModule } from "primeng/radiobutton";
import { InputNumberModule } from "primeng/inputnumber";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { InputTextareaModule } from "primeng/inputtextarea";
import { PanelModule } from "primeng/panel";
import { TreeTableModule } from "primeng/treetable";
import { TreeModule } from "primeng/tree";
import { MessagesModule } from "primeng/messages";
import { MessageModule } from "primeng/message";

@NgModule({
  declarations: [],
  imports: [
    TableModule,
    ButtonModule,
    InputTextModule,
    ToolbarModule,
    FileUploadModule,
    ToastModule,
    CalendarModule,
    TreeModule,
    ProgressBarModule,
    SliderModule,
    ContextMenuModule,
    MultiSelectModule,
    DialogModule,
    MessagesModule,
    MessageModule,
    DropdownModule,
    RatingModule,
    InputTextareaModule,
    TreeTableModule,
    RadioButtonModule,
    InputNumberModule,
    ConfirmDialogModule,
    PanelModule,
  ],
  exports: [
    TableModule,
    ButtonModule,
    InputTextModule,
    ToolbarModule,
    FileUploadModule,
    ToastModule,
    CalendarModule,
    TreeModule,
    ProgressBarModule,
    SliderModule,
    ContextMenuModule,
    MultiSelectModule,
    DialogModule,
    MessagesModule,
    MessageModule,
    DropdownModule,
    RatingModule,
    InputTextareaModule,
    TreeTableModule,
    RadioButtonModule,
    InputNumberModule,
    ConfirmDialogModule,
    PanelModule,
  ],
  providers: [ConfirmationService, MessageService],
})
export class PrimengModule {}
