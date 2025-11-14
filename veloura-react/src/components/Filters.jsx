
export default function Filters({filter,setFilter,sort,setSort}){
 return(
  <aside className='sidebar'>
    <div className='filter-box'>
      <label>Filter:</label>
      <select value={filter} onChange={(e)=>setFilter(e.target.value)}>
        <option value='all'>All</option>
        <option value='Forever52'>Forever52</option>
        <option value='Maybelline'>Maybelline</option>
        <option value='Lakme'>Lakme</option>
        <option value='loreal'>L'Oreal</option>
        <option value='mac'>M.A.C</option>
        <option value='mars'>Mars</option>
      </select>
    </div>
    <div className='sort-box'>
      <label>Sort by:</label>
      <select value={sort} onChange={(e)=>setSort(e.target.value)}>
        <option value='default'>Default</option>
        <option value='lowToHigh'>Price Low→High</option>
        <option value='highToLow'>Price High→Low</option>
      </select>
    </div>
  </aside>
 );
}
