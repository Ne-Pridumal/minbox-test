import Accordion from "./accordion";
import AccordionBody from "./accordion-body";
import AccordionCollapse from "./accordion-collapse";
import AccordionHeader from "./accordion-header";
import AccordionItem from "./accordion-item";

export default Object.assign(Accordion, {
  Header: AccordionHeader,
  Collapse: AccordionCollapse,
  Item: AccordionItem,
  Body: AccordionBody,
})

