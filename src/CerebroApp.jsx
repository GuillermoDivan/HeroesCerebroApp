import { AuthProvider } from "./auth"
import { AppRouter } from "./router/AppRouter"

export const CerebroApp = () => {
  return (
    <AuthProvider>
    <AppRouter />
    </AuthProvider>
  )
}
