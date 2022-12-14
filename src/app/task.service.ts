import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { TaskData } from './task-data';
import { Category } from './category';
import { Priority } from './priority';
import { User } from './user';
import { Status } from './status';
import { AddUser } from './add-user';

@Injectable({
  providedIn: 'root'

})
export class TaskService {

  constructor(private http: HttpClient) { }

  getTasks() {
    return this.http.get<TaskData[]>("https://danielstoehr.pythonanywhere.com/tasks/")
  }

  getCategories() {
    return this.http.get<Category[]>("https://danielstoehr.pythonanywhere.com/categories/")
  }

  getPriorities() {
    return this.http.get<Priority[]>("https://danielstoehr.pythonanywhere.com/priorities/")
  }

  getUsers() {
    return this.http.get<User[]>("https://danielstoehr.pythonanywhere.com/users/")
  }

  getStatus() {
    return this.http.get<Status[]>("https://danielstoehr.pythonanywhere.com/status/")
  }



  addTask(task: TaskData) {
    return this.http.post<TaskData>("https://danielstoehr.pythonanywhere.com/tasks/", task) // send data to backend
  }

  addUser(user: AddUser) {
    return this.http.post<AddUser>("https://danielstoehr.pythonanywhere.com/register/", user)
  }
}