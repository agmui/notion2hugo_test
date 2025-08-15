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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7YTR7BU%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIGeWhUIREJmgNMxIwoiD0Qe3ZOQKkVk1XtL44R6ui4F2AiEA189DAbhKvK0RCm0aaN4lttiZUSqHwnXSRtYNHbUxf6Aq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDMJj%2FzmW8CajyL85oSrcA%2FJSDk2ld0LuOk93KIiiJBO8yYtvUcbzVJT7fzbv3kG3HmmexTG1C%2BCnilPy7RSZuEnEMU6oGPB%2BnP9GpKEElAk1ndhXRrgWU4aBIqJy1fMFZKNfweYMpS7ndGlNLAeNNeHqO5VwgTOeHAFv6ATcBFA3jnGdRS8bRz8VDxNNznoReDfQC1majXQB27nfrH5qNXNrhsrM8mpl8yPtEz64XmkqNgvifcyACaoCbdmyG5ldGpCH9lkZHnNylIpK9VIM11C6j7ieDDD%2BzHfGIXriypKbycj%2FxxNnYX4pp8jDuqU8BOWNFhjJo5dOVcxshgt4y6QOeXerMoGs3EuAJugcsW965SThJt1emHfqRJzaLbe7Y1DSSaQrXmoa9GIWJzVQErw7Vrh%2FdI90uipiZRhh98N3SIGrarUwCk3faTx7Fo5r4ExE1m2ruCMAetCt6Nko4KIX48vxrcD%2FmXU2irqbUFx%2BYC%2B4i1Xaa6mbZ3QT3c2IGWooSFzSaLusuqwP4EVEZDObkIWDlvFdAZq4f%2FHRZY7W5lF9M0F3stKYt%2BQNylSmS3aHMeSGsXyjR388Z%2BNxYfVYTU27afKnppuqx0dZKqOLwBt54aWhAsH5AHD1%2FCHkGDjcZi%2F6OPZV9lYpMO%2Bj%2BsQGOqUBqqvDsVMglBoo98sBaqTys3CjZ75F23e9cb83TV8H7ztHRJTMdbMGHWJgdTUpvJgdsJ42r%2FQL0mrtJVZsW8bL3ZAZbwdbcXLBaRDyihDodDHmQbLStcwn%2FuGCn4H6N2qDFvjHQp9CL5sE1IjCc8VdNIXa%2FTc8zq4%2B%2FbdMweyYv4aIlIYiHIf8z1XRmJQqOX5cnA2EBpyJ78O49y%2FXqSWElBCqw28R&X-Amz-Signature=66cb6b1e798065048f513f10eac0a54515c7a70df59c5b56708a657475116b02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5N7J7UN%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDHGYwPpQQz7bqXcBc2xc9qQoLh0%2Bf2WHnIUx0EytPecQIhAJEVXznr0usP%2BST3I7iFaapKG1gEnvsLhvHaAGe57R7WKv8DCFMQABoMNjM3NDIzMTgzODA1Igw4zY3TOUgS%2F%2F%2FymGQq3AOrtvgD5oGk2K1tFLqmd4X3ZB1HsgJOc9OQJlW3nfBs25rh9%2BX3Q9DjodmaKiYjhaWAF66QdUTTQ2kUwC6tou8vVjnhuP%2B8m49s5fpBYqHKs7Xpkp%2BQ%2BGr2HyQuVnYtPtgCrUnxMJXeOAJI7myTVTHHW%2F8tygL%2BKWskq%2B35ILNDCRComHt1X3sx%2BJ0gJeJc46waCGg6TWSb2NLP8r9k7EKt8HcMjTz6881KBA%2BbXguBIFwxHWYsb%2FLfnKy7GAByGYsvm4Z5VFmVC8MTnPvNCHMHkTF7SBOq3dnGqoCY45jGZhKYcbgInbtnbIJvU0TSBl0nzFBJb8U3HdIv07KfsmEeNUas3opZ%2FhZF1lunDAczAYvlZ9pEavrwMY67dVjd%2BPlpyXh%2FlumetIcpD0zsoe8QmHhj670MePV6E%2BBpt0oYR2DkbwHKrmmig0qR3bDEYKI30pfbLl1xecMH%2BNeKsGgHn3iIF7q3o8EeeD8z5xcwBW%2Bb24hddM3te0tPYdCMUOt4tKiLUQFaPOPpA%2BdEAc8HrBJU0JhQUFdd1iALnis3CBk%2FM2LWKHG82rrGQwBA4StndEiwXHQ88R4cJLorwPlUDQZdJDHaJmspxfOHQHLfgVLWuo0Gvo7Um1mJsjDaovrEBjqkAZ8XTrv90hyKTemRjZrbnAGMJOHO6kwvksRXSplcTADylvSJnsd3geRvO98tBWjxg70MfJfGbTDU6FzVZ8s%2B8CBDLD2Mey1IauAJpSdw9xzHv2%2FRe6SGNFIJdz4GJVkgke5G6I8GhgPnT8YQdEqfIp9c6N7Wc69oBpQIFxGgx6Q0OR479Dw6yzqwxYxA25%2BOqRC3OUpAaQA7XrS8Eq9xILiUq%2BUv&X-Amz-Signature=8fd4bb44985d1d20b3c4ec937497c70537b56fcbdf783465468ec228baf9adcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
