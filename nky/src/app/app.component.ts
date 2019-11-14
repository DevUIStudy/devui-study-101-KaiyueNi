import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  menu = [{
    title: '通用设置',
    children: [
      {title: '子内容1'},
      {title: '子内容2'},
      {title: '子内容3'},
    ]
  }, {
    title: '项目管理',
    open: true,
    children: [
      {title: '项目设置模板'},
      {title: '设置项目创建者'},
      {title: '项目和成员管理', active: true,id:'file'},
    ]
  }, {
    title: '编译构建',
    children: [
    ]
  }, {
    title: '私有依赖库',
    needLoadChildren: true,
    loading: false,
    children: [
    ]
  }];
  itemClick(event) {
    console.log('item click' + JSON.stringify(event));
    console.log(event.id);
  }

  menuToggle(event) {
    console.log('menu toggle' + JSON.stringify(event));

    if (event.open && event.item.needLoadChildren) {
      event.item.loading = true;
      setTimeout(() => {
        event.item.children = [
          {title: '子内容1'},
          {title: '子内容2'}
        ];
        event.item.needLoadChildren = false;
        event.item.loading = false;
      }, 1000);
    }
  }


  constructor(){ }

  ngOnInit() { }
}

