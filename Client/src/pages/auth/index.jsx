import React, { useState } from 'react'
import Victory from "../../assets/victory.svg"
import Background from "../../assets/login2.png"

import { Tabs, TabsList, TabsTrigger, TabsContent } from "../../components/ui/tabs"
import { Input } from "../../components/ui/input"
import { Button } from "../../components/ui/Button"
function Auth() {
  const [email, setEmail] = useState("");
  const [confirm, setConfirm] = useState("")
  const [password, setPassword] = useState("");

  const handleLogin = async () => {

  }
  const handleSignup = async () => {

  }

  return (
    <div className='h-[100vh] w-[100wh]  flex items-center justify-center '>
      <div className='h-[80vh] bg-white border-2 border-white
       shadow-2xl w-[80vw] text-opacity-90
       md:w-[90vw] lg:w[70vw]  xl:[60vw] rounded-3xl grid xl:grid-cols-2'>
        <div className='flex flex-col gap-10 items-center justify-center'>
          <div className='flex flex-col items-center justify-center  '>
            <div className='flex items-center justify-center'>
              <h1 className='text-5xl font-bold md:text-6xl'>
                Welcome
              </h1>
              <img src={Victory} alt="" className='h-[100px]' />
            </div>
            <p className='font-medium text-center'>
              Fill in the details to get Started with the best chat app!
            </p>
          </div>
          <div className="flex items-center justify-center w-full">
            <Tabs className="w-3/4">
              <TabsList className="bg-transparent rounded-none w-full ">
                <TabsTrigger value="login"
                  className="data-[state=active]:bg-transparent text-black text-opacity-90 rounded-none w-full border-b-2 data-[state=active]:text-black
                data-[state=active]:font-semibold data-[state=active]:border-b-purple-500 p-3 transition-all duration-300
                "
                >Login</TabsTrigger>
                <TabsTrigger value="signup"
                  className="data-[state=active]:bg-transparent text-black text-opacity-90 rounded-none w-full border-b-2 data-[state=active]:text-black
                data-[state=active]:font-semibold data-[state=active]:border-b-purple-500 p-3 transition-all duration-300
                "
                >Signup</TabsTrigger>
              </TabsList>
              <TabsContent className="flex gap-5 mt-10  flex-col" value="login">
                <Input placeholder="Email" type="email"
                  className="rounded-full p-6"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} />
                <Input placeholder="Password" type="password"
                    className="rounded-full p-6"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} />
                <Button className="rounded-full p-6" onClick={handleLogin}>Login</Button>
              </TabsContent>
              <TabsContent value="signup" className="flex  gap-5  flex-col">
                <Input placeholder="Email" type="Email"
                      className="rounded-full p-6"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} />
                <Input placeholder="Password" type="password"
                      className="rounded-full p-6"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} />
                <Input placeholder="Confirm Password" type="password"
                      className="rounded-full p-6"
                  value={confirm}
                  onChange={(e) => setConfirm(e.target.value)} />
                <Button className="rounded-full p-6"  onClick={handleSignup}>Sign Up</Button>
              </TabsContent>
            </Tabs>
          </div>
        </div>
        <div className="hidden xl:flex justify-center items-center">
          <img src={Background} className='h-[560px]' alt="" />
        </div>
      </div>
    </div>
  )
}

export default Auth
