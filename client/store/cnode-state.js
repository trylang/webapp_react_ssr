
// export default {name: 'Koa'}

import {observable, computed, autorun, action} from 'mobx';

export class CnodeState {
  constructor({count, name} = {count: 0, name: 'Jane123'}) {
    this.count = count;
    this.name = name;
  }

  @observable count;
  @observable name;
  @computed get msg() {
    return `${this.name} say count is ${this.count}`;
  }
  @action add() {
    this.count += 1;
  }
  @action changeName(name) {
    this.name = name;
  }
 
  toJson() {
    return {
      count: this.count,
      name: this.name,
    }
  }
}

const cnodeState = new CnodeState()

autorun(() => {
  console.log(cnodeState.msg);
})

setInterval(() => {
  cnodeState.add();
}, 1000)

export default cnodeState;

