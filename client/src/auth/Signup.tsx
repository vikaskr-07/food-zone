import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SignupInputstate, userSignupSchema } from "@/schema/userSchema";
import { Separator } from "@radix-ui/react-separator";
import { Loader2, LockKeyholeIcon, Mail, Phone, User } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router-dom";



function Signup() {
  const [input,Setinput] = useState<SignupInputstate>({
    email:"",
    password:"",
    fullname:"",
    contact:""
  })
  const changeEventHandler = (e:ChangeEvent<HTMLInputElement>) => {
      const {name, value} = e.target;
      Setinput({...input, [name]: value})
  }
  const [errors,setErrors] = useState<Partial<SignupInputstate>>({});
  const loginSubmitHandler = (e:FormEvent) => {
        e.preventDefault();
        
        const result = userSignupSchema.safeParse(input);
        if(!result.success){
            const fieledErrors = result.error.formErrors.fieldErrors;
            setErrors(fieledErrors as Partial<SignupInputstate>);
            return;
        }
        //api implementation start here 
        console.log(input);
        
  }
  const loading = false;
  return (
    <div className="flex items-center justify-center min-h-screen">
      <form onSubmit={loginSubmitHandler} className="md:p-8 w-full max-w-md rounded-lg md:border border-gray-200 mx-4">
        <div className="mb-4">
          <h1>Food Zone</h1>
        </div>
        <div className="mb-4">
        <div className="relative">
          <Input
            type="text"
            placeholder="Full Name"
            value={input.fullname}
            onChange={changeEventHandler}
            name="fullname"
            className="pl-10 focus-visible:ring-1"
          />
          <User className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
          { errors && <span className="text-xs text-red-500">{errors.fullname}</span> }
        </div>
        </div>
        <div className="mb-4">
        <div className="relative">
          <Input
            type="email"
            placeholder="Enter your mail"
            value={input.email}
            onChange={changeEventHandler}
            name="email"
            className="pl-10 focus-visible:ring-1"
          />
          <Mail className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
          { errors && <span className="text-xs text-red-500">{errors.email}</span> }

        </div>
        </div>
        <div className="mb-4">
        <div className="relative">
          <Input
            type="password"
            placeholder="Password"
            value={input.password}
            onChange={changeEventHandler}
            name="password"
            className="pl-10 focus-visible:ring-1"
          />
          <LockKeyholeIcon className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
          { errors && <span className="text-xs text-red-500">{errors.password}</span> }

        </div>
        </div>
        <div className="mb-4">
        <div className="relative">
          <Input
            type="text"
            placeholder="Contact"
            value={input.contact}
            onChange={changeEventHandler}
            name="contact"
            className="pl-10 focus-visible:ring-1"
          />
          <Phone className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
          { errors && <span className="text-xs text-red-500">{errors.contact}</span> }

        </div>
        </div>
        <div className="mb-5">
          {
            loading ? <Button disabled className="w-full bg-orange hover:bg-hoverOrange"><Loader2 className="mr-2 h-4 w-4 animate-spin"/>Please Wait</Button>:(
              <Button type="submit" className="w-full bg-orange hover:bg-hoverOrange">Signup</Button>
            )
          }
        </div>
        <Separator/>

        <p className="mt-2">Already have an account?{" "}
          <Link to="/login" className="text-blue-500">Login</Link> </p>

      </form>
    </div>
  );
}

export default Signup;
