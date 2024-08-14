import React from 'react';
import { useDispatch } from 'react-redux';
import { removeWidget } from '../redux/actions';

const Widget = ({ widget, categoryId }) => {
  const dispatch = useDispatch();

  const handleRemoveWidget = () => {
    dispatch(removeWidget(categoryId, widget.id));
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
      <h3>{widget.name}</h3>
      <p>{widget.text}</p>
      <button onClick={handleRemoveWidget}>Remove</button>
    </div>
  );
};

export default Widget;
