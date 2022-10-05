import Auth from "../../layouts/Auth";
import { Card, CardContent, Typography } from "@mui/material";
import LoginForm from "../../sections/@auth/LoginForm";

export default function Login() {
  return (
    <Auth>
      <Card
        elevation={0}
        sx={{
          maxWidth: 450,
          margin: "auto",
          borderRadius: 5,
          boxShadow: `2px 4px 35px 6px rgba(0, 0, 0, 0.1)`,
        }}
      >
        <CardContent>
          <Typography sx={{ fontWeight: 600, fontSize: "24px" }}>
            {"Log In"}
          </Typography>

          <LoginForm />
        </CardContent>
      </Card>
    </Auth>
  );
}
