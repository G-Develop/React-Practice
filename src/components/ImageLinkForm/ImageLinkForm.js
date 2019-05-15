import React from 'react';
const ImageLinkForm = () => {
    return (
        <div>
          <p className='f3'>
            {'This will detect faces in your pictures. Git it a try.'}
          </p>
          <div>
              <input className='f4 pa2 w-70 center' type='text' />
              <button>Scan</button>
          </div>
        </div>
    );
}

export default ImageLinkForm;