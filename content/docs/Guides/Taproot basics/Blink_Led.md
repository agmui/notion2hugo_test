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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632K4TPPF%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T070852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF2ww898WV3pXm8t6y%2B0%2F6gWASPPLIg4X%2F0Nn7rzYafRAiEAkDxqmK6X3xj1ID87ZhYWsY3SHAkPAksiECx%2BPgzDLhkq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDJ5y13zFukD68FU6GircA4HJPwzXWNh0CFDMyWDhiTiMW0wqXfPi0bmvSW8knkCebUQHfdSco5EyGXaWbHTQ2eJNQAgEYRlK%2Bmpe%2FVBtBxh8Nlk31m%2Fvgm7%2FUuQF4cnaGKrD%2FmJUrQv3ZIJlUVJgjN6HeMilsfM7GspsmINfIO4PsTsm%2BKL8jVgaDwhCI9tFfiWUs8uh6HQUkiZMEc%2FybeupB7x0H%2FEtkMilTn%2F3Xd2cxpXqIDdhX6ihpE8BgkhNyhlx0uvGIoYaoltbeOU%2BWoJ2hIQvaybvJuL6p95EkpDHoaPiJYcuoJbdU2MhKRVF3KP0HjjZ4R57oPzzdQX3dNWLbYh6%2FhPDWIOsNOtUeIHkBDWY2%2BkXL2W3P1lTYR8bkgNwS77C6N6D%2BNQSGM5stp3xGXB%2F3ZOuVF%2BElQhYkoeuvhylWDVPZmaEIF7SXTljU5esDt7ZwbU4UAXTBckdjER%2BYc4og3T9IgLHi46BnyuNeKqnm1wnVmE8zN1E8jAYmDxpYqVV3BND4dgNC9S%2BlBMx%2BCkAIwwsImi2jQYWmAQsD1KKKmUIy6bE4FzY4V6LVNISPi1LEN%2BUblvppo4AJSmzciHtYqfhNHVez3U%2Br5l%2BmQzIyUSMwLUfQDTXXoemLeh20K6GCL7Y2wLlMN%2Fdh8AGOqUBjDGcgeu7pwW1AdelvYZZ6NU2BZpnnhHfMbQNA9uCSy8JEwBc13u%2F310QvHGQy6SRK2KaTH44cefOZGLs6BQvmhmT5ZP3My4QAn5oWL6FIVecMZTlOYUSwrKdsOzvLRtztZDL8E7gAuC%2BRk2aHv9U%2Bir1A3zlJWoujvNmX8MQnwinMCZ8lp0cMVT3wIvYrlXyDk5LpFHhyCNNrv4mW8d%2BKiiwOWUP&X-Amz-Signature=079eab2d1301697a3cafdb19400b7e90e992a88dc3d7b93aa37fce3c86637c1b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OLCPDBH%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T070852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKZal3qaIaF2GG366yrqRiQ6fBObhvcub7u2srrgg6zAIhALO0fvI1nRxpNpniXb0q2zPHTvZS6P%2BJMNh6hW%2BKhU3nKv8DCG8QABoMNjM3NDIzMTgzODA1IgwLjh3wzzCBiNxO6yIq3ANh09S1UPzx08k2s4UiiTjR%2BGc3gmuqx9TZAtnBvIBGoCxHo6cwqgNXgm0m9tY0Ma%2FzDfjIF4AXRZSv2zuPicgvKyNXPlcqRygmpWguMu7j5Ls0uzmNUEEygPhhlwXZ9iXTrKWrmhF3tBXvLDc5JxDKx0tCNIJZ%2FtG9f86HI58HAF7FhxTl44LiZIOuhtDu9XNKpUBraLBs9K%2FIvnEY38XSkgeIdkdfzjvY7ColZ%2BV%2BGeW3YAdpBacdIv7SasOoJpdr%2FaI2YKNyUfD5q%2BNtQA2cizfIqy5LrNEFFd7%2FqpZTCi4Y7zkP5Qq5xD1R3PPv5pCza3LMcnRjJiDqBBVYBEHKnvUA65UG2BdLvEATFMfwB46oIkf6xLDi2rzt0rOc7Zvw%2FSWvvPiRSoBNpMV3YRgpF1w1%2FwWeUcjW%2FwWoZJgdWQ0ZaVG0uCJAy56KdHaZOIVdtFjHfaebhUcBBBin%2BPinrcYy%2BsjgA94%2BGiLxIQ%2BqA4eGh5UUadIEn6YMFCHdahGtjDtsFegVgroVWlLxYjEyAfnK8jnW0arQbX38IDA4WlR1OVUr3AD9elANZNGA43ynPt655aXDNRw%2FOZbeHCL18h2Icp54ixOBUBWzK2%2BK36gHHtGt7Svec8PeaTDm3ofABjqkAeABR0mwVSCU6wjFHBrKpDUTDWZ0PxBJolo2FlxBbngNymBYDD8VMGD3kFdr3%2BYbRxFJ64Vm9RzQbhPY8AufsMiROAYNh1PYAG9iQYvmX8qNNWIzOZ66mwgYLs1MtWvvcRm419%2Bcu%2B1bjO%2FP6%2BBQJAs2bNDlzFDYAFAsbc%2F3bNG2ODxE9y2DyLWvfiy72Hbsyq%2BURAd7xDIl8v0COtXAD9Zt6h8i&X-Amz-Signature=93b3ff039c8b470efeedcb73dd09a03b6dc1806bb29525adcf0a2a77287b19a7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
