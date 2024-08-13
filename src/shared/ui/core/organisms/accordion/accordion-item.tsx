import AccordionItemContext, { AccordioItemContextValue } from "./accordion-item-context";
import { ReactNode, forwardRef, useMemo } from "react";
import './index.scss'


export type TAccordionItem = {
  eventKey: string,
  children: ReactNode
}

const AccordionItem = forwardRef<HTMLDivElement, TAccordionItem>(({
  eventKey,
  children,
  ...props
}, ref) => {
  const contextValue = useMemo<AccordioItemContextValue>(() => ({
    eventKey
  }), [eventKey])
  return (
    <AccordionItemContext.Provider value={contextValue}>
      <div className="accordion__item" ref={ref} {...props}>
        {children}
      </div>
    </AccordionItemContext.Provider>
  );
});


export default AccordionItem
