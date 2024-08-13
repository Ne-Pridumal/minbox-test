import { ReactNode, SyntheticEvent, forwardRef, useMemo, useState } from "react";
import AccordionContext, { AccordionContextValue, AccordionEventKey, AccordionSelectCallback } from "./accordion-context";
import './index.scss'

export type TAccordion = {
  activeKey?: AccordionEventKey,
  defaultActiveKey?: AccordionEventKey,
  onSelect?: AccordionSelectCallback,
  alwaysOpen?: boolean,
  className?: string,
  children?: ReactNode
}

const Accordion = forwardRef<HTMLDivElement, TAccordion>(({
  onSelect,
  activeKey,
  alwaysOpen,
  defaultActiveKey,
  children,
  className,
  ...props
}, ref) => {
  const [key, setKey] = useState(defaultActiveKey ? defaultActiveKey : activeKey)
  const selectHandler = (passedKey: AccordionEventKey, e: SyntheticEvent<unknown>) => {
    setKey(passedKey)
    onSelect?.(passedKey, e)
  }
  const contextValue = useMemo<AccordionContextValue>(() => ({
    alwaysOpen,
    onSelect: selectHandler,
    activeEventKey: key
  }), [key, alwaysOpen])
  return (
    <AccordionContext.Provider value={contextValue}>
      <div className={"accordion" + className} ref={ref} {...props}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
});

export default Accordion
