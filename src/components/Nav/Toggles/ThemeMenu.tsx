import  { useState, useEffect } from 'react';
import Select, { type ActionMeta, type SingleValue } from 'react-select';

const themes = [
  { value: 'gruvbox', label: 'GruvBox' },
  { value: 'everforest', label: 'EverForest' },
  { value: 'evangelion', label: 'Eva-01' },
  { value: 'catppuccin', label: 'Catppuccin' },
  { value: 'rosepine', label: 'RosePine' },
  // { value: 'bigsur', label: 'BigSur' },
];

interface ThemeMenuProps {
  onChange?: (theme: string) => void;
}

function ThemeMenu({ onChange }: ThemeMenuProps) {
  const [selectedTheme, setSelectedTheme] = useState<SingleValue<{ value: string; label: string } | null>>(null);

  const handleThemeChange = (selectedOption: SingleValue<{ value: string; label: string }>, actionMeta: ActionMeta<{ value: string; label: string }>) => {
    setSelectedTheme(selectedOption);
    

    if (onChange) {
      if (selectedOption) {
        onChange(selectedOption.value);
      }
      document.documentElement.style.transition = 'background-color 5s ease';
    }
    document.documentElement.style.transition = 'background-color 5s ease';
    // Update the HTML tag with the selected theme
    if (selectedOption) {

    document.documentElement.classList.remove(...themes.map(theme => theme.value));
    document.documentElement.classList.add(selectedOption.value);
    localStorage.setItem('selectedTheme', selectedOption.value);
    }
  // Reload the page
  // window.location.reload();


  };
  useEffect(() => {
    // Get the selected theme from local storage
    const storedTheme = localStorage.getItem('selectedTheme');

    if (storedTheme) {
      // Update the HTML tag with the selected theme
      document.documentElement.classList.remove(...themes.map(theme => theme.value));
      document.documentElement.classList.add(storedTheme);
    }
  }, []);

  return (
    <div className="">
      <Select
        value={selectedTheme}
        options={themes}
        onChange={handleThemeChange}
        placeholder="Theme"
        className="w-[40px] md:w-[80px] xl:w-[130px] text-[4px] lg:text-[14px] xl:text-[16px]"
        classNamePrefix="select"
        
        styles = {{
            control: (base, state) => ({
            ...base,
            borderRadius: '0.25em',
            height:'36px',
            display:'flex',
            justifyContent:'center',
            alignContent:'center',
            color: state.hasValue ?'var(--foreground)':'var(--foreground)',
            backgroundColor: state.isFocused ? 'transparent' : 'transparent',
            borderColor: state.isFocused ? 'var(--foreground)' : 'var(--foreground)',
            outline: 'none'  ,
            border: "1px solid var(--foreground)",
          }),
          menu: (base) => ({
            ...base,
            backgroundColor: 'var(--popover)',
            borderRadius: '0.5em',
            padding: '0.125em 0.35em',
            color:'var(--foreground)'
          }),
          placeholder: (base) =>({
            ...base,
            color:'var(--foreground)'
          }),
          dropdownIndicator: (base) => ({
            ...base,
            "svg": {
              fill: "var(--foreground)"
            }
          }),
          option: (base, state ) => ({
            ...base,
            backgroundColor: state.isFocused ? 'var(--accent)' : 'transparent',
            color: state.isFocused ? 'var(--accent-foreground)' : 'var(--popover-foreground)',
            
            padding: '0.25em 1em',
            borderRadius: '0.25em',
          }),
          valueContainer: (base) => ({
            ...base,
            padding: '0.5em 1em',
            color:'var(--foreground)'
          }),
          indicatorSeparator: (base) => ({
            ...base,
            display: 'none',
            color:'var(--foreground)'
            
          }),
          
          clearIndicator: (base) => ({
            ...base,
            color: 'var(--foreground)',
          }),
          
          multiValueLabel: (base) => ({
            ...base,
            color: 'var(--foreground)',
          }),
        }}
    
      />
    </div>
  );
}

// Example usage
function App() {
  const handleThemeChange = (theme: string) => {
    // Handle theme change logic, e.g., update localStorage, apply styles, etc.
    console.log('Selected theme:', theme);
    
  };

  return (
    <div className="">
      <ThemeMenu onChange={handleThemeChange} />
    </div>
  );
}

export default App;
