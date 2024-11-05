import SimpleDrawer from './components/SimpleDrawer';
import FormDrawer from './components/FormDrawer';

import ConfirmationDrawer from './components/Confirmation';
import MultiStepDrawer from './components/Multi-Step';
import GalleryDrawer from './components/ImagePreview';
import NavigationDrawer from './components/Navigation';
import ScrollableDrawer from './components/Scrollable';
import CustomStyledDrawer from './components/CustomStyled';

function App() {


  return (
    <div className="App p-4">
      <h1>Drawer Examples with Vaul</h1>
      <div className="flex flex-col gap-4">
        <SimpleDrawer />
        <FormDrawer />
        <ScrollableDrawer />
        <ConfirmationDrawer onConfirm={() => alert("Confirmed!")} />
        <MultiStepDrawer />
        <GalleryDrawer images={["/src/assets/image1.jpg", "/src/assets/image2.jpeg"]} width="100px"/>
        <NavigationDrawer />
        <CustomStyledDrawer />
      </div>
    </div>
  );
}

export default App;
