import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Item from './Item';
import { IList } from '../types/types';

interface ListProps {
  items: IList[];
  handleLoadMore: () => void;
}

const List: React.FC<ListProps> = ({ items, handleLoadMore }) => {
  const { ref, inView } = useInView({
    threshold: 1,
  });

  useEffect(() => {
    handleLoadMore();
  }, [inView]);

  return (
    <div className="list">
      {items.map((item, index) => {
        return (
          <Item key={item.id} name={item.name} surname={item.surname} />
        );
      })}

      <div ref={ref} />
    </div>
  );
};

export default List;
