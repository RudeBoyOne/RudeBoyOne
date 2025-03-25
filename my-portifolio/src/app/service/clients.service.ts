import { Injectable } from '@angular/core';
import { Clients } from './models/clients.model';
import { CLIENTS } from './mocks/clients.mock';

@Injectable({
    providedIn: 'root'
})
export class ClientsService {

    private clients = CLIENTS;

    constructor() { }

    findAllClients(): Clients[] {
        return this.clients;
    }
}
