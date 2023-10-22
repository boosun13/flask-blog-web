import { useEffect, useState } from 'react'
import axios from 'axios'

type Viewer = {
  id: string
}

export const useViewer = () => {
  const viewer = async () =>{
    const [viewer, setViewer] = useState<Viewer | null>(null)
    const response = await fetch('http://localhost:3000/viewer', {})
    
    setViewer(await response.json())

    viewer
  }

  return { viewer }
}
