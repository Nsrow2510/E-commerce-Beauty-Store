
import React,{useState,useEffect} from 'react';
import Filters from '../components/Filters';
import ProductCard from '../components/ProductCard';
import productsData from '../data/products.json';

export default function Foundation(){
 const[filter,setFilter]=useState('all');
 const[sort,setSort]=useState('default');
 const[products,setProducts]=useState([]);

 useEffect(()=>{ setProducts(productsData); },[]);

 const filtered=products.filter(p =>
   filter==='all' ? true : (p.category||'').toLowerCase()===filter.toLowerCase()
 );

 const sorted=[...filtered].sort((a,b)=>{
   const num=x=>parseInt(String(x||'').replace(/[^0-9]/g,''))||0;
   if(sort==='lowToHigh') return num(a.newPrice)-num(b.newPrice);
   if(sort==='highToLow') return num(b.newPrice)-num(a.newPrice);
   return 0;
 });

 return(
   <div className='main-container'>
     <Filters filter={filter} setFilter={setFilter} sort={sort} setSort={setSort}/>
     <section className='products'>
       {sorted.map(p=><ProductCard key={p.id} product={p}/>)}
     </section>
   </div>
 );
}
