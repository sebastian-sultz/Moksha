
import { useState } from "react"
import Modal from "./Modal"
import { TbBulbFilled } from "react-icons/tb";



export default function Tips() {
  const [open, setOpen] = useState(false)
  return (
    <main className="App">
      <button className="btn btn-danger" onClick={() => setOpen(true)}>
      <TbBulbFilled className="h-14 w-14 fill-yelloww"/>
      </button>

      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="text-center w-56">
          <div className="mx-auto w-48">
            <ul className="text-left p-3">
              <li className="list-disc">hey</li>
              <li className="list-disc">hey</li>
              <li className="list-disc">hey</li>
              <li className="list-disc">hey</li>
              <li className="list-disc">hey</li>
              <li className="list-disc">hey</li>


              </ul>
            <p className="text-sm text-gray-500">
             
            </p>
          </div>
        
          
        </div>
      </Modal>
    </main>
  )
}
