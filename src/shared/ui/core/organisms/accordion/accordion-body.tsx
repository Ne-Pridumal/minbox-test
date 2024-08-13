import { ReactNode, forwardRef, useContext } from "react";
import AccordionCollapse from "./accordion-collapse";
import AccordionItemContext from "./accordion-item-context";
import './index.scss'

export type TAccordionBody = {
  children: ReactNode
}

const AccordionBody = forwardRef<HTMLDivElement, TAccordionBody>(({
  children,
  ...props
}, ref) => {
  const { eventKey } = useContext(AccordionItemContext)
  return (
    <AccordionCollapse
      eventKey={eventKey}>
      <div
        className="accordion__body"
        ref={ref}
        {...props}>
        {children}
      </div>
    </AccordionCollapse>
  );
})

export default AccordionBody
