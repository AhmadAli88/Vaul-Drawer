import { useState } from "react";
import { Drawer } from "vaul";

const NavigationDrawer = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Drawer.Root open={open} onOpenChange={setOpen}>
        <Drawer.Trigger>
          <button onClick={() => setOpen(true)}>Open Navigation</button>
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Content>
            <nav className="p-4">
              <ul>
                <li>
                  <a href="/home" className="block p-2">Home</a>
                </li>
                <li>
                  <a href="/about" className="block p-2">About</a>
                </li>
                <li>
                  <a href="/services" className="block p-2">Services</a>
                </li>
                <li>
                  <a href="/contact" className="block p-2">Contact</a>
                </li>
              </ul>
            </nav>
          </Drawer.Content>
          <Drawer.Overlay />
        </Drawer.Portal>
      </Drawer.Root>
    </div>
  );
};

export default NavigationDrawer;
