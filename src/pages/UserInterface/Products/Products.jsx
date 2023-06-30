import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";

const Products = () => {
    const { data: products , isLoading} = useQuery({
        queryKey: ['products'],
        queryFn: async () =>{
            const res = await fetch('http://localhost:5000/products')
            return res.json()
        }
    })
    console.log(products);
  return (
    <div className=" grid grid-cols-3 gap-3">
        {
            products.map((product,index) => <Card key={index} className="mt-6 w-96">
            <CardHeader color="blue-gray" className="relative h-56">
              <img
                src={product.img}
                alt="img-blur-shadow"
                layout="fill"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                {product.productName}
              </Typography>
              <Typography>
                {product.productDetails}
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button>Read More</Button>
            </CardFooter>
          </Card> )
        }
    </div>
  );
};

export default Products;
