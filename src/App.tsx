import { useState } from 'react';
import './index.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import OTInsightsPage from './pages/OTInsightsPage';
import ResourceSlideout from './components/ResourceSlideout';
import type { OTDevice } from './types';

function App() {
  const [selectedResource, setSelectedResource] = useState<OTDevice | null>(null);

  return (
    <div className="flex h-screen overflow-hidden bg-illumio-bg-light">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-auto p-6">
          <OTInsightsPage onResourceClick={setSelectedResource} />
        </main>
      </div>
      {selectedResource && (
        <ResourceSlideout
          resource={selectedResource}
          onClose={() => setSelectedResource(null)}
        />
      )}
    </div>
  );
}

export default App;
