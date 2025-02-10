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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQEB2NXD%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T050808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BmLd5j2NtOsr1sajNqubljIs27t3izeF6nV6pCm1vvAIgP27qNq8Q%2FJm0KU5ZYrv0%2F6ZGHdxfv1Xu2rbonOpCFL4qiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIkaGbWuCnjNTueHQyrcA0gbc%2B6lfppF14jsH4XsWC5JZ2qRLQ1dF%2BmKIzh7n9Jlz2LK0PUWj6i%2FHLZPzHhxP%2BREwiEB9fPJzF1M8eYNMkoQtGwff4Qe6CzCR6PzZ4kqs08BWFpyFru8tU4JILZmcdPqSEVtIoIasbKewEVcQ7yKH3lCYlS4y8Rs04BZ340Ls%2FGNJMTlZlIyaNUcP%2Bj%2BLskKoFABAWpLr0L8YPhovmmTsuXlQeia3IoHX%2BpB4fSLe%2B3VjyxwiV%2FAEMWqpbsbSCuUGCraroHzjzA1oS7VDi4nmuUKZ5UHw9c5ulDbkOjXzru0QraT4E6DFUfvC6V5Q%2BRj0mjrTgY2MVvI7i%2FdeOi9%2BMt2323Jf9PYAvE37jaIZyytFF0FNty8l3lJKxPduyIIlMiecBj6LBx%2F1R6P8JowW2I%2B20%2BUd9BJ8zF3MHqDUPQ54MYWe3WhZGBjFYNQmA%2BBg1c%2FnPymaSU7KdkMTuDQ5Dk14Vqnz30gvfbcTCvXwEx%2F%2FTyymfhzSqxBBRQfa7wfiDH8721pleLeP3CLZCinbdUCzoGjK%2FOmxryRSO%2FQ5iuVaySS26eeExDRv5Zg0h%2Br8yr%2BsCvStlFi0%2BCDMgNi676vUZbwZh2VvPN8tLk2Xp6Q1omEi8T5jyn1MMX6pb0GOqUBWA9mndLucyafhwPvppQHj7d2wGgU3PjazVsYTIOcbkIRyRs%2BRgdZKXa%2BiJjwrA5lCnMATSmlezP4V0TjKm%2FbwvGZeVzB%2BPb4MgDmdRgBEWKocmb68zdGeGdMTs47JZAgUUu9z9Z6BTUYfXdr5JhRmeEvxC5Qr4MWcWSzTjmqAw5SV2WK8m9EFO%2BUHjNWoaJYzZvUVs%2BuvMMbrYuEhi5j9TjbdmkP&X-Amz-Signature=58ac587094cdcd77d57057ad4f0d7e7294cd1f5348e18ed69ee8213f7fa32641&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RBSBDQI%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T050808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2BmM3gG32e%2FvC50BxtFBFd0jXN7Nb%2BXyojgEUBEe43eAiEAuJktEyg%2BX2IeHr6dgoGO77QBlqVMcTpIdtubrFRFVwIqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHOt62tjkgz2CgzwGyrcAyTVYEK5LqBy5R8vx6oWLORegJx8dVP8M3IRwCYHCdPgglGz%2BAdakGk%2FiqHDN8f2aGU28wT4oAnDGuaqJe4inV0rkxspAsaTN5KpEJ5jRXabsbaOnD0Hizs8nVdJ2PPNJocGKMfzv5NyiQa%2FzuZY0LFj85LVWLGSReP%2Fi0mkdDsq7XKF2UxJ6jx%2F9oN8WTCt5%2FwwdEQzqgUFV4taCwiZyYNx%2BCd4iDdX4u0caGOXVw4GrINYkAy7zhXcQmJ%2FE0SHDrwJBaU4JUJl%2BA9vmCdMaAonmAl39R66yUvM%2Fsl1eW1j15GqY9VFGkbVATdNsXVfdci8IHrSzkk7T6i7oSNu50eHHjcFaocXXqwKbPTxpVRZfhcuQCzZEUK7I6gBReL22zWjvP5Pp2S32%2BdIh5%2B0N4Bs1xrTsMDcIaHBur3Dzdq%2FjhaeWYhKuKhVTaPkK%2FCbRCAXL8orzwD9BQwSrta75vD%2FZhlCGgz1G4CqwZUZhsig0S%2B5ntn0FNnIuflY3OktHcg7H%2FfnYagQF1tw2T4IIl3UTruQRwYjJPU7RYeR8W5roP91OZQT2Q%2BjK0dmwnbcLrAMgPevYAVdHzIyTF2RFM%2B%2Bt64TcLZ2HDSsE7m5e5an8GroljZBN1IW3c5UMM%2F5pb0GOqUBVprRYyIcGvowO5NBu2bdlefP7c4BI1gXNg8v3kFXvSC%2FkmjR%2BP0QSttv2%2BmTNgclA3Ep3WD2wKnyVoDkFPIQcDKHIgtiQUZukfybaoIbjaLpmT0JOwYjMGd0llf0eeSGcoOM0yYDJUly3LTDRWb5SBY1Y9X5Jq5jrdI3H7lAEiiLBGwn8IdA3njg1wPhm0u7rZPhqlFKWV6CNZZR%2BmPfoTM53sfD&X-Amz-Signature=0f8e59284d98b738717a8221901ee01a0a5351e19df3e5f97df3871820d5a51e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
