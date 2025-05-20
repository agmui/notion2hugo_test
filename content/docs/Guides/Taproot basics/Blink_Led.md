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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ESPQYZF%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T022820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqyFgOAkTAWLqwCHED1Ou%2BJSJvm2ZSbgM9ZMaYSgH0%2BwIhAIzrgKQ0PETius7LriKIUKqW4FXoJiudUJ73LQoWwYESKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxhIEw5%2BvzXtRv83lsq3AMwlJwKJHaNcvBT6cNhONBiLfaCNoq%2F7NdG1UncgBiV8aVWYPtymKrdaSjGJAtTk5IvP3anTxhXxIvYejRk93ks1QBsqrt%2Bu0sVQvkdwlv5dMJ6AmPoZmYrjACZk7O3a4jkwGy986HNmvVCROyB%2FDYJ9z5%2FGvZZq40nuirbFQlNE5EEPF%2Fd9VpcCnNsfkH7xtsiRNLS3pj1tQhCSWrfxd2TYBuQPQCIsEUJtCev9Ga%2BdJ0YiNW2xrBQOLQcuWdHB5Hd%2FOsQX89KJiJ4jDNXE%2Fk%2BOKKOS2LX6aWD8E2RluK5n625TSZoCqvv90LA9OfmxFNnh4ZKniNtgwifLDJXiuy4S2%2FmhWvBTNzUoK6Wyz88YdpguotFMEsSedqu82srV3LpFGztEEssK%2FEm0oJ1YPZUBF5cY85DA57R7cHup1DzNVhmqSji1Cbyvkhj7Q%2FAXP%2B7XnyLsaxRjz0es%2Bq%2Fg0u%2FCXO3jOo%2F2iWDzAxUbiNxwmoEze%2FJJ8vhLpv0qHMuBzDuEY%2FnfUsX4JNfCB5W104Z4RIAcc7lP5R%2FJ0bdcM4M2WXZFlrAnOxXQHbNkaEXpU4J77nw7CSQlbqW7R5yeSfNWdrl65bbV4frGmXdvP9Pb3r1B6C%2BrU6ZoO40ITCTy6%2FBBjqkAZZ%2Be9O9QNQVnFmcmtQgFfoCKE6cfpSNLfk9xX05c9vtllean03f8sqeD0%2FqmMom6GWy7%2BNt1whrh0taGFZgVhBkEiUiO%2FE%2BrPN7UzFbL%2Fb2faBRgsFWwFJeV%2BxRtcAnswADY4xuwRaMVZzgZfMoE0uqLaUpxeXk2exe6qqZ6oHlp4aOrMeGjgnQInzNY4GoifnboY%2BXXqNg%2FMtnhU5j4d2FrV7u&X-Amz-Signature=aa57ba2e3836eded800ce953842faea086a50b8e71e0725b9b39e0fa2a13a92c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIVMXLF5%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T022820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID6J4uridh9aGHE7ecR0lCUAEnF0Ec2yFshyUStHUGCMAiAfEEfd3hPds58XsDrRb%2BbPPgJf4fANzoPXhKo5L%2BsTgiqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhT73dvv6pkrxFWzEKtwDQ4VnosFQbSz61nn%2FDHITqQrySfNL1MXRK%2BV7bvlseMnkAp%2F4irh6Q%2FomiSpNEifdjyZA1%2FPTa0XduWCuTrNFuO4tM5bLk%2FY3T1pbek8X2O6c6luKH8UVV0W0i%2BB2xtircmDz6VIiNfeqEfQg%2Fu9m8NpCdOCxY4BnY%2Bg8LvLrjvgJpTkEJFEAwhwrJ1qI7fk0yBG8lXqPEhtmIssqhxlU7A%2Bk1d%2FwaRsS1AK6iv0e%2FDp8%2BEXfRWUPKpWyD0a7D%2B%2FSCT7MP3GgGK%2BZp3zPhv6HQwivEqVNvaGVm9VmbJ7g7veMAeAOM8oI8Ze0Xa0VOmJ8fblplavYq6kgBLfTLnlblw%2Fcwo9JCRApYqisi7oWr2Dww9kbbSWc81AsPfJ0VUe0GK8%2FRis7EfhIpIztmw2YnVeSw0XKOuI7xD8c9XSPC2uvXwl6L%2Fro%2B3mEvBuLMqR6xcW%2FCg7Ur8PucfIyQdjYH6DgpsnVJIP%2FzjPwVwYUAJNCeQh7PbMceJH%2Fk5GzzvZZUHhikxKDAr%2Bg8glg5MOY0KCx83xDQRstXQFzE32iQlZs3P8lzlN6FgTSWB%2B89UlLuNs%2B36Ld5l%2FNm2rx%2Fu2MTrj19jPCQZEEMCcD9icZKTD%2BWl3p46N9ZfuMHGww3suvwQY6pgHfPS6Y10pYkY7u4FnAnvrekNx%2Fyt%2Fuc%2FSTcav5QMfI7r2slPFo%2BBwe2k5my0pFwL4VItE%2BvOjaa4qRsOdEOJ1hL74Z3rZY1PVdkr5nx8Z8mSaGE6NNAF2Tz3a2REAIX7Z8tVSn9n4hj9Ln8DR%2FNn56onQhq%2Fxdnhdx0kGveFl34DyRgPq51JZhxemWKAF3FUW55%2BJCRURSU1Wq0atVR4eu8lVEL0W3&X-Amz-Signature=d06ada501fddd23c2e44b270cc331ac3df9af65a8532f7b471f3849e0ead44af&X-Amz-SignedHeaders=host&x-id=GetObject)

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
