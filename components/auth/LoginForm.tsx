"use client";

import React, { useState } from "react";
import CardWrapper from "./CardWrapper";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { LoginSchema } from "@/schemas";
import { Input } from "@/components/ui/input";
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
} from "@/components/ui/form";
import { Button } from "../ui/button";
import {login} from "@/app/actions/login";



const LoginForm = () => {


const [error, setError] = useState<string | undefined>("");
const [success, setSuccess] = useState<string | undefined>("");

  const[isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    setError("");
    setSuccess("");
    
    startTransition(() => {
      login(values)
        .then((data) => {
          setError(data?.error);
          // setSuccess(data?.success);
        })
    })
    
  
  };

  return (
    <CardWrapper
      headerLabel="Welcome Back"
      backButtonlabel="dont have an account?"
      backButtonHref="/auth/register"
      showSocial
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-6">
          <div className="space-y-6">
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
            login
          </Button>
          
        </form>
      </Form>
    </CardWrapper>
  );
};

export default LoginForm;
