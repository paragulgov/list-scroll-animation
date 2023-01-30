import { useEffect, useState } from 'react';
import List from './components/List';
import { IList } from './types/types';
import getListItems from './helpers/list';
import './App.css';

function App() {
  const [list, setList] = useState<IList[]>([]);

  useEffect(() => {
    const initialList: IList[] = getListItems(20);

    setList(initialList);
  }, []);

  const handleLoadMore = () => {
    if (list.length < 100) {
      setList(prevState => [...prevState, ...getListItems(20)]);
    }
  };

  return (
    <div className="app">
      <h1>100 items list</h1>
      <List items={list} handleLoadMore={handleLoadMore} />
    </div>
  );
}

export default App;
