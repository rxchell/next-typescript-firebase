import React from "react";
import Image from "next/image";
import Button from "../Button";

export default function LandingPage() {
  return (
    <main className="flex min-h-screen flex-col justify-center items-center">
      <div className="flex place-items-center">
        <Image          
          src="/logo.svg"
          alt="Logo"
          width={600}
          height={300}
          priority
        />
      </div>

      <h1 className="text-xl font-bold text-center mb-10">the collaborative module planner for NUS students</h1>

      <div className="grid text-center gap-5 lg:grid-cols-2 lg:text-center">
        <Button text="Login" link="/login"/>
        <Button text="Sign Up" link="/login"/>
      </div>
    </main>
  );
}