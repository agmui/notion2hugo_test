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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KNUYECX%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T030940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIFQ9aaSzgO1zLsrL1yG1U90DdzYqyMPOlDl8Q3PIkoVPAiBXJbnT4Y384GLnxr1Mkp%2Bn%2Fv54rE8Zkz34TwJQ4Zi8HSqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOB6y0kl9VRGhICHqKtwDX1bXSfhQtWUS%2BvfeFSczrpKnxpH3MEjAscUqhH5lXsG0ddRF8gUfxt8X5CE5ddBuJ3IJNhhfAJKFUTKYuM07TSGMSwppu4gy4tRgIjbZaesSIWGktWZbSRyx4IH5%2Bfnr68%2BhrqTKhaTaEDCgcPpdUf%2BLwciGfpDATW%2FgtVTCmNp5nFxPKIN6i4IF41xGAUR33g36nQj6g8XI743dNdQHZVes%2Fdx6kj2dZU5MJ7gSTqOhND8V8quxNzuOxiaRJBDKFR0oF2atSVRw5y7ZEf74cNJRrYVcJCIFNtj%2FoWk8PNBXk7N%2BvFKvJMYE7n6YlQM3Mye%2ByRcowqlKG1EV0V%2BCgtf6FnfUEzUBoiu3rd7ZiO%2BBi%2FxtWsiDg0Zyx9kJnesgSNp5SexISxiuPGbzUuXJMa4rw6fUl5%2Br2Z%2BQvnr7WqZLYKPHylnOfQib0s9AX3Hxr%2B%2FtYo%2BiE7F%2BSxFP9%2BfgDTtSZUsoduTRj9NjTW4mQFuVkUK8me2WOE7uycw%2FzGj0UrlWBwd%2Foyr1fP%2BfI7Q4S2mRED3%2B8JClVnV7V1WeouMtLsE4Usr8jL%2BES%2FSkeTdS%2BJVwG6RedrPZCbglctswFf3hUjfettkA1ysGvEq0ZRM1z2qtGHxawzdcL7AwzaDmvAY6pgF9KoyHCrfOA9%2FOQq8ZcpQuERDorjoImUNiMvI6StpnkqgKGe%2FUstnG0V3PgxUTi2FWjzS9Qt2G55Z0I0Ey9Cb93%2Bl2VWUC%2FweqdeNpQgvXUYr8DGsecZYkQCW03qLvFZ7AVPcZWjQ0qTayhkT9%2FOeK8tRGWu55GdIgvROueb9to79Jf%2BH2gCelhYIGcJkq9ClwcAg3StueRitR%2BuN6HNyq9Yxilc%2FO&X-Amz-Signature=9853b4749a72a44b51d93888728136f5d59479c613720c67d3c345162549af96&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDLVZFMB%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T030940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIG%2BEoNwNzqnaO3sqC9JWAJltjXyPsnYrkUYCMWvDddtoAiEAlrfwCA96Ck%2BE9eRFCc9aYB9ORUPgoPVOPrhMth6tvegqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBdWU2ibeAcQivKoWCrcAwA8fgUqlgPGgMIE2l9bZKIwZNzwyYWImQ1l1v670LrL3MxAzHCrh1brMrHriGxrQSbKCHIplmXXNSHH5KFEXK9gllN08mZLmV5wAx86zFPSfg0cQLMe6mrHoDI4gVFMIRgEZs8jmXB0nyrIh%2BTnc8cGDshXw7D0WRzZu%2BhZskFMYzp%2FZAqN0dGxu6U8Wg%2BLU1X0i0s0TovheZpol4t5sJsPs5Kcpco9rQZJ56OIhh0JoaFAI8DAh3M004xff4lB%2Fqn3%2FQVM20aBxQwhas4hfu2%2BoxsLG2dTMqCs3Om3Mb3BdOpflZ%2BrNCfLvcQZRZg6kAIKfW2K1CUvx1hcxXoCE5SzHdPReS%2BhKgPN9uXRt7mO9%2FJbxDIIbJ3IqkDY7MO8U3tDkmpmzGteCtgt%2FK2B3JVRU6UCcnqtstk4aRx3nicugz1Xy3gCloV3jktTYC2iddKN3UAvjhADuvGzvfHQP6qNz%2BNYk5gj%2FhW8O1qngY2AfrHFtXfDjtDKvF6djy4LLrpS6%2BMPr6p%2BsxtlRZwz80iRlwSm%2FD4zA65TDk9%2BcDXc1kX8VLpxsZM8WXLO%2BwmUtqY%2FDTaj4SA%2F8rSO025DVfcmxYPwba63WCRM2HoxFS62i7AdqapxHaTx0ToxMOOg5rwGOqUBzmgkR9e2I2%2BdR8x9ZMS%2Fzv5fDtapagXH4v1NJz9z8sxBtIvNklYEI8D6GeIXWRyUHJ4zqisdy1uaDq0RTFJYnGwpl5HBMXyi0sbFuRurCj1XB%2B5tS4rxekfEa1HwFDLRMF14F%2B9I3nfb9o8ZvD6h4veWCH%2BzVb4RQuS5G1Sego7Tf%2BaSMyDT9%2BrgShadgHjxCXRCU9kqquM2praZBG5eIfzVND%2Fq&X-Amz-Signature=869aad53b88e98361338810e6b7e596cebfe98b8651e40e07f637017371f8738&X-Amz-SignedHeaders=host&x-id=GetObject)

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
