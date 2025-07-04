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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SARHVVSR%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T170740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIGg6VZqHreHZCQxocb1s2AwNua%2BiqyQJCkej7spqcAwbAiBdFJTvBv9aRa2GBlrgNckxq6Rvc%2BCPGsyZU%2BdE4ltpOir%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMx28mPMgDveEACcq9KtwDU9kVl6SuVado8nsSZf%2FT8IAdNQfd2J%2B6YbY%2FVhp72whq1wRsXSXRfPk%2F9gX%2FZwWQf2%2Fu0jHzMLGhn0sx87igXtlI7lWdzEEDCalG0nGx4PTaztvDYxmGyAQmpzRlKqEx5fKoGsMuOH%2FDjLXNLlwyEIyM0pACpGqgy1NYFyfP368Q3pY%2Fyy%2BKXfStAwASWbkyRTHcFypFsnNSFFyWrINBuGv3oB6CNo2klT1oO%2BDVozjyaoe%2FYQczcX2%2Fxd%2BEDl9%2BIqTHSk1oYK%2BMZyItv3X%2BIM6gg5pdtcPh4pCBglAynWdUfPvVvNSJxEBSet9iq%2FhgXwblqMCCuEkSv16wUETmJebx58%2BGtKlh3vvv6xJqOjOqpRfLjQIT7Mzxq40scIKaK%2BwmPAjunOlxtiCjp6L0Tw7mRqn%2FblJUH6FojJBlLt6PL8%2FyXxYf6%2BAXQIUd1gxJeCI%2F6M%2FN3h7r8snzoiPL1TYprKhXGuNET5OOy6FLO2egwbHtjdenA5u3pGmXZJTsPjsU2dY3f%2FKYmLyFy0ajmyA4Iyp6mwMWlzEOawD5vgEYq6occklwVv8OoRX1kh%2FjrerPJjk5Eyhyj8yI2645Hvg81oT0yBbbptckeIch1rOdE8BxcGGEkFSNHI4wr%2ByfwwY6pgGFgvzh1QE9S5CrSIPm2aAy9aWH%2F97%2Br%2FObxBozQ%2FxlRg9NkOXBtPh0hnz7T%2BB8QMYi0zCwy31V1qiVS7CO0F6%2B78QRjSsqCPxVP%2BHeqbafdBpjL4L4DmXz7rWg90Wf%2FCeN20FeIhK3cdfxIJknqhesLzsDu2XPJj08V%2Fghn2S3zrETLF1CyepJ2wZBBOLZ8NYZYVRh0%2BxIcYUEqEYjhyQ8CGOFjV5h&X-Amz-Signature=538eccf688b7f525e54030d1c587302486a84f8b8b9f74e18227c3fbd12932eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDCU64RO%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T170741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCPPNFr4oIHU7FQOeqSg62MTidNSkQqjNop1e5RT0H4iAIhAPnVAq%2BBl%2B3TvPGZBbl1ajqOY2rvD0CEdWevWF2wmR%2BmKv8DCDEQABoMNjM3NDIzMTgzODA1Igw1EIPWMSzyljsR5JIq3ANAbK9QuxFqtmWumwN3pZy6uaw%2FVKZwix0Jlx72qPq8p0L9AhhOh87Ar%2Fah3JmFezmEfBag68Vm9hHTfgwYRX8SlApeNnl3R6GCZNWoKGqjhmF023WbtTrHCJMjuEPt94Bi0PFhTly6sWQykVYIGu8msLhFmi53MiVYePU%2FmOJOBHStt0kk3ML%2BEUT%2BsBoh%2BBwCkICX8MW4p1d0u%2FZnQUESjGLm9PSCh0TFoUdAC81wjvLEbeR2C74Pd5KxkCumFjVw0v%2FVUXWDKHyMFpmoFu%2BwBZDVr1yTisNQDyfxAsMCG%2FELRynD8kLjBcn8xhux6ChY8SovOIEafUKYbu7AwAPVLXrgeJon9FTvU3DEBp7UdxKtoxTy9DglxobDNdG8fS%2BsuF9AjLXFC6LaZnhMfLCGlMMijW8DkFEeaG6WqqNsa52yKvTSt9DqEFRX4bUea8C6K9MQuhb4IwbLM4nU%2BSimCQ6Glf0uNLWKUAhnC130HUFQHeiOn%2BbXOxonz3N%2BPNA3brCMcRobwXTJrw0mmdx%2Br48%2F3sPV5CJhfyaKU2WL0W18qxgfmt6UkzfGMBQohd9eHsw6Qejw9LyBxYK2KsRw5hPdIRzLgc907qI9zN0r2gUtz%2BouTmBKZvpJ2zCO7J%2FDBjqkATOumtC75yUhUZrqePPNbQFeaKuby4UZCH6zJ9UKEPem7zsqZlV81zHe6Foeo94RuZRlI%2FbsYmXOY5Z1pAt94Huf2IBjOpgNE988ISVFDz6ISCX2GbgF7xXeX8nuinz3Oz3BWLCbpES5eUze%2B1UYYB0GgD53AVFibbrVsmS30gI0jO5kEBBSYBorpRlIz7PveS6KiZS%2BbyPc0tpGTktPvsN6zW8d&X-Amz-Signature=87429d7e44fe558695262285d77c5c218f1a7a64763671214e93eab8a3505cb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
