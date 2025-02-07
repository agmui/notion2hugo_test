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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RK6P72GG%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T100820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIGN70IE6%2FYg2VkJ3OyavTiGIWEC1fhLDi6B1858HQ8P8AiEAx1m88qpdZFIqq4DdDXvva4%2FWYcxhfGCsVmvZWW%2FJGS4q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDG7n9RX%2Bb8rCmxIBByrcA735WFKkxfPB762ZpSrnfFmmnAFC3PlbKQhf%2B53irwdDqV2li5QLZaHalPzpmF1w2%2FJTMViZOXfbDOZ%2BccJ1b%2BerrIMuoD1gviOBq7KzLRrOBAJLpZ463Q2AyFqASiHR9Uc6Vwz0kLKo5yUjyF9chfaRhjzvt8cthCmQlypNlZ%2Bl%2BQYVpU1jd6SwHb1Ewb0iK59FrpcjKBCOY3%2F9cz7VRL6sOJ3cwXlYb7g0Zc3p8HrCDwwnQ6HUFYQELsyJiXrxG14%2FXNd%2BB%2BxRd3EIzo69OB71QDxkX3XysYAnGpSrNaRuSP1brD9cKdWhxI2KWKA2zzZFxfyaErT2plUmEk0%2BmNPx9gNKWLW5k5OwquNcGRYV%2FeNbI3GwrjVNM5o%2FYyt8a6fH4Hd2tLtPogYX%2Bzs5HLrLQNw9qF2BQcdGI%2BXAMI5XJFennE%2F%2BUXtprmQimwxOAvyjbE8DyFgYulSNDNx%2FfFhLme8navIgRBrwM1z7vML2n3fosIL%2F9V%2ByhPIijKsYe6iVoVvqxtsA7XB67NKNuZEAi8jyFHPKgX8SsbJDQ3yb82ooHZ%2BRJLXJjCLw3fiVnwJlFHyEEQ1Aqsk%2FIBnkSbL2js2ilyA7k7rnWVk4VKUXoBbj1OXeQzR%2BWUouMIL7lr0GOqUBM6iYXnsavBwTVOcBNtfKad%2F45gKL8fdKJW8gN%2BiTWWjLPuhXhPf5vQ0%2BxZhFHNRdFdfhqd6Gbg4mu7HhCtv0r9%2Fl3c9FYsNUbi4WvKmkWkQ8yCXOalGGP5fbyDvG8PpaHllmV%2FNn4vAvV2WFP4HDgLrk2kGhqyis8i1v4Owj4NLCBs339z%2BiFAOD2pzChVgdS9XJ9HCruUsfwKS22ijR%2FV%2FycVjF&X-Amz-Signature=72082d9d0549a7ed19c552926710d30f5a3711ffb39e52847181d41cf3d86d61&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VE2A5EOM%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T100820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDcwewhXtjK7GKSa0dALxQYK6YebdIHqLB7CuEImQ5DRgIhALKi%2FnKipHS4Qu4DLmRYrO58MJbYN7MgLxiRrKynk37HKv8DCHEQABoMNjM3NDIzMTgzODA1Igz8cAijyUQkKCRuZ60q3AOghfbUtMZdv1aJqHNiht3ZcLRNvDk0nyN%2BB9u%2FSnDczqOrF58W%2BIGqeJSwlNdxHohDBiOhDUWkub9s2Pem0aw8E1pC3FdPl80YCFHTyGAyhRcc%2FiaE40w3oo4R83r9LrHNwlNHmreiiLj8S5wpTbqovgSSBxSAstOfFhlSMKwa%2B0Ep7qjduZR7T6LFhzDM4nd210KGtGzeMV2ZHnMuVI038y2LH1N0MQRqb1E%2FBNlAf5bUpOvuH8rvAG6G7CVdeowHLprvX3ywQPYdkmurFqCnoMJ2SzNeE0nPkJJAsunXkdOi2EsObmB7AcWbj4YELD%2BC1OfJoqSthwXhwj5qwhKONJukyx3158CUCJvhcPZsedP9bZXNrXvSt%2Bj3vvgYVy8B5nYhohx%2FuudPQu%2BJH6RC9XbLrHSLuz%2BNubIg50EAEzY22hhOFW7gRItN5CWW%2FrQf70jPBUOJKB1Jbt3j4eiPuROJeiRvOpuX1WDPkDls3MKZhC0%2B%2B6nSXxsF40NKBf2YGoFOcvUKnx6O6B9FNIV3%2FDyZ9zgNdoQerEP3ylOZ6CiEPsqyWoUzAvtrYgfP687bjuy8lU5uEmRDS5rKPIPHnRgsRh0cz7emrOvKYFmOUyh5gGJHARLuuIBlUjDu%2Bpa9BjqkAes3fTxeuAaHYY2sn46%2BIEkZvtPcXbVFj3ZtmZK6094XR0f3GA1M5iqOibqf9V4rKeuIiXEoh57iCQwmrNfgWmLusaipxTGUwZsFUKzDxf92toiYtGoOJxANrOOX%2BzihePo7FCOjxwCj7nAAUIi3XxATzhWBahPcpbksT%2FoP5UaynErmFPiZZrMaTGpV6teutVYCovXEKb%2B99lFB9OFo4vmERrhm&X-Amz-Signature=40c2c08cae7d1a71c93642753573ec50dfd727488faa361d3dbd7bd39cd55f5f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
