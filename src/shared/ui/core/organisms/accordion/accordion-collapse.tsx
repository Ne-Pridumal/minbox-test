import { ReactNode, forwardRef, useContext } from "react";
import AccordionContext, { isAccordionItemSelected } from "./accordion-context";
import './index.scss'


export type TAccordionCollapse = {
  children: ReactNode,
  eventKey: string,
}

const AccordionCollapse = forwardRef<HTMLDivElement, TAccordionCollapse>(({
  children,
  eventKey,
  ...props
}, ref) => {
  const { activeEventKey } = useContext(AccordionContext)
  return (
    <div
      ref={ref}
      className={`accordion__collapse ${isAccordionItemSelected(activeEventKey, eventKey)
        ? "accordion__collapse_active"
        : ""}`}
      {...props}>
      {children}
    </div>
  );
});

export default AccordionCollapse
