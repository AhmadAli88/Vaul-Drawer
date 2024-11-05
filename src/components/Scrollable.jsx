import { useState } from "react";
import { Drawer } from "vaul";

const ScrollableDrawer = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Drawer.Root open={open} onOpenChange={setOpen}>
        <Drawer.Trigger>
          <button onClick={() => setOpen(true)}>View Items</button>
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Content>
            <div className="p-4 overflow-y-auto max-h-[80vh]">
              {[...Array(20)].map((_, i) => (
                <div key={i} className="p-2 border-b">
                  Item {i + 1}
                </div>
              ))}
            </div>
          </Drawer.Content>
          <Drawer.Overlay />
        </Drawer.Portal>
      </Drawer.Root>
    </div>
  );
};

export default ScrollableDrawer;
