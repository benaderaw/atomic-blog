import { createContext, useContext, useState } from "react";

const FakeContext = createContext();

function FakeProvider({ children }) {
  const [isFakeDark, setIsFakeDark] = useState(false);

  return (
    <FakeContext.Provider value={{ isFakeDark, setIsFakeDark }}>
      {children}
    </FakeContext.Provider>
  );
}

// hook
function useFake() {
  const context = useContext(FakeContext);

  return context;
}

export { useFake, FakeProvider };
