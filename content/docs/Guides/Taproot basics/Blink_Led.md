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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIIFQRYN%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T004147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmbNY4S63YVAMYqUpdw38FliyQOkUXB7jcKkJwxJfN%2FwIgNGysh0PlC%2B4GytKenuL0IQMLKQhHmA%2F2IA0EVeGdQnsqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC8HasYu%2FvInqWZ4cCrcAwP68uDqAqxXzr0dVz5BNjrFrrk4diX9bh%2F63VA9GUcjjC6uR9F%2FU0TCRBi8JeflhZrXmLULGSE8psuRXw%2BIcwNdcxVSXqbiD2RLwURsAY91ZvTn3QffUTsrI5BgGhWSpZrCUv4YSFH%2BAzP2NNg8iZyvWEjyjG0DzwYtQ35ej3xtHtgPmraOP9ejXqBbzQox0Nht4FYRgBcWmQqjBEZeoWQm%2BEQNI4tx6NlkFTFFYoa9XhUcWKGoEc1BqtzIY7N2UgGEu4dTlUtk9egIZwFr%2B%2BGUx4DYSKapnaxZw%2Fexix241ogLLHcJENWjHtofIRuTGsETF9CujQAGXFMUYau2YQU3KfeAlib4US3gUbrm%2FBvYUiB8%2BDsVlO%2BPb5erKfOOrx1ePcc1ovsHP7WfgIwJdiDJAHi3FqZw1XVlUKuS2YzLKNxTS10Lp67HcW9Cx%2FF6VPKbOyCypeDRu%2FTWa9MbYgXTy5TLqMpMaMEm4MP4XA8Y14oNIX%2BQRcMOuO3aleilaKnH7AupgOyiuPB%2FHR3XkEuqamUr6jeg19m4GcUs0wbZdX0O0Jq1qpfSjFxO1RyGXBAFtwVdwMu9B12Qsp%2FtrkyAvn%2BYXdhJ0EQwXramL4rixpyzhxJd67NVIT9LMO6y3sEGOqUBA9RTndoFLTzI6%2ByTJliJe7DewblWzGVmidtsZt1Ki7L37myAVxYRkeSy12fMKGReYByRfwHY6bM1L%2FwIR%2BdT0A93Ao8wTILzzBJ9lzXJIFQ2XBMqNRdviuGzUeZI4Ghq%2BB7NOChOaccZite4YeEyXUOdC8fbUg66%2BWvKEYGFtcD%2BvxaJ%2FJXuoGLPbL5i2w%2BbN6f4tsxvXvCvUR8WwoHlpiEyZFSC&X-Amz-Signature=c92659bbb0db3cf9dd2d6d37cd17baf8bf5e5200b383d4fb13111c66b7865429&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHYYGOS5%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T004148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClgXKR0ArClDDqtxJmwvjntDdZOk1Ddkl3bJhkCfrkkAIhAInw2aTki%2B5IX96tYNuy%2Bpy8tPwEoGG7H0eCB2NSsztrKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxAmGF5OQg3NgIe28Aq3APQsUIM3J6HYN3P02g6QC3QZw6mzBr162Qw7PEqL2tkn8zB4z%2BCNgJsrouBSp5yB3yheyAm9FEv8LLlRpoyVj9T6YSJ%2F8mya99321q70qRzIih5nneHhrUrmbejN8FEHeDh5sCZsI58wkmNU0AyPr4viBfzagfjXKoI5A5oDxqtC4nTtYrh58voTHePo%2BgKOwMn0VE%2FSx7lJ0ls11E%2FnX87d5TyFHCuclxy6bLNp0E3Gbm30NTMiAY%2Bk2ZWWuKGTBEq9WGZkLnQ9VSCb75NaIFiLmSdgU9pSx5pbzrT%2FT4gIlA3eQfnia1ZNXV%2Fzcn2KLc6mpnN30yCBn1Ckt0DxVpfNxw3wSqI%2BryzbMReeGnErYDiJeibfVG18sDwWYYGcAIUgFIy%2Flhci46Zscv7y8%2BMCCAes%2BWoislJv0ztuOR%2Bov655O2HkiK%2B5IqV0ZtVH3c3bxNZpooRHIqu9zke5e1fjPV%2FKoUD0YkD7m7bnyLF4lHypkQNMFG4cC2nezKQrVvscjN3U0te5El4fvsqG001qggkPVii9TIdTEmFpEjEw6uLrXC1VeHz1ac0qb4ljsK7mEZ5jBpvE4arw7LzPCti%2BT5Kt4rrLt2cHhzN27MC4%2FQLCwjZjr%2FeX5dMjjDLst7BBjqkAb8fzFzWm3%2F7N4haHDNRTC%2BKCdUNqtdZ0X9raEh8ogs4TSL6%2BjQphP6jXGFrcPCPVc%2BAnnaDynC9uG9MBYMuQaDik1C%2BpCtyqehHnf8E33utisdVKerXq8NpvFc1CiEKCqbz%2BePIf6%2BqGfbmzdZlZcLVjGGUfd7AP6HoB6trwrIxXZhlqccpf6TPkiVC11Alpyev6PsI0LmOksZqGqK4%2BbbOSQyq&X-Amz-Signature=aff2443f5fecf9f02dcc0d7b2b16dee5fccc1c564350bdd488eab80b2551a750&X-Amz-SignedHeaders=host&x-id=GetObject)

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
