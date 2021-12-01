import React, { useState, useEffect, Fragment } from "react";
import colors from "../resources/ThemeColors";
import Button from "@material-tailwind/react/Button";
import { Menu, Transition, Listbox } from "@headlessui/react";
import {
  ChevronDownIcon,
  CheckIcon,
  SelectorIcon,
} from "@heroicons/react/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join("");
}

const methods = [
  "Get matches only",
  "Get matches & categorize duplicates",
  "Categorize duplicates only",
];

export default function Signin() {
  const [selectedMethod, setSelectedMethod] = useState(["blah"]);
  return (
    <Menu
      as="div"
      style={{
        background: colors.background,
        marginTop: "0px",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <div class="classyou in">
        <div>
          <p
            style={{
              paddingTop: "30px",
              marginTop: "10px",
              marginLeft: "45%",
              fontWeight: "bold",
              fontSize: "25px",
            }}
          >
            {" "}
            A bit about you
          </p>
        </div>
        <div>
          <Menu.Button
            style={{
              position: "relative",
              display: "inline-flex",
              justifyContent: "center",
              marginTop: "30px",
              paddingTop: "10px",
              paddingLeft: "10px",
              paddingRight: "10px",
              border: "2px solid black",
              borderRadius: "3px",
              width: "20vw",
              Align: "center",
              marginLeft: "43%",
              backgroundColor: colors.grey,
            }}
          >
            {/* <Menu.Button className="inline-flex justify-center w-full rounded-md shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"> */}
            CT/CN/IT
            <ChevronDownIcon
              className="-mr-1 ml-2 h-5 w-5"
              aria-hidden="true"
            />
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
            <Menu.Items
              style={{
                backgroundColor: colors.grey,
                float: "left",
                overflow: "hidden",
                position: "absolute",
                paddingLeft: "30px",
                MarginLeft: "45%",
              }}
            >
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
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
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
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
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
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
          <Menu.Button
            style={{
              position: "relative",
              display: "inline-flex",
              justifyContent: "center",
              marginTop: "70px",
              paddingTop: "10px",
              paddingLeft: "10px",
              paddingRight: "10px",
              border: "2px solid black",
              borderRadius: "3px",
              width: "20vw",
              Align: "center",
              marginLeft: "43%",
              backgroundColor: colors.grey,
            }}
          >
            {/* <Menu.Button className="inline-flex justify-center w-full rounded-md shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"> */}
            Year of Study
            <ChevronDownIcon
              className="-mr-1 ml-2 h-5 w-5"
              aria-hidden="true"
            />
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
          <Menu.Items
            style={{
              backgroundColor: colors.grey,
              float: "left",
              overflow: "hidden",
              position: "absolute",
              paddingLeft: "30px",
              MarginLeft: "45%",
            }}
          >
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
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
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
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
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
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
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
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

      <Listbox value={selectedMethod} onChange={setSelectedMethod}>
        <Listbox.Label className="text-l text-black-500 ">
          Select Processing Method
        </Listbox.Label>
        <div className="mt-1 relative w-2/3">
          <Listbox.Button className=" relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            <span className="flex items-center">
              <span className="ml-3 block truncate">{selectedMethod}</span>
            </span>
            <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <SelectorIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 z-50 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
              {methods.map((column) => (
                <Listbox.Option
                  className={({ active }) =>
                    classNames(
                      active ? "text-white bg-indigo-600" : "text-gray-900",
                      "cursor-default select-none relative py-2 pl-3 pr-9"
                    )
                  }
                  value={column}
                >
                  {({ selected, active }) => (
                    <>
                      <div className="flex items-center">
                        <span
                          className={classNames(
                            selected ? "font-semibold" : "font-normal",
                            "ml-3 block truncate"
                          )}
                        >
                          {column}
                        </span>
                      </div>

                      {selected ? (
                        <span
                          className={classNames(
                            active ? "text-white" : "text-indigo-600",
                            "absolute inset-y-0 right-0 flex items-center pr-4"
                          )}
                        >
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>

      <Button
        style={{
          position: "relative",
          display: "inline-flex",
          justifyContent: "center",
          marginTop: "100px",
          paddingTop: "10px",
          paddingLeft: "10px",
          paddingRight: "10px",
          border: "2px solid black",
          borderRadius: "3px",
          width: "20vw",
          Align: "center",
          marginLeft: "43%",
          backgroundColor: colors.main,
        }}
      >
        Go
      </Button>
    </Menu>
  );
}
