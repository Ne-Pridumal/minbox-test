import { MouseEvent, ReactNode, SyntheticEvent, forwardRef, useContext, useEffect, useRef } from "react";
import AccordionContext, { AccordionEventKey, isAccordionItemSelected } from "./accordion-context";
import AccordionItemContext from "./accordion-item-context";
import './index.scss'
import { IconChevron } from "../../atoms/icons";

export type TAccordionHeader = {
  children: ReactNode,
  showButton?: boolean,
  onlyButtonClick?: boolean,
  onClick?: () => void,
  onActive?: () => void
}

const AccordionHeader = forwardRef<HTMLDivElement, TAccordionHeader>(({
  children,
  showButton = true,
  onlyButtonClick = false,
  onClick,
  onActive,
  ...props
}, ref) => {
  const { eventKey } = useContext(AccordionItemContext)
  const accordionOnClick = useAccordionClick(eventKey, onClick)
  const { activeEventKey } = useContext(AccordionContext)
  const buttonRef = useRef<HTMLButtonElement>(null);
  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    const isButtonClick = buttonRef.current?.contains(e.target as Node)
    if (onlyButtonClick && !isButtonClick) {
      return
    } else if (onlyButtonClick && isButtonClick) {
      return accordionOnClick(e)
    }
    return accordionOnClick(e)
  }
  useEffect(() => {
    if (Array.isArray(activeEventKey)
      ? activeEventKey.includes(eventKey)
      : eventKey === activeEventKey) {
      onActive?.()
    }
  }, [eventKey, activeEventKey, onActive])
  return (
    <div
      className="accordion__header"
      ref={ref}
      onClick={handleClick}
      {...props}
    >
      {showButton && (
        <button
          className={`accordion__header-button`}
          ref={buttonRef}
        >
          <IconChevron
            direction={`${isAccordionItemSelected(activeEventKey, eventKey) ? "down" : "up"}`}
            height={24}
            width={24}
            color="#f0f0f0"
          />
        </button>
      )}
      <div className="accordion__header-content">
        {children}
      </div>
    </div>
  );
});

type EventHandler = React.EventHandler<SyntheticEvent>

const useAccordionClick = (eventKey: string, onClick?: EventHandler): EventHandler => {
  const { activeEventKey, alwaysOpen, onSelect } = useContext(AccordionContext)
  return (e) => {
    let eventKeyPassed: AccordionEventKey = eventKey === activeEventKey ? null : eventKey
    if (alwaysOpen) {
      if (Array.isArray(activeEventKey)) {
        if (activeEventKey.includes(eventKey)) {
          eventKeyPassed = activeEventKey.filter(k => k !== eventKey)
        } else {
          eventKeyPassed = [...activeEventKey, eventKey]
        }
      } else {
        eventKeyPassed = [eventKey]
      }
    }
    onSelect?.(eventKeyPassed, e)
    onClick?.(e)
  }
}

export default AccordionHeader
