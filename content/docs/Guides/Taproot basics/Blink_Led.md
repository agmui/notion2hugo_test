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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y27SJ4S2%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T061425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBvuc3GsnjdrghVkaFSwxe68uANv2yjtCDrJ9nCUbELNAiAJbCq2ft30Nt2M2C%2FZNmsafQpmLrperUm8rOcsFoeSmCr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMEP3dv4GaQEriTShuKtwDzQLIzVbgnFa%2FHFcroQzPinZAZBFwvqnbj65nZQuMeUv1uo8Rw0Wu73Yy0OfkqD%2FAom4t%2BzS970EyBEN%2FUuESZETyOgX1%2B7H%2BkQa8tXVjqsdoJIihgTGhF0Rjg0eJfJWmkBZO%2FbVz%2FmAWL57Nq9B6hS4L0ZYRJXXfHI5oXIP903sMSCGv%2Fa%2BAEz3WZf7JG548qTg0ipXiTA8JhBya%2FtJnRhYuzzhbqEyWrTmbAgVfrIzaJ81teBU%2BzQ0%2ByHr0bia4s3QV86aC9XDq6saBiI3fhyA6MFAZJi7WjNbCtpi8j4cZlN69l2VMv8yxnw%2BRx6cDj4JdoGiWV6ds1BMGzu%2FZ7riODIPj8oH6tXiC7oTfFuXyREAdf3IjzdTA0%2B9bKWfqGzmA%2BotnDK9hXgiwm0ArcD2G9Fq5vexu5ZaabLKxXwlJS5XOupXPMntBJkjx2YUfcA1Ol5uDm5hnViSknbonhtrhDAsdPmbWaabkyOmx%2Fb47ckKmpeI7JwdZNNVgAv7fOVZjGWiV5GwgrGhZPLp8uKCjHF2JvalygDjlOiEk1SMZ9atq%2FSFcD%2B9ErmmlCx55TXOjE05V6D7uqjiB7EiGFV3BqbT1s%2BR2ZQO3Nr%2FzP3SVWG9JRzDTD28XeAIwyNDwxAY6pgGaesQ6JOUt2O%2FrP7HJAkjS4ERGvRlXOR2ZCp%2Bj82QtPTslniejlAl0QzmssMpCP3m5Tk%2FyiyVv4yjog3hBLC5brfv1RhGG5tYQZNjJjSQl5LA2e5nWJq7I7R6sjoGmFxop6W4U75sRPzvQ5OQRTUm5gD6Wuj%2FhTMQsnaFbS0w3CA4bjn2kIv73gzZPCxngx4NedkoXHUNDHqaI6caHj12QjsxbrQHG&X-Amz-Signature=a62bd967a1f25d1b8110cd56f48189fa92a3e85d8895237e1cd5a2926535da92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LASPOBU%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T061426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAblOzd0Sodt4jM%2B0RqMn4h5qovw%2BywlfeEXgbYBN%2FhRAiEAlBkaNyRdHLiKxtCYvlCzuvnHi4g6zWnFBGwyNForeLYq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDNqi%2FIlqvN3Hua15SCrcA3yCk5Xth%2Fk8hqxvFxIlOBw4HP%2BRMTAZBT81%2BKrHWzMsRzJ5gDauVsugCs9Vn6QB%2Fa6SPs0dDnmc2R2rxIr7vPd%2F9FEfW%2BO6vvpscWn9GUlJdeMW6N7W%2F5GZ2ONOazRG%2Bjox25L0la4kM8AWY6KtqKP%2Bnf1Y9OQt6BlamUldDti00QrNMSkltcCHjP8aqmG3iT5%2FNyq1fBgUxM1mDk2WL49GPLfAt59nEniBPzpUt5XkvQW9trDtgus9HYSuMCyheToEh0GrDcR7UXB96fvzz3ng3zel9yT9R3LUAwJT3ONlhgtQ0uFLAl18i7a47OCmEo4KtNEBpMu5E1XtR1LG5YAT1vihmz8ON4jSMlDyv1SlPnP2K5phcRM5GbxvG1nNupHtL%2FV4p4SJSQ8z61Fwis5WUJ8ZKvH69eFfqMfGwuWF78R2%2FN8E0jYwhxdsQSjwdfpWv0bpzfwNMsyUYOErLMIBMIyZkYGReHh9hdydDluXQpXwKxiwZ1%2Flhv1%2BDShvX0qbNtD%2BxVl0galueFdK6YzOXPqwcSY5njBqp0Wor5mnMjpiQnA9q33LYfSSfvjWzCfIDklQ8ukrkEdDC1PtbjUTqE7k60%2FJ90%2F2SJCfwy1DvbGAUY3jhaSzXwUlMMbQ8MQGOqUBlsdovVlr82mBrgBoOCGbOr0brl0%2BgutBG2ElIe5itffNx0a%2BaNJ2USn0Q%2FPVjEd3zUd9o7ruplUTUTynO9nGKz3TLlc3WrtOsamigoGSsu3OnF%2Fvp7Y21vXPsiGs%2F030hdh5VCNcz2Kb1P0tLteRk0l0%2BpQ647s9B37E7BxSR9CAhKOnaH%2FQ8LUpHEMdpVSgGSjmLnmCWoIitjxCfMS9Qm74R%2BaB&X-Amz-Signature=9be5459ca0993b84bd8742169611daca7a6fae7400e93d726f3f76e2181b53b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
