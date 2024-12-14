import React from 'react';
import { transformImage } from '../../lib/Features';
import { FileOpen } from '@mui/icons-material';

const RenderComponent = ({ file, url }) => {
  switch (file) {
    case 'video':
      return <video src={url} preload="none" width="200px" controls></video>;

    case 'image':
      return <img src={transformImage(url, 200)} alt="Image Attachment" width="200px" height="150px" style={{ objectFit: 'contain' }}></img>;

    case 'audio':
      return <audio src={url} preload="none" controls></audio>;

    default:
      return <FileOpen />;
  }
};

export default RenderComponent;
