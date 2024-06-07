import { HStack, Image } from '@chakra-ui/react';

import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

import logo from '../assets/logo.webp';

interface Props {
  onSearch: (searchText: string) => void;
}
// ToDo: Avoid the prop drilling
const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding='10px'>
      <Image src={logo} boxSize='60px' />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
