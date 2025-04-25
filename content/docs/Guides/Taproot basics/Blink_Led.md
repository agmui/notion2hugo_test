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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S25KUSBY%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T081216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICMh00cRaw57gxGe2YZnOphDw%2FKnuwnQau0Udxs0MaTOAiEAzB%2FB%2Bmz%2BE0eTirVmkXNFkpcVb%2FT0ZJZTG2w%2FgZ1UQZAq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDBwLcuujyh5Ah9JfDircA3aLA73Y4W2uqKIbJQGbiO829y2e7NtYjHIpN3NVc0OxY5Yun9UHBIldoT5nAsbBa6p9sfHwTi6ki41YRR63cfaDK3xkF2Vf%2FsnY4oRryysgSzX%2FlcwRkmux6%2By%2FpC18S%2Fg1fLdhbNFX76JDqf3oE5DSjMyqj7hWDE23CUl75x66jRIxbdfHyztZ4FFaMJVlXOZzQLa2wS2OfJRw8Y7a8k046%2FXFfcmZvMxCG4SIbACb%2FqoWwP2S76zirtTErBYwCxO4IWQESeC8DsgML3I54tM%2F%2Bj5RBINgqi6pWqME9xCDd%2BvF50tyG1k%2B6Ax3Xs0VlCL1YkntcGANDMyOy1z2rD5d7r6vsgziw9JKXBO4OTLUF%2B9lucaxQ7sTqIOzvmR7G9SuXnKgP1R88ULfH9kJfpHcWhbIejovHjdENYemkl90Cm3nRciGGbbjOk8bpLpCYYjh4GXtEbPItZbx9N%2BGkImmA2Qkv05sNw6Hp3I9m7z6Moll7j2nptI6ggQWBvmxqgfMbnPIgS1k%2F%2BYgzsBrbI6hifNY2Gn8v%2Bg3rqF93PpWTzDG6IFEDT%2F%2F6oX1veDiD5zZEPrM6Yd7TPIOz6b6O5fJp8vKYSjizJm7v%2BeWf0SHtXblOAMgspilEaUgMMeCrcAGOqUBjMwAG0Ca815MzXimF9F6Nd6BOwEBhRSUgis4YMklXT5KQSvjtCIIiWCpuLXZlhkgfwhrFji2%2F5M6eqQbFs4BzuOUdrjVcJ1B6aw345s27Hr05gGewIbyaAzlvRDcfsRDJH23Khr3jXrr7s1NWz5YoKlsFJTHCr0abkHZLaXpGymkfFryiuTVDN2lSzWsgUnTKbyWFE93%2FClptaSEhHv%2FLbOik92j&X-Amz-Signature=67055e42ba648023519aefb622f91c754a6d5d1aac76883e4024905086514a5f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLO5WJGC%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T081216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH701PK0qFv%2BlVNUvn8Co7e8%2BjFG%2BcWivSGMDrQPQFZNAiEA9OUjB5PNRRe7tdB2gcBHMQISeR5yqO96AyMrGbwXap8q%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDM4ESR%2B%2BeBfp9QWpzSrcAxm6Po5eE%2FHTwgWnE4VVJ2d3wGnP8OqP2DCYDsj55WNJNkF%2F0UkAG50bWmJ%2F%2B01mqhKif74k4AsPvirHyjDvLq5y9tYoKK9YAS4CbYL44UOT9qYzLRKH4hiME7Ux%2F%2FPvjkK1TV1doRSivSCMe17%2BnciomrUdZo4X8fys6Fpq%2FvOv1%2FRS8b4jfvfaHYCgE2iYzfljnZdJD8NZset54pIIB1awwb5HtH1lLgdVdNE86KAY9CFHzS%2FNqLkyPbrWQYduYIihCfggM3VP3A%2F%2FCWe1pdoVsdolmtUuZQY0t0I5vhF4AKzn2L%2FwoT3OkRceaeo4xpxS0gRkveVg4lv8ukRcml75vWJI%2F8pHu72w1Ssl3Jsb%2FOhdXBHUs2P3QM8sin9R2m3%2BIG4odly6C%2BETfJHj2O0J3IbVsiVtNctDiDfT9EkRcXPtKY7tkBeHXB7n7KlP3%2BS691Z9JgyY5XXoD0H%2FGylsQ1IX9ezoF%2BxtSech4z8glQW5uXrWJCNL4dATtUEI4OiEQMO9kEzagwrh0OC0cJBBTJdz5dh%2Bn4SHiU3fHo0E%2B06zKCn8vZM0b56WpPlQHRxhKa6W2tma%2B5UYbwXmg3x8B4Nv7gqXemJbjmt58r%2FRIGrqRnBW92FVxU9EMNKCrcAGOqUBpvGawBPreMS8Y1XR8caXfYnR2qxxHPrU%2BaJNOdO91v5DNMGcwJJ%2FT4xPoB2gVmhwyTZ8bq39wQEtUz9t54D%2FCWTP6%2BcR9Ca2ai9PfR2yAZb%2B9jzuzr1w%2Fo57gY88BXO1l90jTLtCzjLsvuyvoNflI9QBKMJiW69xDZo%2F80aaOS58QE41y43uHjJNfr4e3C%2FjkPVNy5s6fOSakCMWwKvptrS76mJ1&X-Amz-Signature=ccd1b34843e15464c757e63f3ba608de01ad29351f3f441e8d55c9f182196617&X-Amz-SignedHeaders=host&x-id=GetObject)

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
