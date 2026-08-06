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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGSFKNIH%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIBl4gYaxdOVxk5kUyPf%2B%2BMsiol279Ma%2FkmAdBUjj8IqTAiBE4CzchpcuLh74Gsx8fRn47rzGpuFwJ4LrEJLqM8sjuCr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMd6oY7Vcwf%2FgcS6pxKtwDTPTO%2BHVHf5RB945GRAHT4XRGXIK1HGKqwK0r5XfLkTVaBnMqvw29iOAFRlqMwCIb6RE36qUArBQdh0hOaxegY1OhwBrdjeVV1s5UGdbFvnLHPoIYXg09zqDlaA1ExTlOJOUqetQR41MMfTQhdG6BzrSwsjODzDMVh1DXh4jh5roJ45h3r53To7cqOu5Z4nueCq7x2buyU2ssBhYY6ztFaGc7xxiNZR6XqVTqlI%2BZrp881aXw7ug8ocqSgpbNDK6%2B%2Fvfch4xOO%2BzHqVIMGKygi4GakQirEeC053QeT4cvMHFvEd45SbHn5Un4x6wOvoiQ3CtO4gq0fzkTOlhVEU0vGs4YZM5fan8WGnZx%2FWSpJx3EjZITo2ztKA5slhuRDUKuaU0npfyQg0p0HHZSTbQfGurqcWp38WjHA66YIuryci4taIi0w4FkLEwkDPai8%2BN4oCDeEopGfj8iidaTfvZ1imPLZvS%2FnUDyOrNflv0lolu%2FCGDusShZoVPXjBy1w%2FLeeR40BRZYnNa%2F8MPgvGijt1M0a3Ro7xtJ8KRLl8mhh5MA3KB1%2BjoxHFcJya3idNwKeQt4jwOtChaPPgsauNIMugrZpwZLMVvfvM0mqt3poNkMVVZ733g31R3kKXIwwtbP0wY6pgHlzOst%2BzGyF4umc5P30YmBmFJ0v%2FVlOQUIxD7QU3fmbLMbrzEeKUzuQ6kC2kXQblZYcyc1Pqzrh612R47EnHQpijUBOJzIfvYwaLBD1V2eeecQyAXihCTAdRueMFsMWphZsCVBdWJ7GjHpDP9sfnl6ju4ig4aJ%2FnHkP%2BIFmAbgtMO%2BJFA70pFExaJPAeTWqTx%2Bx1Jz%2BCFl2HXlWdYcBSHmTk%2Fz3TM7&X-Amz-Signature=0f3a6160efc3a931faa92d2f672a033615eaa24c9fbd7af776dbb9ae685a5b28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC2WVGUW%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIF501vtftKO0elarbRw4txe4CZCOK%2FGdnHzYn8fPcL%2BrAiA1ge%2BDmzaAbvI32HCsoENpBCHHuGw5P7TfxJqesQDPfyr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMQR9peD%2BR58SbooAVKtwDRXAqCJUxjT7EIMMUfwMO0IiGSGUeGrH9DpkSZBdawJQga5lVE4V3lFQm6SM1aaf4H%2BCzl2zL824II%2FY%2FVJ6A%2FtI0qAIoX3eroG7U4f1iIFd1bHT5kvJHPTJDsS7MR4O0zBXKS%2BE2nJ6xhbhz22a9XfFG2bIfoI2vukLdH5%2BQeGpbAr9bqqm%2BKPl5l4y%2FR8utuOyvkyb13TrN9qMBJqGyvP%2FQsSFQsk51rPYSkQo%2Fj8nbljhXVS4iytErkairruLMG%2FLELxFNGR%2B4HEK74aYLnx1db%2Bd1h%2BT%2BRUlYykWwKEIFGFboR%2FZLjRAvdD6ayp6t7t4d1LmIYaKx3NO%2F49xCS02igtose8I8DoyEe1vz1vxzMd%2BTPdtMhVrrWvf9vZLtSRMAanWg81y056e1D0YUZ9BXhG%2BimGokJ%2BU4gk2f4pyZqXLDGCNtTFJ3jrAtMLeiPeuVZCXsaipnvr5uisEec%2BPqhuU3ENFKAqie2hIRVGLUT8tZUXbivZ4aNFPF5VmFYwzvFme5jD5YlTjb%2Fl0sMeW1Jt4owjCf%2FjT4BTMslXvM3IGdodhf32k924Kk1FLH%2BjLaK2nqeTxGf3EPOeEGQs%2F%2Byczu0Rn7QspedKki6hYSFvUiUaGkX0J%2FW68whtTP0wY6pgFpaVnY9Tbp%2F7pglelfQYDnxxMvakAKb%2B7XdMI5oHp%2F9jwcNyao9ZbvusA8e2LDIc%2BQ7gv8SgDTvLY%2B80BrPcioKzijZwOyZxAWzDkjeuMSEa0XbzZEBfzTr4JP5fhCZtjI1B5X%2BOowSfUjJvthrOeJ8iDFfeKQ0Eajja%2B%2BnPr%2FWo0w84DWPNvbUE%2FPkRQv1%2Fnw0kqA2XtR2gptFzBVsXMcozmhFh11&X-Amz-Signature=b73da807160dae4ee4e7d2ea8286dda23610faf072711a6d4f4cf0828d875f19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
