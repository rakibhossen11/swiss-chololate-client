import React from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

const CreateProduct = () => {
  return (
    <div >
      <Card className="flex items-center justify-center my-10" color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Create a Product
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
            <Input size="lg" label="Name" />
            <Input size="lg" label="Price" />
            <Input size="lg" label="Quantity" />
          </div>
          <Button className="mt-6" fullWidth>
            Create Product
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
           
          </Typography>
        </form>
      </Card>
    </div>
  );
};

export default CreateProduct;
