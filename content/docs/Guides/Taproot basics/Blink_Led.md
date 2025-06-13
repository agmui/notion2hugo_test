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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2ZGMLAO%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T121554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIFVkbPNHox9jRKwZc%2FaYaiP0IASEiA4cTUlPK8xCs%2FB3AiBL6HaM6KeP8uMf3MYY2O0OkcFdXFp2k2%2F22TVmi6S54Cr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMe8kT1C9j9FGbyoAOKtwDaV%2F5Kg%2Bnr49oM0NchhWXMijbTA8P096om04a3njCswnmArInzDOcNULrwJWZmMNzU5EU3b5ctfyrlLPfbAuTcfArz%2Bp0HTfJjrp5y29iHVs1j5Q113dPOGJA9aKZi2CxJG18v1fLHAIyPWnH%2BLPHl5MyReagXWFcgCXSfYSbHCxc9%2By4LTSurO%2BBjjZYchx8runsGkEDOr2%2FONiRohk1JbkpzLX6YzdRwcZzeaXhyYL%2Bbz5cSNkRYi2LfhuBVmYokVGhpFGIBnd4RlCPwTehwPW9%2BX%2FAmlIlZbkyyQ1iYwjc8PhuIHjZOyBfO8%2Bdwh6yeSxPdFvePiUrhP6AVt1Q6yVjaoDtAuZ1oAnCkV1ohETa9H4NrUE7DMCqv%2FhCihusbYQ1bFXKDXKL%2FwVWS3XN5OSpciSJweIOcgWpkvpE0V8BlGYvckznuDVK2CCC2i8dcSQVT5qBQEq0ljuwx0nkMvBquH5T8882af3E%2FrIOrpcuks66l8E14FDjYNPfZtosS%2FgrPBVcO9Kwn2p3K2lunaybv10KIvQRfVN0qXFMLNjahu34xS4MqAwqn0WxkgRnwb6HkMK9QCRKw0Eg1FiVU7uLjl3N1mVnZQ4DAZDMkNMus9jVj26%2B2FzNHiswoKmwwgY6pgHQi%2Fic%2FdGMFeDyD9zJx33gE2xipz4OIl%2F87N5OeK3O16rfxvozIbfOeFhoRBbs5whcREnEjKAXS8MkwxGBMsp4%2F6AQxYiqLrxwvb1IFSMxPQGuVof0QilDQlrK8KRTjW3vX5pC%2BdezkDDiRqlFaYLXm7QWr4bKg4qZxhDuynSFiReABgwR1YPPWUyNp%2F%2FnabsmwZHWfNUCH1I0132NW552inZm9uOw&X-Amz-Signature=fc1111b38c5eb742da5af5946638b56cdc2a9a7be3032c2ea530b849f45b38c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOQJUOUH%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T121554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQDc%2BIh4O7ZG0AVF0nE6OX5IVgj%2BiTfPinOY9eFJiX5gkwIhAORnH%2Btu7me7Rr2eYkr1MqCrJHDS2H8hG%2FZeEedgaKDIKv8DCBUQABoMNjM3NDIzMTgzODA1IgwxstmyRB%2B2RZvY7Qsq3AMqS67P%2BaCjNW47tFUvGcP6rQXXKrss5Nbr7Y940gIo7OJjWYvu5mnsU%2BkCcXktooTVyfJksogzgN4Idc87SqJp3B3SU6nQiN6DhbAmvD7ie8lovIKVh9MqZ0n%2BVl1v6bUaEAl8z%2FvcKaJm9TsnTOyo41NYi%2FH4A5ium7o%2BvbpXsZTKXtYpGZ9R2jhiuANL7vemEiPaov9YsyTxHdqYOSjFKIC%2B8HWtOu0QuSL6vuTg%2FSdzRCTw8T0q9GCdACKuUOhP05rL7FhVPohEdUH9b0ZIy4kWBIzV0GNicZ19KABk55AhF%2BYGo%2BV%2FCKgXR2ep3Fh5V7%2FNtekb%2BjRNtffUdDkcA3x9InjYEnt%2F8HPGFT%2Fy0WI19thgrmaEi0hmbsL4SOnp1EwXTqSkuge0XfnXl%2FvmdjGEvvvHgDEvn6Z1bJdBjHHyj41CqsZVWUNa4c%2BFufsBaOlBOZ3Yva%2BoXctsDn%2BpK0kKdq4pvZGrG7%2BIbQ5Gbs%2B2wiuMPHW2iRmaAMQL0DJxiPhX38m7xuWkyReSY7%2FPU8ZAIc6C57Uldx%2Fh2OtAN2Y2PpiO9fkdse5taMefg4EJBO1g%2F2%2Bt3uY7B4YpaT%2BNJFGzF6bo2wf5dSHaEnI%2F%2FHq6HpRQOJj2iTRJhTDErLDCBjqkAcGtD07f3vHeHASyc44TSuCQSdDieubjEQ%2Fje6JsNNkS2RAkXRB%2F8e0amHI07n%2BI0nHZECoiTy0R%2BbouO4GhzYftHjVaIKR55UXEFySw25XC4bnEDGT1cxYHKYVC3GpkyxcjldG6xXHBtBdZxKX5ov7tr%2B8CeassUbZDQeIzUszeI5Y1w9i%2F00FX9FW4l%2FNm6T%2FbdXUVhOibzb5ekqiEs9FJhP2P&X-Amz-Signature=563a6eae904c8f9eefae99cce98dacf1638ee4122fb1a85928af4ad7d28742be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
