import { useState } from "react";
import { Drawer } from "vaul";

const MultiStepDrawer = () => {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <div>
      <Drawer.Root open={open} onOpenChange={setOpen}>
        <Drawer.Trigger>
          <button onClick={() => setOpen(true)}>Start Process</button>
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Content>
            <div className="p-4">
              {step === 1 && <div>Step 1: Basic Info</div>}
              {step === 2 && <div>Step 2: Details</div>}
              {step === 3 && <div>Step 3: Confirmation</div>}

              <div className="flex justify-between mt-4">
                {step > 1 && <button onClick={prevStep}>Previous</button>}
                {step < 3 ? (
                  <button onClick={nextStep}>Next</button>
                ) : (
                  <button onClick={() => setOpen(false)}>Finish</button>
                )}
              </div>
            </div>
          </Drawer.Content>
          <Drawer.Overlay />
        </Drawer.Portal>
      </Drawer.Root>
    </div>
  );
};

export default MultiStepDrawer;
