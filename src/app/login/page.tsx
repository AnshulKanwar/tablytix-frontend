import Button from "@/components/ui/button";

export default function Login() {
  return (
    <form className="max-w-xl mx-auto flex flex-col gap-5">
      <div className="grid grid-cols-2">
        <label>Email</label>
        <input type="text" className="p-1 rounded w-full" />
      </div>
      <div className="grid grid-cols-2">
        <label>Password</label>
        <input type="password" className="p-1 rounded w-full" />
      </div>
      <Button asLink href="/">
        Sign In
      </Button>
    </form>
  );
}
