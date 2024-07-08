import React from 'react';
import { createRoot } from 'react-dom/client'
import Reregister from './registration/pages/Reregister';

// TODO: pull in specific elements from the shortcode to use as registration
// var root = document.getElementById('root');
// ReactDOM.render(<X {...(root.dataset)} />, root);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Reregister year={ container.dataset.year } />);
