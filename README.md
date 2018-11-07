# Calculator in React-native 

### Author: Adrian Sitko
### Created for Mobile Programming Classes at
### Państwowa Wyższa Szkoła Zawodowa w Tarnowie


---


# Contents:

[Interface](#interface)

[Code - UI](#behind-the-code)

[Code - Mechanism](#how-it-works)

# Interface:
![Interface](https://i.gyazo.com/c4d74e402a56970573cf74dcc0b1c730.png)

Classic look of an calculator with modern touch, it consists of number buttons, basic operations (*,/,+.-) buttons. point button, button to delete last entry, button to clear result-box and equal button to see the result of our operations.

# Behind the code:

## UI
is created by setting up one big container (View) for program spliting it into to boxes with different sizes. First box is result-box (flex: 1), second button-box (flex: 4) further split into two boxes for readabiltiy, then left box into rows. Buttons are created by using TouchableOpacities.

![UI](https://i.gyazo.com/c3b60ff9fdedb2fe3b6b8ebdaf9500be.png)

All that using flex stylesheets:

![Flex code](https://i.gyazo.com/ce923ff0418d8c20b2b6cad1c51fb04d.png)

# How it works

## Functions
For calculator to work we use four separate functions: number( num ) and three anonymous: reset, back, result.

### number(num)
This function gets argument from touchable and after checking if what we want to print on the screen is fine adds it to string state that is printed in result-box.

![Adding](https://i.gyazo.com/a2aa36ee71512b53ba469e992a9e50c7.png)
![Print](https://i.gyazo.com/7cf4766c6acea1fc2b8ff13813ddfd82.png)

### reset
This is just self-explanatory it resets result state to the first form.

![Reset](https://i.gyazo.com/2444adb3ade6f6066144c9027b9b07e3.png)

### back
Takes present state and by creating substring with length -1 removes last entry.

![Back](https://i.gyazo.com/5baa32c2ac1b168febfcc3424d6435b0.png)

### result
Using eval() runs operations from string that is our state.result.

![Result](https://i.gyazo.com/3d13260be11d48be56a41fc12420eb14.png)
