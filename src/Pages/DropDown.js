import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import colors from '../resources/ThemeColors'
import Button from "@material-tailwind/react/Button";

function classNames(...classes){
    return classes.filter(Boolean).join("")
}

export default function DropDown(){
    return(
        <Menu as="div" style={{background:colors.background,marginTop:"0px",height:'100vh',overflow:'hidden'}}>
       <div class ="classyou in">
         <div>
           <Menu.Button style={{
               position: 'relative',
               display:'inline-flex',
               justifyContent: 'center',
               marginTop:"30px",
               paddingTop:"10px",
               paddingLeft:'10px',
               paddingRight:'10px',
               border:'2px solid black', 
               borderRadius:"3px",
               width:"20vw",
               Align:"center",
               marginLeft:"43%",
               backgroundColor:colors.grey
               
            }}>
        {/* <Menu.Button className="inline-flex justify-center w-full rounded-md shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"> */}
       CT/CN/IT
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>

        <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        {/* <Menu.Items className="  origin-top-left absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"> */}
        <Menu.Items style={{
            backgroundColor:colors.grey,
            float:'left',
            overflow: 'hidden',
            position: 'absolute',
            paddingLeft:"30px",
            MarginLeft:"45%"
        }}>
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                 IT
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
             CT
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                CN
                </a>
              )}
            </Menu.Item>
            
          </div>
        </Menu.Items>
        
      </Transition>

        </div>

        <div>
        <Menu.Button style={{
               position: 'relative',
               display:'inline-flex',
               justifyContent: 'center',
               marginTop:"70px",
               paddingTop:"10px",
               paddingLeft:'10px',
               paddingRight:'10px',
               border:'2px solid black', 
               borderRadius:"3px",
               width:"20vw",
               Align:"center",
               marginLeft:"43%",
               backgroundColor:colors.grey
               
            }}>
        {/* <Menu.Button className="inline-flex justify-center w-full rounded-md shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"> */}
     Year of Study
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>

        
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        {/* <Menu.Items className="  origin-top-left absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"> */}
        <Menu.Items style={{
            backgroundColor:colors.grey,
            float:'left',
            overflow: 'hidden',
            position: 'absolute',
            paddingLeft:"30px",
            MarginLeft:"45%"
        }}>
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                 1st
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                2nd
                </a>
              )}
            </Menu.Item>
            
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
           3rd
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
               4th
                </a>
              )}
            </Menu.Item>
            
          </div>
        </Menu.Items>
        
      </Transition>
      </div>

      <Button style={{
            position: 'relative',
            display:'inline-flex',
            justifyContent: 'center',
            marginTop:"100px",
            paddingTop:"10px",
            paddingLeft:'10px',
            paddingRight:'10px',
            border:'2px solid black', 
            borderRadius:"3px",
            width:"20vw",
            Align:"center",
            marginLeft:"43%",
            backgroundColor:colors.main
      }}
            
        >
            Go
        </Button>
 
    </Menu>
    )
}

