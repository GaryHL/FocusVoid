'use client'

import Navbar from '@/components/generic/Navbar'
import { Button } from '@/components/ui/button'
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

function Page() {
  const [timeLeft, setTimeLeft] = useState(25 * 60) // 25 minutos en segundos
  const [isRunning, setIsRunning] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [streak, setStreak] = useState(0)

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds
      .toString()
      .padStart(2, '0')}`
  }

  const handleStart = () => {
    if (!isRunning) {
      setIsRunning(true)
      setIsPaused(false)
    }
  }

  const handlePause = () => {
    setIsPaused(true)
    setIsRunning(false)
  }

  const handleResume = () => {
    setIsPaused(false)
    setIsRunning(true)
  }

  const handleReset = () => {
    setTimeLeft(25 * 60)
    setIsRunning(false)
    setIsPaused(false)
  }

  useEffect(() => {
    let timer
    if (isRunning && !isPaused && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setIsRunning(false)
            setIsPaused(false)
            setStreak((prev) => prev + 1)
            return 0
          }
          return prev - 1
        })
      }, 1000)
    }
    return () => clearInterval(timer)
  }, [isRunning, isPaused, timeLeft])

  return (
    <main className="w-full max-w-6xl mx-auto pt-8 min-h-screen flex flex-col">
      <Navbar />
      <section className="w-full flex-1 grid grid-cols-3 items-center -mt-10">
        <div className="grid w-full col-start-2 gap-8">
          <div className="flex flex-col gap-2 items-center">
            <p>Tiempo de enfoque hoy:</p>
            <p className="font-bold text-2xl">2h 30min</p>
          </div>
          <div className="w-full h-full flex justify-center items-center">
            <motion.div
              animate={
                isRunning && {
                  width: '24rem',
                  height: '24rem',
                }
              }
              className="flex flex-col items-center justify-center w-60 h-96 border border-[#595959] rounded-full bg-[#ccc]/5 backdrop-blur-md relative overflow-hidden"
            >
              <div className="bg-[#999999] w-20 h-20 absolute top-0 right-0 blur-2xl"></div>
              <div className="relative flex items-center justify-center">
                <motion.img
                  src="/pets/fox.png"
                  alt="focus"
                  width={200}
                  height={200}
                  // className="absolute blur-2xl animate-[spin_12s_linear_infinite]"
                  className="absolute blur-md opacity-75"
                  animate={
                    isRunning && {
                      scale: 3,
                      opacity: 0.5,
                      rotate: [0, 360],
                      transition: {
                        scale: {
                          duration: 0.3,
                        },
                        rotate: {
                          duration: 14,
                          repeat: Infinity,
                          repeatType: 'loop',
                          ease: 'linear',
                        },
                      },
                    }
                  }
                />
                <motion.img
                  src="/pets/fox.png"
                  className="z-10"
                  alt="focus"
                  width={200}
                  height={200}
                  animate={
                    isRunning && {
                      translateY: [-10, -30],
                      scale: 0.7,
                    }
                  }
                />
              </div>
              <motion.p
                animate={
                  isRunning && {
                    opacity: 1,
                    height: 'auto',
                    width: 'auto',
                    filter: 'blur(0px)',
                    scale: 2,
                    translateY: [-10, -30],
                  }
                }
                className="font-bold text-3xl h-0 w-0 opacity-0 blur-3xl"
              >
                {formatTime(timeLeft)}
              </motion.p>
            </motion.div>
          </div>
          <div className="w-full grid grid-cols-2 gap-2 p-6 border border-[#595959] rounded-lg bg-[#ccc]/5 backdrop-blur-md relative overflow-hidden">
            <div className="bg-[#999999] w-20 h-20 absolute top-0 right-0 blur-2xl -z-10"></div>
            <div className="w-full flex items-center justify-center">
              <p className="font-bold text-3xl">{formatTime(timeLeft)}</p>
            </div>
            <div className="w-full flex flex-col gap-2">
              <p>Racha: {streak} días</p>
              <div className="flex gap-2">
                {!isRunning && !isPaused && (
                  <Button
                    onClick={handleStart}
                    className="cursor-pointer bg-[#595959] hover:bg-[#404040] text-white"
                  >
                    Comenzar
                  </Button>
                )}
                {isRunning && !isPaused && (
                  <Button
                    onClick={handlePause}
                    className="cursor-pointer bg-[#595959] hover:bg-[#404040] text-white"
                  >
                    Pausar
                  </Button>
                )}
                {isPaused && (
                  <>
                    <Button
                      onClick={handleResume}
                      className="cursor-pointer bg-[#595959] hover:bg-[#404040] text-white"
                    >
                      Continuar
                    </Button>
                    <Button
                      onClick={handleReset}
                      className="cursor-pointer bg-[#595959] hover:bg-[#404040] text-white"
                    >
                      Reiniciar
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Page
