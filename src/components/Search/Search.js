import { alpha, styled } from '@mui/material';

const Search = styled('div')(({ theme }) => ({
  posotion: 'relative',
  borderRadios: '20',
  backgroundColor: alpha(theme.palette.background.default, 1),
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
}));

export default Search;
