import { Transition } from '@headlessui/react'
import React from 'react'

export const Menu = () => {
  const [open, setOpen] = React.useState(true)
  return (
    <Transition.Root show={open} as={React.Fragment} appear>
      {/* <Dialog as="div" className="relative z-10" onClose={setOpen}></Dialog> */}
    </Transition.Root>
  )
}

export const MenuItem = () => {}
