import { useState } from 'react'
import { ArrowDown } from './svg/ArrowDown'
import ArrowUp from './svg/ArrowUp'

export default function ProjectPostWrapper(props) {
  const [toggle, setToggle] = useState(false)

  return (
    <div className='w-full pt-4 pb-5 px-6 mb-4 text-left border border-gray-100 rounded'
      onClick={() => setToggle(!toggle)}
    >
      <div className='pr-4'>
        {
          props.category && props.category_link &&
          <a href={props.category_link}
            class="font-heading border rounded-sm py-1 px-1 hover:underline bg-gray-50">{props.category}
          </a>
        }
        <h3
          className='font-heading text-lg font-semibold'
          contentEditable='false'
        >
          {props.title}
        </h3>
        <div className='flex-shrink-0'>
          {
            !toggle &&
            <ArrowDown />
          }
          {
            toggle &&
            <ArrowUp />
          }
        </div>

      </div>
      {toggle && props.children}
    </div>
  )
}