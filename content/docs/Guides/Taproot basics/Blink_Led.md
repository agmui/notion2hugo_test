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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5OEWDCP%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T081219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQCWOOcgoEqki2ikQOaThsc%2FKI5rPtIcpgg%2BlMdvATsmLgIgTOQtK6yU1FwWDVjK9sGmXywv7ah%2Fc4a3YNRtPKT1wkcqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBFWx%2FvlBE2R6uvKySrcA0qrj0jsy3oGXBpdf6Rj7UFbq1nKK8kCJGKXASelclMjg%2BMq74lnyDUGfc7P8bDaf4%2FChAbC514%2FKaBKvTmpRhH5%2FML0mAo4yKW6GA%2B1%2FAmh3qxPATDG1%2Bx1UvLEkPb3BiIQm6erQBGDy6RyoJH5UMMdrRC55Kx1om8lTYho%2BMvW7koJSRS3dbI9U9I9UUr9prFKAU5u3bUutVD3Jlwu03mt92B8T4mD4cLNpPFZ94eA0LdzS4Nzzahq3J02jhD615huhxdOfdoMl%2FJQNX2y7Kny1M46YmZZGOKvSjPRnqrJDDNTHO1mDWUugvJsFc2Mv%2FQz3jxVQt4rSNB28wEevEo9jHfaRcHybqLejFuJp1%2FeCTzeX4OK02B1%2B%2Fkt7d%2BquV6pHXX2J6%2FukSZdTgVK4h9mzKglJs9VUMcEBC7An3kz0vBQvxtDlXjLwZuv5t1jjgVelY8gd0aTYUHZfcH8PgoqfRhcHlwdb5zDz%2BpHekywOI1IVLsck4mH8PRkDeHkaNGW3Ii%2B6D7gn0%2BNOIzqoZWXXZbLTI0fc4ipZrd6wET0SB3jHtwUlPmKElHNDjHKv9Xdu6ZKbe%2FEus4uoh5feHZgAc%2BJuekrziLPgwbye1wsLoocnVA25lIjf6IQMM7xi8EGOqUB3JNX4Fu%2FVYHvOD24deb71lo74CQlOWTi9ywUGiP4pRmoKOWe6Qpb2hDR8HJIe7H3xC0ddcWQqkuZHh7H93WzkVOCs68ynOVZiKoIXreaNRWdnu3vkrpV8A2iOGGFza6sTrokrEIRBlwEs01twHhO9sWyjisfiI83umtDQINNMjCfEeatr1Ec1U17frBxH95um1z%2FbyKtpZvvTydHYpvByz6zQRlE&X-Amz-Signature=4e0c5d4b900161f6b74eeebf4967fd4e17221d892064eb16ecd11022ed712715&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLMR2R4A%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T081220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQCp3bnh9CyEe21mg747VxNGEl3YCNRrJpehKRxrduO9igIhAJIu6X%2BSNslP%2Bh8B%2BbSxES7GMPRJXQBE7SWWuoaqy9%2BRKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxqW0KDMg2Ak2Scd6Aq3AOA%2B1iTOXfAZJhvbBiMsKSGTqEULPGKojCfJCHz9rA9g4K6%2BsrHfGLHgiLcKZmksPlg%2FE6TpvZqhvHyuF871EKaBt%2BZGG87Kfb8vmiRWLqpqLh3pFeEwftwlYQ7kHaK%2F3ur4b%2FMkvkFlOi2GhmGUuOuDJopkXzSzh8FmwH66TLmuHgsY5coZwXT2MPiY06hqCGkluGGvQKBCA%2BUfQ5hsCBdjOk6BBZDccVAvqnP92sdGR84Xm%2FErSauyXP5HFCpMqAC04PoZGSVUv%2F9WwxA2QWkloSKpaCQ%2FvKQ48TdNdp0MBX%2FKeWpGrgulH8NvOBgJGg3ojy57NM6Qb4XU%2FIDFhfWPA%2BtjcgSqAxRBagtTHpdtX2M5%2F27ei52BSy1GizjjbtFbuhoe8T0uVUxSATcu9t0vhyxV6AE8L5kTE%2F6HTjLg6Ni0fZxWuevKtlh%2BG2JK%2BRbLROsL6Vusvao3xUTi7%2BJRYTJMKR%2FdApT%2F3sb0eOmZisJJvytV5AbNPM%2FMOh04L7W4dhU43cfrwlTLJIpSzk18tNEJjp0dyy%2B7Fa88pzqkq8SIlGyyBzm4xc%2FnVLKv9YgOUoPxIJ2vIxY%2BDVbJRVh5wIft2iS532Z7WjFh380sSn5XmRgWGWmXwEKWjC78ovBBjqkARaz5AwijdlTEI%2BAxRzXQvhGUCM%2F7SnoMagDJ8%2BQvhZEZsLZyKpQ25xepoj0WMSpGI%2BgsorOrmCR5uPpI%2BueJMlT6Z3bj5xkMR%2FG0EWhNd8lNr49Yp%2BIBZ4TLfBpamBFlp8Z%2FuriJYNONfvvB0i2sJBLy0L8o7raiqycZVpjEvBtoonEagkGJWqlTICLyGG8GJHdc%2BGpnDaZaHHIaDTCbEhw9BMw&X-Amz-Signature=8829a911cfd0082bf4c741b48fc4b20bd5f45b0b7e657ff8c355b50a861e5c15&X-Amz-SignedHeaders=host&x-id=GetObject)

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
