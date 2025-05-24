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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2ST65BV%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T230749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQCpQdXO%2BWvWN%2B0aI8q6K6MaP8urZtLY82UihLA74GvyuwIhAIexxN1FOcsgKQOHuMz9%2BMqaTUxx3qvrSKZlzH3fj%2BNaKv8DCB4QABoMNjM3NDIzMTgzODA1IgxbfRkJ8FKzwHWrSCgq3ANkUXf%2FNpK251oHU86%2Bz3tHGAdToMg3gHPDfy46RE85qSXbJsAByPtVqp2jeqfVB3NsNDh4az80%2Bb6qc04IyQpTum0%2FlwiFJwB94S0OisGAG1DSpmKw6etxtU0sRWqN8DcRDmevjMj4IJuhysCHyxcJEF4%2FMl4L%2FshV8THNIU3c1mE9lmKtYvqNmuhuDGiiw%2B0iRGLU2u25njoWC8Lel3KUF%2FPyFUOZze8ub0KzLRTfjx1YeKNjZXFUwhT%2FLKhhE3tGiiK33Tqbqw2TEQxkO9SUsy3TZVMsMlkydQV3PFbwh4pZ5Ep83qGpT3lyogx5BHrsc8EyJK8ZafazO888NYN8zTefYy%2Bv9912tI56NcTAzlpYkLv%2B33iHtvlZn1pLUnafWVN0o2FirC01zHNirJ%2BcjB3%2BRkBCa9M9it4eTQcfyu1hL3SiwAmO%2FEueU23h7JIAmfZnqDeP1LOBdF9ZmkXWrGO6tR9OhHhzk1Pd0dnS%2B0LiKxOkMTADav0877Ywe4HPlBawj4G6TuB9Y1VyKx%2BYlqMdvI40jkJPDWAgR4x2qCWWhvSc7Csw5N8CIgIxd99k9GbOT1gX6k9chQJ%2BJ3hUluuVRZKnYED56hvW%2BkjuX0lCEHxuGoRi6A7PAjDR3MjBBjqkARe29f%2B6%2F%2FnmcA2ZkQ48iFdA7o4FecjbSnfe7pjps1FXm9K1%2FdXubJkUvqyEj1SWm6ktPTt%2BIq1U7YZEMRbDqJtz4dvqQ5wUe7aF1IfHcKGemB7tbZuIRV6wmfvx3wKgfBnad7MMXfbFz3ZS0ldgewfoPayPjdRRj9dY9uaW%2BT5%2BLvgPMdeDgyfgi86e0NJQRhicRs4PXGSjAXZaH0NZiag0qevy&X-Amz-Signature=15dc3da04dbd7989244c31dd66700fcbdf064e26f0597b1d05bc36f3a0f9c700&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NYRDEU7%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T230749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQDta%2BT3LgcrB0XOQcn5FAhadJv3%2BvKlHkFRcYvDCOmLmwIgRrmoapI2F1zmEIADV3JpK00wHledv%2FsAJ6Zj1d5E0SEq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDAnJBuSyGk8AmhkhdCrcA041Ca%2FOysGFOlcY3rxo%2BI2Ezo6cXn5B496SZ2SFzsqoevEkCbqDjkznFNKuMhnSW4f%2BmY8RgKETU6jU1T8b1xcO1%2Bwm%2BHFvK%2BGWWOs35lC3SW1JrRvEX8K5jWJV8%2BAYLOuNW0gw0dQSd5M9P2C4zmf6KKvtWosoUiLFv2Y1v3pRWV0oXWWdVxiN1VB8pb1UXvzERPMRAGwze5T0z2nDSuP3tNLlH5DK0nFag%2BXuuZ%2BJKz9a7LXG7eQ4VEmUgrTe5IIpnk3STjllXSexUho2OYVF%2B6bXb%2F1Wmhe5L%2BJaj2plBDGUuJ8i7IDTBW2tFkWiSPq6dYDAO2R%2BC9LNygZAxvSh7vPgHHcHgdFsDXHz5y3FTTjdPRh8Z9VmiS%2BPqyJGYOE0XTRvuj9rrfuBapyYbtBwsoKLSKQWHLo0xFMXYL%2F3krmYXD89BDp7uX5pQtBHz%2FryR8vLqi%2BiIsEgsTFOEiB5On8cRDt5GoVG%2FULWArQYo4oWg%2FiRN0xq4L2ZH2P%2FZcFdH0GAJq2VhzTnvl5iBYOFHg46hjXm7%2Bjs7mr7wVRE5%2FAx4yRZchS5MBi6S5qNlOQXfhrxDWZdvJqSiegecTjvZV5%2BawI11gGFpNLsGr94ogYiV%2F8Lz5Avhm2%2FMLKWyMEGOqUB8NlO7C%2FBXS9aDjJjRmKjin7t5Tnj1XhXMRh6%2B%2B%2Fim%2BRdMRjegUUgZptGdY8uf2IJRgNIyiZDh8zB%2BDdfX%2BKx3CC26Kv5JqpYaHYV%2B31KkF6mbCvGMdxLpoc038F6UtOYO4Mfcuz78bHrkwgUIcuphbqezccAFMqDwh8VdQhuoW2%2FnXjIzrpqlX7nJUS1PSRg0I62FTjbGOb8yJlZkeCmDYWKot7P&X-Amz-Signature=4584c094101e7cabd7e80014f19a73fe40ffebea514bd6e32508307e1fceb691&X-Amz-SignedHeaders=host&x-id=GetObject)

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
