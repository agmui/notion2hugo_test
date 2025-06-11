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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRTMQ76X%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T070937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEPljVCQ7Rxk%2FKrXmcA51qxjm4gVOwCoxLedlGfvVgkuAiEAzddnfUY2xFfOEl%2FPMtJQn4Mwg0gneVpaHgzVU8aRcf4qiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMrQ%2FrxToi9%2BazQbsSrcAyC2LkBfvFXNJfeTeC06nUYTNqP87W3XvpZXCPutxaxt2vDb0DAPhL1fEMkBQ39GXRv9x9pIVmF3Pbtloz7T%2B5QkmB7LuRqa0HJrWzvSf93bNAEPcwSfdNsloX1%2FGxKbsVsjXKE9%2Fm4M4sAwcocAy9KypC1NkzrhpAEWJoY3XUPvL8RoF3R%2FzU5lKotB5QqVdcYhIP%2B%2B%2FNkx9SQNrrMR%2FZNdMbq4DaWtthXXzGNRkIaPpnRtRiTjkA73JBVIMnsKY7%2FEtt7Smd7B75Hr%2BY95k71ZczpkcjvyoTL%2F9JDpeRGLk0hyXRWc4q0PPz5BmiSzA%2FqDObLK7rgcQ0YotVO1poo06xKX1V8K3rWb%2BOOft%2Bs8Zfy8dHaMgRD1nZAH3FHdc3vXJCkD4uZRK%2FjlYPpxELiWXASLg%2F4dPF6Cih5jgHQVsQBPHwio9%2Bu7Jrwl3q1wWO0G1lYxKWp%2FRBIefM9F2UEcVwkWWq%2BlkCWHNfACB1rwGF%2BrKBgHozlZ4iMGBblWC8P%2Fdg%2F8bqCoO5bqinMD%2BLeg61EY5NY9oTKwpRHXxDMaWo0HtBQ0TEW22cc0%2B8kIrFbqltm42r4Ti5Q9lX2dBTZkaRUFV%2B12ePavzUAZv%2Fjg6ke4KkcBmitY9sl7MOLJpMIGOqUB7rR2oCKfahXtB3mC8mzie7qPZ65U6n%2FR3Zeo544qfYLD0%2BiNDayYCGGBjo%2F60nvkDKyINzuOzHFMX0YfvAU7W6p3rDAtsVeldG19CUEdkfOyNAOdJvHrtVuaSvk7pbo3CI%2F8isYwPTLShzLWC4jcw%2FQyqm%2FUsXeaAmRXFemBcPYu2BXopIuTnyLSdu2%2F8Jt549weC3YRlRUtJY2twaNLiEYW42op&X-Amz-Signature=a799bb8092cee72abd44400b26d027837cfa65552fdb30c158404b8158b52f44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JYK6EA5%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T070938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvrQOMkATcMlgkUIHQgAGsEeTQbUAOuQQg4V845sPGcgIhAJOXMNjguuJL9yveG7lPwwRrwvRHER3U6lnYzPLARfEwKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzSI4h%2F7%2BA1JpzF2%2FAq3APkhGXVtZeZ5%2FwKJEhCfchVA1iACWk%2FFcWwNAT3jOghxPym5X72RlBrkyAdfp7kjoiWzT4iv2j9azjU1selZ%2BB9FZX8p15IIso4nBh5%2BXhLOtRwjIDKqAhRBaRiFMMaDQB9q1lG0nuILjLa399btF71%2BW%2BfSdRIukPQ5mlt%2B%2F%2FiKlGt0J80gLlRZwNXU3z2UH8HX57PU%2FUarXCdhJp3tI4pt%2FmcpBA8y7Tm%2F1GsODG8tD59v8xw8FOOXCbatnQlfwFXCHeIoceEEoe0pNpPJwVLPaavE2eAz0WoWGKmKWSUDWRXPcr0u8uK1iU4t0%2BnViMI%2BWS6cQdx4ESxaE%2FaM4PrYQvmTA9ttLawzqIwIu6b6b8YqL38%2FgjwFCMIe%2FbvJxp%2FvJGPD2mOicuRE%2FOgDdFep4NgpdcAidWrn4qLhaWefZiQ9Z%2Fjq%2BcKi6tTzs0HvB7xijEVie3da1rNF97D8dh5TpqG2oP9cEx9FFSUVlZmtZzoCw%2F2tOC3e15SoWpouFEGaGU%2BF38H1ytk7HuWDLFjLKVCFxvG5X8%2FZNGPccF8hAnYN9qzPxvi8Wk8aE8J%2FsqXiyaLdY2EypHpzeaURt1SnCWP36aFTIBM9X6PoX%2BS6A2YteOt6%2FNXYoaCxTCGx6TCBjqkAWd4KiC3x1OSEDha7H%2FlR9GShJduKXuf7JsoHmBJdrqT%2FYRLeAHxf2Oq9%2F2fcc7cbYzRguoXf6a5JSNmkzx6YbUMuKkxGJIv9E5tXMf3%2FZ3pHQPuYcZYvIkNPltkghl5qgnRXirwlcMxh%2BmipzlXr6MkUJI51rR4VgM9cJInOMEpigQOtcqShblt8nWIKxn17HIeO77hFdA09DhgD3NNX%2F9rFU%2Fp&X-Amz-Signature=0aa57a089dac264dcfb30acb14906a30702ca763292534355ff912d8c030fc77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
