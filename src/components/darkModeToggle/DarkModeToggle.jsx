"use client"

import { COLORS } from '@/style/colors'
import React, { useContext } from 'react'
import { ThemeContext } from '../../../context/ThemeContext'

const DarkModeToggle = () => {

    const { toggle, mode } = useContext(ThemeContext)

    return (
            <div 
                className='p-1 flex content-between items-center w-14 h-6 border-2 rounded-2xl relative'
                onClick={toggle}
            >
                <div className=''>🌙</div>
                <div className=''>☀️</div>
                <div 
                    className="w-5 h-4 rounded-full absolute"
                    style={{
                    backgroundColor: COLORS.bg_logout_navbar,
                    ...(mode === "light" ? { left: "2px" } : { right: "3px" })
                    }}
                />
            </div>
    ) 
}   

    export default DarkModeToggle
