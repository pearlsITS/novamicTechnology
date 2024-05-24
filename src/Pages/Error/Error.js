import { useNavigate } from "react-router-dom";

export function Error() {
  const navigate = useNavigate();
  return (
    <div>
      <div>Error 404 Not Found</div>
      <button onClick={() => navigate("/login")}>Login</button>
    </div>
  );
}
