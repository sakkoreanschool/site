import React from 'react';
import { createRoot } from 'react-dom/client';
import Register from './registration/pages/Register';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Register year={ container.dataset.year } />);
