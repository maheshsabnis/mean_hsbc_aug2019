// 1. import Inhjectable from @angular/core
import { Injectable, EventEmitter } from "@angular/core";
@Injectable()
export class CommunicationService {
    // the event emitter that will emit the data 
    // received from sender
    receiveData: EventEmitter<number>;
    // data object that will stire the received data
    id: number;
    constructor() {
        this.id = 0;
        this.receiveData = new EventEmitter<number>();
    }

    // a method that will emit the event with data
    // this method will be invoked by sender component

    onReceiveData(id: number) {
        this.receiveData.emit(id);
    }
}