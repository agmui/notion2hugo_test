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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QF5ORNVJ%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T041001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICFyTbjSIVx5DpHVDLw%2FLau2AKhXoqmsygsWgqwtziv9AiAoh6rY1052N90LqGOprs8r7C8%2BXJe2JfrUWLbULStMlir%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMIaP3A8SGHXNr%2FHbUKtwDa1x7wnYuY33Ni2H%2F2DmhsLT80kci0SXQPlslMsZb%2BN6k30%2BFwZVPKokGTjBr1%2FDP09BuCHMPTJULaHxaulDIGsYjvNLB%2FTq%2F0KOXorbV%2FzMTlic%2BSpGQhtWcKOi9kn6MAynlT8gsbrlAojVI5znl8lEibHMljlk3dMfUd6FF%2BUBZNY%2B8ywVbGJn7ehKiFWwYZmFu5pa7ykVwoyyi1hM%2FqOgSg3duLj%2B%2FOsIb8%2BtxaTD4PO%2Fn8DtqXP8Yn50mDJ3Um7jrV6DqBS7wICB%2FalhVRJsZ7s4SNN%2FUxgZA1%2BWVN0dNlwxG956vtsAVwS5SLsgm00pO8PPxf3Pgw5NrGu1anxrfhFBZVMqMe3VXvZpy3Q2EiRmyygYTtu6LTKsDagm%2Fs2f59iZRcTFHQ9Y5nXY%2B7VvOwE599%2FxNEqHv2Tz8IsVmCNzvcG4TyXZt%2BGCYyWMdT02fQCM8vv5REbIteUGxfR1keKYEzjpU3hX4noxO6ZRxRvmqc%2BWVqQFRwTtbKXOf%2Fa5o3ITe4ELk3Z4HLkKxzLiZkMiTT7qd3Qho6Q4zrxmaMQ1uJLZuvHXgVKPXDwHKx%2FE8pL%2BuHCAm3H3iknMnE%2BKrHOeBFHoRMRx1T%2FFw%2FZFQ6d%2BmfonOYxPYUS0w1tO2wAY6pgFeBUOcwzp4xEM3MrmYC7W%2FLRVwE0p4HgIeHXClMxw8y4UoABJ%2BywSdsMHX8GHMQyN6d76LWEuwvnMC1a%2B3MpNGEkTxMFxXMr01UFn5yy3LQHIII7vW7gLP8MCqciRdU1rKOHJsi3GpH7IDKVWYfrBA%2FJZhz7ZeT%2B5uepsIdmNI%2BO9KmPvLx0Nereb8dSSCkKMCftp0kbNA333UzsWN1jJXCDuR9%2F4U&X-Amz-Signature=e1572f4c268880f384d4d35e05562470e4df4feceb767233bfc57e39bef279bf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLQCF5VU%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T041001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBUYIOdCDNKNU0X3oQ%2Fk%2FiCKiQkqWrGHMlJWdhBZ%2BZ9pAiEAqqhR3br%2FcamMIe%2BRkmT2DL6dBQEuhGWwotgHy%2FU%2BKz0q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDIbTurDCffpT71zIQircA%2F6TaejXp%2Fi1uR4t%2FRs%2F0Fo2lMTyIx1YBFgw8xHRT5Ye1AMQikzPbHBgkT3qQF67UDDOvEOg92JVKjrNUS63cxpYiSoo0SMijE4wd1caniD347iL1j471nP57ED1e9qT7dAjgm%2FLbUcGNYPU3VaWdv6nHxuuW3OoaJevGZfCE47NthZ7WtcPI71kH3K7jNxAnv6YsNJTVZts48%2FaYoFFLtwuAvlN6%2F3wFrghRVAFAu2aREF%2FBSHle3vkyafagfloBDC6WJxOBwFLUEaUF9zYQg2fEAWuhtHWWjpV19skltZOj%2BLQRZgYRiFXSLKvRKJ4%2BTcE%2B9Ez7B%2BhSsl8mZmj%2BDxZQrcQq8VfWNxlyG%2F2IV8K8MywQc6lEnIkil0VSF40aGL0CdiOv%2Bixh3gIEajF687M1sipbqda8WRjkepwxfBv5nKLRUwzTr1KyMDdSRcePG5bBc4mwG4g%2F2WvqJYuNMev1%2F96DGg7YxEx8s7mEliii4eZawRVqm5S5Kr2j5jzTaCY%2BciPn66%2FzqCueNfpgNuz6l8yg%2BZPitbdjX8pd6V8ueoKYW4kFtS5dUJCYXIa8nJd89o0uRWRYcymIi595iQcNy6gi8hDL%2BT7osFjxXgVT81t5gwcqc5%2BIaGkMKTTtsAGOqUBhP4GoB5SR20keT3jqWStH%2BAH2LapPywA2HrLYQkZRsgZYH7y1BvssGniRMwcrA4hR9EeipiJXBgZAZ5Pgz39z3CItqVrowXomWyiNkio11gRpERSIs99zqr0u0LfTLtRbcwtO4XZfW5J%2Br6bPPo8W1s6lwsVk5ci%2BIoQytO4i8dTSQv8nfANgFru0j4BJNQoPKnLdzmAFnFy0%2B1FdyMwEis6W%2F6p&X-Amz-Signature=b6c7f62df4fbe293815bad8f98ff61383f6ce90dc2694d46d02a48c926e98b00&X-Amz-SignedHeaders=host&x-id=GetObject)

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
