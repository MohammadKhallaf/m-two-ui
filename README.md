# session
1- install react router
2- wrap app within router


# Task
-> required today
1. frontend 
   1. -> react ecommerce (home-cart)
   2. Navigation
   3. Global state
   4. product card
2. backend **
   1. complete Product CRUD
<!--   
Bonus:
  1. frontend -> add wishlist page
  2. backend -> create cart modal ===> like the product modal
 -->



---

## Backend integration 
- axios
- 
## Project
- Meals Recipes  -> cart -> wishlist -> filter / categories
- Electronics
- Trello 
- E learning
- Hospital Management System
- Freelance ?? (show portfolio <--> grading)

## Task
- complete CRUD products with mongo
- product details <-- (+) | useLocation | ":id"
- complete integration with Front (++)


----

## 21 sept
- custom hooks `export const useCart = () => useContext(CartContext);`

- local storage access
- read -> localStorage.getItem("key")
- write -> localStorage.setItem("key",data) -> string
- remove -> localStorage.clearItem("key")

## listen to state update

```jsx
useEffect ( ()=>{

   
   return () =>{
      // destroy
   }

} , []  )
```
1. arg -> callback -> **action**
2. dep. array -> listen to the dep. ([])
   1. empty [] -> initial render 
   2. state [cart,wishlist] -> listen to state/s update
   3. not exist -> on each render


