import {
  Button,
  Card,
  Checkbox,
  Typography,
  Input,
} from "@material-tailwind/react";
import React from "react";
import useAuth from "../hooks/useAuth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const SignIn = () => {
  const {signIn} = useAuth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const onSubmit = (data) =>{
    console.log(data)
    signIn(data.email, data.password)
    .then(result =>{
      const user = result.user;
      console.log(user);
      Swal.fire({
        title: 'User login Successful.',
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        }
    });
    navigate(from, {replace: true});
    })
  }
  
 
  return (
    <div className="flex justify-center items-center mt-10">
      <Card>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
            <Input type="email" {...register("email")} size="lg" label="Email" />
            <Input type="password" {...register("password")} size="lg" label="Password" />
          </div>
          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree the
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-blue-500"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button type="submit" className="mt-6" fullWidth>
            Register
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            New to Swiss?{" "}
            <Link to='/register' className="font-medium text-blue-500 transition-colors hover:text-blue-700">Register</Link>
          </Typography>
        </form>
      </Card>
    </div>
  );
};

export default SignIn;
