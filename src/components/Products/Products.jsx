import React from 'react';
import {Grid} from '@material-ui/core';
import Product from "./Product/Product"

const products = [
    { id: 1, name: 'toy', description: 'A kids toy', price: '$10',  image:"https://i.pinimg.com/originals/92/e0/3d/92e03d38cea9ab28db469e29b732e1a3.jpg" },
    { id: 2, name: "sony play station PS6", description: 'a multimedia platform', price: "$ 450",  image:"https://cdn.vox-cdn.com/thumbor/Vgy3FfpWvBD32CYZrcNq6itGqnw=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/20034840/ishMfuW.png" }
]

export const Products = () => {
    return (
        <main>
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3} >
                        <Product product={product}/>
                    </Grid>
                        


                ))}
            </Grid>
            
        </main>
    )
}
export default Products;