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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOV6MIAK%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T150848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQEZvLZgPjvPJDIVImz%2BqwOhphZRweVgOMFSy3lTCQ5wIhAJ1NSbiWtOek9%2Fqk%2FxLmtImPoNpKjYRyCsA0csGTe7s9KogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygIntaXVC1bBzpX6cq3AN0BDijHphOLSksnJSlRp1SqXbn8mAXW7RjvhdmO2dH1voYC5BWZiXX7sRgok2%2F5L2FvMaimziPso4XzC5Du5Jj3oe65uwRoPgEOaXbIK9fZw1wpTTqFx9HOzq7q0awaZggTHGHllec9icqviOISlInJXv%2BYzxxgUn4FP9ORgrrxTOBBaykT%2BWhn3VxPo4YIi9fe5F4gzyIFHdMgkXQKhbIfMlpW4KVZmJKWnDhCQcoXr%2BCvCWhw%2FzP6S6CRFxsmlqXZfyMy8WTQErF6iYifupWQG4z421qTObMf3k4a62Bsw%2BZSe8Oxf8CicWSqoLL9BRT4OMmiUkQnjRgf2TboZXcuf07Byqu4EpGsJKUTZWvBxPtg9bx%2FZuIbh0p5AWcSzHFP6MtQ0ReyRkC3f%2BnsnrGIpSIlJhhUyBFe2q8t%2BxXOV%2FdnwfwdjEQYC%2FGv%2FNum8M9YV%2B%2FkoJdoYEtAJgbpdnLl1Lxeoo5XdbvRcam%2FoVWyQqJeWUka3xtC%2BmkyPf2jgWIwiK40KeLBT39NyLJmT1eJFAJojynJz5NsxIFo51RCb97TuNKov53cerl0ERfFuIwcBuSZCTMKKJGfah3MOQpCEvjAiqz9wOBBRwym5ngzJwSKvSZUpuhe7PX7zDRpNXCBjqkAZHWuizvPTS%2FGJam30T6%2F5URoQYY8K6crBZID7taVJk7hi7SDBqGCZEdtgLEwFjRtE1%2Ft1hT54BDWtKW2V7a%2F%2Fw4uJyQ16vSvcpnA7ThP1FzvxkKx3xwXM0DI%2F0KFshIVQDxKXhzUgxCXo8v2GR37LESDTBG%2F8kvEBAWINHyQCCFnSUiC9DKcDu%2BAt3hipfx0VtHfVCGEvMfzTXj1HFPqHGySsHt&X-Amz-Signature=00a81161d1a150f77ce4b933c9055eb426eee78bf64e1fa6ecc5ad6856dac831&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THBE2DFN%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T150849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2BxSf2iWigeo5by2OXdkR8PApFt%2F%2BnWspNi1H6FrkA0AiBt%2F%2BUyv2KdwbuaFbNND6Cidi2sZDfRjbicFmu338xh3CqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMN2GY2zQpVy%2B3I0haKtwDBl4q%2F%2Fu64hIZfKa2Ab66WwoFQL7pQuXRKQXUx%2BgKR8PQztl3xhQbN8WbC%2FUjB3ycZyo5Ys8cXiEMaMDpri65ngrZIzaj4m9wvu6AXon0wf83FJ%2FkUhppIJXmmMzy2wN3dP0P6ROCTpCK9zcZo%2F0HpUQA0M20W3LaMuVroylKAdhWPhYqtlomg3eQv3nWPSA3dHNAz7n6G5wf4lSY7gRFwEYewe%2FXN8Mj0OB5qEp4TDLunUfVe2ffMCJx2seX%2B%2B9H2dtWHU0txRX6N6%2BFvxR6UDfIowJouWum1sz372C2SRty82sXneySD5I8gjHBSGjdL5VW1Q72TS8wo0Fpxlkf0VBCcipKLCzSLOs8UkedKAj%2FYk9JHkdoKnwCMSLRl0y8STkXfMfvWzwoscJLRcBdJbx4bN8wROp6sR6o0lCutPI3b0l9sGfQOw3%2Fl5bR%2FdopdMrF7od7VzzPrcgtEWv3fETXuoL56uLR33dYaizahYsitYW0G3NJc8LWeFzA1FOmggUtg7efXBNqfJLIDB7GXaheMHCk08n59f60eaYDfADcxnLybKfEv3ETk8fb9yMpQuDZl5NpVfsMKHFdCXscNDGTei%2B61RPp6K4jyykg%2B%2BCS%2FvmUwq7ShWqes6wwgKXVwgY6pgGtrOubLWyLXxOKetd05u7UOOuBMhLcpXP3upFjQNMmtWAFj216H%2B%2FkzE6yM3kYM6AVD50pmoQ56OkobfKuqWLR6i3YAxbexPGr2RHUJ05w37uwBpY0I48SZOCJZJyShIfUQX6t%2F4c1TVyG9609OXr4%2BYHdn8oOZD6e63tha7o7dsBlNDzvg6jKREaE8M0ZSgUUAi9IrJLNHOkDdWt3XQ5sDvcaUJ9M&X-Amz-Signature=f432b7426571f2a3cb906c666aac83743aec99d3a8556c7d4d929b6fac8582c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
