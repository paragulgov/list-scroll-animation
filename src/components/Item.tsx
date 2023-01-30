import React from 'react';
import { useInView } from 'react-intersection-observer';

interface ItemProps {
  name: string;
  surname: string;
}

const Item: React.FC<ItemProps> = ({ name, surname }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className={`item ${inView ? 'active' : ''}`}>
      <span>{name} {surname}</span>
    </div>
  );
};

export default Item;