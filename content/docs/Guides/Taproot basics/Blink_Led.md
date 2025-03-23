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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5CYNEJR%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T150146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIFyCp1txia4DsPWcaxSp3vUkmtK5VUCNJ2NziN%2BhLrqbAiAg%2FUgy%2BAYF99Z9638rXVXtGnAAaTd1CD80NKxgXYVrSyqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMekHrasMCyxcJqfNfKtwD9Y3XpUmTj%2BHJcsPxA31EPt3jlDOfQRB27BRp%2B8sXVAkoqsg1QG4dHumKSj6Z%2FY77LMpS5To0Z6lrQ3x06YHLx6puHLKMuZtLGi7a9A9EZjztBQS7RvaOd3WMQhhL31dWzVzCaxdDINyg4FuFkNuAW6PTRntBserrMHPv2%2Fc%2FfdCJc9TKyBq5f8jSvVHjjAbkBiQZoxcwkWRgZHBKaktvQbguQzw%2BoMdQ4BLRSjFQQ12X41SzUo4BEbjBwzG9sj27S%2F%2FWlZLNAjtNp8MrJBxWCezGFy%2FEh1y9cz060rrIMr0Cfm2rS5L5QeRoQD1%2BuUTfB4tlUsXSH5E%2BgDhZstfh34MFKGXwAr0oB0KPkEYS0IJ%2BeKswP6eTtyteu13lZ993t0E7zj6mL5OPhKBQjZbWB7zTGeI3KiYROm%2BW83qx5G6U7Q%2BfKc1qdyHN7tQxvDY7m%2FHXVdVE%2FINRwLYFyUhivtTq8AMwL9ha8oyCHj8pIKmLWUC%2F5tMMoDFEKl%2Fr4q5%2BZ8BvGveDsJv6UzuHOxQUVK0e%2FpNVUcK4ULKUuu8yKgQ5VlvKKO1UpdTCB%2F5JcJ7%2FfzHGUl6ksi%2BMTKTxPLsPU3k1Z%2BVPZ4MPiuKptLy30GjcF1mCcojarX6jRVMwh8z%2FvgY6pgGXva5jVAx2Yku7vkMQFP%2Fvu%2FpNi1wyWnkaE0obpEoPq7df4TuAfKF2Q%2BE%2FY0uRtEqJE9Qwb5%2BC8IzAYcCaJIfPj2WwR4OGS0HQE5%2FkXRgZUdEB5WxcfQpvsCOWjbrWgLGhAfheru426BaJ1zK2WxNwutPyWfqMsLk4N3cBJygoBbAgO840EPLODr%2Fy1P7pSKs6NLA%2FWsXWRQNsrU4V9Et7S2RURlgq&X-Amz-Signature=ddc5e423ccfb69218489e433f9899cab142657d22fe6282d110a7277ebc9cd0f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3B6UE2B%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T150148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCpmNisJHswjyM2ntJY0QSlWvVJ19X9VFl6e2YpAj2uegIgT8xHwTgY%2F0kazAWxNFIYRQlx%2BR%2BMSAmF0AcKSIXSAtEqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNmG6eMQUF7Vay8AuSrcA0aLEgdjdSTGgS%2F%2FnT6udiRUrSQWtHqddoaxDEJuNxJ%2BxOvv7i1gHY6utHrbOilylOyv2XmfCNykxfolkKfwZ9gWfzu92Bp0k%2BC8lulPSnmTZ%2B3gM91Ht4yfow0KjuvfA6ZTL8Qm33hieuV4R7U9dwHcWUBO2j2T3fpQhcprdPeJlZtpdiU5YGM0XHBDPMfPD7zCsOdhlDbU63wiHrZ%2FVBMwWw%2FBbsTh%2F13fYnoiiNcDflEPesDUrbK4uNsEkgamrajFWgV0rPWQhiVTppeOpMoBVYmWDDqWuUXDRuVvqphSrf%2B1OWJhO6hxisgKnt%2FPj84AZYZpMYnHbP%2BB6lCvumoKg%2BKQ%2FgHQva6s2E0l5XrKec6uaU%2F%2FB%2BJdPviAkIjpY9v4cbYXlJhncSHiMrv3zEAMqmLYs2ttG%2BgsHNkndf9rJVQTLUeeweafNzIOQYON8ZzDQVNIhAnoUgm71bPRD7CXW%2FiQ6CKtod5s65IEOFZUf7pnHC7J93Mq9x6VZd%2FL5F0V9yo1IIWcD1uIsCekHUMjH8lFHes0LnFrsd6eu%2BDUVVxkSXshD8NtJSxHKgl9CFlEiLwF0WIpYr5Qe8C4c%2BuIRypNSC5KgR4ywuBuBbeUXphamdHWm8AUlwu7MJ3N%2F74GOqUB3h%2Bx76lGYSHEmJegtC5R%2BJ0279Wtm%2BOu%2BnCkNkkPuURjcH7cMZLozjIbHUPBqyM4rSUcXRGkNiwt652V067wwCnHU0CVYAVAztC5HfPzWgu8qzspcwPyfSMK%2F6mcQNyEYDeJc4otE0SuKrl2a3ELdtWx%2BSYm7eEvuqd9T%2BqdllcHDPluRpeVpVrQCpQxDdIvQcA1on78eFqiaDrl6Uxsda5oCWtI&X-Amz-Signature=8b12f76c0ca280f8a2d46e30f0e97d01f0decfa4b9aed4d101af7b8fd4561e5f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
