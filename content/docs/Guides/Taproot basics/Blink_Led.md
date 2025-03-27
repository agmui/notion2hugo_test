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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2MYRYCN%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDszw%2FIWH8L1xVpESYca%2FrfHoba1jQqe1e2IyA9aFAaKgIhAPXsYQjlcYAGFBINTui8Dqgb08nSFBVB2EnAbD30UcInKv8DCEsQABoMNjM3NDIzMTgzODA1IgzKpWpVDHphNAtJHFIq3AOR4jOR6efDYmHNgaoKbQ78NW4K7ET3VBUAcwfI7tYOivN%2FJX6CFWAiEvX3wig5IPnsSSTB2aGxHGau4O1PxxJCSFdAkmxz6qHStts5sqd9VC415%2Bh1MLLvP1wdAX5d2lnx1DxnVgi0K%2BMOFK47rr8qxGECtTRYrwkL3p4irIOS8%2BzgqIaJdnC6L1wpjE9soU3q%2FzqXEXAGJNTxjw4RNzBNbkjrVXiCDBpcAbjCFqNfAvT8rUONdlR6%2BtIePjI6yR0pNrL0jpd200CojqPygZlGOtRvkLoxiNyqAopGb8kIj8uarwq4SUzqxU2ybEZYH8kebqC1m9jIYr8EWS2SVYkjfKMLjpn%2F3WljKwqMwz36oXYkZxWgtx8IOBt0obzsLzNEoD%2BUg%2FsXy5KW2AOwV%2FMf736qJ%2FKa20Fgne6YDdHkqfsbmnexss%2BxDb74wbaybkNCqae%2FLX9oBPCiwku7VFGGYyD6gbNydknkeBl23RbW1N6k4N6NBiz8N7HOqiGMGAcKenkIIBnGVhpAUUVn26SUXEbw2qdQf4XSExMa4plDbEB1LawDW2mbXPFUFCXF%2FN%2FVTZCwotB5DvO3Z41cHvzeACvC6W1Hrp1cudetZ%2BaN2WHb9iWDR330hTHkZjDGopa%2FBjqkAaf2GjsJ2pq63FsPVNDsDd5FAG4DyGAT76bgAsseOKHjSTuLLCoMV5Kxr0s14LVKSWyxE8BoZvamxAKHjGEBaQV57oLAYhNpxtycgpTDFkmyYHx%2FkX54ZX5aIzhOwnKfyCN2vRsh77%2BUSgi%2BFk8IpiPjF3SomJ57QvQ%2FZWuNMxUj4Ln4engO0taXK2cK8Pw2L9KlQT129Ezxav8CiRYkKBMel8e2&X-Amz-Signature=588b571ea4e3fd603b060c196d5a69c56dec93682c0d897b2545940e57a59ca9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAN45DOC%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC3%2BkAyonzrikjSxsRDEQREDLB%2BPYGVrwBYSjeLNf9HeAiEAu8s4IuiU7ujlLvZT%2BQiN6hY0dvjrN2IYbsvN8QTmuFAq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDHx%2FyssK0LbXCHoHdircA3vuhNZsO%2B3v72x9AztklFGwd12e6RfcYNEkzXePsEY6ttWhkXM44CnFkh8u5JctZB7Vl9TT0CVhJHTNKYMag3OpYnTeebkWs1gzYLGylLHchZkj2U8K6kqdfHL3UwgPpvSImZ2qJGwWXIkJkCFGHStrW1llQNn3F4k7BSOKZ%2BPBwfLK8wkaVQqVyrpVQIP8%2FWdiHU9m67jFHBpTGPHwasSLYgvVpLE%2BmoavNQjzIzFRDqSQJ81pMIWLTcr537lT58%2BI%2Byn%2F4xeX%2FskmEAxqo8ACczC5Xa8plmLaSLRw1iM3HF91WqA1hzyVXFCXGcSsBJCzO55kJzWWC2%2FbBCBGL%2Bn3RLCHUzON%2B0pmzq0TsMwnYvgJNY%2BNvK9QbEA1U22NoiXC9DCE4sKnbKDmUIypQJny5PglGDhX6Os2QaYPB%2FeFSDwyhrQNN44BUe8TWBx3QE01MVzvdEOgDnuGf7tQOUPfe9gseFZz5D02A31nBaTG9l71vvqgyWSsIGlDVJyQ7D2BKI81towbNjkolKTEPFxPhAFzexulJG0bImxi3gBWRylK%2BFwc9jzzNo6qSrkuBpT0LulFixOc4%2Bb2nrAVtuyOWTXExnr7Ujq%2FBdB7sX1Jb1BTwASNikcwoRccMN2ilr8GOqUBFOrWuTm0HzbDFIxM6bnBEveREbC6hluKwtodbC1KmBDWi27Vig3hJ0NiBnHKtlGiqIRKqDqreWs0vyXPMwi0eiqhqODUkuwSqCoHz2xI%2BEzC3%2BWpzDDqE5iL6XN%2FpobboRCdpR21nSIc2RoMtVQtV%2BupVL3bkCbBNCg6TktnULHCvBVuHYk7qBsleZbkYEiYk80oov0%2BaqA7UFUx4zZS2pdET2bk&X-Amz-Signature=edde861ed998326e1707477a0f08e13db5abc945a77bdec7ef668c862915c504&X-Amz-SignedHeaders=host&x-id=GetObject)

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
