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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKKU4BQR%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T131955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQD1sKQKo7UmTXXHRoSOe9e%2Fa1vFmXQT3TlMi4bX76x2nAIgXR7l3cZwZ6esw88IEgDcSF7VrVllAdO%2BP%2BMohM1idTIqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOcDMO2CpEuD1v%2BwPyrcAwJCrkHE2fC8qC9gl2La1SArdzBy%2FZv7a4QHTahjLzkLYi6fU4%2FE54kpL9ZDGb4ZvnRmZXE1yBioxnsQc1nROfBnXLHLvaauqhnM7zLe6ID8oM3RiJPh65KZ2VsMxcHrolH6wssybESERUw3nLg83GbI0g%2FfEgInI3opqoyY1D2xZz5sLU0YsAdpMqosOo87r71XpRhljBm%2F59HZdMVGzAjeviDcUSibPjxVcUXy%2Bo9ByFoZv4%2BZF%2F2LhqJcX2C%2FK6b7s6IkPwpabsVeuyUkzGtp1uOKT0TUtm0TNOTrMpirF9Idw0zqTQmyfsRpkyg6Oew7v0aYlI%2B66nyh8UB3w5F0ObIGChhdMVUBVvVGRPHYFLRnXkSsiX61aGmICoPjAKX%2FxwJGQv8P96011zfaHjcidIJ788EVpfBQ2ZZYSu0sFopDKkb%2FOTLbLeprSndO0FVEO2TF3GvJH%2BUrIuYDlaGFJkX6LWBKjtBVcB6L644erOgJLb0dhJWUrq68DWcSoOlgjbtD1G7O9vc8PZvXdzBUeSfOfETUFThyGgGYY456yyjNueJjYM7iv4MPXXmB7kycikVq1zILQtPkmj1j7aUVBwkKzfFZkgyqm%2BNsaMpgMxOrlglvXU56l9jGMLTy0sAGOqUB%2B69j7zVJNlLmnOlIPfa%2FMAIQ5Yc1zGPizsdWKjXTsVHstASt3C%2FvN%2FZnzYyHHqk4DAkALbRCBZYICWqeL8VB9MMwJhfvsXkJOyaEeeWhqLc3R3MiVXIGu%2BwlEg5Zw5l6uQBVkI%2F1WfxRMyD%2B5V9YN1%2BIfjaT08yy0dxr5rxBRGhyNHupIizauPulCP5Jgblc78VTf3xTg009zz2vwnxiQNIdJe%2F%2F&X-Amz-Signature=82bb3eabac63d492419160fb74cd6751e9eb6594ae37bdf60037f4d7a1825650&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BKJYNNN%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T131956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIGKKUJHtyBL6fKstFiDDBZACyvQYp5HPWm0RZNjjC0uwAiBnFwrFg4RcdX068sd7edFSdPD%2FnbDsI8nzrLm03kuEaCqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEWGjWfXrJ9esoduiKtwDOkgx7ukLT1GCAUZCs6sBL%2FRXi6J10G8uLrDbMPaQ3KeP0tiRlc62zPqV6LYtu%2FZqYvkkXDUJVKag%2FuLuxH6hFp6U%2Bc73pV1%2FSLzIIZ69WA1jieIaB2caCRSr%2BNn%2FUO8qmFE2axu3NkqWHd%2BCKLfh5ffxR%2FYywmyZG1TtuwHBAshK5ZdwJ3YlvOA8ZL9NHIPhGhjv6uUK0URoJYEXJh2ZIr7yA2ZEqC9ob%2BsstlR2%2F1o6eNgXyI7Pulx%2BSEuaeC%2FIuVzpNnTE8MfvopvA%2FHMZqrqdhLiGGIUzxAQx%2Fikp7DDgsLi1bcoW8%2B21yt3%2B9nMR2IYG0D7FcyWisD899xIWs%2F3J2PdC7UugygJ0jM7JCLNVSRXuadlZ7rPeNRyH6X8SLK09KsDYqAmLwKrCw66x9LnW3SXPMRvzwyCO9kEeMZZxYzUiedGELRgE%2BGXnWlmE0UrNmT494WcT%2FJb7dwNDmBwQe%2BD6%2FQFNXM5ZQJllDLyPdKd5FIL%2BDNQhklecLjyJhfOIHfbREb%2BZHvrwBdmblnEgGHToduHRnpmb8QFnkYzUYgl72uB1X4Pr2lBkNceB3uG2ydr%2B%2Boujwh3tQyQMtzFaqSLsyJo5x9I5IcpBUL0DpzoE0n%2FxzrTp1lYw%2BvHSwAY6pgFBnqmSq7y21EkH7rFaXtk7727cNHb1u9354JDyW71Rqzku64LQ7e3VQRblMYUT4mDdIMgLs%2FaaacokM1vT1VNqu6FLv5wSmi34ArOSY4xnAaDUAXrv%2BzCxSdoPKiNhQj581d5%2FERSEUCzI3PMgcDGaqtiX%2Ft6pWGCebhOvpSMQCNdt8YfO%2Fc2l2UVZiCW6%2FHjCBhmly8lPw9Wbw5%2FhC74ha2uKb9Ya&X-Amz-Signature=3901cde08b16baa1c37afab27b197f6a61ce53d9bcf2cae56669c0b1a228a0fc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
