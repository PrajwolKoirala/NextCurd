"use client";

import React, { useState } from "react";
import CardWrapper from "./CardWrapper";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { RegisterSchema } from "../../schemas";
import { Input } from "../../components/ui/input";
import FormError from "../FormError";
import FormSuccess from "../FormSuccess";
import { useTransition } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../components/ui/form";
import { Button } from "../ui/button";
import {register} from "../../app/actions/register";



const RegisterForm = () => {
const [error, setError] = useState<string | undefined>("");
const [success, setSuccess] = useState<string | undefined>("");

  const[isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      password: "",
      name:"",
    },
  });

  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    setError("");
    setSuccess("");
    
    startTransition(() => {
      register(values)
        .then((data) => {
          setError(data.error);
          setSuccess(data.success);
        })
    })
    
  
  };

  return (
    <CardWrapper
      headerLabel="Create an acount"
      backButtonlabel="Already have an account"
      backButtonHref="/auth/login"
      showSocial
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-6">
          <div className="space-y-6">
          <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <div>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="john koirala"
                        type="text"
                      />
                      <FormMessage />
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>EMAIL</FormLabel>
                  <FormControl>
                    <div>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="john@example.com"
                        type="email"
                      />
                      <FormMessage />
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <div>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="********"
                        type="Password"
                      />
                      <FormMessage />
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />
            {/* Add other form fields here */}
          </div>

          <FormError message={error} />
          <FormSuccess message={success}/>


          <Button type="submit" className="w-full" disabled={isPending}>
            Create an account
          </Button>
          
        </form>
      </Form>
    </CardWrapper>
  );
};

export default RegisterForm;
