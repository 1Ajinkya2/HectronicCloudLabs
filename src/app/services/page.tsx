// pages/service.tsx
import ImageWithText from '../../components/imagewithtext';

export default function ServicePage() {
  return (
    <div>
      <h1>Services</h1>
      <ImageWithText
        imageSrc="/path/to/service_image.png"
        imageAlt="Service Image"
        headerText="Service Title"
        paragraphText="Description of the service."
      />
       <ImageWithText
        imageSrc="/path/to/service_image.png"
        imageAlt="Service Image"
        headerText="Service     "
        paragraphText="Description of the service."
      />
    </div>
    
  );
};

