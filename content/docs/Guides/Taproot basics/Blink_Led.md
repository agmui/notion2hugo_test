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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDY7L6KO%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T121520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIHQELXysf7zo0ZKMDl9InUxhaqziHTd66VWeB6D6AFfiAiEA4QtChXV%2FnWsXEfe3AQ4r06PsYC9%2FaBwBsK9lDCpSgUsq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDG%2FTTDbYoGpE5Hh92CrcAzMK4%2B%2Fz1krdBAxidHtkIiAGmLp5H40%2FdRFi9NFl2lcCXkE6HdLpPCcpdM2%2FdwbOrUYrvu298FM1RZDQeydXbkDdjTVuZ7t4qZdlMpVqZgI8yBhHsTuxnHoC54mF%2BjLEchmCFqYdEjZGb5tJm%2BJkCd%2B8KM6OAIKwIwJLRnxXR9X45m%2BuKcNPJ48czDkzuSQcktyxkIcqLbIjEmuPlj%2BhmWkA%2FIACHxXepzWpAqVU8zhGHtjst4ZG6PP4aozVZnqhEvZmtvT6kIN4Oh9Ul6jWT4NEGcZVScyIpKJGx2vjaQc%2BwrMCIh6%2BMKO6Y7DWmOGL3C1vKDRrPnWPLC7KnnSQJF7NC3h55pup2WnhtX%2BVwa8ujaGlaGxfAPC8R5fHeFcqcHRGjBetqpLbEh4rnTR4CJ9lnOgCQh9CWXXj5t5mO0fDJfnHASYSEBQyDuzBH%2BIyf%2BY41fMcS6uMrYTjJI3tCX9wfcavx8mmTIuMZeTkOJp80Ey9Hg0j514%2Bd7Ih%2F4%2BUX9Aiaj0%2Bx4eEgu3GAcXZwBYY%2BR6q2L5jI9QHL5P9Y8e4Y%2FFhnwCATQaV6NPZRW5Fb2hYPCUFKMU5f2OojW3xnLV1yRgN6PrHvkT2PvYCGhu%2Bf3xBIglvSt4BJBhLMO6q0cEGOqUBBbdDW%2BUQPd9VQbb74qzeKJ9al767DvN65Qn1tRMi6rkHljeOGeMz8fcfyF5k%2BbIQmslHfhrTKnlXu4XYuUUWtw8CkmlU1XSd22pBnFrWw2zRF7pdGdWTiKMk3KGWW%2BJqFoGhkOv6Z9yIhPzDTvs4O3lqPevZ6bbpRcBoVtEUbMvKwlmK5xWJDkb1oUUymSgwzzpjh%2BQRqEMIEW5HlQpsoqgx%2FBY2&X-Amz-Signature=ba63c306c598453049b8ea339ac2903db18c375409cc26d470119cb37f5b9adf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KRCJWJF%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T121522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCICFWdCpnokzAYxMBTMXySch%2BYnEuKgCZEArH4%2BwnVDliAiEAnws60lybJXFt5W%2BUUPe8eqwSa2QTuUp7xqJ01FnrxLcq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDLSONl7FA60SDyamcyrcA5MId%2BfF419jDQBAOEJijRUoaZm8EKtjxWOSwKWUqfsCMldPWXGnW193S%2FbaS20dlozk%2F%2BrvHBwL9bnsBn%2B81NbTnbzLdSKUXIify2h7J99NCeMBawt1sQqH%2BxfwHhbZfn50AB4BfuMlJGqaAlROUgyOVB%2BsL8LUvdE0QeUbNhQQO8nW4l2pgpDmYSwj636bysSiPkYNLBM7To%2BL1DQaRlziweqRPA76g1SJGpHXWkzSgIP9N4L4L9%2Byejp6onCpFLHcvGkQoPdLrtzBH83Ro7W%2F%2BNX93WUnZNNEgO90JYtnNZxhPdS5DRb4HPHyDP82Z%2Bz3%2F%2B%2FbKzfI%2FfAng5TRWUMe%2BHYgfn31tLkrXTE5teLuKnjvrSH5ucJ0xX9lUsjqltChU71ON14ornDDcV7EToCv78Z14s%2F48khTeKO%2FNiMPQEEvXZ%2FUlWqT12Olx5EuoW7FMrzUEJq7aEoB66SBqC4NiU7ERnYgrYOACCcAHtERVzlq%2FHNKVg4Ubcc3fFOiwKG6BSedz0Vca5lq2XseDzBCHN%2Bho76wvcEyAlN7rdUR1xHsiZOH6FC%2Fqzs8MA%2BCs7KJ1LdjIKi8RYGnbux%2BEI1ic4N7Nm1HUg606JHbgHZm3qwtI8iQ5iD4q2tAMNSq0cEGOqUB7gwuOwRf3lNjy7%2BFSt0lOW1IUtVaDFJP9mSUHfAH4Dk2PuFn%2ByZR6ml%2B%2BPLTHj3D1vLWOrCzgy9uo%2FgsXzwM3gdgQjesFRj0bP9Gdd1huF%2Ftjln2xUUPbgqmtGJJB9FGJnabyufR5GOxkQf1GiaL79MB4wgkMgSGjTDpxpitiwOrC%2BXdrgJ4OTBYRb16be5NTqvUhssU%2BFN6jeOIjcvSqfMm7xfp&X-Amz-Signature=39be841dabed57128155a3ab18818b8516f44932095b9c30b487fb0b2a152ca5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
