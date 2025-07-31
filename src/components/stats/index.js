import React from 'react';
import './style.scss';

const EmptyState = () => (
  <div className="empty-state">
    <img src="https://cdn-icons-png.flaticon.com/512/3575/3575768.png" width="80" alt="Empty" />
    <h3>No tasks yet</h3>
    <p>Add your first task to get started!</p>
  </div>
);

export default EmptyState;
