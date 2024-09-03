import { useSelector } from "react-redux";
import { useRouter } from "next/router";

export default function Dashboard() {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const router = useRouter();

  if (!isAuthenticated) {
    router.push("/login");
    return null;
  }

  return (
    <div>
      <h1>Your Dashboard</h1>
      {/* Display progress and module list */}
    </div>
  );
}
