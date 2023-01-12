// import React from 'react'
// import { Link } from 'react-router-dom'
// import { Card } from 'react-bootstrap'
// import Rating from './Rating'
// import { AnimatePresence, motion } from 'framer-motion/dist/framer-motion';

// const Product = ({ product }) => {
//   return (
//     <Card className='my-3 p-3 rounded'>
//       <a href={`/product/${product._id}`}>
//       <Link to={`/product/${product._id}`}/>
//       {/* <motion.div className="img-wrap" whileHover={{ opacity: 4 }}  > */}
          
       
//         <img src={product.image}  variant='top' initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 1 }}/>
//       {/* </motion.div> */}
//       </a>

//       <Card.Body>
//         <a href={`/product/${product._id}`}>
//         <Link to={`/product/${product._id}`}/>
//           <Card.Title as='div'>
//             <strong>{product.name}</strong>
//           </Card.Title>
//         </a>

//         <Card.Text as='div'>
//           <Rating
//             value={product.rating}
//             text={`${product.numReviews} reviews`}
//           />
//         </Card.Text>
//         <Card.Text as='h3'>${product.price}</Card.Text>
//       </Card.Body>
//     </Card>
//   )
// }
// export default Product

import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

const Product = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top' />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='div'>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text as='h3'>${product.price}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product