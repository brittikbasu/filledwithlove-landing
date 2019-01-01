import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '14px',
  baseLineHeight: 1.2,
  headerFontFamily: [
    'Aleo',
    'Helvetica',
    'Arial',
    'sans-serif',
  ],
  bodyFontFamily: ['Aleo', 'serif'],
  googleFonts: [
    {
      name: 'Aleo',
      styles: [
        '100',
        '300',
        '400',
        '600'
      ],
    }
  ]
});

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
