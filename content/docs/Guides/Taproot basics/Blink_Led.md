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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q4NVD6D%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T210728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGabdCMIvJe6MZK1bIw8op39Cm5SYad6ENuerI15AS5JAiA6G6bBSfhSLXmxpEUtMfB6T6kEi2htLCExRZRGYPJIHCr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMmR%2BrVDYTAsqL%2FP9vKtwDOUJXTt2zKcKyP6GCQiFBMwnWqh3Y2B8lTV%2BEBT1CxFNDttj%2B5YuhzmxJdtBr5JnwwLK9k7Py2qjpwlzYyhEPA%2FzRws%2FS6zdK%2BzfC3P3%2BpghgSC44ndImHrM9ISoOdUvvhDaA6etm51MKk%2FYdGi6RwKkV4htXJPCJgE%2Bf2ze2VK2OGKyQNSvvT0pnLbcyVbONaLs71iUtQE88KFbtMXHjUfLASBAy%2B5eYIyB0h7qbe7JY%2FmBC5tZNLIuubQq06jOZCWdu4gD61JbDRZzstCqh76TyCXFijRY6Yerv3NhiPnS236zD%2FsZydrW7x7zYHWODXYKHhIqvV6hqOeJb3IVKm%2BbYTt66S24qMNxOEmHsrlriFJHnUbIa86ZyAuhT%2BTn6ShbjPCoeKvdFFFw4YvIoafLAua3yO5q%2Bcj9HQnmLjN%2B0y%2BGjA3%2BZsBx7auXUXNdgrD5MeUnlgkQOXvu0RYznQB7twREcR2Mtx0j%2Bu7GVTd3Ulttx6%2FTBJ1nUtpxkQtFyMYiA08wroSFE75YORDXQX2kM%2BHQok%2FX4u%2BQa1hS52yu5BtPBBHj2WFVYr1tl3%2FuUUQ8fwC21KdGYg%2BpYnTnt5UaJ8uKHhhN5dymxWblojI3GVMSYZADF0XgPcwcwtsSewQY6pgH6au1kajklyXn%2FqysfFxWQR1Ip17pDhbXNewbzCgtHmdOV3HUgIHIUCCl0OWwlleqRhTozH5GjMH6yo%2FwAYdIT5R9fY9Lm%2FQhOyBfLv5xVY4%2BI%2BNrDxAw09s5bqddcSxtGtDojgJejkhZP5xeNk1awHnPRdTOWyZUu9YyrTKm3jGgD%2B2dB81n8qEIw%2FTJyyQehuPNMFDFaR%2F85o5UTGeG5TRKU3rB8&X-Amz-Signature=be9633defa8542d675a87820ae1ec6840e4a801c1ddbaac5fb7a5c0c7ecb39cc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQAZEMIW%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T210730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGkxfC%2BYIRC7eq97y0ocR3YARP2KS8Z4EGm4f0yiC4nCAiEAsCSZTYLVyg9kTgjMYPbo6DBxbAhjIYqZlmYqyYziioUq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDGK05F%2Fcrd%2BS4QjkNircAwpvwTHAfsRSjXAYLvp2eLLi6c07MMb%2F%2B6DRiEqMVGu6D0F02cKoGZUYeZU%2BimzReLTMwzyXd6yByDn2vpqY9BEWa%2FqOXzDnWB%2B7jKA%2FWjepgvKcHRbQJlpL1XaRcBxXBdk9edFDez5RU61cQh88RGcplNPg4EgDyJtJq5ElGm34Z5mRHB8MEpy5tgdX5xrbtaZC9vWpinr6WNdUBaaMunfOtlD8ITvzgajULUctwZ%2FvULCiStWsvcCwRo7CJ%2BnUeWZqPFcJ6WPyigZhFFpfs39O80Exnqh81hswC0xKkgotnrG2h0HJSJXFVnnPnxWosUluQ6un%2F5gx8H8zv%2F0QpgYD9FYO%2FPH%2FITSLD77YsH8dKcqY8Ozpwj%2FkIqCJGaUEFy%2FUoxN27mnerihS5J%2BDWt9Faw%2FKDF%2BWiTVUSwTiz5fr40op%2F3nXR3cxHQFhecu3LyTkWD1vtjluoZBZE9xEEzKYZ2mCmFVQxfZ3hXI1qm9Cvn51%2BhJ3%2BdgmluuJ2icNiYOxT8j3zESuwwohWmpN%2B1U4HwIO6N46YK%2B1gyj91gmoE28P9bkEmxscL70PyFb3516uaVX773BM9FOJIcnpnil63n1Q6KxpFsFUcoeJ4pBTWIt%2BUIRjGW4xzOISMP7OnsEGOqUBpVup%2BZiEOoHz66n0kajEftTbAwYkSFfO1VoPh8n2Q1dDaehPkRmr9Nf1p2%2FKyMO7EYEVPQ0nrPfWbqYvAdD0ko1J2ESlmfKeKqvpNQN74JeVb2cYQNA9pMAPRtopXdyA2a6lXZHx9CB4FFly1hjMTdd5xmOImnP7rPXyz6JI2PFfUmU1dREF3vEpcPS32GHzgxwWBwHM3Y2kFHiMLdChPOJx%2BpXT&X-Amz-Signature=e8ed0e7599ea326d95bd4da8f6999c5d227c4f5a85fad2e198e6038e95792af7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
