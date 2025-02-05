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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672JMFCYA%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T150740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIF%2FFwWBg9YaNXYVV7rjqpzbXLIDjnpm608IThUE4xCQLAiEA%2F3bwAxmLaUl8oy56RokvgvoUXV6ulsLz%2FySmcSP19jsq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDAjLR%2Bk6LA7A3dIbuSrcA5fR%2FS1vg8HYHnaQSyftnR6iSUTJI3LxgTZYTC%2FKkqBH6K%2FVVKW1q09KFld4O4lhqKFIutnwbETRnJJR%2BxyDYnJr%2BoDvn2p55BI8wEnaCH6GJ5E%2B%2F7v5IP1xZA4dHERtRGO0%2FeBsfRXreOnfgLluuup%2FuFMiqWzpQRnnLEucmyLaqGCMHL3rLkvwr66JEKcH2lVdG2vIX3DoXMT8QktirHIOsAf0LnJnC4UI56NmOcH%2Ft60A7AqZSoxhwV9lX4npVkN9nJc2iaBzzprZ167ZgZH7EbWP61yPArp0lE2BItfC0ZIkesSs%2FHF5URnjnIX5c13XHV8yJmDLahbKZv1qOKIOQ293YAdgeYf%2F%2BiScuGS6EyX0UI12NQpZgPUzS5yx9xx4kY%2Bda5xDOZqUs8hHNf9cQWIvKzVKMWDoBSKpXD%2B9VyD9s31xv1ZEUO23XFwz46XpljGZ%2BLZ4k7Om6qmsBu74b8kr61Vscd7VXBJeqQCu37WR3Ku9PG0tMDVddLRfK5dQ%2BoE%2BMsjxA8uVrs64jFXYzGHIqEvNmDqEK2L8mD5DYwC7IGzN%2B3K6h4hn92cmMKz4eSWocaQzxlSiQQJIp24JG0qadGurFqx641BFOAvmo5D7Yc5ZE%2F6T9xAhMOnljb0GOqUBRYYnSuQKyP5XPo3M3fYQN3qxcge1imlvqtG93d%2By94m1i06xaiqB%2FQ8tQiEsFWTYbdCdxoXrSUl0aMXl853wgql2yCyk5pnidxxINxBj8eeE%2FTLOFHKhklswABMsaeC4hN4qjaQko7%2BunI2L5uvjbLxeCuKM9%2FRDx7xYjwEubA%2BiRLveUrcIJgmx4dkvZ3dCdueHNe4nRcRANavTgRb2ZnsaGZe2&X-Amz-Signature=a1e700cecbe8618728c62e1500573c441cffb8e40efc4e6625d9d7ceee2bf107&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEBZMEQ3%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T150740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIACQqas1ViOL5hhQQp%2FrIo%2FHUlVZQiDJiuCBvdxFXcEJAiAOJ0lqSdBWpaSCZ4gNJdzL8KDSx9kcXLPbG%2FfF%2B5NZnCr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMMjk1L2UnAhtuYrTkKtwDry94cMZl0vgCa4L5t0IlzgSHG7Y2IuzPEBs1TyLIMLhG0esPywZpFLYdmJJ9Snb04k%2BGMtw80HDtHd%2FE4l%2B389bWDH0%2Bizp3%2F1fh%2Fb1hKxZAFax0CrfKtLDv2rJVzGz7HuKhQgUl8Eb6NSULuwfU0OwognsUSrB9QAarexAQBwrITh685%2F52cNNGQkusSjWxyq%2FgNbSexk0hqGwVRUkLodS97supn1uWIy9Jao3UXlK2yXPHNRoKfQSQMAiZ2BY%2F3KGcL9VN4874BcUNMO98zmqFKM2JOJ9vTJlAhOowVmhsXP%2BssxSaJX5YKhl7FY%2FVOnZX5AJIhF5RXgPKwL1R21%2Fve3EsYjJqWsiomZ2MDjbdhIKw%2BBxk4ndmmdifl2CVbbA7P7yz4ZXwFNpdOkorcshXyo3sKwpRHBjAs5Zt92zggAzrRKJfzAgdKMcFpYKdoh0Gxf531OsJWN%2FpRW6Ullqt%2Bx4ufRsEeEQemI%2FtfBI648%2B1amgY5wDjf4HiX9t5EEZK4NtzrVE03pd0sDXrKA6fBJVcBhNSIgac2NrjE5ZqcoL%2BfuDxGZfHpqTj4%2F2Y6IYK1gr77rD9ZobJujDQpElGdtxhsCW0aac1io%2BTNz2HkT5UE%2F%2BQm7%2Fk9Rsw5%2BSNvQY6pgEjR6XhpdTVed4pFQxq118SJaCiVulY%2FkLfFuTJANAeOk0MmEOzWLViltfumT2dDM1MiXx5aCHjcFl0VA9c5oBlztuyAiv70MWzMb43dKpdJkA9mVMKGyjdDv6ryb0fSbzsq1AfjLQYHsQ73Fp47BVl9cYrvo2Tv64tj9301%2FSe%2Fwwy6itHwflwLOFEeWI6yMKQ2riuSv6baevYzYYn1WqH0suMy67L&X-Amz-Signature=2665bf070619860aab81be965170ce74bae8aea3189eca5fcd489f5846844223&X-Amz-SignedHeaders=host&x-id=GetObject)

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
