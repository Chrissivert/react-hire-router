import { createContext, useState } from 'react';

export const HiredPeopleContext = createContext();

export function HiredPeopleProvider({ children }) {
  const [hiredPeople, setHiredPeople] = useState([]);
  const [people, setPeople] = useState([]);

  return (
    <HiredPeopleContext.Provider value={{ people, setPeople, hiredPeople, setHiredPeople }}>
      {children}
    </HiredPeopleContext.Provider>
  );
}
