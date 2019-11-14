import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css']
})
export class FilesComponent implements OnInit {
  tab22acticeID = 'tab1';
  pager3 = {
    total: 648,
    pageIndex: 1,
    pageSize: 10
  };

  dataTableOptions = {
    columns: [
        {
            field: 'firstName',
            header: '用户名称',
            fieldType: 'text'
        },
        {
            field: 'lastName',
            header: '昵称',
            fieldType: 'text'
        },
        {
            field: 'gender',
            header: '用户标签',
            fieldType: 'text'
        },
        {
          field: 'dob',
          header: '企业用户',
          fieldType: 'text'
       },
        {
          field: 'role',
          header: '项目角色',
          fieldType: 'text'
        },
        {
          field: 'account',
          header: '账号体系',
          fieldType: 'text'
        },
        {
          field: 'isdisabled',
          header: '是否禁用',
          fieldType: 'text'
        },
        {
          field:'action',
          header:'操作'
        }
    ]
};

 basicDataSource = [
    {
      id: 1,
      firstName: 'Mark',
      lastName: 'Otto',
      dob: 'china',
      gender: '',
      role:'项目创建者',
      account:'华为云',
      isdisabled:'否',
    },
    {
      id: 2,
      firstName: 'Jacob',
      lastName: 'Thornton',
      gender: '',
      dob: 'china',
      role:'项目创建者',
      account:'华为云',
      isdisabled:'否'
    },
    {
      id: 3,
      firstName: 'Danni',
      lastName: 'Chen',
      gender: '',
      dob: 'china',
      expandConfig: {description: 'Danni is here'},
      role:'项目创建者',
      account:'华为云',
      isdisabled:'否'
    },
    {
      id: 4,
      firstName: 'green',
      lastName: 'gerong',
      gender: '',
      dob: 'china',
      role:'参与者',
      account:'华为云',
      isdisabled:'否'
    },
    {
      id: 5,
      firstName: 'po',
      lastName: 'lang',
      gender: '',
      dob: 'china',
      description: 'lang is here',
      role:'参与者',
      account:'华为云',
      isdisabled:'否'
    }


  ];

  constructor() { }

  ngOnInit() {
  }

}
