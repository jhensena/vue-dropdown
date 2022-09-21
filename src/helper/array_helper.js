import data from '../data.json';

export const filterByHide = () =>
  data.filter((item) => !item.hide).map((item) => item.id);

export const sortByOrder = () =>
  data.sort((a, b) => a.order - b.order);
