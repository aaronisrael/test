import React from 'react';

// import {observer, inject, PropTypes} from 'mobx-react';

import DataList from '../../assets/data/artList.json';

import TopBar from './TopBar';
import Card from './ArtCard/';

const ListView = () => {


  return (
    <div>
      <TopBar />
      <ul>
        {
          DataList.data.map(
            d => (
              <Card
                {...d}
                key={d.id}
                idkey={d.id}
                name={d.name}
                img={d.photo}
              />
            )
          )
        }
      </ul>
    </div>
  );

};

// export default inject(`store`)(
//   observer(ListView)
// );
export default ListView;
