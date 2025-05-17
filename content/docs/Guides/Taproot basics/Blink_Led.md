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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VENSCR43%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T210705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMWA1bx3iaGfn8UevqUgOsN3BL3abON%2Fx87ksG2S2urwIgSLzwhBDXyuEuRHqzzmd4LaEkx7F%2BgXpbt7Yxh1nIx9wq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDAA0n%2BIoUphaQtWwdSrcA8ELZSDwXx5GFyYb0HVIKk6GaPQB%2B6A8uYK63W%2Bn6Y1cWfsugeg1L5AiPBzOjBD%2BgbRj6MniCZ9kxJ6bC5Lcq6vXsJxBNTsHvAxDoFcTl8WxvO3UXf8DC6QXTmyV3O80c%2FV8YrAWh76H4%2B346jV3XU%2FvUqHbEyNDunrm9cSGdRTwExpxUbD%2F3boejIKN3bqrLJ4oQjUzxh3UTNC76N%2F7J8nKy5qYVtY8jaJG%2FZG8STqbDBK%2BYXGqahgLGt1jfFnR%2BF4%2FkP6Gn2M6mrE5YZHK48lm7tfy8KWrt%2Fb53ZSmG1CKz7UG7lQAd11ABQwVmCWUcDCVCUydPHzpZH5fanPmjz0UZBhiPUS%2BkSFCCjNAZREzHxA5y8F%2FgyeZNB4pSjnbzVwcSHPTqpVh0AV9cZAjNMR8jLnFBDe1U8%2FI4pIZEiuA2RmHxjCwU%2BBXhPDmecZ2tqcj5s6QOTuN%2BQzqy7P9qx2Lh0UJMhbRP5A6QSd320l9P6rOzy4XosuGyiF1iIzLNyymexXG7nYkR7JOIoSXxZ0dhmrbd7jG5qxTuZC5p%2FHi67ZZjzW81Ra4s904B6gJCpZGQ6H7hkpXHC2sZYXHn28qrn4rvu8j1y2ZjHF%2BOMqDIYD3uUjSXwaIj6xFMNzLo8EGOqUB8BAYVKolk%2FOWNHUWuaAtTGUvGEaMqQyBJV5BHyueA0fs0yUob4VNq6h5eOzUVSg86UASAtrEj5iUk66HO3CoozfA2zQhgjPldrV8VKNsMcTtoyMHARSxoDvhHAYk%2ByZ%2FZt2%2Fsi6Yrfj7DUzIl9mEa1Yy6eV6UdSyoPs667YXlUuNGawxja3U0kamZixXiUVPCOc4QjME0FdP8LkrGvJ5GPkHDSZB&X-Amz-Signature=00addecbe071c2bdc5c70e0929118fd18f9a26ac2e9758a4f010ef77870a3d33&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGCOZYDA%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T210706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAHEZlpz86EQB3EzhYms8r9cShzLSNNlKRmyx5w%2FH%2Fq4AiAoK0SsdoPFM%2FUcPstq406mPuKYXi0DSGZUxDMGsW6Zsir%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMZtsIWKewnewaP%2F7wKtwDGK%2BmPYQEbBlOwKg9J627zs7ogO3g8ux2wWnigas39cspzMHG1d1fM2SQVs%2FW6s4ilrpwgiPEPFHzeej2Y%2FlxVrGO74CnsJ9i1w3wsht1LVN0bqHSGmxnGYdVyGlpDvflbgBQ0hHRYreqPExOCsaF5QLVB6aOtA8xi%2FZLVNp%2BVIutGfvXswWNoFEN4Wfc79TR1VQbRhsdvuxKR8l1QhwA1%2FWNT2xxtwVVqsUO9hJZcSUgMBrkmWJaFcJ9y1ZpJ1tffEzc76J7sn5Wel05gjo8EsfUeULRa4Wn415tGYjvFGACzWjP7Hn82zpI%2BPM2HwQ8XVEq2eH1ckDJg6K9%2FPyfiJXVpNhzHzCRqprf4VNdkPY%2FOq%2F26yik9Sl%2BOvzKSRj%2FdT%2FNdo%2FsFmMU%2Bw0yjkrWTWFRoA2ICfShuUm01r496QuAB%2BpwrT3SUhz1%2F8eXgh4wtFwygKp6Z2RLY4Sv9rCnlCfExq8y5zFwyD9fSD8bsHzMrNYrv%2Brjt%2FQsdG%2BAdiB7BFmyPqUYVfXSykw1QHvZ4ndcNEaoU29jtfhLeJ%2Bq%2BzTq2%2B0g42%2FqLQxUgu9g4XYuEkokI1yY3wp8TPF5C6iZK29AoUpcSbBWBarfQxgP4aoDe8d5FVFlR8cWay0whsujwQY6pgFctwNdixD5vk00nACDt6FbD5pxwBkQqZWwuJHWO%2BXVaGS2UoJq4oZagAh92DkAG2URtLF50RYHs0HMPnpSJD5EzZ5vAXSq9fNoUhUzYbbOeahzaA9NAuNzxKDPr1fZ6RTaiWwEX8hs5NKDF2mlkRN4WadqC%2FIAjR3jYJ3GyyOD3Fj31ANPiC2WcBqG3CmnyE01CDTiGd%2BX9RvJVT6sr6zYh1PDOz0U&X-Amz-Signature=fda4e776ef231e235ca0000715fc8512f06ae1eb7683b9dcea4bf8c8acbfca4c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
