import { useState } from "react";
import { Drawer } from "vaul";

const CustomStyledDrawer = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Drawer.Root open={open} onOpenChange={setOpen}>
        <Drawer.Trigger>
          <button onClick={() => setOpen(true)}>Open Custom Drawer</button>
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Content>
            <div className="p-4 bg-blue-600 text-white rounded-t-lg">
              Custom-styled drawer content
            </div>
          </Drawer.Content>
          <Drawer.Overlay />
        </Drawer.Portal>
      </Drawer.Root>
    </div>
  );
};

export default CustomStyledDrawer;
