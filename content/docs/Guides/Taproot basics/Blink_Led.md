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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W43NMLPD%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T070844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQCLPxCDH45zuIyKABPUyneK6iItCsdV66m4U89tP8fhhwIgPta1KAjWYzf8%2FSFHk1KDkO9gKzxHjzPzT%2BDNjkGNcawqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMV5aSP%2FT%2Bp1lbiRSSrcA%2BW3fQ7tb3jgSuVgPvhHQ1BhLp%2BC3guocUGL9mQ1EN3cxnKIIBUdU%2BJKHQtXck2HoLT%2BEa3%2BEP2YT149gT9pwW3NLVnttxaVnB1FMnVNYjAcaf4ictpvvJEsbpRcn2qWn0UKa0HUzZF19p6831x72tcZkP4qZ5GRzm1l%2Fx%2FbfZ%2Bmnfkw%2BvyrWRO%2BgkhHXE%2Bn1NeTP7SRImh%2BWk31jjwlYP7A07CqZM2MZ0p6QfzFvUG%2BWOwOb6xrjLVH5heoP6umX93vkXrHOcoO6PTdc5B4L%2FSnMjQqfxB9FIhgpR884sTw%2BYXFlTi0RDhFM2Zvz%2FiaU3RJt2bcNrLdoqQ%2BALZ1IWvRqJomowiQxS5eh1WXArNwoi7dboJl1T1E8GCOgalZFkpUUAY1hGhA5gbZNNp5JUubWwesDK28Nhw90JaezpNWNL8F2C4KOaRKRWZYQathYm8uuzm539EKzhOcKlXs3aOaYjlv3f4%2BJiiJ6qGyOfFvG7SKNa27Q0L%2Fip9svSCJGurrVOpYLGAuASsnX7nbhVqqDWCjbDTyX0fbT9QdeG%2BDEYCRCrdi5woS9Yw56cQ3WnzBrQJNnTHIOEGveewN%2FKtVr0oIjJ69nvb1yO1C2%2BOuOWz06RQ13%2FJ%2FFC4RMNPhuL8GOqUBSPMnb08GCFuUW55oi62aj74DDnQ1YqNLdpH5ZAduAw%2FpOWHvYBuHTFpqIwMXsbVBeCptBX9rlLN45VZ%2FpycBc7QZUFTui%2F4s9SMPEOSejweuNdVv6Pe6geABXdWqAYYV9RI7%2FLixjbsf9d2kt58rWCYhGJlVYqqnvqOts%2BRZn8224vncUDhzMnSDWfXhSUlulwwlukzv34MI0mvtsMKgqa57Z8M9&X-Amz-Signature=556ce5646851679c0c110c2845c37e6358d785f7d4bc190c402d704d169499d3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRCZKNSN%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T070844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIB4csnzCpS%2By9NacctXPacyQFSxKt3iwZrmhVYmV4cQBAiEAiOsG0mL95dud5Sklkgsv9Rvew2v50fY5Gjff86vLHd4qiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNFSLJ59i%2BnGvRruuSrcAz5hKkAQKce6gSsWQ5uKXViVTwimDy0b8GbPKKAxrt6%2FcoVPIGKu%2F0DCSC8Zpw9o3XnQR5VsuV0US7sMIWytgEb%2Fc3luZ0SMIkteNs61v4C%2FVQJX20Jn2Z%2FzhGZ6eiEB%2F4LlG0fi0OvN%2BEq2Bgaoc%2B8u3w6KU%2F9EzM3eaQ%2BbifzpWcSxsBBcFXHqHvgtX%2BwVvBB09RxaVktOQg1k7GmKDI6P4%2FnP98SswZcp3EvUxlfDpI3ckxzQVjY5xqZjMyOELyH7EWB07plUwnFT%2BZKQJNNUVfPuX9D8cm80umEaaRcxj9adg3jR0qDOCJ2BjHqvLFN3OXxwm%2BRSBjgAdbK0y9CZh7gIqLjyVQk773s4VQKLjbznQwUOK3CK8qiB196Tse4cydWMq%2BWnTZGGSknmLesjwIls0x4e8eEsvtfwkGozhsByRSQdFEmXllIqyAx8BVcUq%2BSShFtPpHBK92O21WNMDF9LYY98y4YV%2BMIpEflThLvrmgaPg68cjSZpo8cbpKOKvDkB9XYuxmi5sfNtnINcGxgqFCq75SS9ywkP%2BfneK6UdUWt8m%2Funo8fZ%2BI69e%2FasJ3HtdalJAn5%2B%2FMEdhrqaHuhuVgIyS8vxU5%2FOVRpSmoTUbj6GlAUivnzjMPbguL8GOqUBIVKMouZjIXOcPg7SziG9gtv%2B9J%2BFzRvgbx%2BC%2FzaqOnNDoYNuRPXc6h%2BnfU8vo6qZy9qppXDxKoWLFfEnl6g0uuQJyxAl69S%2Fi0GxYnc%2BZsCJRGpYChJSt5SUbuRcTh2NcGoUl%2F2mwosHp0ZU7NDYiJWerJclVsRf4cvqp4Y2cz1JT0Hd%2Br6Z509xPuOdQWfbE%2Fxw%2FL8fJbcUrdIbMZ2oxsDM%2B89z&X-Amz-Signature=9541d5743144bb3b364e7343354ae8dbb3870f7b7f333e534adafbbd87127505&X-Amz-SignedHeaders=host&x-id=GetObject)

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
