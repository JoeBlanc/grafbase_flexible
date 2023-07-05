'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {NavLinks} from '@/constant/index'
import AuthProvider from './AuthProvider'


const Navbar = () => {
    const [session, setSession] = useState(true);
    
  return (
    <nav className='navbar flexBetween'>
        <div className='flex-1 flexStart gap-10'>   
            <Link href='/'>
                <Image
                    src='/logo.svg'
                    width={115}
                    height={43}
                    alt='Flexible'
                />
            </Link>
            <ul className='xl:flex hidden text-small gap-7'>
                {NavLinks.map((link) => (
                    <Link href={link.href} key={link.key}>{link.text}</Link>
                ))}
            </ul>
        </div>
        <div className='flexCenter gap-4'>
            {session ? (
                <>
                    Userphoto
                    <Link href="/create-post">Share</Link>
                </>) : (
                <>
                    <AuthProvider />
                </>
            )}
        </div>
    </nav>
  )
}

export default Navbar