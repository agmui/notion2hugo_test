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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J2GLPJ2%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T210706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIApeWBKrWpiM7V1%2FhxJ1QH%2B9XhL6GorRR6fEMRPEnEl5AiB%2Bd%2BS5%2BYqmqTa%2BCYALpEzxtQ21nL8aMw1rrTTtwptNmyr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMocFQH1G%2BvANU9dqNKtwDYNuQiVyBRkn0U058fRGCHr%2FOpudbhC2v0b1sGvZPuN7uNJFGyQHVBx6t4x8chdH8qZCPQLmLaE4bZq1lxOBhYZVy18QWOsmn22m8D95r0KNyErCgcDmdRTxGBxgbsndbpiMuiqKRaood6blbW37V7Akkp2TQIC0YLZf8sZKuenUNiaEIVMzAwgaeepJgJwOjT%2F5b4goTw00Qp01n3jl1VIfmrXTKy93u0XOr38znodYE9OkWGyeOPNApFSk26%2F7k%2F%2BBNLELWtlbL5qE%2Bv9iaI8PFakvTL%2BZhDJEk3i5LIV9fzWBahZwdqGv0muQqlP1IixdXk1u%2BT%2BvaVsOUCmFJHpKkUnLNvrumLZViLilI1dYyKgbKQkMf7qcf1KVnxcQyQQM%2F%2FGiszcwWOfsCi6ZlAqNF8zmgi6lw4KTxswIhSGJn%2B2vBwtBlcnFXB7qAN8in0I4BdgSN24lJ8oaGbQEe9juD1%2BEDbm7g9ZbRQhCtNOv4pHiwmUCQBShJgZzHGi3i1PRRHLp3%2F1fRtnsPV4WkxjkF0V02gWdckBZ%2FY1lEIiwFHCTscqabziL%2BFuv8417H3yEk94zvg0nA5jTo9LutVSu73KrUpcrzMeoWEP4Klc5CdN5RsclS03FVlT0w4vTNwQY6pgEojU5gZEjQG21%2BAs5o4CO8c8rBOw7cXu8OpBJo82aFYeqAEw8ZHrqhS6W9Gnq5K2%2FYY%2FRLYqwGIS%2FoKRMVxli8og2DQO5m13%2F6nmqGe9XTTTq3tcisP5uPwujhp%2FCI4Dqq%2FB3qix0Hzo%2Fd7uORgYijyMfFD6%2Fye%2FSU4wbWTQ%2Bixjs%2FOviXkvisCmNjdlxQ1bJ%2BvkinDatfjhMpti2%2F5jVSSXaLoSy1&X-Amz-Signature=71f9a50db1205dfcca45e8e9e3449db1d1088d04e50d609b3b23e903e47d26cf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5OFVSP5%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T210707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIHzJTvKdDToxvNnfAt1aCZw0ghnzlrGflqqsZ9%2Bs7n%2FNAiEAnoh%2BTagCuMUXvr1BO1DpsY9ibzUrh08VJYbgj2YsGUcq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDIBe1nYPNzpLvZSblyrcA8%2F3ENd7TFnJUT1z%2B1yuhm09KEE9EZsFq6t4rCc0O72l8hhTfooxP18aY726NbEdEPJdnKltSORp%2B%2BAiXt7yKWZc3sqoGmiK124%2Fyl9g1WxKLDWpLFbHOg6Rodjow3kbXckmy9uSG1kLU1V1u5C4u8d%2F%2FvZghkIIu8%2BnEmeeeIsZN%2BeSViF%2BLI90tROrW3Xf8LS7qaOaWUUysfEQiN7vnHXH%2BBdF1j3aV3M0xfuBG1ihP55SKoAyzk2BPPXPBbMh7QVsRWMZRm0PeVGTl6s0GsMhXdqUp5lZA31%2FjYLParkb69A0LHs3YLPzR1uLhAiwZl8mIv1vT4GsGpKk8FEyDY6WbDd0GmKptj%2FSxJtMw6o0tPOu31kXKb4p8%2B%2FuX4thl4NL%2FDn2OP%2BYi22OB3cvDYzxrbESNgnQL%2BEdfKn7j04y2eNuWN9tIKsi01XZvn%2F2FqGIO%2B7XK%2FBmLVLb8L2n4H3NOId3YY95aP4rNGIAFWXix1qdfQ6FMIuzUMeqQTJ9g4A3uu3CyKrCr%2BOkexA6ts3PlhY%2FTCCTMeSpUQMaj12CNqGtMVotxrLYDm2Em76h48P0UEWREjoTb%2BLWxST5ps%2FsoITkM91vs%2FfPHStmbeh4X9V5QqmHpqS43iRoMO70zcEGOqUBymaQCY8zRksUF4YE9DuQQlZL5Hi6kNwpiuuBXRP0toN%2B3yddJgzmOZd%2BdRPOiIzR2zKjKLev11Uaat82P9iwLen7KfueO7fr1uqULAtu%2FKQYg3BLYX0Z7rutlJ9BoFOdq80yJqmhdjnHouIh0FpbBfJOlqr4bz%2BOkKbG93UUunMOgpyyg2mb0%2BvXSqdOWWgGB7T%2B%2BcWIyP%2BIDSpjbocc0jADFugU&X-Amz-Signature=24fc4735df7cd5a68c898615a2aa80000b1adb642a440deb9c755f6bfa6fb0a9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
