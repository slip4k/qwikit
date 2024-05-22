import { Button } from './ui/button';

export default function HomeNavBar() {
  return (
    <div>
      <div className="flex justify-between  m-3 rounded-xl h-[75px] px-[4dvw] z-50 ">
        <div className="flex items-center justify-center text-5xl font-bold">
          js.
        </div>

        <div className="flex gap-x-5 items-center mr-2">
          <Button>Log In</Button>
          <Button variant="secondary">Sign Up</Button>
        </div>
      </div>
    </div>
  );
}
