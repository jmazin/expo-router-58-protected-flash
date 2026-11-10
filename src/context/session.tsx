import type { ReactNode } from "react";
import { createContext, useContext, useState } from "react";

type SessionContextValue = {
  session: boolean;
  login: () => void;
  logout: () => void;
};

const SessionContext = createContext<SessionContextValue | null>(null);

export function SessionProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState(false);

  function login() {
    setSession(true);
  }

  function logout() {
    setSession(false);
  }

  return <SessionContext value={{ session, login, logout }}>{children}</SessionContext>;
}

export function useSession() {
  const context = useContext(SessionContext);

  if (context === null) {
    throw new Error("useSession must be used within a SessionProvider");
  }

  return context;
}
