"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { graphqlClient, LOGIN_MUTATION } from "@/lib/graphql";
import { useRouter } from "next/navigation";
import { DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface LoginError {
  field: string;
  message: string;
  code: string;
}

interface TokenCreateResponse {
  token: string;
  refreshToken: string;
  user: {
    id: string;
    email: string;
  };
  errors: LoginError[];
}

interface LoginResponse {
  tokenCreate: TokenCreateResponse;
}

export default function LoginDialog() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    console.group('Login Attempt');
    console.log('Form Data:', { email, password: '***' });
    console.log('GraphQL Mutation:', LOGIN_MUTATION);

    try {
      const variables = {
        email,
        password,
      };
      console.log('Request Variables:', { ...variables, password: '***' });

      const data = await graphqlClient.request<LoginResponse>(LOGIN_MUTATION, variables);
      console.log('GraphQL Response:', data);

      if (data?.tokenCreate?.errors?.length > 0) {
        const error = data.tokenCreate.errors[0];
        console.error('Login Error:', error);
        setError(error.message);
        return;
      }

      if (data?.tokenCreate?.token) {
        console.log('Login Successful');
        console.log('Storing tokens...');
        localStorage.setItem("token", data.tokenCreate.token);
        localStorage.setItem("refreshToken", data.tokenCreate.refreshToken);
        console.log('Tokens stored successfully');
        setOpen(false);
        router.push("/dashboard");
      }
    } catch (error) {
      console.error('Login Error:', error);
      setError("An error occurred during login");
    } finally {
      setIsLoading(false);
      console.groupEnd();
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm">
          Log in
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-gray-100">
        <DialogHeader>
          <DialogTitle>Login</DialogTitle>
          <DialogDescription>
            Enter your credentials to access your account.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              required
            />
          </div>
          {error && (
            <div className="text-sm text-destructive">
              {error}
            </div>
          )}
          <div className="flex justify-end space-x-2">
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Logging in..." : "Login"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
} 