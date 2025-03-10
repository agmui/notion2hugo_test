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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CTG3C56%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T015726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIDtVHoRxCS3v%2F1vOFHDGxyoe4pyLL1uXziHQiL0Z9VhAAiAs%2F1v1jX7vZiyoXUXF0TsNwguoTl%2BjX77HIYYUdFIa3CqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCaubwbC6XKnKvkFDKtwDjI1x0ituAYOLN%2BvhPmWba%2B%2B1IILqYTu%2FDjKlnRLZKXy6H8KlFtQL80c3%2Fydux0Aa8TgO6Vbq5x55wEg5Hh4w%2BCRvImbnKPgxx2TR1Btdsoks6NzbeQpww%2F4xTJQ9Vn%2FlKt8nno1lVaTMhyZAvHsMXzVpWsNoTlz%2FhFCsISXYDRXKMG5vx258Ebb5Fz05GqK3dxHNUvF9Q%2BtnfJwgC%2BSoZ6cVBvi4gQN4Br8LtLSg9Valbim4Uv8KBke4jxfpIkFeiXxYXmwewr%2BEq266R0z%2B3G8Dmyd6g7NzGG1OJ0Gz6COzk1YCDm2mXmuO7ZKIVFMT6waOH3u%2Bv55dH6GDQbOdi4BMhxxZLH5JTFH7V%2FIv%2BV2nl2NJo2TVVREHpbCDmnl4oC3cxbP%2B7zVigOYo9oLKwLTewRyqbdni8JQFgImQS5cYWQJ1JymGF7kaOi5RzTPxk%2Ft1DwpODMs1WO%2FsBKrM0Ukl190f3sJuKq%2Flsum7ghmJ9TsTLYWtCGEhiwIEu%2B6ZCZz4MoC3I1iB0wpts1qeyhNvvBgsw65gvpZSLS%2BvDtxk%2FawE06GWKORMuBsyJFpJzElr6PKNBX3qs16YXmuwstbnBQcGKnm0Kn43EtEFrAODYxocTreQnJFKiM0wmvu4vgY6pgExjA7RhJ67ksS4ayJ1HZj4kzCOR%2FNrzu7j1UifhIh8gk5OYfGmC3AAiwNB0A1bAMQAaXIX1L%2F1%2F5TBJ6KsT4qrXCehAHeIZAZ3j1oW4wORjru%2FvlP3jzdcYK591ET3zD8FX2u3BliViQCc3%2FtYVKbS16W1qGE6E2pxPYqRNtMZqwPeLxwHzJcUanxyXjsLoq5yXS05AlwQaimBbwvuwQnEzsLc0mOn&X-Amz-Signature=2cfb62f7b2521f971861187d8bb89905c871d02c2169a7392fb307e852106b52&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HOUWFAG%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T015726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQC0BPse8jEbrDULCJtkBInijuAP2Yi3mPc1Ivz%2BqcoSXQIgAyJxcHt8bXHejms0gmnJyzyySjXUHWCdxKkcLld3yAMqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLNRyP4VG8Lw2GbjtircA3bsU1xNpsJj%2BksXZkP5h2MstztqFDyOX%2B8KnJBEvOelpp%2B4owsaiixBjXX7Ml0Fn1ZohToJzyOdLgWbsb49OZwhgSwcIw%2FSEuUlqWLMg9zdVbXx7Gkifq1aZGcS7LUIB16ZETSLb3st3Byy5dts6pySYPimKYsRlFm6EHc%2Bdu%2FOahglWOGf60kRGQ3%2F92LRrmdV2N6Mh6BrXG4m3oKphFT6%2FNBs9BhTanZytfTFK2txfRpd5wd95vphmMSJWX5J55T1CUeFWETSpAdOTzKIGdTtBEkkZV6GDNkn3tw5ZDOH22u912yK8mNbK4MFmUI2PdqoqPstr76%2FK%2F%2FC7zfmjdEbHGq3YemyEwcapnFlyno5JfytxjOYlhzNlbmV%2BYT9kme0P8du4Qi6xv68rwaBr4rgNVavo0FupsloYMjZN24%2B8SxbVWrl6FjpTEh7IkXIpiK%2BigNEEAgRzMoFiRmMG6yV5k24bJupwdg9H3HLltClkEQZ3VeMX6Q%2BUs4GuYJA6OmZNecceozRbolGQxjR0ABKlMyqjtb%2BEaqJwLSPDMm1ct4a8SF4qV2%2FYABDm%2FOSLeAr976V6ZQyQ10gRCEiJ7qJ9xnHUkQbYEwp%2FJGHwWZTED1dnKGAOYK7zHupMJj7uL4GOqUBEq%2FgIrlsfD7xnLSnR2gWSVPXsyqWUDyMtZ6ciAEFMtDBZ7QRis3e%2FNmylYzU29EVkZHzcjrvhmSN7RcjSryN3P6YYQ1gMLd1lkwLQxwhjDK5p%2BldVwN5rp8U23CXrj5vbJZdN6wjm7IxeG%2FHRYgx0KL8tzTEyHxfgjDXUUTeg0EysZKaLz6Wxwg5fwRQVNMKlvKiI2dIgUrHxzm6EmvNbGvNm1od&X-Amz-Signature=d7974e2e1b478bf5d69e2a31559ee524c0eecaf2350509b98765d88519d5b0d5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
