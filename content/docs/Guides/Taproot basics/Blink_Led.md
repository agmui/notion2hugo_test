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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCARS5QN%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFTno1VttRDI2ejr7o%2FBdjlGRxpdIMu3mG0RxXSguTHlAiAvfiwiRk9%2BHndPqqY5vQV6pEhaR%2FfUTCWrGSjZlsK6cSqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfdZjAJUEnO%2FNeIC9KtwD%2BBton86kyrILNupzOj%2FIlUCtqtT72BLBN0d17Q7UXdyvNM1PwstVMxHjWTvloM3IVIDROnwS9lKrmI2%2B3Epb5HWcUQv8BVPkkQmoHWE83QPIf%2FwC04jFGt1jg8JEjuq8NPQJDqEjkWH77rp6L%2BDunaQFokM%2BolZPP62x42KvfxPubyBOCiK73kysUVsqOpByiUs4I8HMSe5p%2F5v%2BcOG1d1LLQcc%2FtmSz0KtFl97bNhitEiRplezBIi3TkguCCXPSOGJPeS7Jx24%2BzOXlp3m5nG1E4SjgWolxFrLxQ2WwvhxBN1mqoR%2BaSt%2BVhgQ%2Bvo6%2FYwAe%2BiiAkTsUkl4RJI9GyVtZzxbzULf2ECJcTUVcHbytYlxMJLk%2BhTwi2YEZVLJdsKdmg%2FEEri2IXYdAPSEjv3oCg3UScCU1EJTCb2AoUk1Qe3lIo5tKVZ1oF90tVeN8XMZsMh7OQzgLBTPzOvqFGNkklLxD448wrcxyTLqLWft7jgVhdmvg%2BMSkfS3vwYrqBTifa7kIcjBZ8AagtHXR8E5dIyjLvAyIqoD2vU4G%2B8et%2FGupDdrFeJTxB3PH1xOSRE2y2coyw%2B6Vn3oIgw8w11byCxUIrTuz5iF63p2agcAJ056zIa7LczaMXhkwh53lxAY6pgFMIyg2Njp7xtu0KnnCKEOm1EQRc9z70kay8iuJvX5tkc2VwKzAtQ4gYlnVqLMuSwjOSk%2FdWoU9ULpi2%2BxrHjM2v%2B9bdqWmKVNKbzEVqe%2FqfnHH4cXoR4pti6wIsKLPcYggxu5AWt1LqSMZ%2FdPQLR8qMqBm8KfeiLxKQhvEfoPy%2FoanOrcCIbavKjGScxgwh7hsVCthe8Hb%2ByL4bdJCN7qEISezJ42L&X-Amz-Signature=843593f47892e533b699916cae1bca29fb119a415a720e92d52f970ecaf36936&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPODZRCA%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGDuz5gkAwpu6BVFnO2bYJH7yx%2BbNt5X7kuov4NhzGdgIhAPNGhYkqDmTlx4mHusQirUZzwdE1sPONzILoRJhHyzLsKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2FiTpyNtktQuGJm5Yq3AP0M%2FzTlWV6YJqdR1WXac8F0u3FkeP8kGJl2LMmtULL2TGxnexdpCULuheAMRe9Wic1sCngZuRkHgV%2BUObtPM5lI04VPQvd2fUiR110l7Lvome9EDePnCyZD0ib3ooIHrkR%2Bq%2B6TNg%2BnZicbgSLc%2BOvXgLKFwDsxdbf6nAizpAAg%2F3xmHUa6v7CKQ6%2Foxg8I%2B0bzrjn%2FOUQgBr5ONiozqb5eexRcVLqXgNuHDU66IL7VmblVLn6FdwFHysiZjCIxE%2BzcQV4aFCQS2Dqdqfh1VsclS1qaREkWH7nskFUzMGEN4uMXNiTsRqCO6ITmOEtl9LRai%2BAKA7elKHccnejyz18UDHdnA16WN0NRazMAp65yep7wgTOuLo4QheYwlYG6mZOTV7S9%2BOBXFQXN92tPA0UBq3Rq%2BLLrqG6rhlsynPWqMsGXz2olruNqDg%2Bj9aF3IfJzZCYThugi2lK9XNoo%2FwqagfGY%2BiEQXP6bQDQNcNXIHuUIFhSuqOmq0WJdbrceMrbKOKt0STK5OQBwYGlHr0%2Ffxthfd9BxBI838%2BchCMB7dNtU4Ok8HA1ucGgKN6JX6AZpR6SC0K6BJ0TzNk0E%2Fdl9dETEL0l5XDio2GflYK30mSqyS6gp3Ehub%2FbQjDWneXEBjqkAYiQIv%2Bj97G%2F4wAJzjbMVFhL1Mo07P8ibgzuAnE8wzYDDfM8n60kppQW%2F%2BZEtPqD9O3Lp8CHjtKGs3nJZgZXssHD89W1y7p4c9L85PnmkpXHU%2BnAvapnp0E%2BA1IuZCDQboPzhEXNZs7D3Kg167yDMVqVdOInrnW7kH7UnRQdfGbArWxSYzRDjeKHq6%2B006k%2B174wE2bVYIM41HQ2b9I6pEuTjTdP&X-Amz-Signature=c0935c954adcf175033f29b97ab715da8b551c079e4a71ba2e47357f536a3ef3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
