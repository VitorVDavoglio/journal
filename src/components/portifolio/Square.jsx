"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { COLORS } from '@/style/colors'

const Square = ({urlImage, urlLink, text, alt}) => {
    return (
        <div className='border-5 rounded-md w-72 h-72 relative'>
            <Link 
                href={urlLink}
                style={{color: COLORS.white}}
                onMouseEnter={(e) => (e.currentTarget.style.color = COLORS.bg_logout_navbar)}
                onMouseLeave={(e) => (e.currentTarget.style.color = COLORS.white)}
            >
                <Image
                    src={urlImage}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full max-h-72 object-cover absolute"
                    alt={alt}
                />
                <span 
                    className="absolute right-2.5 bottom-2.5 font-bold text-2xl transition-colors"
                >
                    {text}
                </span>
            </Link>
        </div>
    )
}

export default Square
