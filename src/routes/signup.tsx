import { useSignUpController } from "@/hooks/useSignUpController";

import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";

import { ErrorMessage } from "@hookform/error-message";

import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/signup')({
  component: RouteComponent,
})

function RouteComponent() {
  const { errors, handleSubmit, register } = useSignUpController();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Sign Up</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                {...register("username")}
              />
              <ErrorMessage
                errors={errors}
                name="username"
                render={({ message }) => (
                  <div className="text-red-500 text-sm">{message}</div>
                )}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                {...register("email")}
              />
              <ErrorMessage
                errors={errors}
                name="email"
                render={({ message }) => (
                  <div className="text-red-500 text-sm">{message}</div>
                )}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                {...register("password")}
              />
              <ErrorMessage
                errors={errors}
                name="password"
                render={({ message }) => (
                  <div className="text-red-500 text-sm">{message}</div>
                )}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                {...register("confirmPassword")}
              />
              <ErrorMessage
                errors={errors}
                name="confirmPassword"
                render={({ message }) => (
                  <div className="text-red-500 text-sm">{message}</div>
                )}
              />
            </div>
            <Button type="submit" className="w-full">Sign Up</Button>
          </form>
          <div className="mt-4 text-center text-sm">
            Already have an account?{' '}
            {/* <Link to="/sign-in" className="text-blue-600 hover:underline">Sign In</Link> */}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
