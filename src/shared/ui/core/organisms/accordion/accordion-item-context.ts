import { createContext } from "react"

export type AccordioItemContextValue = {
  eventKey: string,
}

const AccordionItemContext = createContext<AccordioItemContextValue>({
  eventKey: '',
})

export default AccordionItemContext
