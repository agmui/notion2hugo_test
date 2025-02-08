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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIVPVSLJ%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T080857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQDknuWMH%2BHncRrmMKQII1DAzq5aNUWMGHS2PmmH5DgFwgIhAPcCvu12n%2BsWRbZgT1SmlE2nnNt47chuKtHijTKfPYpzKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzhgc6Uc3pyMJHDmEoq3APF9mXtaGjU8IFUYxi8BoFGrhbPQvNL5wM1fNJGk32Ycknd0RrqLYFiLd694sZVx40FyuGvQTj4i92Gfu6QX2a1traLyINPjiLwcOBnysuNLGIkfA8%2FjXI8N%2FYb12dVsw%2Fbu%2BItr8%2F56fX8B%2F5vJD7IpJPlgsmBDz7zuQuuEyc8Tit%2BaLOTbyxQUC2MNUxzbQqVKMqCn9I%2BFGtSWy7p%2BPnpKdi9abOnRwl7KWzgHR3hVn1qPuchkr3Hgrj6UB38fxCLQ9hUmGbXXZg3g9LHlnwQm18w7fo5vUMqAtiOs2g3yHdFEiZX%2FTLyLuLljoxEhHfqP6nGZyBuJ%2B09lAmmaaszdc8q4TEJI9tNm9ytF9D9iFJXFzuYoObKkSoDIEJHDRMWJ2VO8FC5sVHcTnaWsqyUMP4AV2MaeP23GyqNWZj3TPj00o35lgUfisnaN%2FP6ajrG2%2B9%2FzHzMdpq1Q%2FcUgvQU16BE9LimU%2F0iL4Zu56pb%2BH%2Fra7aDA7yrOdg1kdHoP5n2E3bIICL6Ce85YtST%2BQ8aceN5ooKB27UJhvWw6oMlGNZ%2FTIpSrTRkNp7KX6LXXj%2FvP62%2FU1SIaqkrOWvzvonnA5Pg1%2FPz027%2F%2FwQ95it2gWXLhYDx7GkPaPKufzDhkJy9BjqkASkDb3TkHk7NxALnRyqIhF8NNH3cXvuKN09NXORhSLAQXDabDw3UHRqRvuieB8KivLfZUoA4wumihTxkBqnxYK1qc32IHFV58zIDiJamJOFpli9nNqShpUeJKd7AKZF87c0st8uPPvvn3bP6tmTeZBgms2GIwofh7LGzTaK3fp9LvtgOs4cQVMrUGhbkuOmiWxQHh75o8A5QPnI1hTRqaKTWMCrL&X-Amz-Signature=0ceccff185b263bbb97a28be82679fa5c51e9f98338cc68c9c89b8ac5899e532&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SWBMM42%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T080858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCID93qa2%2ByShPJ28C2EafKYGxr2QIJQcm%2BL3FqXXopMTVAiEAkqsb5kv4sPURXGgglHAjHYMkuiKrTo5IqoC8jOqOTW4qiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNb5nLwn2f94rWyXHSrcA%2FWwBu5hAkye%2FiV8qV3fdrpAroE4%2FiY%2Bb9%2F9wITRb8kUzrWRb9iXzjPIsoHp49mNoUSNN5fQ8rncLncPhNvtPzwD1wry8t55u3sAiC%2BGMgoTLPJv5wH05L4QT0HXxeklGOgR%2B4Bmni%2BQtVLnjCojFNkjBRmITHDaFjJgiO0ACHf%2FAl8citzGlyP%2BYgzxc4ZP3gKp0E%2BtDOtZO21z7DXlhRW5QTvBwoc%2B1fdYxQEn397ujxaci8qYgOYtK7Y890M1ObBhyMdzPMTO50PkoNgN%2BuAKkVsjCJrH8VsDZDJOL0GqpYfcpUsdq%2FcxKaZsfLHfVPZt14PT4QdvVPvq2gY6j1N0snVkLVAKWVp1MskfwdTUQYEdUMNkGnjxQ2YERcSB3sz5WTliTsMrW61WzNygzkIGnk6WpnTpYXPsP18SNKWTJG56AQlwzzMd7TFMU3h%2BuxUAggDgMoDU62%2FWGNP4CtHunSRNpGGTmWk2qA1J5c5Sn0Cihep%2BRtJI%2Flk%2BPFNlEhmtQPs2OiJYm%2FcALrbRLIB3cguVOU%2BmlUaHFqz0ChZLRV1%2BK33969b0s7X3t7MFkp0kZGfakJPG1xfAfLoxGFrqjtLJufRhQXhRYYfrQercEAsbROhRmyvd%2BqxdML6QnL0GOqUBJ0BcjIePtPyD6eqqU89gHP5L7%2FMkAdYr61pz2pJC1XA%2Bck9381EL0ffgnI8wvYnp74UUTP%2BQx%2B6DXiZsrS9KgOCqRtloM5IuuiAM7TGosiSTapJ3AnoX7HiPoJbH3iUB8O7E3WQaoPGVcA5HYrSupz6RURbrWd47Sg9Qyh8kuS8IkQS0rB%2Fh38aRkpPzimX0Y0EpcF%2FzUa9tXdKHc4Z7BnX3mMpo&X-Amz-Signature=be24669db07c0778334a7dde05f7dd8922700247703c40816c9687579cd703ac&X-Amz-SignedHeaders=host&x-id=GetObject)

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
