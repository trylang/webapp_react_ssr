
import React from 'react'
import { Link } from "react-router-dom";
import {observer, inject} from 'mobx-react';
import PropTypes from 'prop-types';
import { CnodeState } from '../../store/cnode-state';

const datas = [{
  id: 12,
  name: '；立刻脚后跟反对'
}, {
  id: 6543,
  name: '刻录机和广泛的'
},{
  id: 5432,
  name: '哦iu一头热我'
}];
@inject("cnodeState")
@observer
export default class List extends React.Component {

  constructor() {
    super();
    this.changeName = this.changeName.bind(this);
  }

  changeName () {
    // this.props.cnodeState.name = event.target.value;
    this.props.cnodeState.changeName(event.target.value);
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.changeName}/>
        <h1>List--- {this.props.cnodeState.msg}</h1>
        <div className="master">
          <ul>
            {/* 在应用中用 Link 去链接路由 */}
            {datas.map(data => (
              <li key={data.id}><Link to={`/detail/${data.id}`}>{data.name}</Link></li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
};


List.propTypes = {
  cnodeState: PropTypes.instanceOf(CnodeState),
}