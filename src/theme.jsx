import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiTextField: {
      defaultProps: {
        fullWidth: true, // Ensures TextField always takes full width
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          height: 45,  // Set default height of the input field
          padding: '0 12px', // Ensures padding inside the input
          backgroundColor: '#fff', // Background color of input field
        },
        input: {
          padding: '8px', // Padding inside the input text box
        },
      },
    },
  },
});

export default theme;
