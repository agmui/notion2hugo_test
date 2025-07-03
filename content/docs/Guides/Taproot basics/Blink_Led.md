---
sys:
  pageId: "dc03b680-5e9e-4779-a140-dd2523ca6202"
  createdTime: "2024-06-24T23:51:00.000Z"
  lastEditedTime: "2024-10-06T19:34:00.000Z"
  propFilepath: "docs/Guides/Taproot basics/Blink_Led.md"
title: "Blink_Led"
date: "2024-10-06T19:34:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 123
toc: false
icon: ""
---

> Note: These examples are mainly for the type-c

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GZFVIFB%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T140909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQDVpQ5TSoWVCMw%2BGYZFXluFIOxjfieSN5Pr8tvqLKlBpQIgQc%2FAQcZlOrnaWSY4IfHfwP2k5y0eG4iTKjAY9dCmRYIq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDC2s57jEWMP6L%2BVlqircA76%2Fx46aVHSi5raOndz53bNOg1R4BZG7pXjWB5T59UFvkV28OKTC1M9jZsdSRHgGr%2F5O%2FasdpAgdO%2BiEIdTWwzmc%2FULIFyb9syMFZljKIIVZCHzG7GgDEIycueFSVFmsSDHgwY9qqiUROOTUqdk2NGGZ%2BwNc9chCgOFFkZOrE347PxyP20y8QNDdp0M%2F5DQenbS%2BYFNfO02D58W%2Bs9vOADpsfA4AcA0z33rIms5F6a4piEUaLF5CI2rtTy9JvaYiEU%2Bi4IaF3N7C8jQ9tIPYJPwi3AYdO58xpttIQvdOWaXKzqHZjiHUCk9za8zGPsiRBrYQ8biAd%2FFNHlTp0eUq4A5HT83d%2FA8xwH6cw3ch9FqCfc7tihjIo1DtUy57XaW%2BWa5%2Fg%2BHkEk7%2BNFeBrRdqrkKK%2FIFQ3L6NSmeQ6WbrxYkpvNHRQeatCF55diesgnCz0swtrtB%2BoqJuxi%2FKmFxqPAyHw7wkxyx3Cd9%2F1w51ZMZdcn05wS8VMeQ6riAjjVMXmnZxhVW9M4l6ocqaJwk5C2DGVZhEQHgMSVOzL0p5fwcu467HFbJLBETt0qouipsMlh9jCekMlOf0R1DBm0Q2AIuRF%2F9Fzl5VlONUc7vgoVOOuBVDIb2e9tiOeOc5MIKNmsMGOqUBgGYXDMrzx6iuiNjF0itCpJqUZ%2BVCEra%2BjeeUq7ow7QZ11kDPlJsvCD%2BMsREnQDtHbUwPiPSUctLb9yXvPKGqF0pD8XE4ljrwmv8GzJ3tniV%2FP2eJ8mA8r8jwlpfhL5fhm0M6EzEd8V3PkjPwScqx2UOInIdNsdV9Qg2XaosKZYlBwA3n9yM1sM%2BxqHSqYCxbjRAVvtnmg3KdM91qk2GvUg08RlyV&X-Amz-Signature=5b9b9892889f4f99325040a1310414d9e55c0e41ba464825cb0216b82efcd4e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHOUNVXC%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T140909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQD4aDj8jJG4iI60xLI%2FXJwm1yqOMNv%2BT4QvAeUht2zflAIhAIsHtFd7hOEV5ZW1VZjT3ld2%2BLCGQyFgW1GAPsdsyi9tKv8DCBcQABoMNjM3NDIzMTgzODA1IgzFI016Zn32Cunm%2B7kq3AMvHjTbeXDDvcZTKdMXnJuWVyTk7AJBkWIbic7Kv%2FtNhZYnspFyjw%2BnjqeV03vpjXt%2FSFMknG%2Bsiz1BzazOy%2FGN3FtANEOKtMa81qnQQKzPJjoMy8FjbRHbn1rf0C296h%2B5cUtH%2BSKNIwltxf5srSNRM5gpFoda6PQXw3w5gTSgOWzxKjByGvhJbl1CNu5oKxTzjjzydr9R7LlfnSZa0P6m7FJ5ROCxFQmGMyRwAbjOypF%2F%2Fg6BMzIsrMx7xNTSOGgAOgEUNzqVDQgFwJcr8nCZav4HFY6hJnbeWSNPo1PVGHhYyhR1EbGQ8Jt1byIq0W2Eia%2BM0w6EMpJHhXNUiqMUlHq1noDu6Ri5oOUPDJgvYsdYDZrI%2BLoYKOGD9gdZQyH8l7CQFLU%2BqeCqAbMGymimnA77803eSe3i9QXAWpuOonUm%2Fqr1AEmsWvJhyTP8AgIj7620XAiJkYcjFLf4tiAedfFTOHR3MCKzHakKq7qQkJJENYskbHoYS95wRc9bXoAT5arU0tWx34zY5RVrcnOpRWOqh8wpiS9dfI03sCG1Qia2aE5cdS9Q9dSJ3uaBMJGf86UZSp6TH3zlNiTZ%2BzetW%2Fzlu5wbBoS1Qy1tkHkLfLj9ebvZPuPDhTs5VDCpjZrDBjqkAT5SSw0cxmhFvZRLCu6MFj9W3i7WeUhtnhzwmoPsHABkxpREWQn%2ByS%2Fuye4DMFWSZpZIJBjtExq1mWu5pB8zVUFQRAqN7kwz6IRn6vORbpvTJiRnDZyP%2F0%2BP3epL0oEZjB3O3foqEOnGUCpXr9UXN9zzZzJMV%2BDAqOIDACoXGmtTbMpv1y7ltYyvmIJyQqx56SRlv0KykKLTGrHMsYtiIHxZRkbv&X-Amz-Signature=506789b6e5e59732c0c5f03bcd01a3e04fba512735953b926d05b81b80f4a6ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

imports all the libraries that will be used

```cpp
#include "tap/board/board.hpp"     // import board specific settings
#include "drivers_singleton.hpp"   // import taproot
```

The drivers object in taproot is king and basically controls all aspects of the type-c.

To get it we call `src::DoNotUse_getDrivers()`.

it says not to use it but what it means is only to use it once.

```cpp
src::Drivers *drivers = src::DoNotUse_getDrivers();     // gets the driver object
```

initialization

```cpp
Board::initialize();     // initialize the whole board
drivers->leds.init();    // initialize the led
```

Turn On LED to red

```cpp
drivers->leds.set(tap::gpio::Leds::Red, true);     // Turn On LED
```

Turn Off LED

```cpp
drivers->leds.set(tap::gpio::Leds::Red, false);    // Turn Off LED
```

sleep for 500 ms

```cpp
modm::delay_ms(500);
```

### Code:

```cpp
#include "tap/board/board.hpp"     // import board specific settings
#include "drivers_singleton.hpp"   // import taproot

int main(){
    src::Drivers *drivers = src::DoNotUse_getDrivers(); // get the driver object
    
    Board::initialize();     // intalize the whole board
    drivers->leds.init();    // initalize the led
    
    while(true){
        drivers->leds.set(tap::gpio::Leds::Red, true);     // Turn On LED
        modm::delay_ms(500);
        drivers->leds.set(tap::gpio::Leds::Red, false);     // Turn On LED
        modm::delay_ms(500);
    }
}
```

{{< alert context="info" text="to upload to the type-c press `ctrl+shift+B`" />}}
