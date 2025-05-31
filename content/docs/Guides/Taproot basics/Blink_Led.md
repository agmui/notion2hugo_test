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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZY53M5RI%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T220713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBp%2BhfDL4VWVeC62U1963z1%2BGzW%2FlyiZjtStltZ%2BYwYgIgRhyzXbDLzf54bZjqJ5Pd5d%2FfMAvTk7DqNd18nIG38D0qiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFP%2BUCcb5HcsXX%2B9sircAzVLUs5pLrjPECl%2F8Eb8vDsQacOi2BXgKqoEWQZgd8NHcG%2B6fECEDqW69oTiwX9XBWxQnEaph69mtTRqdEeOJTdbVzuPYUJ9ZLqQvAX9smJbnJbljplwCYyi1l%2F5972HLNaMq0E0B58lkmhfuq2zk6d8kR9KrhQqW5c9P3qVEUMRv%2BBffzpjkdIPH%2BlKnLeQV9RqeKGVzcIxiam8RNsIlKlkcHe%2Bnv2OgLxpSxVXvGfcnmzI8rOrIaaqKGKpeX3AkHNW%2BQxzTl2SrWehacseAU9qMxpu307PxCtmGogHUOqMxc3vXuGkod9Kn4gBftlDTnTQ7siZOOposMRHoMIX7To3jV0HgZQMaD1SRTwe1hzMi4qeT7uqL46qQLyNDki2NYXCDts7SgLUssPv6w3TxdhlzOAqZQBhchNUCnyVc0WTnl4XfdJU0HABG6G1Udmz9gETRFTuqru%2FRjnMMnC62YdvqJivzcEC4LW%2Fz1krWn7onlbRU9AsmK51ckef21OyibDIYgOx5jNPX8DEzH0UR5hP2kEFs%2Ba0h6L5XLrkwc%2FXNcc0xRMPl9ycsS5qGKoKalnPo2Mm6%2FKPfrN%2B%2FKnARSF%2FXHTUVBvItdUSKakXj4j9PJcQ5Z5ecleLabB8MJes7cEGOqUBy8MxKduTAuRs4CXCbafgghENoL%2BM2F3qyINqxLTxx%2BIkEDXFucMtq8IX19YdI3ia90jwdH5QRRPbg67JTvUt0qhhS7gPrfa%2Fr9R7Fpnf8JfdEFFr%2FXZy32KRS3pgQmnPDSxA6SYxZdxXGo9K9OrbHP5HqkbIaNgHL%2B46DlTtv1XXeh9dEhYxGNzPlplzCfwfQmwhWscYbj57z534i5rdkuTVfuij&X-Amz-Signature=abc35db106204eeb5867b9e76a4f8a3274e56e80bcf3c2b6c7c9204ff72f98f0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6K7LPH6%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T220715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkh01J6NYJeoGR%2B8znZ6Y7aWwTHxyPTm7tEmkYymMdMAIhAMhD9N26cW3L6LJ75EFHPv2xqgumg7NphuelxnhLHxtTKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyT8Y%2BOxrKpooQM4Ykq3AM6f%2F73JhllIU%2BvuQF0EP8kStt%2FNLZM73YFhMPIDWWCF8d%2BB7WJ4QwDMIqi66EQrneXBhhBxagTPpReJRBu0jWvxTTAD00VNBreoAe7BLw97u902dOZn7zLWy5SjdOGblm7UJJ0RxCT9Rpo3%2F3gGlGR0gmlMJpehwzb2tInS1BTvPh8q2cmZu0ts7VgreChCI8fy20uZ7ehQ%2BO%2FJMzdL83U16s%2FXC9egbtmvBuFNB788AUtvlO3BnSc6C1PVhL0%2Fpk7%2F5e1D5BIJAhp2CEpiWi8S8RSF8j8f7JUHIswAKPbDg4y4g2CiHbLHt8ztp3lZgDWW9FwGuNOezFMYlaN6FKKNO1DVYhecrJIrDBabzue%2FTU4m6RHV%2BT%2BhTtHlxMOEkCskS2XckgUYiE2VlB%2FGIB9xprh1PH0bu1M2IC%2F%2BVVRAf3fqx%2FkMilcpWm%2F%2B8UqkMsPAO%2BWnxnxSouNkSXe0u2FQoMXFecinKGzX8tdErMp5%2FsfNB5cSbzXf8T80AnVxAF%2B2DlohSG88vlpml%2BlPN%2B12C5s2JeCi5d844GJqEkuy0CFL4WY71BFoenVy9M3d7%2Fyf8MvyIxX3054iRSC9Wtvwx7NVpeo1H547yBoFP38sLlr9baFjnx%2BgWYJXDCOxe3BBjqkAdcpq%2B4pnJwhGAYNgqq6ClOJemmIB05GvE0LVuOoAUaXwfwSn2vtO0hmpgMoVqWptenmspIOmAK8lf9%2Fa4i%2FL2MXbzOahcBde178ybuSRnaI6NI%2BnggGl0RViN9UwcMhXWfmQt66LbKEw7Ol%2FfuWGHxTJJUBhSMpI5bMxImN%2FR8DHlyGGZoj5huxUbKAdYsEmhAu1u4uSnGWwxp5li5qMvoLQBCr&X-Amz-Signature=44b574c738e1554c5985831cf44f7b8fb54cebd53cc8e889799a1dfd68af24b0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
