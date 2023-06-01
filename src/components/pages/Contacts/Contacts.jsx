
import { ContactForm } from 'components/Form/Form';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Box } from 'components/common/Box/Box.styled';
import { ContainerCardCommon } from 'components/common/shared.styled';

export function Contacts() {
  return (
    <ContainerCardCommon>
      <Box color="textColor">
        <h1>Phonebook</h1>
        <ContactForm />

        <Box
          width={0.85}
          margin="0 auto"
          mt={[4]}
          borderColor="accentSecondary"
          color="textColorSecondary"
        >
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </Box>
      </Box>
    </ContainerCardCommon>
  );
}