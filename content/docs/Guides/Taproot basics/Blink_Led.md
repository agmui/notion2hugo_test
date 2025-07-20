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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC2ELEAX%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T150813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF6YjEsx5kJaPxyvLrTgomoRy9Oc3W3LQgLe%2FYA2KvaCAiBoyX%2Bprw3TaNhNQfJ6psOe1Pmr3lpWzW4pyiM1flVLEyqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2By6SS3H8VHcRlYLsKtwD27s7JvW1ltadzHaC5%2Fqeqqy8WvrFRwCKyNL7TS%2Bs49QDJQU3t0PfRu5DRoCGk7PmRpFoSk%2Br%2BYWN4Q%2BqNjdt5Df4FoVvvCPxjUqiHsHYSYwARS6UG0eRH4jW%2B%2FQfBkSi2z72yryUGLrA%2BHFICNc82siCTz%2FsMP8YiCFnZk0jhf7Ww79m6Zt2beYoybsd8LvZwto7yGoxgCTZnUMoyd%2BsRjh%2BeUTN7j4sy9lz%2BPMPp88h30lJC3u9WGaQP2z%2FJ7j%2BfEcLIKuQ%2B7iyqNjIjip0QAPPE0dbgIuAS%2BY%2FYQ9HIEH1N%2BqlBkY%2BzQnFusXZyOx%2BJI%2BQvYjqifRlIEvW3CF9S23TOt1gLWMhIXNxyyCJU%2FfElU8aEOxjtdxkf6nUl5UasHRrLvKEJkvYVpc6r3ORr%2B04YqgiFmPXzVrlzvvOnuOJYLtuD1IbtJxlkNqLeemzQnom%2F8R0HRs1huFb%2FAGDNHJyTPg26oNv6ovZWtG1ADdOhf8%2FWNpCocprT0U%2F673B47l7OfN687xVaQxsHrHy5JsfbYGLA4UuohGVOsgRmepJn5NDp82hRIdPctsUtc7l21biHVd1rwWCr3PDzWHmZO4Z%2Faf91Ta1EKCi4UHaIMOYwm94avDi2oxYog4wjN7zwwY6pgEBTA9pPBB6gTWcHO026fLwaA9FfT%2BVcuafFRMVswIoxh7G8vSjmBnHkH5yTArG7eYy39YhSLD0Jv4hyST81CsU7qE7hg4boD777RckblKn6Ix7G3vBmT2WgBqtJqni%2FcwlXO4sYJlXs7tvXPiRU6Tm13EK%2Bc6hnoGLBWkrQKqvBGUJzgwyHPLcoOe9TFi%2FfdkWomE2V8OiP%2BGLBAy4FvomjH7ugIoB&X-Amz-Signature=64936068249e0661575d870b8e76ba83c96174941da4d056857f15cd2034dc1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMMMORTU%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T150814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE2gDJeAlvakdGW9t5dIyjxSEVeJfFf8cxgM54uZbZI3AiEAn8yxv8jz79yAvzK5Q9C0EvfaN7GuA%2Btk6%2FecrM%2FdMIwqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDASw8qFeRLIw9hHaCyrcA16lxF9qkiHRRCFhBGQ9vBvS2mhb7PUeCtOwLdACISfYFWHATpkzQHhZVMwtEIFF0Q8uqB6mDBXO9tssN%2Fpl1xw0T%2B2iJb387R9L9gtQ83IOSESo6pgOYV3pcCl3Yvdfap0I9wyu%2Fllf1xz9y9tovdt0PSca6JMdvDm3HjVv1MbQ%2FZiEa%2FMOfkZNBUl%2Bu%2FY%2FwYsXsfX8nptOH6kl1DAcToUHh2%2FMKZNUBn9FmmMMwFcNdnGlyq5PKoozTGIO3y59HDf5rGyb%2B9mLvQ9yLnqKYCT5U8lhyIWgcRSsQ7uRqIA0%2BCepSzjLVNFnisoyqqeKnH1ugD1sj86Ghs6C3CuRuX1jPj%2F0Mtcb2kO%2BHfrixreae%2FST5JeQ6TsAzF2PECRI9hDTFRnpOqUrCNqFgA8c1mo7%2F%2FggGkgcprI%2BTbI58%2BCnkIiynQc3VE5PZPZXHVmbv49DrYAIMKZYofG1ge2mE2VDahz%2FjZcVnnP7V7tlCeU5hKUq06hIpHRXrDwlyb2iafb%2F0oDQ8pwBUSdqlCcg7pt%2B0wyzhzd6rHppZTLHv5EpSol3HDlbovrkDtvT0Bamtrl8wMaPLQZdwkI270MW3bWKPdV6FlPt1YPkW8Gc%2Burv7pw5BEGdr8CsjTSLMNra88MGOqUBSNWKKZQqYMxYWAxvuZDRNhvOA0hjjELpk5dM08xB%2F%2BB36tGfzNH1eyZh3IXf2TTlTGE04M2M6M5yV27wU0H2FsnNQOjqCG8pCmgqT%2FmnKCzCRXzTroOP3lKh6c1L8YrvgLH%2BbdShQ3%2Fob%2BB94qH%2BWia0hFFXoT1KX5MJRwWaHZB7x9NpJbP0SLtcHt%2Bcdkn2Dz7svuHKwn8fRy%2FdgrLr7udcA62E&X-Amz-Signature=d955e0b8dbfbb96eb4e6489c78a1509e1dc6ff537115eb4276338d8188651a78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
