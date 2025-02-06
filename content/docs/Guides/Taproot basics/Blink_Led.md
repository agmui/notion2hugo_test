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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXHYLNGB%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T210646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCICZ%2FqlAeKeuqNS5TJXiFTqCYBk3FBijfRUumnn3QBvbFAiEA40IXHz3Hzi4RByR4c3suH5zu7YnzrkYGPjgMecZWQ4Qq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDPPlovMtVJzAIsrWFyrcA2mqIAJCWpGaLU2UgZs0wxyRfsI3ACZJ6iPEWyOhj7h407NYxVYn2YMT%2FpUJQPZ1m4QNEKMFGjkE8ooqUIMT6jRoTkaQq4oyWdNsl3QkZtlmy2vV4Ul4oB9DPjlgMPbbtvFIK%2FoNQEiUGiqx5lf6O8Tb8eP3co3D6iGxrxElZGDvBBL%2B5djsMA6oE2Ou9lQyLR%2BDnjkNd91ecyBEELjwL0cUA0gckYU4rkJRjZqJg5dg12g18DDiEtPXIjjPKePOhx4vHIx3M9pKbHKWuyg92SkvohEa6pS%2FT9UqpTxsoSRK0ThkHzI5QFFpcGgWCw%2BAJSU1iSd3ru%2BeJwNmhBQnz8viTK2tXcRCJvRxFU0NIybXLPKGUXEe4%2B6avlZhrT0l8h2FhACwM2kgw7NJGSBd0%2FMYW%2FQCRpYh4oEB%2BVOkbaqaV87ajHPk79qWctNwCSfsmBFpnMXK9ZHQpi1kmIA8vHtRN3SAjpIiKgnN2gEhu5DW%2F2XsozI3KTULGRdLyyVNdK0bsiATzCENJ0Oqd58EnI6bi%2FYqmQsJ16rs0K%2Fgxc3CnIAMA3xwXpvStbqpa6bv91jaL9qxoFrmdpVdkUEcl%2FvEAVzaJCphU%2FAn5WdTMDjeca%2FDDWAfli22UBtNMKG5lL0GOqUBUvxuzzXWy%2BqqP8M4ehR8Fx%2BJa%2B82UDBvZfNRQ%2FkM%2BbuEONfPdxLz9YC43XWgiBAIh%2BBC7jU0A6fGvwvpvLbH3k546l1v5tUKYcP2So4jjvT7mbkmyoFl2tBAProju0iV1Xn9Wue3DdEEbrr27CB1NT8xb0do9RIT%2FYi8bV8wA67MWhYCeb2uu2GU8%2FDUmgEnv0auL3pmZtWj%2BdBeCRF3Se2QGMw7&X-Amz-Signature=38c6258f1fa0d5a62e5db52e263985dd200cb128d3dc53c4c2067c54061eca13&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GJORC4L%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T210647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIGDUDG9uiZ96sQ%2F2epqHCDSUuEPzYFhEoyNIRWqIMAbTAiAxOIVaU7ib8CuV48%2Bc7gQWbnAt1am8DupDVEOSDBSEZir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMSPTDKRLCyrnvi2IKKtwDNUSc6191a56mI6uNUK6y0HSLI0AAIoJafKE7tyGMS4UTalUIgqAt5FfGLEq1ASF%2Br91%2FnzAeA2HpxZjySurgCo5azuTHjuOw%2BdTqQoJjAOV2xuiV%2FJL93nljEE8wBHwsLJf2I6fjTsDcIXIGtXQtftMMikXbbzwkfvYXX3upG90Mkt5heHTpDcuJQdlvBb7oMBlWaWrhAmaYhNN8QCRVXnn1qqvsM3Gq%2BVMZnpza6AZZQ7gU2Kdnqpu04WBlu5A2%2FcKKK3jh0V4r%2Brzji%2B6XL9I3jhCF5MDdq7lZ0tS7Yv01%2B7LzOWa%2B89Gq7%2FsnPe5G3eLbPrbnGlf%2BA%2F9pfwmkJHj8ITWEJNOx7axK%2Faaqp2jVbZF%2FmrHdkVexN98ALPkdm7p0KnVyQ%2FZDm4eIHbJ1BDe%2BICIcHBO%2BTjGDywFT6vMK9GyZYFE%2BeCb08KRMj8Sn4KMlAPU0%2B%2B%2FMuwLWfIl8QfnXYle9rGWNuOGUugLB%2F7n46zSIqBQD1mocKCnwRF71uUOjEdq3FA5MLKO9x0UssiMm5MDgIca82G%2FBteJ17P%2FPyukSYWBv7LE3OLKLcAcnd3uXHfbzbasq%2F%2FAB5GcF6n5j4sT3S5o08fnxEcCmuT8QOJyQVmFWnhSLx%2BAwtLmUvQY6pgFq%2B%2BeXW2QOt0Nb5RtJEKujuLdCr0X0Nq%2BI%2FxLgjehR6LJOLSO264FBk32TDkwUKDCs342VXtA7Qg%2BXCyGciZjoGwv5VFwmoS6ndUdqFEWtRdKM0gK%2BIjW%2F8L%2FvH%2FxERbXZxTThJgMFnFg7gxQqeev7vObdJhYPVSYWlF7y0v8MkjO%2F0cwDCuZl1DZeFVskTUvK27R2yaSltiPuJSjw2kjpEQbq93jl&X-Amz-Signature=baac203ad9874a4728d25b740fcb5e9b4a617f90b89000f79e7acb51482eba1d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
