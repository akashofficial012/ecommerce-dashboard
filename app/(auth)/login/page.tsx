"use client";
import React, { useState } from "react";
import { Button, Form, Input, Link } from "@heroui/react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

export default function App() {
  const [submitted, setSubmitted] = useState(null);
  const [password, setPassword] = useState("");
  const [isEyeOpen, setIsEyeOpen] = useState(false);
  const [isTouched, setIsTouched] = useState(false);

  const getPasswordErrors = () => {
    const errs: string[] = [];
    if (password.trim() === "") {
      errs.push("Password is required.");
    } else {
      if (password.length < 6) {
        errs.push("Password must be 6 characters or more.");
      }
      if ((password.match(/[A-Z]/g) || []).length < 1) {
        errs.push("Password must include at least 1 upper case letter.");
      }
      if ((password.match(/[^a-z0-9]/gi) || []).length < 1) {
        errs.push("Password must include at least 1 symbol.");
      }
    }
    return errs;
  };

  const errors = getPasswordErrors();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsTouched(true);

    if (errors.length > 0) return;

    const data = Object.fromEntries(new FormData(e.currentTarget));
    setSubmitted(data);
    console.log(data);
  };

  return (
    <div className="bg-default-50 flex min-h-screen items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="bg-content1 w-full flex flex-col gap-6 rounded-2xl p-8 shadow-lg">
          <h2 className="text-center text-3xl font-semibold">Sign in</h2>

          <Form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <Input
              isRequired
              label="Email"
              labelPlacement="outside"
              name="email"
              placeholder="Enter email"
              type="text"
            />

            <div className="w-full relative">
              <Input
                label="Password"
                labelPlacement="outside"
                name="password"
                placeholder="Enter your password"
                type={isEyeOpen ? "text" : "password"}
                value={password}
                onValueChange={setPassword}
                isInvalid={isTouched && errors.length > 0}
                errorMessage={isTouched && errors.length > 0 ? errors[0] : undefined}
              />

              {isEyeOpen ? (
                <IoEyeOutline
                  className="absolute top-8 right-4 text-[1.5rem] text-[#777777] cursor-pointer"
                  onClick={() => setIsEyeOpen(false)}
                />
              ) : (
                <IoEyeOffOutline
                  className="absolute top-8 right-4 text-[1.5rem] text-[#777777] cursor-pointer"
                  onClick={() => setIsEyeOpen(true)}
                />
              )}
            </div>

            <div className="flex items-center justify-between">
              <Link href="#" size="sm" color="primary">
                Forgot your password?
              </Link>
            </div>

            <Button className="mt-8 w-full" color="primary" size="lg" type="submit">
              Sign in
            </Button>
          </Form>

          <p className="text-center text-small">
            Don't have an account?{" "}
            <Link href="#" size="sm" color="primary">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
