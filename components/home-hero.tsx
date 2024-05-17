'use client';
import { Highlight } from '@/components/ui/hero-highlight';
import { Button } from './ui/button';

export default function HomeHero() {
  return (
    <div
      id="Hero"
      className="flex flex-col justify-center items-center mt-10 mb-10 lg:mb-0 lg:grid lg:grid-cols-2 lg:w-screen lg:h-[32rem] lg:mt-10 "
    >
      <div className=" lg:flex lg:h-full lg:justify-end">
        <div className=" flex flex-col items-center px-12 sm:px-0 lg:pl-28 lg:flex lg:flex-col lg:items-start lg:pt-12 gap-3">
          <h1 className="text-6xl font-bold text-center lg:text-start">
            build your next app
            <br />
            <div className="my-4">
              <Highlight className="text-foreground my-4">qwikly</Highlight>
            </div>
          </h1>
          <div className="flex gap-x-8">
            <Button variant="default">sign up</Button>
            <Button variant="secondary">contact us</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
