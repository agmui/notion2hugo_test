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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSZAV6QX%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T032420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDIcsEe4Vr%2BXRk6GaMMnMGXfIS5LyiuDf%2FAc3cwZ02VOAiA9Brou%2BoRaRDPRSpHmwBMxWxh6aj3R5CK5mT%2Feu3Opfyr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMOI5%2Fw%2Bq2nzyL0mGiKtwDwcau1kQ6NWvesWV2zM9dF7kX%2BF9VnVKmp0G2kMVFxgepEhBWh9RzXmlvpN0eNMYHTqUxbKxyw97BcGWtvVeV9TR%2F3mOcfNCWV4Y6fqkPJn3NfY5x3i91aW26a2En7Q%2Bj08NzD%2BI%2BP2HeO7GsPu2jdNSFSjIPDG420bFbrOZ%2Frjcdc7Z%2FgTAMkl4AtFq87QfVW7iPdFQMNfeed0G6CIFmHwxGPobK1y0SsTrFc33nK%2Bsk0plQxRoWFplOQK5aFgR6QZ%2BXI5RFW6e8zV7ukWPN4%2BzBu7hd%2BYRyh5yLcaHgck9A8%2BQrEKp%2B%2FNZ7JCW5ITuVlIaF3wugXwRYwsSug1W9R1QGqF8gASG6AsdWVxmNKd%2BJyqcPj%2FYm68r8WslDVX0w1xrMQLB5M3JKszwLvaFpDC9RNBChnNISNZNo97Hk4I9zUW4UdUtBOvEduxGVY6RboI1UA0wNdD2C0voPQJztJnxhlNgXeudEp5IQLPFq54bezdl35RxlpEi07%2BHWW%2F1LvMmQ%2FZ%2FRDUJVdZ43cO0v%2FVSgJCHNHpZTz0cY9%2Ft8GKzWVVXfaQSSu%2B%2BjlANvFleaJv3t8zbh13%2FF9l0EebQ1L%2FXjbaUsc1yrYIlRj8xhpvTBvGP85qyyxgvzf10w6Y2xwAY6pgGMVP3SE6HFJ5%2BDZ807x8XQUKvirVpx%2B1gYrUOwNdhrh8VeqAhhVlWJ4PC6tTn5eB9bLXrj%2BoAkTwwSb2X71tfrvud%2Fc8aa%2FTG8WGbuWTCW3QV2IlDn4Hj%2BhBmIfjSMUEaSYj%2FrhqtVfE67nXU1gURDp6QUH764zHeWVyQ4cvluobo01717bIVaiG07oKOZ%2FsQEyFqUju0uUQsUGeOdwvG9wf3nLddS&X-Amz-Signature=7c99d12b9e7b21ae4e27106abff8c3fbb975a5909e1af520d39f554feec87586&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VL3366KQ%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T032420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2B9n6o4oNkTfGEKJiwO4QcLabX%2FY1pEMWtI27fGj0kAAiEAurji5DrD4W3NeOSDz9ZO%2FZLVO7ccbKwqob61ieo8Hlgq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDNh6VE7KTwliq7CvhyrcA%2BDUqlk1cCkI6n9ViI5rOWHACKOyEHrLLhh%2Bu1tN5PR1hGFxwO3egZU3Vx2AsmdWoL53hRIo%2BWUNjoaPEA5AFIU10FjDYpND3C6w5Ye3an77Qzxw8m5uWgqeBKw0zC%2FeFNxD3BlhZwkXmHxm2BQLXXXoWpryGvwFU%2By5DZVGtr2qWCxZjWb7lhRxvzhoic4s83uLam1DZWtfC1c2lELAZWA%2FaiABDAAzYaXiijspXURe1mzT1%2F3vxNNkPthcSmBQ9tO3isv2gXneZzf1pOmOvDfwU%2Fh5%2BWvTIuYEXx%2BGTfJMGkjuIMDD23k0pIT3iCUoETKHPOrG4cwzrrhFY6Vt6Qm52GGYQTgMbZMMk59AlhuxA%2BuKwBTxm5mAru%2BQgs%2Ba%2FILHRzZTUfpi8F6NLcF5eaD4z0E1kSdqzkJpiX0tR%2FQZyORewYKvmKyQyCVnmNS6kWQbv11LNYvpDMc5paTX3yS3kxJNL%2BpaeJUehli%2B0mCoQesNVLVdrMPGe5lvousirpT5UF5TO2Q0apHvrkkrlHrrl72MXxlxYoJTOew6tVa3BCyTo%2BFNz%2FhHLJhcFp%2ByqpgZ%2F6D7hyC7YVswuhNTP7hiwypVors%2Bv%2BsU3%2FojLMaKr9mpNbd8JlH8umxzMMGNscAGOqUBfnm4JX5oP7pp2EEnvzdoNDUgLM7foBBW8G7XKGdKVVCBU%2BQVm3a7LFIpN0RLdx%2BUp9YgfUplk833DuIXbooQUdYNaY%2BzQ%2FCiZRv%2Bpl8uZak9nvc8HLmys0AheWbjHPf0lNoRmG5FNxZ3IpdMcHKCg2E%2FoBhiLHlt6BL6DVEEWCtjdx67g4vp4aWOd3Wft5wLJeX0DwtOyRl26yepAz%2BWGMZgmzna&X-Amz-Signature=20ae94abd691321527d30bf2ddb3580cf845e69935e254ab934d214501c83dd5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
