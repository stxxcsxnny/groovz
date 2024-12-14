const fileFormat = (url) => {
  const fileExtension = url.split('.').pop().toLowerCase();

  if (['mp4', 'webm', 'ogg'].includes(fileExtension)) return 'video';
  if (['mp3', 'wav'].includes(fileExtension)) return 'audio';
  if (['pdf', 'jpg', 'jpeg', 'gif', 'png'].includes(fileExtension)) return 'image';

  return 'file';
};

const transformImage = (url = '', width = 100) => {
  // Assuming you might transform the image url based on the width
  if (!url) {
    return ''; // Return an empty string or a default placeholder if URL is not provided
  }
  return `${url}?width=${width}`;
};

export { fileFormat, transformImage };
