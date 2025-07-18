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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFIOXEJM%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T061420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIDT6snlcRWqiq1uH%2FtyV%2Fjo6VvdR18iw%2Bvw%2FdxA7WtfcAiBz2ECjFlQyv4vWfToL0RrnS%2FD0QNpE5hREUuB2kWOqWSqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5DT1c7Y%2F%2FTIVoc%2BGKtwD2JBV3Hh6JaG9f2HxrS80CVBJcHx5toL54%2FScsz5SzvBZDhan8A7qEKm1TYxzZzrRRtLIv0pX7VgGBzf6cK%2FhjAnbRerAYiCf3I9fYEOJjkZ%2Fosmd%2FkAgMHNZ7xN%2FmH4HwTP%2F8J%2Fv97UVJ2qaH3IJQJ5suQg7oAfD6SZCrWQHI0PFsfAdkV2FD4GSfOQ2TOEqEJ5HdTKWH1x5jFZT7BxKzXDKZAolW5WKL0kmPDz2GOIMXayGcToaCjMxT1l1r39kmnhV3pcA7tPZo6jla09N1Wme4jKltqVN%2BCfSxqxl0OKQbv181A3uZCUx2%2FMXTjEodzGCQnPeXOt5r9DJs3JMt1ytUlR1EgYMc0TD%2ByjldKnNON5qi%2B7JKczpG7c%2BPOKp3qXaSHWKUvxlH0XAhXoOiMQpAXKgm9qKyZx6IYFRBkXlRinHcbvgyze6LNvdCdtLoTEtii0BEdIiBqoSB5NhUFRxrw2eXc3ROfgEIey2lqfTTWkh%2FAkSD8YTBEB%2F7RjuXNNPIIGspUI0buDudzQbI%2BPvclGGqu5F9h9w3GPsDTMqZ1qkXLc0EugRqIUh8p06xRUN1Jmu2YpQKzlpDhoDastoMpmmaT2GSaVjeKQvKovCeqiOq8jmiutnBYUwlLDnwwY6pgHzFLZdiVHRNBkWTAZ1HpuMKHgj5F5KkDw02p49%2BPBWX8B7E%2B9AebSkCls%2F8L902zZVe5GnT3kHic5K7j06COIrpoR6dXeR2mDe6avhgwloGADmNcagC5%2Bq%2FKTlpGgqv70zLUSjzY%2Frjpnc9g7dAbSBd8tA20haRfYuzjm%2Fheu2dXSBM6W%2FbmMfj8TuDjM%2FwCZdKoFpJsvQ1yWqHSFFJ3CFbxW6Y568&X-Amz-Signature=02684ab447f293157615a27cfa1eb6252abac6cb7c4fe9f0323bd00341f4e9fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672EQS77F%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T061420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCRX5ZepgrLwvXgPL7NiZnRPLM%2Fx%2FvVe3GLdRDCyovfGgIgZX20Yije%2BP7o33MuhHFFo%2FFkMteeeMBjFY7NGTE1DCMqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHaHuNDta9X4EJDInCrcA24XO9CYyrnNeweUhSB863b6FD5z5xtSPmv4Qn%2F2Wvn51%2Fo1hlChz88U9T30gnzD8egggAeMwlEydYh%2Bkt7Z6WzZpNhIae3aCWBREi6ZiJofK9jvnBltV42VAe3u3lwrWBJQT9XkdK2w%2BJSWrgY6WKwEu9lOQxmMwE6JF9%2BPQ1F5teGxzyeOr9nib6Lk5CUQdxbCBiL19Nc5L5uegtEH7TH0OWBm7cnpv%2F8duSkkhWxgtD2diYbzV%2FaRtOjtcDhBwEBAr4cpymhePSzW5m9XjzOVDno8imwYNtKU43R%2BOoHUBqOVjprqKR7Y61msQW3gEstABxMV60qfTkVIvFpFoCAJ51VI29fc%2FXoSGh5hK8tjanpCWXqcw7kng5CJpZYoe06y%2Bt0%2Bq%2FLKrjBNKm400M9ms%2F0LVCwL1RM9PxwQx1NgJLdDHWXn68yFS8Bw2I8j6Q9%2FH7vOfD7ADQ1MfvFnc84i1IuLkf4yWozkoBjlO%2FPilA1Wh%2Bljjd9hmNcNOxgLCt84vbohfASH8f6nfEHoBH3GFGgT35WhlCgAuAJ1kIi%2F7k6bYNM6eYXH4benGRDEfdeq%2Fyvf5WuMEDIN7Jh8iBwpa5AztY%2FBQQY3OZFd4j0jJb%2FVYo8b6jKcLq9AMKyw58MGOqUBq%2ByPeDmA8bDKi1WTZ%2BBCnmzjfEXuGQ1cz%2FgTIR4zrECffzaHiWr%2FIHVFCshYmF7EAnskPizqRw0KnEZHyyPGOrM1n2GTsdNBCuWeUZyscwZ63byzvv41uDyp9n5pu8dFUzD2zeykhrLP%2BkOaZa%2B0fWlqCRNIqmaNZMSfNtUTSTAUaP7Gv9IabZ6YEZa7chb1amN6Es51SGlkSUbDTxv5gFgyHDa3&X-Amz-Signature=4726556c0fc0b6fe6d7d0f38f5ffa6a4ef28c73c7f8f79da17cf884ba471e4c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
