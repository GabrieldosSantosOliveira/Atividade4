import { createContext, FC, ReactNode, useState } from 'react';

interface IInputContext {
  isFocus: boolean;
  setIsFocus: React.Dispatch<React.SetStateAction<boolean>>;
}
export const InputContext = createContext<IInputContext>({} as IInputContext);
interface IInputProvider {
  children: ReactNode;
}
export const InputProvider: FC<IInputProvider> = ({ children }) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  return (
    <InputContext.Provider value={{ isFocus, setIsFocus }}>
      {children}
    </InputContext.Provider>
  );
};
