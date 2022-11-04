namespace App {
    // Drag & Drop Interfaces
    export interface Draggable {
        dragStartHandler(event: DragEvent): void;
        dragEndHandler(event: DragEvent): void;
      }
      
      export interface DragTarget {
        dragOverHandler(event: DragEvent): void;
        dropHandler(event: DragEvent): void;
        dragLeaveHandler(event: DragEvent): void;
      }
      //export indica que estas interfaces estão disponíveis fora deste namespace

}
