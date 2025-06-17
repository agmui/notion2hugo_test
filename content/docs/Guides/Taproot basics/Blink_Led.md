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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662T3P2AFN%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T161053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF4Gb4wbRoYlsTHZXNLPAVgao7jEx6DORKNvQAnXqIxQAiEAiaBoRqKBsFxaJoSz0pNLWfp2%2FlMoRrXWSYs89iyWDBEq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDFoOpKNgEZ3BoC%2F%2FEyrcA58Y8APYMi7ej0G9SpGhAZV%2FL3I6vhMPyDibHeVwwi1mnlZLrG89hImxaSPKd2MmN3AQY8%2FF935fwFqD3%2FaeZ3chRK3hmJR72MDmbmdqteWp46y8X2Kuu6vvMym2UjbBfyyfd%2FstXzJM31H1%2FPlDNGy0nABYs9kmeC7K6pZb6hC8qh%2BP3JgwHvbIo21zU3i25YW18OJekhYYPBuG%2FfNEPqRJnynqqQ%2BdDN5N%2FxVwDb2EjQzfo%2BCu5fqUAq1uGuXCLi6OB4ISzdXYnYM%2BgCumfI8U5CZoB0vh1jfcARUFjpdj6Sef9PQsiu%2Fmal8fcwtiL5t4yn0571UkjSV6McLslzzaZsSRUBSa%2BioB8h3zts1GwFTToZkYLiAEZ5kaAlplX3LOdVcnFxMi1FjZflnkgqAxfVk3Y2G1BT7l2Zn1lMQcFSAyICZ1FjAGOBsJGarCDC9RGDC9FsuH2nkPc4XJfDmTfFYBocE%2FLLpSDcko1T2ltEvAvjUgwe8c2iSP1mBM4czd4uC3Hev13PKiydfG5gDl2vgkepDXPQCszYbup1TEtDJDO455%2Fg4vgnT9ozyjIre7hhJfZ6UB8FAcfnYry%2FwRGlDDsgnS2FauVO4vEkJCJBlsI%2F8FfjFUDKDWMOymxcIGOqUBGvvJhBwpDz4R2Vj2HffJrSED9sgtrZ%2FnOGE57iejbw%2BE9gSjtLZU9uvxrAeIaZddXx3bXUMnDEJOcxvaeGLxsEeFt%2BYg7aOkQe6wSI4nf34WO1H%2FCl9ZiUVVfW1Wt5IQWdF5n4%2BgkKqDYpgeSfn6GxuYEB6SZxEhBNlZPTdBV%2BCWYhvmdRj%2FXSo%2FgLgH46i6MIQTa2UJG6Cbj03b3HppZebrX%2F6i&X-Amz-Signature=8004e69eff80e064e028e36892a3b800587082f8415a43f8a528722e9fb3a064&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LTDKZHY%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T161053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC27oTbq%2Frh9ctBcoyD6qsveqcOHS9eucAEAD8M3P9NhAIhAO5pDFuaY55Mfh5%2B6qakrNjlYZ8DB0%2F7RUtbAyxW3QPvKv8DCHUQABoMNjM3NDIzMTgzODA1IgxClLMXP5jfMyGlEZQq3AP7oEXXMc8GTCrP%2F8TjYu8zDnQ8jarbCzPmNSdwwUlEgT7bWqstrruFTSM2QM1YDRK%2BUIa4qYwcF3KaZLGfkStrJynAw2L9xCZJsIU8HeUIJ0ipRbol%2BK%2B1nPCX0FKYwzRYNkWRSZIeKctPQzZiW1gDSdGhjyFQ7qdLHyfpQmE%2F7fSH7lH%2B%2BBqDYO9dbpciC%2BJEDmNHaWz1hCu6CAnOisw1AhnryLm5wapATR3gm77E%2BxiXEChoR%2B%2FY3Vsi%2BEUODnkILo4hiFgsOJ7oNevyfsinlCtwT0C0ZtG5hKNcMAVYNQ%2B7c1YRtf4Kk1DUGO%2Bc%2FPyaXA7vw1rIVJ15nvjjMLunXyIc1ENg%2BwJYLavHb4HNnD6LWkC3%2FdxInKpuuLmNlcjiXba0Gpu9%2FDVSW%2FdDQxM1fjIKZn8fjYRN7SMmYZmipKO7j1ERcvYut%2BH4VYs5B%2BYqyBcnkKydtBw7UlzpeMZsp%2BBEe2uoiBvS%2FiJCj%2Fzt0Gq%2Bq%2BtZlowJe39w3W1d2FPBBGMddfbKL4vH1vPSs0BUQ3tBTYKUo0JYoUHKbYZiUHIyRI2pWZ20TSu5XZ5mv%2FC8AhD3emGvSDw4Jn7VrAQbwn4c0CiaPg5nqLHyCY9wFWlRlr2AOc5eqprS2TDZpsXCBjqkAXKFC%2BFCNhjxIFy6O6RZFVfKBsR3tSlcO9WuxzU2I85cb%2BQNxdhJgqDup4ID1ddhWey%2BR0OBQi1FNaLlSByXo5oHQyUs4rBFCSjr1uhJmo9Fg84xS%2Bqv4JzeEuclgUegYnaeNy6pP58YoDbw49jKiAYPcaxs5sC6KeEbZNs7gPgHttLJT7NSj2WtEuEmBVirjEZx%2BOM4UqX3wsJ%2Fpu06vZza0Pxe&X-Amz-Signature=406324ecc9f163ac0e7a2df88fa7fc84a3d29a35b476fd6cbbef6a48be945ca8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
