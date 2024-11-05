import { Drawer } from 'vaul';

function SimpleDrawer() {
  return (
    <Drawer.Root >
      <Drawer.Trigger className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-20'>Open</Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Content >
          <Drawer.Title style={{border:'1px solid green', padding: '20px'}}>Title</Drawer.Title>
        </Drawer.Content>
        <Drawer.Overlay />
      </Drawer.Portal>
    </Drawer.Root>
  );
}
export default SimpleDrawer;