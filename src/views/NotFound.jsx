import React from 'react'
import { MdOutlineCancelPresentation } from "react-icons/md";

export default function NotFound() {
  return (
    <>
        <div className='mt-30'>
            <MdOutlineCancelPresentation className='text-9xl mx-auto' />
            <h1 className='text-xl text-center font-bold text-red-600'>
                ไม่พบหน้าที่ต้องการ กรุณาลองใหม่
            </h1>
        </div>
    </>
  )
}
