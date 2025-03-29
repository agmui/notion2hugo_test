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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466734D2HN6%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T150716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIECYuA1t2zYCHpyyFjLwXYX2i6MY9BPuOeYBkFmw2UzqAiAroEp86ujhuAo9kyoHg%2BC2sq3h24TyWnHEn9nlbCP7jyr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMS4npfxxIYVS8v1gmKtwDI9YmWxHrNz1JOh%2BS%2FzOHbf4Zolpa2Ku2RUyQDiVGaHx%2FG43nFxysdw%2FqUYDpp7C4BFtjqbScNP88dgAsGb7UYSRG4BkD7%2BODCTOERf0rgM8Erxv5fNc1TlLqRshm6OzsRN%2FxhBZie2m2ckTv%2BQ90izCTs0ypqzEcHdFGAmVzXmCVdUQVc8dfE%2BYsbXr3zojm%2FxMwM7c%2B6IEAGEu5Wdt%2FeoizKjYpL3IoIi4D83FFnpxFKacWP0MGG5Bpxc54Fwf0sjCkknlchXXiDnZ3%2F9ZAe7iWz5El0qhh%2BRbBe%2F16G8w2Hn4pFo8dWiBfWAQLB3U8diwszCEib0%2F%2FZE2%2FO7ig%2F2QWnR6mbvY4M63G9ieBvPZ2MJmdVb3H%2Bz4MAr3yJWgjS5JAk8fN1LkXNkFxvd9ra2Z%2Fhov5N1Y72ehZGeBvsk%2F2XlGkqU3X0bvdnR8WeVxQJsk6AV5BtWMm46EA6%2B6VYPrLGrLp3I3dNxpL7NIxlIJTLBoUkbhpML2AlFPoqgeyE1Po%2F3X7QiBrcsyE5K4nFZC5JJPvyuKJJXINF5EH1M%2BQpr7SgLw6%2Bly3dfgaYQKF2Oi%2FYoGa%2B%2Bd08kPHO7fUFeVgbAKxgFWpEnhwaVSu6dJlyit4ClejN5vyNz4wu92fvwY6pgGgovVXt27Qw5apFTZvehPlYxkGrR3jybR2W0VD3si7IAVqDAba2Q73Kdd%2BPsd1SWEZ6sNXGWZnrkRP6mlGxU%2B52g598HRvVSvP7ux0d8YYXP6J9EZtqqjNan0XkVdDdRGPRyMV3b1rB%2FtAuMYKtPbgLOZHxOrj6zxCzmrGygJrBvLIWvlrlltMu3kPdaP7IbnrOlsuqAtWjJp0KRbIbo%2Bd1EGrtQnE&X-Amz-Signature=5bfb6f8a3767b5a075b3319d64f3ea393b10eef33948500befac6a299b923e2c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TDGXB3C%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T150716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIErjnKCVVPmNRXyaz45fvhWDHCJOZsQphAgjRmhQNC1iAiA1TjAvr6cXWzcf2kpo3IKVL1PfNrdqq8lhXeOxejoYbCr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMrUA7Xhp9aDJ%2Bkh1sKtwDY9sj82Z7w82JLHfS5lEYIiQphg7PmiFF711Zh49xASBKfcLHrlYxigzdF1EMaqxZMtRH%2FwCQbsrQRf%2Fw%2BBdRcX6dQYuK4VmWqv%2BWB9huJBAiwoveoAHnJ2peb1G%2B0IyKMXopOudFloydgm%2FcavnEpdAUhqvtEms2t0kQ%2FUJ4g3%2BCMJlV4%2BjTTB0rimMxmIfVQhZdtrauXcHs0Qo%2F%2BALr9G5X2UZvRZOYSecRxdvbmO2vDssjtzY42R3DV827TGR0RvcNgX10Ej7XvjxUOhxvlGqQ00jyvWTHcS%2FFz65Cr95%2Bub0LQAnbn4NmOJvxgR90v126OLI%2ByigcapAb%2B75hRkCc%2FIy0jMybWcuKeuvuyMbMkuXddfBUzp8HxjVeRGOXiqHr9GI98OvF9Cq9NSagbZnm%2F%2FuZpeO%2F26xKbygjNU%2B%2BY87KUbo6TNK92ximrVyvX4aw1OcVDc7BDuZZGELYqrk68P7ux1o8OuMM%2BtregbqrdS5u7sfRMnmhvLyoQfvR9Sqzus5GCQtC3QgITLQZEm9jvEpl7iZzvLBKiyFGkNDyV7MXNyueqnHs5qJ0voMnhzMJ3JF8AR%2Bp6nW0OmOlhXSA3PrGWw%2FPbOoXphfIo6auTN0xLqOVcJmjAnMwr%2BGfvwY6pgGb%2B9eiTWmFyLVsm1KAjqI0%2F0YCjW19OKHHvTDIws8WUhkbAk0xA8P%2FMLeayCVTFk7joOW4GVNyEF%2F5d6DHsGFc1YzjI6ekHCqg6GqnbGjJW%2BCUAlChrJuyPrsSrxfukrQZlKERcIz2hNufl5rJD4DNQZW7ltQRDdhxDGLGmPbv7hacl54PrGA6LmAn36xfSJUAimOBKmQm0to9BEhYgQElpcFLC%2BqK&X-Amz-Signature=ad4034bfb3318319d60e268601b644be2243f8405f8a78e823703dbf62797fc3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
