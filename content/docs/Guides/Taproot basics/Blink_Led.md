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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVZAENFC%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T210826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGNKyGtjasYgk%2BZ7kVfjMD2cZ2MgQIGDjT0OjiAKhZyOAiAjjmkM1Eivt97JMlue0kT%2BriZbq3UI%2BQfyJcSVr%2BnPZyqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2ySCndx4kYPDSxnsKtwDJumC%2Ba9XSK0qNBK%2BP1hboqrBSHRWsIT8AYe5n5Z9s%2BKVY0RSNClpYmpv6KyGCnrKWJtwtGxVk2kRiKWuAJVz3yAPZf0Da5jf176GcCqszN6s2OtSGETEa4%2Bijjb32czHj%2F1vgFqeSwWxkBQ4Qv1CsomZrC30ntoXWN5aaPEkOqIWBd6ZPLfJCSc6ywIqs1Vc%2BHauhksf2Po497082nUFwjOSgHZFWPds03S5wZZnQ5ESHV5usTPJqw15nfMw2CPWOpZn033J6oDTib%2BkkJo5uqdjnK1Zy2%2FrRdXVr20lYp1XUGNAU%2BejcocXuX7rh%2Bvnp1RLsbuq1zfVIZYCT9Yy528RyLdOn35cJ0mAN9ZQKbzk8unhh1IwXCA15WgF5W73KHRSXqcEmDaumtUnwCVeCKJTGpioBfbvCuKR4Mdyu9ElioIUHYlJBtXhB4GETG6%2BaONSsUbu4aZwYcLxotBZfQtA03IXVFOEcf2RCKqMSk8zUG8I26Jgo2Nh7cJcxNnD%2FDsqqenZ0u%2BZtlbozjs2kXZs07Y6emG3lQmKDHcX%2Bgped1SKefSXcdtRrLnGcgM8csFRO5yDXbV8%2BxdvX63QqTCqAojE78z7NZOhx4GycRazmWgmc3BXg%2FJDez0w2c3AwwY6pgG%2B8WSRLGpbCQfbuSDTIOhP5z8LsnO%2BAMlxSgqQ2CYwJNuP8vo4VYyFhaDEA72N0FIK%2BrbcZMEbWwZpm%2BUrEjA2uyg39m9Tof6MIPShzT0pJWNp30C%2Bm2vhjjLlFm1lTzB%2BWpL77jU3H1UbzkRra3PXDdjxLdXLD%2FM1OAdCcx%2BMD6ltJJp0C%2BxcTrnaVFjFEbV7nFZ8WrSCH7SerSKIrFxalaEpq0Eo&X-Amz-Signature=e2b2b4507e1f2b37b276eed03fbcc7feefe6bbee33fdbc616a3dd4e291894140&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RNSYFBC%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T210826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDizDiofR3FtknMAgD6chWK0f27y8RHytl3E0uD%2BGX8rAiA51%2BQwFoQM4smbreXgK4j7HkzA8GKUnUg2ZCg%2FU5FZMyqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BIuCDmV7LDa8egSCKtwDUedQJM99YlyPBfkD24fwaSssRiWN57mS%2Fa6lTIHih1BqtE58tfzK%2F3z4k1et%2BTFKBrRXhrzJ8m2RTyzS3CqjaLd1xqvVbbFnzxNdOKOVMHpTuSNCUjanlHDD%2BjXtCKM%2FFMWhk3GGiX9sbcqSkV6LcIqLzOw5PpmqxPV%2FBdfhq%2FQVwPKBWixgUw9jXVt%2Blo6Kh%2FWmMuuD3UoAjKNr9t2N%2BK76FWry97stTurEqJGnu5y8JkzFcJ%2BhfElnHQSYDHISrXDn1PvpXnTKEX0G8UBkYOANWqYowooOHDPyLaY3OakJ2FxBOdxIu9Cb4iwoHQVmKW4ilGzixeDPHkeVZfsRZ9%2FzVqQ5LqGst2KGMDTnewJG863tXz1Kh%2FtbzeK%2FsWhZ5bEj%2FY1MDgv6X2HExwI%2BkIh3snokl2R96tw6MPq8j%2B2SHSKhI2YUJ5jB39GpbUwJKKjafxgJK3M0RLRIyeISwXETvRUoe3H6fQJMSs0hkALs708hjRp9b7sGnedebUxIMdcGWmRBcMtM6Ddt3dLg5wWuX9jE7Nau9l5HqJqJTxX3M0dLNt4fssqRwfJcK29XkwQAdhqR%2Bnzw%2BsVPOahWPRWhREWe1uqxHtErrtxL6yhiVGKhcxV7fNhgvKcwzM3AwwY6pgFGwSWGZ9jXaa0GCQgwnGc0ip3OEacmlWWRmRyvK6Imd14GJLl7usz0o7Xu6jk4SrgPbiCyORZ%2F5OtHw7Nw5Svg5qjEC8mhJzdOvCIey0d83EJ%2BTAdyRRDnvCjSsWHGL%2F9Qaf0lg4CuKSxwQ5hEhhxrmHFOOIoNeGZn8BSLhYwdQXyP9f0cx78Ru%2Bb7DOeYhcIcCneChBa4gfDMQmvnomjr%2Bykjcvv5&X-Amz-Signature=0c65be375ed26b5bef3eeb7a81ffb550cc051ce5da7c2d0f513b71f65aba1984&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
