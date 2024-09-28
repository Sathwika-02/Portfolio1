import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button, Burger } from '@mantine/core';
import { IconHexagonLetterS, IconX } from '@tabler/icons-react';
import { navLinks } from './Header';

const Sidebar=()=> {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <>
     <Drawer.Root className='md:hidden !-z-10 ml-auto' position='right' opened={opened} onClose={toggle} size="50vw">
      <Drawer.Overlay className='!-z-0' style={{backgroundOpacity:0.5,blur:4}}/>
      <Drawer.Content className='!-z-0' bg="#0A192F">
        {/* <Drawer.Header bg="#0A192F">   </Drawer.Header>
          <Drawer.Title><IconHexagonLetterS size={48} stroke={1.25} color="#64FFDA"/></Drawer.Title>
          <Drawer.CloseButton  className='hover:!bg-bgColor hover:!text-white' icon=<IconX className='hover:text-primaryColor' size={30} stroke={2}/>/> */}
       {/* <Drawer.CloseButton
              className='hover:!bg-bgColor hover:!text-white'
              style={{ color: '#64FFDA' }} // Change this to your primaryColor
              icon={<IconX className='hover:text-primaryColor' size={30} stroke={2} />}
            /> */}
        <Drawer.Body  className='mt-20 flex flex-col text-textColor gap-5' bg="#0A192F">
          {navLinks(true,toggle)}
        </Drawer.Body>
      </Drawer.Content>

     </Drawer.Root>

      {/* <Button className='md:!hidden' onClick={open}>Open Drawer</Button> */}
      <Burger className='md:!hidden !z-10 ml-auto #64FFDA'  size="lg" opened={opened} onClick={toggle} aria-label="Toggle navigation"  style={{color:'#64FFDA'}}/>;

    </>
  );
}
export default Sidebar;