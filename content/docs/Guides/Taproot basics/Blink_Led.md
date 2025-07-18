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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U57W22RG%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T132924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQC9hHhucfmaWP%2BySV6bb6ZWwN8vwJT6MErknXCpQVAjPAIgEnTWvgV1%2Fm3dhbz5TBWoBo2qz04DIGs17wvhdiTH15oqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFYU3uhK6tfBfMloPCrcA5ZCIFJOj%2FBoDa5uk2F8tMYrJ3iz1RzcjHTEyGc%2FuhrZTg2%2FWUkMgPxEd6vljY%2B2JByJuxfkCqXcka3ZJzTkDvoUcDLbQK9q2sdoUvmeCrgDsZhNCcNO8xZPUAqKlSb%2FlWh%2Frf%2B9cJnmJHKebHEVXJqCbG8SC6qIo%2BEuZ1ofdh1XO2tTYicFFwL7fBKnp1ehUdmHV3y2AhS1SYfoIij31ovNPt9kzRUb8URRD8soBMTffeCNSEOG57N3%2FFGJ7NJFnoa9P86U0kF9ypdVa0QzKzXP5JOpK7moFxtRcxyGlZo%2F6uL8TWCTi%2FQH2UUO2qa45OAWETC%2ByvFPNyUK9m6D82qxyntPCwdw%2BwOAJ%2F5HW6NiO4SxnqLJ%2FJPnqXArh23NKoU9vIpWqielvsrNF%2B0qUjNz944dZFA8MVHF8KdUiv3kUjxMMqCYucJgUVNW7XFO7%2FGBG1SSt%2BzPzZNlbomhkzqGAotCCHZjIiL%2FGppgfrICkIENlxNiyK7YrcJxjufabCpqtkUVjfNmehTOwnGSVeuSA2IIN3zqESWwEakBK9QKwsn0eqDMZZ%2BuO%2BFclE1Jd%2FY6JZC%2Bhsbm0Socu3YbcqzvZa9D4879EtbBSJYwAH3h0g8jTSvGr4%2FGXxdOMNTQ6MMGOqUB1I8lfeiVSdDHPtCzYtO1ECeBoa0LLXfSi2N883PkNcTTI2yOnVLBF5s8E9ROHg3PYbBZ%2Bjpa3u0dutukZmoB1pr5%2FrfbT0%2BCIvN%2BWh72mJRy1TJKmfSr%2Bj1VqpX%2BVMBwQmQyzECd3Za2XOe76Am%2BrFMnlbi2CGAyzDjHqHsT8l55tm8CHs4bHdWlJ5Sbw4TA1Oo4RQoWMVbrwwQZAXhWzerxq9HQ&X-Amz-Signature=eb24e196171c7d041d5040a2058fd6d258d3ee91086daeedeb03db44425082aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXKVPPQO%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T132926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDjbD6YPQrlhUbhOoPotlk3MzFVuEhNCXLZC4CEOoJs4QIgUI2GpHbdA3KwODGvonXnZy4gjuSrVnMyhW7Bh3UzeVEqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBqu8Yg%2BPHHtUlujCCrcA3%2BdSbTIn7zXxzpmNS8dRsANt61UQcGcuKQaNpTmAA85Zmn9EurRVETeBZkQeQgPcI37kBSzhJf61NEHsYXoya3lPktobpBahoTH%2BMO0gpAcqWuUyXbDBzHV6wkj3f6UPg5sYUUe%2FVhQixwURHWqypR%2B7jsBDlKtlIE8b8IuDjsrO6ybxz1G%2B4yC6ujLnpGI%2FAqQ2GFOv0kAcaHR1TzlspJxe9H1uXkYD38K6QRdrrySxZGyy8SxootdPsCe%2BSQ1kJKWf2hA40GHx0azRfIfOyvQKCHHbm3zoHmdE8d5Sb5Foyvig%2BfQqTzr%2FiWe%2BlAdFhb%2F5GD1OA%2Fl0UiszM2sMZpLaVtymPPz7ItXhJRITrFSr1GGOdkQ785DO48MvjFE3EVSZKkN7X%2FQqaqA%2BccWAWaAgnGYJp7xLJ8ACnwK%2Fk%2BXLrucqW4S7qk2z3VgHd%2F30nUFgzfcB%2BlVnFJ1rnqZmE%2Bux2dCIhYFa61%2B6OECzy44HE1WE8CN2MGVrhpypptKm1DqEJul5ku%2BDzHiH4V1Bj63FpUxUIfoj%2F0leKxDh9Y1XXEoITjJwMYI1wqAbvZYBJYxiyMX0wjd6VhS2zONgkOsmpUfHhPibnxcxs%2Bq8BTV5ETl2vMsLFaZN56%2FMNjP6MMGOqUBbuPUk%2B3Z6ufWWPow7TM744U6WXHOd6VxETk9tJD50qSRLe6pKCrSUQ30uo18e9lohBzqVkSTm%2Faiuf85NUuJjbeCJWNr5nsa7rdhFK5QvuHRQGtWP3cMSCsGyQRuyH8TyFwdBKEXQgvA65yuRoZcNbz7e7nTLIkIBTBdfBP8%2F8BlS%2Bk%2F1xjNnGDo%2B3ACCn3kNoTgOiZktGMnXJTaa8Urh5brFw90&X-Amz-Signature=68eef1eea76cf575fcd1f328e4f60eb9d5ef8cbc4efe8b6c634512abf9365868&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
