import { SyntheticEvent, createContext } from "react"

export type AccordionEventKey = string | string[] | null | undefined

export type AccordionSelectCallback = (
  eventKey: AccordionEventKey,
  r: SyntheticEvent<unknown>,
) => void

export type AccordionContextValue = {
  activeEventKey?: AccordionEventKey,
  onSelect?: AccordionSelectCallback,
  alwaysOpen?: boolean,
}

export const isAccordionItemSelected = (
  activeKey: AccordionEventKey,
  eventKey: string,
) => Array.isArray(activeKey) ? activeKey.includes(eventKey) : activeKey === eventKey

const AccordionContext = createContext<AccordionContextValue>({})

export default AccordionContext
