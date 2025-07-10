import { Accordion, AccordionDetails, AccordionSummary, Button, FormControlLabel, FormGroup } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../state/cart/Action';
import { categorizeIngredients } from '../component/util/CategorizeIngredients';



const MenuCard = ({item}) => {
  const [selectedIngredients,setSelectedIngredients] = useState([]);
  const dispatch = useDispatch();

  const handleCheckBoxChange = (ingredientName) => {
    setSelectedIngredients(prev => 
      prev.includes(ingredientName)
        ? prev.filter(name => name !== ingredientName)
        : [...prev, ingredientName]
    );
  };

  const handleAddItemToCart = (e) => {
    e.preventDefault()
    const reqData = {
      token:localStorage.getItem("jwt"),
      cartItem:{
        foodId: item.id,
        quantity:1,
        ingredients:selectedIngredients,
      },
    };
    dispatch(addItemToCart(reqData))
    console.log("req data ",reqData)
    console.log("selected Ingredients",selectedIngredients);
  };

  return (
    <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <div className='lg:flex items-center justify-between'>
            <div className='lg:flex items-center lg:gap-5'>
                <img
                    className='w-[7rem] h-[7rem] object-cover'
                    src={item.images[0]}
                    alt="" 
                />
                <div className='space-y-1 lg:space-y-5 lg:max-w-2xl'>
                    <p className='font-semibold text-xl'>{item.name}</p>
                    <p>₹{item.price}</p>
                    <p className='text-gray-400'>{item.description}</p>
                </div>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <form onSubmit={handleAddItemToCart}>
            <div className='flex gap-5 flex-wrap'>
                {
                  Object.keys(categorizeIngredients(item.ingredients)).map((category)=>
                    <div>
                      <p>{category}</p>
                      <FormGroup>
                        {
                          categorizeIngredients(item.ingredients)[category].map((item)=> (
                        <FormControlLabel key={item.id} control={
                        <Checkbox
                          checked={selectedIngredients.includes(item.name)}
                          onChange={() => handleCheckBoxChange(item.name)}
                        />} 
                        label={item.name} />
                        ))}
                      </FormGroup>
                    </div>
                )}
            </div>
            <div className='pt-5' >
              <Button variant='contained' type='submit' disabled={false}>{true?"Add to Cart":""}</Button>
            </div>
          </form>
        </AccordionDetails>
    </Accordion>
  )
}

export default MenuCard