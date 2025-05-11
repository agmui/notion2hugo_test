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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SKIWYNU%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T140734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCICaPr%2F9WvAUb0iouHCw%2BIdvnwJaNcSgpYrtltBh4BMHoAiBek4hOP3vuFdW0jszvHaX4bQTjOCBXKEM%2FO4tPZymB8yqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcHDgVdcjaHmboE0LKtwD4ptcgLXXaJKiTi1hlUOsp53LWwI536ZM2RInhXRxC65IGWhfPq471K4wBEXFcj8L7gFUG2IUKdX7xxMg%2Bq4orNgd26Dpr97GIFJpCz0ee2yD1sPb5LdhVnJJy8TdMqk114CtjwgGfqRD9i9H0SFg14f7z973INFVxef39%2Fk7ltBw%2BHQRv%2BiDgunMk4SV%2BT2kmewt5b70JsFWkAwhfjia3AumbgTqIn7MBrd0aeMROJFpO1CuZspX%2Bh%2Bs8jlUJ6tUTedJ3%2FUgM63GoXqbuRtKsCdgzNqf9%2Bl744S9OoG34EcK4Utzl1zRDRBEI9DtmWl%2FE%2BPVOUtqoBQQRSXlByRILMLiAYdC2%2F8OlUrFF%2FkT13XdnOSMwwkBLZWE2%2B39%2Fv1BZPOPSWDlp3ae17ceZ%2FSbfcd%2B%2BFEFHOZ%2FmrR5YCZhK5sZSuwsO%2BjyPYHtX3J4H9rZ2z%2FfdJad1AVgNGK1Ouzoe59iRWuW22Va78ELpGbPpHvY3TCpbxma7XG7cDMX1Sl7ebdsanqSVUIDuqEObkWTTpKko71akta3dU3Y7u%2BDdBq%2BCL%2FLu4k95Thj0kKlcw1uo6k0Rtv1dDqfYKblOZTzE9SZlJFDhtDtedWeYgJefpxjJdTiQMdTGS%2BOW%2BEwrrmBwQY6pgGyvKy2Lt0KIjAt9pXfnq5U7WpA7vKo9BqI0nkFzOIhBUvHpvTSFtY13GWnxcj2RGMzyn1dHZY2EyvOO6wsNUOLb1Jk%2FjkO0d09nzEeZBOkML7CCQRPTtHOBSUnXhqiC0PbNhZGpWs8H%2FinC45ox6gwdBnLBjbQO8JJTpmgYjAgvkXS6zv9Uh7B%2BgbnR28DS3h0AXBDTroS2EOXeinh1ACHdWmVHJMB&X-Amz-Signature=4f4da1d04f5c11a88aa5d40617bf57cfa56a0e295686e79b85d6342cb5914bc0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AO2PYE7%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T140734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIBvM8GCK%2FwxSWZHy%2F1NX%2F7DYTs63Zhs9MpLXeUwjikOyAiBzT23sGW14UhcqwS%2FAd%2BhO7GS2aoEjlnI7wWfM8c17QiqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkmSUvCuUmybjwFjyKtwDhqutlBBdv5ZjU7UmyRh3RfGL4gelL9a1rLQUdTRxKjJAMhM7DTPCUDG9AyS0w05u6e1BMlISfvH9KtectC2%2FFw22M6sMOgssoxk%2FHdhJlyCnINKYDXWa%2Fx8V%2F%2F9owMHvTskB0NLz8ZrzThYY3a4Aywb4Xxtn95XhWLTiPE2Pramnut3wyDxQVsOOoK1bCRsxuTMVxenrc6EYYKEYOZQU3k9gWNiJhMBKA8K5WoPUudTJx2RR9ofJ7y4HUheo65cjJKihQF6fdvuTLiZnNsBdJ9rtqeh%2Fa7rwd5W0cU6HjBH1Fkef4RgtNx0a0LAPAK6D7unuoD9bDRR8onmKi7gyXM0bloJwSB3j%2BlYA9H5X66esKM8i5l6wECSE29aNu5jWYI0Mt6Koy0i7nCIESCurSUZgrWOoJQyHxpXORjWZsy%2BJb%2B%2FN3%2B29EaPNFPW3w1U6bBiV7ZAdSPBKNgiy%2F1ssqJ0goXvQrd6AWo3FBxe9U6j1%2Bs%2BAyEUliaTK6fehnqlJlCV4KlVFGsiu1jrNpU2AzH3zBUkozVuy%2BGlqdMY1ivPVExHi5dOJiz3ftWDov%2F43Q0v5iOOl83mh1QsrMzFpnQCKqKSx6WbLD5EGO7WpKnkFtk7es8E9t17kOe0wo7mBwQY6pgFuZcvMAM6FL5XVHGOee5g6HR24EdF8A4E3P%2Br4dqkHPPzPDz28UpukJcO%2F5RU%2BgjNWu8mzEZKG2lgSl0O5tB3XIiafWtkTonSLeWgSqqGMlip3bzaYd3sen1pE0%2FsJGLOYnog7cMrLdceqpno%2B9gFnuSkzzAGHt8Yp8jeCqwpbc3RSZR%2F5hqrvMGENk6AkJw7vUdrsZQ2PqRdw8L4uWznKesm64V4x&X-Amz-Signature=7d3eef61cd62e879f63ea5ca0f84903bce33faec656a703c43f6c87dfac8b3ad&X-Amz-SignedHeaders=host&x-id=GetObject)

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
