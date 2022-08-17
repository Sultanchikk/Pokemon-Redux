import React, { useState } from 'react';
import './Sort.css';

function Sort(value, onChangeSort, sortByPopularity) {
  const [open, setOpen] = useState(false);


  return (
    <div>
      <div class="sort">
        <h2 class="mb-20">Сортировать по:</h2>
        <div class="sort-items">

        </div>
      </div>
    </div>
  );
}

export default Sort;

