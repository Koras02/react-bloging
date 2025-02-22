import React from 'react';
import image1 from './img/Profile.jpg';
import image2 from './img/React.png';
import image3 from './img/TypeScript.png';

const images = [
  { id: 1, url: image1, title: 'image1' },
  { id: 2, url: image2, title: 'image2' },
  { id: 3, url: image3, title: 'image3' },
];

function ListImage() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        margin: 'auto',
      }}
    >
      <h2>FrontEnd Developer language</h2>
      <ul style={{ listStyleType: 'none', padding: 0, display: 'flex' }}>
        {images.map((image) => (
          <li key={images.id} style={{ margin: '10px' }}>
            <p>{image.title}</p>
            <img
              src={image.url}
              alt={image.title}
              style={{ width: '200px', height: '200px' }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListImage;
