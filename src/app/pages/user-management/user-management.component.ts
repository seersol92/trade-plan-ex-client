import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { User } from './../../entities/user';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';
import {
  NgbModal,
  ModalDismissReasons,
  NgbActiveModal,
  NgbModalRef
} from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from './../../services/api.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {
  public closeResult: string;
  public user: User;
  public userList: any = [];
  public isEditUser: Boolean = false;
  public isFormProcessing: Boolean = false;
  private editUserIndex: number = null;
  private modalRef: NgbModalRef;
  public title: String = 'User Management';
  constructor(
    private api: ApiService,
    private toastr: ToastrService,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.fetchUsers();
  }

  async fetchUsers() {
    await this.api.getRequest('/user-management').subscribe(
      res => {
        if (res.data !== null) {
          this.userList = res.data;
        }
      },
      err => {
        this.toastr.error(err.json().error, 'Oops!');
      }
    );
  }

  submitUser(): void {
    try {
      this.isFormProcessing = true;
      this.api.postRequest('/user-management', this.user).subscribe(
      response => {
        this.modalRef.close();
        this.userList.push(response.data);
        this.toastr.success(response.message, 'Info!');
      },
      err => {
        this.isFormProcessing = false;
        this.toastr.error(err.json().error, 'Oops!');
      }
);
    } catch (e) {
      this.toastr.error('Unable to perform delete operation!!', 'Oops!');
    }
  }

  updateUser(): void {
    try {
      this.api.updateRequest('/user-management/', this.user).subscribe(
        response => {
          this.userList[this.editUserIndex] = this.user;
          this.modalRef.close();
          this.toastr.success(response.message, 'Info!');
          this.editUserIndex = null;
        },
        err => {
          this.toastr.error(err.json().error, 'Oops!');
        }
      );
    } catch (e) {
      this.toastr.error('Unable to update user profile!!', 'Oops!');
    }

  }

  onDeleteUser(index: number) {
    try {
      const userId = this.userList[index]['_id'];
      if (userId !== '') {
        if (confirm('Are you sure to delete this user?')) {
          this.api.deleteRequest('/user-management/' + userId).subscribe(
            response => {
              this.userList.splice(index, 1);
              this.toastr.success(response.message, 'Info!');
            },
            err => {
              this.toastr.error(err.json().error, 'Oops!');
            }
          );
        }
      }
    } catch (e) {
      this.toastr.error('Unable to perform delete operation!!', 'Oops!');
    }
  }

  openModal(index: number, editUser: boolean, content: any) {
    this.user = new User();
    this.isFormProcessing = false;
    this.isEditUser = editUser; // when updating existing user
    if (this.isEditUser) {
      this.editUserIndex = index;
      this.user = this.userList[index];
    }
    this.modalRef = this.modalService.open(content, {
      size: 'lg',
      windowClass: 'dark-modal'
    });
    this.modalRef.result.then(
      result => {
        this.closeResult = `Closed with: ${result}`;
      },
      reason => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    );
  }

  // This function is used in open
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
