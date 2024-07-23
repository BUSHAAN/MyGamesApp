export const containerVariants = {
  initial: {
    opacity: 0,
    x: 10,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  whileHover:{
    scale: 1.025,
    transition: { duration: 0.1 },
  }
};

export const genreVariants = {
  initial: {
    opacity: 0,
    x: -200,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export const navbarVariants = {
    initial: {
      opacity: 0,
      y: -200,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        delay:0.2,
        duration: 0.5,
      },
    },
  };
