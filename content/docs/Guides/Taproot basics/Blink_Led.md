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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QX5XEEDJ%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T041254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8zGfr0J2FHnt173w1jX%2FVsvG0dviqdaIP5jejb%2FAfMwIhAP41brd7mTnkhu1fbV6ok401EQvwDAjrFZGkdghrPIQYKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTuOPp06Q5VcJXmhIq3AMQGjsXX3d%2Fl9U8jOM5TnMGjwJIC6Vnfm938suXrV4%2F9NvCIRXNaojEWf0PkVEteS2h5246cl615ypF2VJC1gMfniorEX2LyzCsnMgxmmIU4HrcSqU0%2FR5wJoaaq%2F3JqBgPFtIooSgiGJa0yLk9GHnAWUkAVtIhauOQzo5HZnGgcB6KhY8mayRwlTDQbJJpnB%2F87H5Bnf%2BAJJv0RGjCShVTtkXKPvik6DcpfhbGZIDF%2BAk12Z%2Fn3poSb%2FmBa0lwqY0M2DmmLar9sg%2B15EkTtOzBEPOD9RsdNxlgdsXqfb0t3AKaUmFOR6i5Hxtmg2uDL0%2FA7OAvE8WAQfO7SSVVuzmZ7OPZPSqeuUQxFdhIIXPCqoj7X2I%2Fb93kYQ%2Fo%2BOdoDZayz1iyv9yp7lSW%2BrXqTz2zZRWWotSC3urXdNkWBk%2F2DltrGzyr7VkhS8%2F%2FKCS6ahg7VzVyMibrio%2FKSQe%2FjjtdL3WJlWiGYRPBSc466LEHnJBpMRdNa0L9HsCCOsd9bSsWJe6oiXivebb6GCmhH52BOeDPfgmiOJGSmm7cGRYb9jEq4TJQIhWGx1Y0saFikOIJWkeghVuWq53rZlcUf3ij21HfVN8eYpEExG0zO6ZiaIWs%2BuGU28K6TblSTTCFkLXBBjqkARKlm%2FDCE9gKcGx913%2F2gzgwvjwDMjdIvCfCEaFzew4RLNlhmZegXKfqbAfp2%2BnE0syDMq2zVbGfsj%2FHP3o1Hy4TYb6U2Y4lq5fZbPJKrwlLuOHCJLZYXzSYL0M8nFBIXgrHtd29QQ7g%2FPPLiNsE%2FDE4GacnWExzOVVnAWZJhWU%2Bxug0N2NMLgwYxmpPo6qbBNTTR2kl9sKiYOXMLwvx4c2Efqfm&X-Amz-Signature=63670595e2fc79923f66bdbed506b8b936e4de75d63cb1632a1ab4e638e07972&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPVARCAC%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T041254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8mpIO2f0MDe9J%2FHi4GQ0D0RKQOVTYzD1cnVQXbPV03QIgQ6AJ8zi%2BzIUupWoWiiuZ51TmZhxN8QGQxNN1e6ff9zMqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGNlpqqF5T6XcXPbjircA6Zx51cIUYr5KyK3vQP6SO3jiGcMS9So9m17n4vK512YSaSVD8xw%2BiuXWk%2FbTCfk9tiIVGR9s%2FWFHRz1qJPhaC6ET%2F4Dmh7oUdgtSoQdwWVuz4hfCCn2PJH40JCgV4lMRXZy%2FejjbIpw8wC94EvqfFGtEsaUZo3lEgWWR0Tv7NnYFzDkiO8FZkZBl3mkmCyY1GScueWJJqW7szSEzdbhxAwusz0PEmGZgQnMDCwzmARPR3oDZiJMlNY7EXar9J822FTEJUcoPD4k9uk%2BhZn10I7cLnfiYc0pULIFH21MbFdg%2FvyLPxjIDThZ2Us6oYH1%2FUCKyBWnvAKkFvUmoKYtvcvqzl3blsSyEjgEAeo5bfg5NxHAdQgBBs7QV72eT48I8uHgvUOCVN76GS7bJQN3WCWkg7lfOuKgor5cp4fyZrxCImDRZSFtoCgiYtwCr6e1gQpBLoTG3GcklDARfWzpfduRMnkY2mTTIts4jfOTRFwJfvPGyBeEvLtEGxCNnhwnsretO2g%2FwZ%2BVZ6kqfWXYTsGpy9geHxJuTgAXnpKjCQhxUAmFd3eLZ6s%2FctT8Mdp8wQFPqoXeFfJuHShbd987gMBfyd0M1xBlRm5ppzTFZGDPRn1fmQdQ6nDwdKpeMP2PtcEGOqUB%2FeUjd0U9iorGnkar5uDez0mE%2F0npMQpeL%2F%2BA6RMBfCCUb1ZBOV6RT13soTewF0fFOJaxl5jf3V8pbKaDFduz9xT77Ve%2BDNUhnge5QBVK7rZkjqsRF9ta%2F6tgy8bAW3Ufn5Ds9NJmzTN7dtfxHo0IFfRbVG%2BttKfV1wfpnC5aJHOKE1Zd5BSwPCKKUqGBuOb%2F6%2FdnqNPBy29q8%2F348Vsfh709EPb3&X-Amz-Signature=60640f3b3e6d6eb474ff295e2f01c9982432f0e4f680cba262ad2fcc6bfa5a44&X-Amz-SignedHeaders=host&x-id=GetObject)

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
