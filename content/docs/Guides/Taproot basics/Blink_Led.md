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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDUXPHXR%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T150920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQCMeF0YU8yFqxjPBXvt%2FI6kQ17Ib2ehdDRwDk70qLO0vAIhAJzwDwmHP%2BUu9kGgDnvDKZ7ytXVlgQfHtR3BJsVs4Le%2FKv8DCEcQABoMNjM3NDIzMTgzODA1IgyTtda6OsYBpIUaKfoq3AM6LFuO7wbXDfdnr6AKEpebZgk0l%2FHudhufF0zcCc0YNJ7HwbYOFVOefey40gLaep4nruh4BITXGEq5L95dkvwjvl8pNR3cqt4PYaDDCVFINMLXBQIK7Yam6GPmSFBfPVmqXhIVvyMACb6AXKwxWnzXa1m80%2FNm6MRGPvzzv4F0BbM3ThNw7e7%2FiS8y24S4ir5By%2Bj2Ury%2Fu%2FmhWPuXa2EhY7XVZFg3JeuIJBPz%2FdYK12%2FQO5dDffHeoknEPnql2ZEICZgKauSkU%2BStDPFMwlBAEJ0slvfg%2BaTrTSotkP3BVkQKIsAEyzfwQ2U94T%2FOSeW0k0HkHGOWbFuHnAgu3f0xYxRPDYPls6fAFKxjjuHkSSlj3K%2BbhlME%2BV7ksI5HlPI0cNqpE1h7%2FQZmDrEXKU7SnqpYToLpPGhIfUewRefNlz9cBgLmHhq8A83PfQabsSk0SFMpU1Dcd0%2FPzD8DI4U9HSXctRuzgqNv7Phz5OqFiM65XpZ4tJogRuAFQ%2Bor5E4sub8vECn3sFgNfA7ZDBMhCWmrSo9nRcW6cWuzxH6jQZyEWWjNcSReJS9S4yDNvgOQo8a6Ud7oMnD4kUJaNEe8R%2F%2BpzdGxGu8R5IblxKqeom0RwxSyfyIhJPNpizCOxIbCBjqkAU4PGmBYd%2B1ceqnniAGhTqUaew8WPL%2FgdSw1lY3up87T4bYX%2BWVfk36f%2Brebe57MBq3ZRvmzLMlule%2BVJpqTkS2LyYsEzbNqDsw2sJ8y3XHoyzl%2FaTI0RWC54CrGF1d2YE%2FsLvYy%2BnPqMUR85E7cFVGHn0Ycj8jcaYQCuFQN6cky0cMNWMSgyHwJ061vehZ7VRPY4nb%2FX3hkZTbhIWR%2B0Uq5mmez&X-Amz-Signature=d78457ea39e9ee66d817b09cf817e2878d9b009f036e70e774070f529dc3ad72&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPMUDTQJ%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T150920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDGPrBMBvHSRAow%2BzYPt%2FncNU0zqPd8IKRFTKTiGEgg3wIhALyuqmrmmyCospC8Q64ubwjnzqoVlTFAr3ZySb4kxQdFKv8DCEcQABoMNjM3NDIzMTgzODA1IgyhpisDf5GYdmxTqB4q3AMiqlwEqYu58uYXyTFMCV%2BiZILXWf7lU%2FI2Sw0ZXdXLQazBYhPjw4bjOBsStxEv31XemoZyOTxXdN%2FZOy9c%2BOGzsEcqWKdpeY3zQW1x4RoJ%2FpWotUmw3BT2e7JRWrG0XW3O9Pq2O2zeLYETvBsbuw%2FZYLaT%2BdL%2BbxtfbV%2FbvL8%2FcIPTyfDiv0lf49eY4FxqresAH%2F8qANzLqjrGDLGwniNB1PC%2B5IX5rCBX9oZCdCVfqfjhcN5sjlHAca2xk9NuxE%2Bm%2BxSCZknfkHzSb0yIqWfOxj4IeeuoE%2B7Um%2BVzSJPVk%2F7HxQ8Sm2%2FI75OQKJC9sKVRalRcCRPqjDV98%2FmV32RH2tFl1f8u663gUGxiVtkQvqg%2F3p4gv%2B8LnBUFwsJ812aN6PCSNYbmR3I1S9muIgAacrMhxvwnCG8NcQhLFUG0qVQ1SXdiz%2FgxsVLpjpvaOEe0MrAvJPzzecf8t9kr9ttGKlvWs4Yah5dRCZ2PvSvGKiCAjapoEhIGH30EGZgkF02%2BlhNCNI6VjEuvXQqubgakUhCgRH%2BhmF9EdNh7RzabVGHugKqjdE77n5Jfbotb8LiBjQa0S9gx0L1z9jTGG9ooaPf0OEipDOYjBG3Vo8j0v%2BbFpRT9UoqdCi24FzC6xIbCBjqkAdWN8mJb5ZFAO2fpdwhhzC8WnqHi%2BxHd5pL%2Fqzvgy%2BUIeGzzAzj5TKk1NiBIy60JHeiNX6brV%2FH8rTWHIczyRwQO%2BKLaV9%2FOx7A1GDy4Ri0UxG4S0BlyfLiSSQiwMgEdNbFK87Zlk9EKzBXmm%2Bw12FehsvSaeRiyoRJgkWk4Op3Mkasei9BRmJdGu9dDdjnZNcIuSWeC3XWbQltHH%2BoLsnexI%2Fsw&X-Amz-Signature=154b43bb02238b38a5ea2475a7cde488e4aaacd5f06f063852817f147a26a4f8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
