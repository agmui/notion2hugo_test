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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOLZ7SR2%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T220805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD00X4V0kbG9ntOTlYsjqgRLe7P5DgPCQPvugg1AubwDQIhALqyMg3OWFZwaxOueBhom9%2FiFCiRya%2F606d9a5IP%2Bs2dKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyo8RImUGqZW441nDIq3AP5SYVeIJBGlxpfnxeZ5ubuowa0Ri0GpqgyUK136HbOALNU3Ara4oeErx6k64S3pg2M4q1oxcr%2FCpAjG8WeeXgDTM%2F3yMraWMkunV617WQj2f20Tz1ftX3H2paSFEw0o7uByXENvlEkl5h5y0ClTxDugtk5J4NldlrsxpfA12T9DfsMxGvBdL9DScZKLbXqqeS5UsVm2JBwykyy4AOi7JTBS%2BgwEP6K1HGqw3dyEuhGpy%2FUITYlPP%2BWbx5tHwDmdT7uog49q6ykifAPCXnp6chNmFGKsxe8rDki5NCTpQ2TSv3G1XrrPo5rYwRARIxTJ6saDN%2FiI2KRgdqXdXt0gknm2cKqmpG4HvIxm59UVP4WanjTPS75LOb%2FvKYeoIfCU2Nv%2Fntx46FkWqsW%2Bh7JOAK4Wlb3ixNPHDNJFzWzhW1o01HAubbEJVrIq9dSkkfWSUVozdoc6ioh6DnsXBsYsGgIs94W6CtcbuxdVoEarVlRr%2B%2FcMql%2BCAiyPId9d%2FWAVEE7ecphamG3g%2BDoGkNy327mqqKlQ%2B0fS7j2c758yiZw1h1siYYLQh%2FXB2Q514GRb1uHH79Z3KL40EIKPuM2bgN5cu9%2B9ire6oxYsfAT3xp34FSmR02E4Y%2Bis8BlZjCKs6LCBjqkAQkP%2BM5HXU6WfI40Cqs7jMXnrh0SxNxUQoOTHSwL60LvYowKqLRISweUXmd2Ku8EL3k3yv3q8T%2BaeV2I4jNB6inMJL5A7kZ1v62A6HAfQBMaYtYYhiCuQEAQxObf5n%2FrutQxCL%2FOZBsVMPt1Ldd3v2tL4mirkL4P4e9hyD%2BpqmyN%2Bli74q72Oe1vfD0hng984oyaEd6alrq%2BaTRh31LDX3wFq%2FE6&X-Amz-Signature=f5873f7b21485cfec942528c9267896ae21519bc85ea0f85218dae3a729977fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MNPBT32%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T220805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcFxGBwvm4z1E4JGVoKlqaYk4UwXQYA7DnHHN15SCFLQIgJq7BMmqn92AJ4oJIPw5euCgwwVdmOh0KvO9%2B%2FuvcCB4qiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJyLGz4KTuCJKHJpfSrcAy979vuh%2BzgX2zNB0QmizOrsm9sSf6er811G6naomfW%2Ffzuxfwd1pRedweB2Mun58G%2B1ADGbW%2FzLDswdiD9JceV3EOPEZoGcYmVGWNKDaPWSucG%2BLrLiqnYxEOVP4gWdleZDLglwlGrxkVtxRQ1ZnxmHDWZ1U%2B1VVQTtoX2rhrdniK4JNfpNyXqHYDO51YsyPT6tYSZXP8WK8ENVNPFs7J6lbg9%2Bvc5cUmNTzQfk7rENZnywjmrTCiIP1Hh50IX4dHgNMwr7pfBVje%2BZhx5%2FWDWAWhl%2FT9XpU3cWMpmhArR8p5x4I%2FmmwcRNPSebCz0MUWc1YG9JXLm6Uhbl%2FMW3wWNZOlbwHHgI6cJbgSaX7ebDYo0D7LhKHc3brDtVdAabsZNqn3RWd6Eho3MQnFnGSKOt%2B65p%2BWyvvXdo6l839OGhchLol50xVozDx8GC16FdZB7%2FADb%2BW%2FQNkcOXJX0XQbqytyQn3YoUoRi89sO1wrTJwfih7dmJ2e4z9myfx8tExZ0jI1y%2Bl8RcZ0vpnxQKMczzveeFRKqUcOHw%2BX%2FGk%2FmUSrvsU3x5sNyHIZ9e%2BfOKcGUs%2FZpZHjyx3sv4AIBdhE9wJXPb0eHQKBi%2FwWwmvM%2Fc39luiB7UpFxONW4YMLuzosIGOqUBWj6RNEnpB5N2SiveTSFBjh7UJCIS8kf8jLxeKtIuapBS%2BVqBskbXVlYt3R6a1R80lE%2BtqYT1D%2BMVA1RJdFPQavTewPAN%2BJm4keqeyk%2BBLz9RGHAxwv0ACqfvXiDoH98SO8pY1t3Hob2IM2S19M8mnJaAMkFX%2FcVowtXcEjB1mCF96QJsp4NIoXHoHeR5WWcWXX1SGwEPWDc8jobqHW%2FXzFsg5Oa8&X-Amz-Signature=943fb30c8c4b2d3a7db8168c0460ff043187b157011293c464956114c76da4fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
