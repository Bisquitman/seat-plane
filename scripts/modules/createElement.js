const createElement = (tag, attributes) => {
  const element = document.createElement(tag);
  Object.assign(element, attributes);

  return element;
};

export default createElement;