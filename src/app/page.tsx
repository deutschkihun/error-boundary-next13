import { AuthRequiredError } from "@/lib/exceptions";

const session = null;

export default function Home() {
  if (!session) throw new AuthRequiredError();

  return <div>error handling main page</div>;
}
