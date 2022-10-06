import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category } from '../category';
import { Priority } from '../priority';
import { TaskService } from '../task.service';
import { User } from '../user';

@Component({
  selector: 'app-dialog-add-task',
  templateUrl: './dialog-add-task.component.html',
  styleUrls: ['./dialog-add-task.component.scss']
})
export class DialogAddTaskComponent implements OnInit {

  categories: Category[] = []
  priorities: Priority[] = []
  users: User[] = []

  selected_prio = 0

  constructor(private service: TaskService) {
    this.service.getCategories().subscribe(data => this.categories = data)
    this.service.getPriorities().subscribe(data => this.priorities = data)
    this.service.getUsers().subscribe(data => this.users = data)

  }

  ngOnInit(): void {
  }

  select_prio(id: number) {
    this.selected_prio = id
  }

  submitData(f: NgForm) {
    if (this.selected_prio == 0) {
      alert("Please select priority!")
      return
    }
    this.service.addTask(f.value).subscribe(data => console.log(data));

  }
}
