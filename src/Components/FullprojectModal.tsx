import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, Indicator, Badge,Image, Group ,Text, ScrollArea} from '@mantine/core';

const FullprojectModal = (props:any) => {
    const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
    <Modal.Root  scrollAreaComponent={ScrollArea.Autosize} size="70%" className="font-mono" opened={props.opened} onClose={props.close}>
        <Modal.Overlay />
        <Modal.Content className='!rounded-3xl'>
          <Modal.Header className='!bg-bgColor !border-primaryColor !border-2  !border-b-0 !rounded-tl-3xl !rounded-tr-3xl'>
            <Modal.Title data-autofocus  className='!text-4xl text-white flext gap-3  items-center font-bold'>{props.title}{props.live ?<Badge   className="flex items-center gap-2" size="lg" variant="outline"  color="pink" rightSection={<Indicator color="red" position="middle-end" size={10}></Indicator>}>Live</Badge> :''}</Modal.Title>
            <Modal.CloseButton className='!bg-bgColor !text-red-500'  size="md" iconSize="30px" />
          </Modal.Header>
          <Modal.Body className='!bg-bgColor !pt-2 !border-primaryColor !border-2  !border-t-0 !rounded-bl-3xl !rounded-br-3xl'>
          <Image 
          className="!rounded-xl !shadow-[0_0_5px_0_#64FFDA]"
          src={props.image}
          alt={props.image}
        />
        <Group mt="md" mb="md">
        {props.technologies.map((tech:string,index:number)=> <Badge key={index} variant="light" color="#64FFDA" size='xl' >{tech}</Badge>
        )}
        </Group>
        <Text  className='text-justify' size="lg" c="dimmed">
       {props.desc}
      </Text>

      <Group justify="space-between" mt="md">
      <a className='!w-[48%]' href={props.github} target='_blank'><Button variant='outline' size="lg" color='#64FFDA' fullWidth mt="md" radius="md">
      View Code
      </Button>
      </a>
      <a className='!w-[48%]' href={props.link} target='_blank'><Button size='lg' color='#64FFDA' className='!text-bgColor' fullWidth mt="md" radius="md">
     View Live app
      </Button>
      </a>
      </Group>
          </Modal.Body>
        </Modal.Content>
      </Modal.Root>
    </>
  )
}

export default FullprojectModal