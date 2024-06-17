// pages/service.tsx
import React from 'react';
import ImageWithText from '../../components/imagewithtext';

const ServicePage: React.FC = () => {
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

export default ServicePage;
