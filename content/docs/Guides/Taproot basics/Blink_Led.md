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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXW5LEYK%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T121337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIFBvC1VXupdfIfbHUTQO8%2BcVU4cqE4FdbH3qOJx6KS9jAiAVv4BFMDEFl3bh%2BOM2Xwdno%2FKn9g6QQumJuXJNmPkXLir%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMFNL%2FuXsT6r4cD3pHKtwDUOuIjYSr02tpI7YtVxPaG7VoTuDVYSbtCh34NWsOeAdkodJ8q5Erfz6k96Y%2BN39UaG7u4DQwt2G6%2B5nJBAVNVgwKsHTa%2FjaWhXyvPAoPjHred9cDnQFnNMZri9JH4VW1KO0IWM8K75VFq1B3bdlySXEYA4OLdKFLqtPSAePbTdBsdAic28t9JX2AsB76kG8DejLg4nBFMbykfhjBP7jnvqewS7sKgDkpyktHsUfuio7IKt%2FSHY5k6ZUoUvzoKJRy0FxbpBinZXW39mOPqi%2BmrO71ZGBsP%2BaCKSOhj8DP67tYaDlu5BMiapN%2FtkPpswdm8fCwE%2FyD56s%2BV%2FQxHKnzcGgvkFHU0rRjYXv7B4w9siA5j1iD%2FrLCoV9OB4lQggU%2BN8xRK7Q3MGIMYXC%2BQgKSoP12F6UR9d1gzwP0nl47tHkwthQly1oOW5JVI4aO4NM1HtkiwCU9czyU8uboZvVAlfcphvfgpZ0KhDg8H1elL44D1TOEyRJuHFRbaEQBGbl6QoEJKtD6SstpemvaR6jzKAHml3mn3pigstjo%2B382j9x0pnj3dwO2iWjaacVJTtokM0Ul6M2Mfh6%2BbPeVJpVDiLeoZGYUeaHQz%2FSoTbJn4lxk8qS2fU5oq1RPsqIwuIDGwQY6pgHgOz2ggotKOH7uM3IMrwfKrNYuK4YEV2czly%2BT4%2FTSQtPJY25LIiQfZ2CIb4NahB1h%2Fp7JOZTxthTFC%2FcyBBMRsxL%2BPRh7BrB7j531XiPPNnr3tS9azWTZEgx4VXxzXaJMo7Efl9pyVG61k7ye4j5Wx9ugbHz5lPJeqQk0Myte%2B9w4ocT28dvIzHXyWrp%2BAqljCr35Y5011DFhuls%2FdGakvBRjv6l2&X-Amz-Signature=880528c6439e43b0dbdc06e9a1d0b8f7e2fc2c44b31885ec126e3a0c11c4a510&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JACH5OZ%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T121337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIHuNUdriuCzRkLu6%2FbJQ89KImv5wdPfkATrvbFN2KmhmAiAF6NiDgS2K6OTapvXM9RoxnLBmK%2BNA03HCbLovxMaRHyr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMGUmhKesMidqi8evBKtwDe1oB1ZvCMzRewFweSz7dqjT5AS7mYpHh9UL6v2Y37zwSLBCmua7YYBVq6fPptKvTrX7EHY5CZAY4lv9emfhGrSv3AM4IhE9q4BnJtojftDHz%2FllxgCEOtQXiWaESAeRB8sZKNNgSDSxmbONEYZaAKKnJoIbfjNAwuEyJfbaTe3BsB%2BpZeFKpaITOUW7FQ5Q7QGKvaCcPTsFXejse226Oq5eFE0j03c38TlkyYLWdb2rhr4FVKpjMeTsWISflqetQcbkWZQ12V%2Bxjs4s5lLAgA1nVC5kmjwgyVyXt40gTqYk1UUKyakaxRKEhaAHLtL0ZaqtW0O%2BG3lFoCAqgJWCrrCq%2FcYDoeyrEjRjvGphO4lzDLTN%2B0mn9Wa%2BN6ghII9Gley1WIGS8qgAoe4uu3QfI2W43geCz0hUE4CXZhOykqEfyCfAjZdLPeub7TJw%2Bmvvjogd0Z%2FgF5WaJgHQFO06%2FI7Lf2Itw8kxiMhAXCQHd88T491ivpxLlkE17WE9lSW4zenII6hF%2Fb%2FA%2FQ3S0ejj%2BEw3VmX5Oo626i9UuN2ePPtru3CZ3A2Bi08vB0cZdeg1NxpUS%2FJdGHTgCzAhF0m6qfzZb5xUE7wlb9rI8ad%2FLFfB2RFqoUJxIaNTr6aswoYDGwQY6pgHDp8jE4eIm7JUAY3Glix%2BfonLxaVhupfvMI5VMY7GUV57kKpN0BkeMS5h3Ukgl1BSmW%2BzuUcl1guPvXcb7ggesQOXXX0ZmAtT7miHYrTyS19t7Tybsyql%2FDkKevDq4BV7%2BiMa6ietOt1P9jxTfuCnXF2qkj81%2FgVGD%2BlFet7KaerS2y4Sgkx4OGvD%2BP8LYfcRvjIXnGSldBJafwWkpmHYfEGbbuTaR&X-Amz-Signature=41d99d4f8a06183e13e9402e14e4c26fb6a5846e1eb5c2e7d1c71afc7c111e66&X-Amz-SignedHeaders=host&x-id=GetObject)

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
