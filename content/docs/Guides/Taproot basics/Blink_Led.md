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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWEGJQZP%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T181112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIBLs2ZMqMwBgddrLBceJxm8yPlmRY86oqoYMhwZeJNHtAiAZQ3TAjHnXyLN6fuC2BwTuXE7huKisT2fJILnN%2BXBA4SqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPpagjca4Z1esqC9gKtwDIEO2UvPJtewT3OlaQmnGAwY6vEp7s1ZP%2BrQdTPf4DBaWLTE5FNV0Nw0wdqUzdz8SCDDL11%2B4DEhgI2JnJqpqPJasBjuQ5sIGGhP2PFEOEjESWt%2BpAL1qMY0EhhJ%2Bxpl6xgLtrjDRWg7oC%2BEg8wwtfLbDy11Z%2FBXOHtUUiE7VifInIJgslFG2a0s%2FPRouhYtfYAdgRBExRTt%2Fq72IrOtIhjHdWHs42b8JHivduzS5eCKTj16Bk76NZr61TByLztbW8w1I2MMVEhP%2FGqeNpN4TpRYuXRljI0lhbg%2BIT6MbOIe2XeV%2F3%2F0%2BFYePiePcoG0FMb2vCORiQZ%2FPMR8eJRNooqYec2%2Byoy20AnZJw%2BwIgNOC7OiatSJtamR9NX08OT6nsOcPlGAXC%2B7mLjL0R%2Fo245kxgl%2BoaPDsfeOUkAhzWJoNJnAGWWcYaAO9MpulvKXR9731eqhqwwt%2FW8DU%2Bus%2FRSA1YSrBjr2xydxHyaBxdMvO4RFy%2BfsUUmcfd4yHkLPxzeChyEJnWB40xQT%2BHOSWI3hn5N%2Fcgopk8Js0Y7H9c5Ua7Aw0oGlwtNr3tnZhdwrZmT1UCAJHPugAGhuzaYfXUbV2ARVhWIdaKR%2FSP4XH%2BuFScMQQCpSnNJspYPMw%2FoDHvgY6pgEUl70Bhx3nB%2F8vgHequZwYUopZHDkG9uKkzcGJ9XuYwwkdGYznn6MuMbe5JDnuh28yZ0T%2FzL6%2BxdKs5jr%2BIqpYmOPpGQI2WEbXdCLbCRWYKBIXxsu%2BgoqbvgQKT0ZbHGAf%2BRPKol12G5aM9xAtMboLa1fCEncbCbnVVHy1u%2BfQQFLyDk0XyO2jChdoCs1rbtCxtZLI0YpytUI31JrXZVnWdZ4bN5MY&X-Amz-Signature=898ef25f619a4b03c5b46f5c88a6f30ae8a07385bdf0cd483bc874c3f7a3ff4f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB5LHNVC%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T181112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIBVADyz656c64Y2PW%2Fvw5BMbcPr4i%2FmmuF8H54di0i5KAiA0w%2FkIt2MF7fDrVfMlVsnyCk8YPMikZkyB1hY67%2F4qZyqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaMaouiiDDiSiqq8aKtwDFdW8wG2XRufe%2BMG0DgSCaSDY6ZDNsq3gzKgldIh57Vb2%2FtoSkIDdiWux%2Bih71qXLsmGe7laeqjq8O6Lc7bFY2RPtZUozNxRvIrtIyFl0%2BFUAzqPJ%2BTLEUToJGKJDNpmvYqNs0BvKa5X%2FzCU0BH0EpthTXndgbn9nW88Xc%2BOt85BzXvraar64c3wTADXuCIIkBHz%2BgwxXwvTzkQoQu4PPgqczp0K%2FDoBQbYhtvq3NwxEj13HkN71h6uwrQElnAMxAX09ljUmdYYUsWb5AxyEI0UIb2qzmtyGaEmj6cGsKMqgVhRPBVktTLp0xiuMDZoidG90al%2BoC7WE8Z%2F114Ld4q%2BO9sF4jBo4mOQNMmtOvFau%2Fyxcgr1EqYfxRTWAXgVz3uXJ0N9U4NfuUJU2MHd4zhJK5PfgafH03tSQbtJfF6XIE7ObSU9Bz1j6NQAdzux97yXjqOXjncsSE0UC%2FGJE3uCxuimVMrhw0FxEA%2BMrZtpnrrRQE0tlk7fCXzBTftJX2RYEjG2VDAIYG3osTFlOOZNvYILpkANd8SLlYyOmMh1ZzKGhyawmP0g3ihSlixNfBecPZjFu6DCpNLRnJ2p2HDXrvp2BGqI%2BotP%2FX1mSdz6I%2BZiPdzTF5wNJ9OeIwwoDHvgY6pgETOHa%2BrlA8j7n7qvzr6g1bDL7Uz7AGr2%2BGuI4z6uNv4XCJgZI9OfozEbBbEnFwK8AnsG0%2BnP1NLoDPAkHKC0qapkW%2B%2F661e2aiCqzrr4ylhwctmZzpcr9s8ub%2FKflnXXbrAwnHclfv0DK4bIN%2FlSva%2F7r6PxPQhg6CTwOG7%2BO66bko7TPf3q2CH6oFLcKhxC%2FcftECmvoQzdJZBjMVd0YU1XfwZ%2Bna&X-Amz-Signature=a3c74850132dbe9ee9919b800d1cf98124bc86562a5c312d2ef1e6da84dd88a3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
