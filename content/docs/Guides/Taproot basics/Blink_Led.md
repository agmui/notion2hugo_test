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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZL6NSA4%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T031943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG0WqLj53JwmjsDxRo51ycD32nfa1XC7jeo2qQnYOKBeAiEArZY%2FSp37uVJcwXH4cQcN5lDze7Fb2yZp0sqwYBFsXGsq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDKrzpWef0oJqeLUl%2FCrcA1V9ihEXcs5dhd%2F6uZbZq%2F8t2wgscqS3UtIpy0pdG%2B7PGXGdPQ8gL%2BRCa%2FHh4eaA33BFrEDJfbi3yysiNN3TqzIvA61dGiHxxeFOBwhKaItCFYSqRth8ARnjHsp%2BuIHdiOXm2UllZvj9NSX0OdvpcNUDHPis0C7gacM0mjI1E9KPgHB8CwpXbCvJPhWfH6AOucmO9bmAW%2F7vgXVnayo3leRkd%2B4WYixA0JCFtWuGE5HUYInCZRKiYBXmstCicCubIGtsauXHycM6vwvY1ndBIaw0Q%2BX04MtJCRMhirw1KvIVJXDNeffHciOs32SaCdxmtlwU6BtDG%2FQZiz7AZI32EjYFGJekzzCFyL5yIMaV7bYgH6ufcvETWAXYheFIaNBeXWnpspAVtNdddejDTAte%2BRtUUiKFORMItAyDPEw4lZ4jSoaWf1FeVuJ9Iu%2FykwMWkI89ADi73kd8mTs%2F7ZW0vBCmvFuIDqJwnTThJi2XmhVl1O2QZ6YNprgUznQ%2Fxq8ouppB%2FAYF%2FotMm2vMGrrXNk%2B3Rf%2FJbsnQWvz1Zl5G8DEoT1XgKL7iqH5gBar0TQF4lves47T4fC0bh%2F7zGG8LsYEIhOcQqRSxgbGmltxgAZX8m4kjKriaeHl3FjuOMOTIqL4GOqUBCr8kgShCLT4kPpJbxyQP2hZRunTTStASnDMM4nP9u01oybVqTYD7WgO77DdpI4pN7Eby%2BeLUrzx1Jz0U9MALyetVVVeuYunp%2B7NOHks7CcXslzvJfa9HnCshHFm77P7T9wlNa2SBvd0lO7r0ud%2FF3FgotqcYK7jSvqX8wsnC8acouuJKcFjAKu8U9xpO4AE4Q7mG65qUHpR6euGcfcgVo3IfSdjY&X-Amz-Signature=7f2ebef4189b88758a9f0c353aaee906ae75d4636a358d372f095b79be2b48fb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIYQVBTL%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T031945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEOPM5NqWZcAg6hkdnFHARrkyu33j6zSjqWtCbpYmmdnAiEAzvmwI3uy%2BkgWqPQduskHPrErxov7ER%2B6MO2URFymp%2FQq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDN%2Bdgy2U8wYqoUX5lSrcA2pyskd82vHdnQBm%2BK1SBQPtu7YT1aFnIOkkcP6WFFp1hr4b8T3zopwbm2ksnNuRRFN5r446pN%2BT2oNRD1loYbKMXSRkSGh74HRMBdF2d%2BW2QhNrRUPXadLq6PfOt4%2BpCJmizvyx%2Fg7KPr47XfgV6Dz4%2FVc0n5YZIyg6FM60spql596LSS6xTe3qYmdOBTbAYGGNvTfJ3cMIFZloSumIaMmsxZ7rr4GgR9uZTy%2FumYqPWJhqeaFj%2Be3VtWqdgKa0Kls9uUUOHa27afROCXcrtTrg%2Fl%2FRwLeBucjLYdY8HJdwubG9LPsOO3%2Fp6lzsLNFjT%2F7qRIdtWJkABz0nW5O8y2VWfn98db%2FDWze6tLfR2JNmWPEMDjeKcqvPAND%2FqIY8%2FhBMOLztkuDHFo3r0bw12T4zT7EX8SiazcHWedMOOWdAAVKKXqwcsA5vxJi%2BJ9CLAjzvuF8bw3jCzfG%2FLrnII9ytghbX6Jv8NFZ5FCSVsuYRpIMRqzZvYURcg1oUmQFWQyb92O%2Bkw%2B0GkG1Z6SdcWHy9i2PRvu5rzNGltLtNKDGY1YqHfUolP1HNL7wHpVlUwv0ckVBXAZucOPx1v9DPecUAEQdElu4HgpaeNau0Dd%2BUC9Hqad15JRSU7CinMO%2FIqL4GOqUBq9dRg9PdyHnYMFx9iW16qw73sfDw1y4EVxwjKvC%2FSG1s76TA2B0ETM1%2BJSVUXnuquDWe%2B%2BEZfSG1%2FJ6bO1E0%2BsS%2FkL1PZmTpnTvHoXzWdyt0DwUNeWcblROdMu9DMKPRvXYjM2wFKK49hnhvg%2B56NIO4%2B27rxqZHNnDrdcQX7E3GnNBTfcsi7zNJuqzMVUda%2BIzVOcoCDnSumvvCqlH2j9nIeGsl&X-Amz-Signature=99072196e898c06148264126fd3b3a7c9adba09c6ce3e58a7c478f55fda12d33&X-Amz-SignedHeaders=host&x-id=GetObject)

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
