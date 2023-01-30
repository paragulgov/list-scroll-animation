import { v4 as uuidv4 } from 'uuid';
import { IList } from '../types/types';
import getText from './text';

export const getListItems = (length: number): IList[] => {
  return Array.from({ length }).map(_ => {
    return {
      id: uuidv4(),
      name: getText(Math.round(Math.random() * 10)),
      surname: getText(Math.round(Math.random() * 10)),
    };
  });
};

export default getListItems;
