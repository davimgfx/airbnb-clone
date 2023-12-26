import { Button, Input } from "@/components";
import { useRegisterModal } from "@/components";
import axios from "axios";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

export const FormRegister = () => {
  const [isLoading, setIsLoading] = useState(false);
  const registerModal = useRegisterModal();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    registerModal.actions.onClose();
    console.log(registerModal.state.isOpen);
    axios
      .post("/api/register", data)
      .then(() => {
        toast.success("Registered!");
      })
      .catch((error) => {
        toast.error("Something went wrong.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <Input
          id="name"
          placeholder="Name"
          type="text"
          className="border-2 border-[#DDDDDD]"
          required
          register={{
            ...register("name", {
              required: "Name is required",
              minLength: {
                value: 3,
                message: "Name must be at least 3 characters",
              },
            }),
          }}
          errors={errors}
          disabled={isLoading}
        />
        <Input
          id="email"
          placeholder="Email"
          type="email"
          className="border-2 border-[#DDDDDD]"
          required
          register={{
            ...register("email", {
              required: "Email is required",
              minLength: {
                value: 3,
                message: "Email must be at least 3 characters",
              },
            }),
          }}
          errors={errors}
          disabled={isLoading}
        />
        <Input
          id="password"
          placeholder="Password"
          type="password"
          className="border-2 border-[#DDDDDD]"
          required
          register={{
            ...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            }),
          }}
          errors={errors}
          disabled={isLoading}
        />{" "}
        <Button type="submit" className="bg-[#FF385C]">
          Submit
        </Button>
      </form>
      <div className="relative ">
        <div className="h-[0.5px] w-auto bg-[#DDDDDD] " />
        <span className="absolute top-[-11px] right-[45%] py-1 px-3 bg-white z-10 text-xs">
          or
        </span>
      </div>
      <Button
        variant="outline"
        className="border-2 border-[#2b2b2b86] relative">
        <FcGoogle className="mr-2 h-4 w-4 absolute left-5" /> Login with Google
      </Button>
      <Button
        variant="outline"
        className="border-2 border-[#2b2b2b86] relative">
        <AiFillGithub className="mr-2 h-4 w-4 absolute left-5" /> Login with
        Github
      </Button>
    </>
  );
};
