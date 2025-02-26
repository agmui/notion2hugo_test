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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHJBM7AJ%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T081104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDAOhatVjs9JHrijRxHcIO59LbCT1YgkEgSWJ1%2BL1FIYwIgGIZwuABs9foEn2ttTkAb1Y7kEylnaf0QZMMjbTAq90kq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDHWdNd3LMCwg%2FQ6KNircA%2Fxv51XGcTGh5fx8N93bk%2FGk%2BXc2OAzy3yFNWl%2BdFc2e8GDfIvKd%2BNw7OtTu1QKwOwX%2Fzop6CxFqWt6uDPrjLhsv%2FBnUvw5Al0cVyq0ebVujQTG54G1ykYf7LOsvA7OGIDMGMUEBwczlPEKG%2F%2BWyv2%2BQPHxJtdhCZI7XiHsBDKAJx68HOqSIXRZ7daXtyCqIkXLSGTwy2eYTE0YZZJl0X%2B7XIxCXIcdHtOIZNyrpVTArtNbxmQl9JqEQ%2BRKg9KxAhXilb0kjQiY8I%2BEw3%2Fnw%2FZ1A2B0HcWtlxv35hjdvGLvPKig3%2B%2BZhomGT%2FrUaCvWtQN%2Bmux118NkxmkP%2BU%2BRGhpLoZubvSUUbngbntR140n72%2FH4QkqMXGu3DNFsLzxQCcDLpUyrsCob9hSevjxKPcNBhpa1IMkf5Ew8bFaEyPkS%2FFkS79B4KO7TffZ%2BXlKJCCr0ftHdjyeJBzw2mM515ep3kKbd7dxtqDQaAu4gJfq0MuHMOXsa2hkfvOSP16hZrJmZ%2FZPMZ8MAsIdmMnIgiOTrGWmIMx%2Fn6lK4ogSYm7UuvP5htMKLrF8%2BVqyrjp38Pa8jxTZU1r6TeFEr913zLJnkF7hY5S7FQHLktmE5X6cJ2diclao%2FWkbmDqAXtMP7%2F%2Br0GOqUB4%2FziHqudlU4%2B9zVjm5iKmIsIafxEX2nArbq9ZcN47p%2Fh3uh34e%2FlUdCo7bKRZva2vwj0Mn1Ffd6D%2BFQHGhbhPXsxLAHMMkGcFarsV0uxK7HenU90XSaPdfb1X8lKuXEV%2FsIYqNOtbN83merxgBaMlAH5gQKetQUexHxtgg7sxowFDscXGXhKJYLcOgLLJOyPVHGtbIowRiXDdxVQLWhuHK52%2FyPd&X-Amz-Signature=e04e2591e1e5902bb1895710f656c9ac835c704062e2961e836c6b7f4d97a8ee&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SW75E44W%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T081104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDNjAcaW2brvQDnhEmbeK85%2BJLg0GiT3YUfZv0fjzINngIhAOehgQ2Y8iBha69%2F8TvxCoED1SlkAX1TMWsFM%2F%2BChK%2F%2FKv8DCFgQABoMNjM3NDIzMTgzODA1Igxxl2B7bOm23W9Tg4sq3ANOOFctnBzf4LsDZa9tAm%2Fdhrd%2FDE5vB6ADXgvtni2AnoHPaVBrvH5IJmNvdkoOpHWG7gTkncV9gkJUK1CokRPbCTuDQvbMFPKMlkTGaBHueK%2FYJfiEBw4lcGfR329aYQpfg6PCO3gJuLJhfxHppQ5GPPe5u3tsZTxGHcoacurnluUvzWYNqXGtQ8wYSjR6rSyezaAixasBnAIP%2BFzSgnnP8GQuMWR4aN3LmARasC9m11dYiPoxNnFxV6QeOrSDCC9rgUwIBjyb5ucm0r4UnpveyqVI7oYn%2FId0IucA6c0RNVcPMFg8tm2J83GOdrD9knphtFuQvw1p628UCp%2BhneX00UrDyIFb1%2FfQKAeASKNdIeCqGs2XuW6Zm8nvLtZg3CjSqE8k25ke5S6yYM%2Fqup2xKw2WRHlb8SfCPodvb%2BdBi%2FNlLq%2FcLasLIYEw6YTOtLJ8elpEoSSo%2F%2FBqdETHYpBH4GLQC0iRMyr2F%2Fl4Ad6ASIMNlOUJcIIjFQ%2BLvyJYzzFfRQpbrfiJ5Asu5DuKBb3Kgp22ZztEiK3%2F9W6IX%2BlR%2B%2F8mkpsOPWy3%2BR7%2FuElocqJwU6ccOjzxlH9Q5NBiQkq6%2Fp7MWZS%2BdyBMEzWG9yzd7p8dbIGazc5lxy9tiDDj%2F%2Fq9BjqkARrCRlm43vct8I5%2FmV54Y5%2FKAOV8z0f%2BO4iJzKuLanFeTDGHeOUncxIr8iz6GfanS1NN2hDrU2h%2FXt5g8DYbcflRZsVwf2am4C9koZmk9PvMm2OrRVcE1UxC5mUGm93btroKUDbYOlSPmmF31OA1hpVEGsIadwRRyOmi3oQ10Rjz90oS1kUbtyy1f%2FEfVqL%2FuPSAc7OY04JAgDlXYHj%2BxMCco8Ph&X-Amz-Signature=b44ce19f638a60a132befb27064ca7d91d1f9baa401f347c1e4fc2bcd148f26b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
