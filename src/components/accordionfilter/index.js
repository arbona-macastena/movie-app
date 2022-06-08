import React, { useState } from "react";
import styled from "styled-components";

import Checkbox from "../checkbox";
import collapseIcon from "../../images/collapse.png";
import uncollapseIcon from "../../images/uncollapse.png";

export default function AccordionFilter({ list, title }) {
  const [toggle, setToggle] = useState(false);

  const handleAccordionState = (e) => {
    setToggle(!toggle);
  };

  return (
    <AccordionWrapper>
      <AccordionHeader onClick={handleAccordionState}>
        <img src={toggle ? collapseIcon : uncollapseIcon} alt="collapse-non" />
        {title}
      </AccordionHeader>
      <AccordionContent className={toggle ? "visible" : ""}>
        {list.map((item) => (
          <AccordionItem key={item.id}>
            <Checkbox></Checkbox>
            {item.name}
          </AccordionItem>
        ))}
      </AccordionContent>
    </AccordionWrapper>
  );
}

const AccordionWrapper = styled.div`
  //
`;
const AccordionContent = styled.div`
  transition: 0.4s;
  display: none;

  &.visible {
    display: block;
  }
`;

const AccordionItem = styled.div`
  display: flex;
  gap: 12px;

  font-weight: 100;
  padding-bottom: 10px;
`;

const AccordionHeader = styled.div`
  margin-bottom: 12px;
  font-size: 1.2em;
  cursor: pointer;
  display: flex;
  gap: 12px;
`;
