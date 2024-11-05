import { useState } from "react";
import { Drawer } from "vaul";

const FormDrawer = () => {
  const [open, setOpen] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    setOpen(false);
  };

  return (
    <div>
      <Drawer.Root open={open} onOpenChange={setOpen}>
        <Drawer.Trigger>
          <button onClick={() => setOpen(true)}>Open Form</button>
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Content>
            <div className="p-4">
              <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  className="border rounded w-full p-2"
                />
                <button type="submit" className="mt-2 btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </Drawer.Content>
          <Drawer.Overlay />
        </Drawer.Portal>
      </Drawer.Root>
    </div>
  );
};

export default FormDrawer;
