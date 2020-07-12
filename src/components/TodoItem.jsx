import React from 'react';
import { connect } from 'react-redux';
import { removeTodo, setTodoItemState } from '../redux/actions';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);

    this.onCheckboxChange = this.onCheckboxChange.bind(this);
    this.onDeleteButtonClick = this.onDeleteButtonClick.bind(this);
  }

  onCheckboxChange() {
    this.props.dispatch(setTodoItemState(this.props.item.id, !this.props.item.isCompleted));
  }

  onDeleteButtonClick() {
    this.props.dispatch(removeTodo(this.props.item.id));
  }

  componentDidMount() {
    console.log('mounting todoitem:', this.props.item);
  }

  componentWillUnmount() {
    console.log('unmounting todoitem:', this.props.item);
  }

  render() {
    return (
      <li className={'item'}>
        <div>
          <label>
            <div><b>{this.props.item.title}</b></div>
            <span>{this.props.item.description}</span>
          </label>
        </div>
        <div className={'checkbox'}>
          <input type="checkbox" onChange={this.onCheckboxChange} value={this.props.item.isCompleted}/>
          <button onClick={this.onDeleteButtonClick}>delete</button>
        </div>
      </li>
    );
  }
}

export default connect()(TodoItem);
