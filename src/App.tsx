import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import './App.css'
import DetailPage from './pages/DetailPage'
import { lazy, Suspense } from 'react'
const HomePage = lazy(() => import('./pages/HomePage')) 

const router = createBrowserRouter([
  {
    path : '/',
    element : <HomePage />
  },
  {
    path : '/detail/:id',
    element : <DetailPage />
  },
  {
    path : '*',
    element : <Navigate to ="/" />
  }
])

function App() {
  return <Suspense fallback={<p> Waiting for Lazy Load</p>}>
    <RouterProvider router={router} />

    <footer className=' w-auto bg-slate-50 text-gray-500 '>
      <div className=' text-center'>
        <p>Powered by Davide Labriola</p>
      </div>
    </footer>
  </Suspense>
}
  

export default App
