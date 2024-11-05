import PropTypes from "prop-types";
import { useState } from "react";
import { Drawer } from "vaul";

const GalleryDrawer = ({ images, width }) => {
  const [open, setOpen] = useState(false);
  const customStyles={
    width: width
  }

  return (
    <div>
      <Drawer.Root open={open} onOpenChange={setOpen}>
        <Drawer.Trigger>
          <button onClick={() => setOpen(true)}>View Gallery</button>
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Content>
            <div className="p-4">
              {images.map((img, idx) => (
                <img
                  style={customStyles}
                  key={idx}
                  src={img}
                  alt={`Image ${idx + 1}`}
                  className="w-full mb-4 rounded"
                />
              ))}
            </div>
          </Drawer.Content>
          <Drawer.Overlay />
        </Drawer.Portal>
      </Drawer.Root>
    </div>
  );
};

GalleryDrawer.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired, // Updated to expect an array of strings
  width: PropTypes.string, // Updated to expect
};

export default GalleryDrawer;
