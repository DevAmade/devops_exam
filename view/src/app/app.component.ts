import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { AppService } from './app.service';
import { User } from '../tools';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        RouterOutlet,
        CommonModule,
        HttpClientModule,
    ],
    templateUrl: './app.component.html',
    providers: [
        AppService,
    ]
})
export class AppComponent implements OnInit {
    public users: User[] = [];
    public error: any;
    public hasUsers: boolean = false;
    public hasError: boolean = false;

    constructor(private service: AppService) {}
    
    public ngOnInit(): void {
        this.service.getAllUsers().subscribe({
            next: data => this.displayUsers(data),
            error: error => this.displayError(error)
        });
    }

    private displayUsers(data: User[]): void {
        this.users = data;
        this.error = null;
        this.hasError = false;
        this.hasUsers = true;
    }

    private displayError(error: any): void {
        this.users = [];
        this.error = error;
        this.hasUsers = false;
        this.hasError = true;
    }
}
