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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSTPD7LF%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T090705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDYoSvobODgb57kvXTNXh5NGqnLiC6H3jmWOYh1fP59yQIhALBYeEArLF5S070lQgI0X8kLO2W7ixER8udy5pldWgapKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4dTLHGgOflrZI3r0q3APVQzHeLps%2FFZc12oEELTwu9RCWpauDc3%2FvC9AyM77UsM8P13EEjtdU%2BO4%2Flfdzlk9HtaAinMN12qqR1UXGSYOiibadjI1ZN7Q81o96gGrU5iaArWejBNKZhrZNKXgP0vG2JftUUt7j8e%2B4VDM278xP1KJX7wTtw0Vnb05iPY2ub%2BCuVPHZ2xJdNLJ6d4FDNhJ79%2BJOi1Xt%2FvMUGa696SkEJ9L7hkUq57bJJ%2F1emmqi9UwmfZ%2ByM31MqkQgrivH2Js8A2o6ZBwnCWaFaGN3BUt7czO4JBZ%2BgfQdl9f1mYoVavllf21Ml1dUWCKfOZ47W0B3v%2Bvx4UnBeiWAL%2FgjnKjHZtmVkqfnhzEHqy9AZ5dM%2BWNZLo9Lz9FwiqGOD8Nvu0MVi50238Ld4HvplhImPrAzM9hgjdCkFfn7Sevc%2B91%2FgMuv99KGNVQIZVoD1TwInueJSS7ABPfqf6CZ8wVZj51z%2FApCTUmwNb00VhB%2BOFNiCMqIdWAAIstVWYoIZCn%2FxGOZXCx8Vm2edvaGXDUS1hiquZY%2Fd4IYTZ%2Fzj8fE%2BOfSLvA5fJG6SwtGa4%2BAs6Ca5LI425OZxJhvWBJk%2BgJjL4vj%2BOic%2FnhCCX7u8b33nTqFLl8WeJeYxSPm4ukKSjDV14%2B%2BBjqkAc2Qk1jclR2NNoOZbDx%2BH56RINt0WZZE0VkaXoYxZclWZI5Tgm%2F%2FpOLB7jgJEa0A6WD3QujfKE7XTtQpUH5cYzV%2FkiAaANZgo%2B5wXm3tzQ%2F2JSRa%2FVWDiMoiDqpa4Ocj%2BisS1WS4TG5BmX%2BHtnmSSOeP7qYyrUhcGeISoxoU6thzlWAT3hhxSwS8LAad8t8M16veeMlnp3HT6F0NM5ZgUX8OM9ca&X-Amz-Signature=e2a641759a568aaa750e9a7303e88d8e39753c6cb93f2064077e24a8c4dc0adc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JFUWNJT%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T090705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCICBD5C2OI3HXXBMZXg25bt1CBF2wgOGU4qUzq8HAuYJ%2FAiBOjGLum%2BecIo8EyW98WyQH2UZyZ8IM4v9DFGXruaeK1SqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeBLgUJEqGQShpckCKtwDAMo5MZ3hRQi9i1Ym5AkBeHJV%2BHkCesrzFvyINQf2sGFD95xoZAjvGCH0ErIrljl8WF9A3l%2BTRcOlKRKjjWXBhfO%2BVZGnulfIgivA0xVwRNzcreMhDy0fqlizXVSOyLcUR75bOtl3D5y%2B27jK9pbCdITa6oODEv5I62ipz2ylgGd5am3vZ%2BXfQD664h%2B%2BKkDCZzeuzu3WgeYEpEeQzZ6P%2BSIRr1LhvIUZWQz1IwVoYKJJwWtfNmgBWxkpiaGTceBperGas9AqbQ4Rk6J2ncaxzN9EJPRkPAzhYMNOL4fNtiHsAK07bic4l3n2JnqBdya9wD91MeJB43P5LEj20wdaRFgvJXxeb11WOdVj9iQT8LQXniA57opvEOosaZwWTEL0ROHfb7Bw6Yrqp9YIh3mUi327CuHWgLjDD2tqKa7Kq%2BCh1wha4Rw9aYwO%2F9ppZs7BmRiUfIhpFF5zxAaDcp2YuXQEVlJHWZxUZWOmUuIIlWhviRGTnQUeWFrXfcSYvVv6q%2BOKo6sXlWc0cTE7mZg7AnaI%2F75DI48QX%2Blaob8timiIsp%2BkzpJpeDLJL3TTjRCagwfVzVLV1HH56INTYmpFPa00c%2BezCtc6PSkpAjDW8VoCpi8YiLDAkvHgf5cw1NePvgY6pgHxBZg3srF5C6m25fcUxephlkQxsLH0rhZpLxIKEyfbJxcF7VS5NwjZpryjhxiX7NMXj1RFZGC%2FyW1x%2FzZO%2FG%2B0hUEbTWw4vA1ZjyWFD0Q%2BStytwA9SO08BFt4Z%2FUfHUM%2BR3Hyj3sAaUqt3QxSgJFPtwFkyACsUqfex2aRqr4HqY1t7MS8qNFsU9ViSrb46ictf%2BpTcdQDzhBupDu6ESo%2BBfuC9%2FukG&X-Amz-Signature=9a660f7851834e9fadf335ea634b96329af9ce187a810d91b2a6930d35a93303&X-Amz-SignedHeaders=host&x-id=GetObject)

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
