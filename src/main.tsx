import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import AuthProvider from './Providers/AuthProvider.tsx'

import {
  QueryClient,
  QueryClientProvider
} from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
    <App />
    </AuthProvider>
    </QueryClientProvider>
  // </React.StrictMode>,
)
