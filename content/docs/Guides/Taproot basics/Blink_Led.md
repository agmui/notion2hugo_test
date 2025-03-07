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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6UAE5G4%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T041020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTMMVntYSefHtvLRXzPn6hcFS3aYyEd2orK%2FvS%2F6uqcgIgNqVk%2FAgQbDxXk7eXUlS9P%2FTyTDVgcX9zJv6d911afdIq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDKy7MfSg%2BBqG9BT%2FwyrcAyceRMkGyVRtG8HnmhVBoxo7vTJKalP%2FvN0VYTK7Koa1FST5%2F04XQql9PeAUmdJK2gXGU4JeSFYIQDGyydToG04bHJKxKZSHutJaCQZmabZA7Sfntw%2BnlfhXPuibGzX3oSYBZl2x3%2F3HTV0spzznAybEZWnQlOOHKSDGfQK0CJZO4hMg2plMeJ3L%2F%2Ft296QABW69MUt2cLeY4%2FtUouuWsNxQmkjUH4IjiIfJo7BYbRRJevi%2BkBf0ZAkOTe2EesaDNyy9jvKQrcBFYJ%2Fqgl86IP6FE5lN%2BQnnpe8BC7Jfb1vsfpNeOv75n3NLJCOVObqhJ7AQJhjAiaf2ciuNOcu6Q7Fj%2BfZUOprWQRmAyeXhlmmtVS9thZUf5poSEMQ5pLztnuz%2F4ZnzQSeAllxncXMDpGAIebImZWwXpQx7GbkwiJFdVZj0ktahxi%2Ba7Ph0FlpJF%2F2UUgoOdZGElnjvBO1xozTtQkD1vf%2BhU%2BxnwhtiySzQ261T6FwQgyF%2BMaL7vhwyKB1h4YnXR%2BlAZj%2B7cahIrph79EEozEt92cIbeqeg8GnGAhPJtDMx3hvLAX4XLKKy9woxQLArlG8qTTnfd2BUhHHxTQ%2Fe3wICrm50y3%2FA0leRg6oH3%2BnBwASoD%2B%2FoMIvJqL4GOqUBoiZW8%2BDibXh5O4yax1zoMswPwcVYqhpdtJ9ngDbXSQ8eCMCJbQoyEBb%2FcOvh6DJik13v2gZxisR1bUtuwtXOJuxpGPPduY4VTAFOtT0Fl0BE24492f0DDYk9s18qLXQW0R3P49%2FPc8paVifhczRuMbC5SQJw1XF0FPVsv%2BPAdFM%2F3mSE37HE%2BBrIZx%2FrEidku6txXnNpeVgDHhHas0BX8zhOjVqG&X-Amz-Signature=a72202ca1bd185cd0ef1e54a722c1b77c2dd818ecae2c10aa2d0d076a9b51af9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REDSRRPY%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T041021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHYs0wtCOtn1YPDrPDeAIPDnSjdypzamZzoD6gpQk%2BuQAiBxTFKnKgQzY2rqSMUfitDMP%2BIyRCuktZqlUSIRE7Zx5yr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMw3k1b1Xznr86VEjuKtwD4I2RzCDNME3oCux1Yj89My7KXwfnrS9jp3k7sPLTSz5c4dCqHA0FBQcbuZfmyoXyHuIUbR8nFAvDnPUAoat3f1vz9RMMD7CgFgOS6cadbZ%2FU1Qx4iDslcsrC2Gm0p0NvZ9YH8ApQTv1AqcR%2BijVG2ppJZR5f2vU%2FChMASd8kYOAyHRm9%2BHRkVrqnXbFddt1wAKKwgRiLTE0sd5ds1rfcuPkP9Gw3hjzACtaz2rFeTiMH9ZVR2hsBhZ7NLBABjmyxIHEJEl4tdYhqgeqhNrlz%2FcJoxBJgSgCV91lpWzNEwQ1AgIA3YFCLdTEzP9FdAirmrCHdrOJn141mUg4dlgVAmflMcAMBEPvZMkSvMWl1MZrJrdvnuQMK%2F9vlXw9cB1ig6TEfe9ABqFrRVD1p8%2FJJ2iotk2k0ooCz9CQhZWvBOxMIRf5h7lo00F3FgIy%2FgGXl1cN4kIpB3c5qVyG6Um%2Bii1sD65CByYKA00X59U1pMZs5SGSIXCO6bXz9go5VzLrOnW7Zw7Utpvwu2TLwQXvZTzTKoaQv5XIj27JDGcvN9YIrTYAX5WqPAJTTInUNf3VgZrH3jqbU3IiFhBCXfLy0r46T8%2BChMlvLn6WJGX93tEtfhTtdCkwGmhmVVRsw9siovgY6pgGmKWdz3JyMHi4qp6dPXW%2F%2FAoEduyf%2B8uTJMANXfDiZeP04yqWoRkm1Udoxur4GqEJhuyVQWCwZxFZx9lqER%2BWxykM1Jgj%2FoM3vGeFvDXGodH0uw%2B%2B6BKcAOR6i3GmIufcx7zOOLFTfw5Pq9lso5V0iHuiJHM7RSijNVK3a6xAiYUxHavLtJ9QZQLAAJSevDArmKtYV%2B%2FdeeUcoTepUV1kStDjZcSM8&X-Amz-Signature=516edf08313a3e5317d02f36a480a2042503a585ad3844945cde0ab34543ed99&X-Amz-SignedHeaders=host&x-id=GetObject)

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
