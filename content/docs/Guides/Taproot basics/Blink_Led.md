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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QS33FLTA%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T160820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG4upPsc%2F6m7tYum9SOlvztKUQzrbzG2byEaY2lXgzGAAiAV%2F5LjHOWvwS0I4scKk6vCoiD3WN%2FKAGbI17LVl0cpzir%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMpcE0Y9zl3LGy5zdTKtwDbXF8BNZ5PC7fsX6hjQYmvCIMeBRyT04nhDO1wZkeiZdHEUzfR83QJcabteb3NPfdMea8nMlHLA8c08nvtOFk46kgSqldE38edBkFOLzdVkgOav0d3PLrAgR2gYyfZ34rNovhVpnNPTOz5ju%2FndH9%2FKxTWWV2BW%2BNRYEh058xnsQ%2F3N9WmiPhjdQkmV5nNomKWg4kntzhtQe7n7jO%2BF0aZl18o4tzz8cWJtf3vCY1WUJek4fUPNj5N4ZiG1bkawMmmF3ZXbtQYpcstHztlRyO7U4QqOaMBiAfTEVz3XMvVX4WOcZzpij2n3JKRvEqMpu7al1H3Bd6zxhvGy9xFsfMLa0g9%2BIK3QL9bToHylozAKaVqZQdqTjN8WfwiyX8y399ASvpqO%2FBHvea%2BnNgXuRJrilkcZDQ40qL9Lz0Gwz33SWZATwrCiTprDVgETz%2BoRwMm3EkQVm9oRVdtBBhE7aSGD8IS7AmLW3YwWa5%2FO0hgDwyWmh5IGi3EZNuz36NrnVQKCzcXOllwIv6sOURb5hB5SiYTS%2Be53GlYX1jbMOpXQrk65c4qr9fALGep3RsZHaw%2FGSPW22%2BFssihp6yQ%2B4X0o7pzco5905EX7Fcqsvpw0XGlt5t5hiDyE4NdGAwiYy4wAY6pgESidLQnaXwo38zm4EQ%2Bqn7ENU3qCzf%2BP1EGF6kHcBnppAP9wWwNOd16ZIxkrjV3d0K7dnuSbsCPz8N98FOu8UQ7UT8848CLLQyadUoV2ClLqw1Xm9eJEVWPS8WnioH5jhCx4Wfqx55PIZkn7PdWubi%2BJbPM3bKrB0L0MB7GO1%2BY18BHV%2BkpKg6ldSE7mKm60kNgKm3PnqET1Qt0Ez0%2Bjf6u7s%2FMdDC&X-Amz-Signature=3b2ded8831eaaf7068aadd761c56b9f6af43ef41b144d61d7faaa50e0f589e3a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VVTSSCT%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T160821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHC%2Feg604zC6bcoi89H%2FZeSBsli%2F%2BUeUd77pN8ub3CQFAiEA6gRSx%2BPy1YONHldqqjk8m9xTV2H2mxidZPJQ2NYTFDIq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDKTa2uFEZoKSOCHsKircA%2BJ9LWpkF%2BFnOAY%2FSD8uHB99IJ8RANNjtsrTh7HrPgXWwDfkEU4pAD4desFqY4iU8keTWSytW52EkcvqQAp0gr8BKqmN%2BtYR3ECCtpYzk%2FECJaGkpKmMydc7gm8pnuzkdnQDtWOlt9YdSAehRKyxYLJMHvH187NM1qj3tZkhUDLCdqKtvJ2IVFkqm3nBenzY39JMr0KQ50EsJCNIytYF2wvVzSz1%2B9hmY16wmX9fRqRhF2q4cV8ZyYKdr6zK50bqqBvxkvGw5Gc9RSr1ifmyG4FP7w7i2SNzME2P3jvnmcHZrmGVdYlPkaQRwOZhKqnddrICocnNHfN8Rj%2FzClrs3z7QeStcy9o53w3kJPAg1zmCKw046pfxsfFv6yBXgMjNjBkJ4wS0L%2FDxT8jh5e6pw6hpXcRYfVM6nRUlQ2NDLvrL9N3foK%2F7AzIu8%2BiegyY7b5JSvZ7nQ%2F4ugSa2%2FVPKWdTBIwY7VX13uCNxdfU1G9FwWbwAFyKFOqhEPRUFXU8x%2BquVtahXFq5wpurntJXATxfO21kljMKed0Ns8m9q%2FL3QXH91W1up2kaj1EHY7pY%2BVH%2Fc9gWMp%2FXCvXtgIJakpFRoQZ65FrIrXMhB7hH%2BnygcTs6lQrlVxhQgoGTyMJOMuMAGOqUBcCqf1jTuRIfeiYzYKV0Xz8fcKcIBCPkj85U029EwGwwXlr%2BlkQcZ0At8vwlASqR4ToAMD29xlJESIpltClLcrJIrEpAPRgrxHtHcZjO44YO%2FOuyvDVJ6atKBvKZwhpSYxu9WkbpEhJiiChusoZ%2Bg14FvaqcBlarVuZpiSFlt1%2BV49FAhtFUFXcBRPlrp7h3kkRub2c1I0iWD%2FJpsco96O%2FwfUaSy&X-Amz-Signature=b72eea13f0a0bc66be15c1c6a3e04ae1bdc1a6b4999faa295ffb7add5358e921&X-Amz-SignedHeaders=host&x-id=GetObject)

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
