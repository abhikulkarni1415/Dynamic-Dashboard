import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Widget from './Widget';
import { addWidget } from '../redux/actions';

const Category = ({ category }) => {
  const dispatch = useDispatch();
  const [widgetName, setWidgetName] = useState('');
  const [widgetText, setWidgetText] = useState('');

  const handleAddWidget = () => {
    const newWidget = {
      id: Date.now(),
      name: widgetName,
      text: widgetText
    };
    dispatch(addWidget(category.id, newWidget));
    setWidgetName('');
    setWidgetText('');
  };

  return (
    <div>
      <h2>{category.name}</h2>
      <div>
        {category.widgets.map(widget => (
          <Widget key={widget.id} widget={widget} categoryId={category.id} />
        ))}
      </div>
      <div>
        <input
          type="text"
          placeholder="Widget Name"
          value={widgetName}
          onChange={(e) => setWidgetName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Widget Text"
          value={widgetText}
          onChange={(e) => setWidgetText(e.target.value)}
        />
        <button onClick={handleAddWidget}>+ Add Widget</button>
      </div>
    </div>
  );
};

export default Category;
