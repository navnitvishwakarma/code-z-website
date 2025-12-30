// utils/projectImages.js
export const getProjectImage = (projectTitle) => {
  const images = {
    'GuruKul-x': '/projects/gurukulx.',
    'Taskify': '/projects/taskify.png',
    'Shoply': '/projects/shoply.png'
  }
  
  return images[projectTitle] || '/projects/default.png';
}