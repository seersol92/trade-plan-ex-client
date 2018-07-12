import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
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
  selector: 'app-trade-startegy',
  templateUrl: './trade-startegy.component.html',
  styleUrls: ['./trade-startegy.component.scss']
})
export class TradeStartegyComponent implements OnInit {

  public closeResult: string;
  public strategyText: String = '';
  public dailyStrategyList: any = [];
  public longTermStrategyList: any = [];
  public isFormProcessing: Boolean = false;
  public isEditStrategy: Boolean = false;
  public editId: number = null;
  private strategyType: number = null;
  private modalRef: NgbModalRef;
  public title = 'Trade Strategy';
  constructor(
    private api: ApiService,
    private toastr: ToastrService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
  }

  submitStrategy() {
    let type =  '';
    if (this.strategyType === 1) {
      this.dailyStrategyList.push(this.strategyText);
      type =  'Daily Strategy';
    } else {
      this.longTermStrategyList.push(this.strategyText);
      type =  'Long Term strategy';
    }
    this.modalRef.close();
    this.toastr.success(`${type} has been added successfully!!`, 'Info!');
  }

  addStrategies(type, content) {
    this.strategyType =  type;
    this.modalRef = this.modalService.open(content, {
      size: 'lg',
      windowClass: 'dark-modal'
    });
    this.modalRef.result.then(
      result => {
        this.strategyText = '';
        this.editId = null;
        this.isEditStrategy = false;
        this.closeResult = `Closed with: ${result}`;
      },
      reason => {
        this.strategyText = '';
        this.editId = null;
        this.isEditStrategy = false;
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    );
  }

  updateStrategy() {
    let type =  '';
    if (this.strategyType === 1) {
      this.dailyStrategyList[this.editId] = this.strategyText;
      type =  'Daily Strategy';
    } else {
      this.longTermStrategyList[this.editId] = this.strategyText;
      type =  'Long Term strategy';
    }
    this.editId = null;
    this.isEditStrategy = false;
    this.modalRef.close();
    this.toastr.success(`${type} has been updated successfully!!`, 'Info!');
  }

  editStrategyData(stratType: number, index: number, content) {
    this.isEditStrategy = true;
    this.strategyType =  stratType;
    this.editId = index;
    if (stratType === 1) {
      this.strategyText =  this.dailyStrategyList[index];
    } else {
      this.strategyText =  this.longTermStrategyList[index];
    }
    this.addStrategies(stratType, content);
  }

  deleteStrategy(stratType: number, index: number) {
    if (confirm('Are you sure, you want to delete?')) {
      let type =  '';
      if (stratType === 1) {
          this.dailyStrategyList.splice(index, 1);
          type =  'Daily Strategy';
      } else {
         this.longTermStrategyList.splice(index, 1);
         type =  'Long Term strategy';
      }
    this.toastr.success(`${type} has been deleted successfully!!`, 'Info!');
    }
  }
    // This function is used in open
  private getDismissReason(reason: any): string {
    this.strategyText = '';
    this.editId = null;
    this.isEditStrategy = false;
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
