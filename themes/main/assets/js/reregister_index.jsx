import React from 'react';
import { createRoot } from 'react-dom/client'
import Reregister from './registration/pages/Reregister';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Reregister year={ container.dataset.year } />);
