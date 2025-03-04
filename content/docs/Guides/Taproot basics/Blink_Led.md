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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPIRO65F%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T003737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZnRJ4603sIR72WEbKCs7gfSvj8sW2oUWX%2FMv6oTC0pAIgENv3l71nu457KysiwLwfM6aBdSt8jEYTyELUGKzoRKkqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJLIYamCP4J3mBYvICrcA2grnjyh6WC36I4j0GpndLCcIb%2FPHE8PXoeQiDJr8YN0pDuvhSZVpMMPvE5iZY5d2SaNtG%2BpxZmELBU%2FPIT1eyAEFMYQgBVCUOmZ8iEH2PmRRw4ZyKcJeJQI%2BtmNqgwRLyr%2FX1gBuxfZZc6HK0KI80eNPrQpIWdQG0ZRqy35ato7lhc%2FBSKNptcxubQUF6EqGa3%2FlNwCANLTAJUWHlGfa%2F%2BogHBAB7A4wYA9CPlTZP7csIU76X0xyHp24Hym431VAbB4H2Gx%2BLwqQ9oNQiW6v4pSfEGu2u2uWsj3H88Ab9cDu9xNg4myp2%2FGxGWLXVeXoUDXdAQOepPVGehe%2BnZIEyPX8J6iktNSorNQEdbkqDN10KiIwQg7ja2SYZ4Vddm%2Bip5O0hE2onLugHaXJCcOzRR%2BWj56z1Ws98Vqm2Z4RC8dRdE%2BMvfTTz3eExF2Ueq5%2BiTtSSOC8ijPtQBBDT5L0MuxcKsiWGw3rklCpuJTImjNYoY52ynZkh1%2F12rHeXlJIlVmJC3tGvrazBhtIMlAkoIjRk3mYvUj3sw9AmXWdC5Lg1CpDMAJhK%2BlIE75oKhFj%2B%2BBidw0g0G8JB3f%2BGgnupIBX14irYP9mupUBEj9B0UTwoUqRDgWVp9V%2BCiWMMb4mL4GOqUBUQKlwGLzXFeCjpGm0I3XmSNI36Ythu3xwcpOzXe6yRGdVNGJCrsEspzw%2B5pSbiFNlDWe36HucG7jsHQ6Jrqg48uJt80VAjuDjPr8hdboZVXuv40xtyIh21FC57Hgp2etFA6BOU2EPoSLEz6QdgHEIaQ1oIQiT2GVCvBT8qACw3ocdH2Ueuh6d%2BxBtZxPpue3ZC55Ip%2FWcW7LwBmKPzuaa8wjAUFR&X-Amz-Signature=fbf1e230ebfacd195c31562801e69946ab6217d1dec31821fc5711dc03c8910c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7IOJFNX%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T003738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjdhO0JQuRXD26uyCViQhAKuCAbAWMRpEDGn0LnnWRmgIgfzDv80%2BcJLboQuNTLor%2B6mRjRPs1ONf%2Bzg2TS2kU2PMqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGuGdNZLD0etj3KxLCrcA6GdFmE%2Bwht9fpsRE3jaQaA%2B6W%2BqVSzk%2FnIPaStO4f3eDgTE2eokU7FQJp90JL1g5Pc1%2B%2FoFLT1RIoKvL%2BYelxscgvmezh2HD1%2BL7ySxB2klCsqHosnu047ur%2FGJF85criNs%2FLE6aAOMUX76fa0taQl8PMmvwPQdMVNwXzuHEKttLakk1OTKyRd3zukYx%2F97UG%2FhXuBIAXb5ztzyqshFq95RFjw6C3wXBsNOcIBvDS3Lm%2FQL4GTYbC1e7YPncEGVxOFXmQvKNGOtNhpE2g%2FRmUvH0QUg3Pb5Q95NLxt3tx%2Bh1rEd%2F9hIUjk5%2FmhqSLincPQA8GSJ3GgXRk9%2BuA%2B0XZGPGmzga21Y2cbEN2HC6F6%2Be5jzKAm15Na96vFmXw1U1v58AgOBWNUxITEj3WMA%2FhuGM%2Bp8H6RvF1o8g1OLMXLcPeinhS%2FVc9bxPflqGtaaS6yMXbUXP%2BlH8iSCrw1%2FaRRe%2BsmY3XaUCKx%2B1r3bHEBvPFKzIsLAFWPHwAVAj3YCuWmsT6cuyc8qU4LqQsGngPfF8TYrdABlXcINW8hDq7%2BV8VH634D7OYmpSGPKlnTu9xrNJ1SOFdRTORRdRbhUXNJDkvQ0VaNrwOyiLdO4F55a%2BWCeND57ZhKLziynMKH4mL4GOqUBOjOgPbWMPV54yRYkVO9VEYF5fE0JjVY4I4iJv%2B3ErV7sKMCywDtu1YdoA2dREoWOL93Jw2UYlEPvBEhUdaD%2BssyOFQap%2Bx9uejSkb6OF62p1GI3cSJ49N%2Fyvfks147306YWfErz0pqW1t8dHMj1vvDSqhU4zLplRoO%2BIME3vA2rEJRRJK9jSjjd9J5nR3ptmWTkn9KdpMV4slkPSydNl%2FLz9FG2f&X-Amz-Signature=bcd9d744d71d3804c2681532affddd1e0212dc861c3131ea7dcb80a766b11f14&X-Amz-SignedHeaders=host&x-id=GetObject)

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
