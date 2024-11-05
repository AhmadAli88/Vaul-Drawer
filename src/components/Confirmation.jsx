import { useState } from "react";
import { Drawer } from "vaul";
import PropTypes from "prop-types";

const ConfirmationDrawer = ({ onConfirm }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Drawer.Root open={open} onOpenChange={setOpen}>
        <Drawer.Trigger>
          <button onClick={() => setOpen(true)}>Delete</button>
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Content>
            <div className="p-4 flex flex-col gap-4">
              <p>Are you sure you want to delete this item?</p>
              <button className="bg-green-500  hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={onConfirm}>
                Confirm
              </button>
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => setOpen(false)}>
                Cancel
              </button>
            </div>
          </Drawer.Content>
          <Drawer.Overlay />
        </Drawer.Portal>
      </Drawer.Root>
    </div>
  );
};

ConfirmationDrawer.propTypes = {
  onConfirm: PropTypes.func.isRequired, // Change to func for the confirm handler
};

export default ConfirmationDrawer;
