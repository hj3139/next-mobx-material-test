const getFileUrl = () => process.env.NEXT_PUBLIC_FILE_URL;

const fileUrl = getFileUrl();
export const getThumbnailURL = (
  fileKey: string,
  width: number,
  height: number,
  option: 'fit' | 'scale' = 'scale'
) => {
  // return `${fileUrl}/jpeg/${width}x${height}/${option}/100/${fileKey}`;
  return `${fileUrl}/${fileKey}?size=${width}x${height}&option=${option}`;
};
