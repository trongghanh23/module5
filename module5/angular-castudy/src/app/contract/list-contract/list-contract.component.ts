import {Component, OnInit} from '@angular/core';
import {Contract} from '../../model/contract';

import {FacilityService} from '../../service/facility.service';
import {ContractService} from '../../service/contract.service';

@Component({
  selector: 'app-list-contract',
  templateUrl: './list-contract.component.html',
  styleUrls: ['./list-contract.component.css']
})
export class ListContractComponent implements OnInit {
  contract: Contract [] = [];

  constructor(private contractService: ContractService) {
  }

  ngOnInit() {
    this.getAll();

  }

  getAll() {
    this.contractService.getAll().subscribe(value => {
      this.contract = value;
    }, error => {
    }, () => {
    });
  }
}
