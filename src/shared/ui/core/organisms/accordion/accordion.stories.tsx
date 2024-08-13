import { Meta, StoryObj } from '@storybook/react'
import Accordion from '.';
import { Typography } from '../../atoms';
import { RadioItem } from '../../molecules';

const AccordionComponent = () => {
  return (
    <Accordion defaultActiveKey='1'>
      <Accordion.Item eventKey='1'>
        <Accordion.Header onlyButtonClick={true}>
          <Typography variant='subtitle'>
            asdfasdfasdf
          </Typography>
        </Accordion.Header>
        <Accordion.Body>
          <RadioItem checked={true} content='asdfsadfsdf' />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='2'>
        <Accordion.Header>
          <Typography variant='subtitle'>
            asdfasfbv
          </Typography>
        </Accordion.Header>
        <Accordion.Body>
          <RadioItem checked={true} content='asdfsadfsdf' />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};


const meta: Meta<typeof AccordionComponent> = {
  title: 'ui/organisms/accordion',
  component: AccordionComponent,
}

export default meta

type TAccordionComponentStory = StoryObj<typeof AccordionComponent>

export const Default: TAccordionComponentStory = {
  render: () => <AccordionComponent />,
  args: {},
}
