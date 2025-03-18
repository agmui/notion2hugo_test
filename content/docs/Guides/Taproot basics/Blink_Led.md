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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WU2CEYU%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T161005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIHXq3mPXfOupG379ArzzfViUNRRWE1rZFcaL3Y0laJFdAiBxaKeqcs0ao1HxAGAuIPCCUUYOV6XlF7k%2FuYFTwAFx5Sr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMwXbzLHPTMLRO1GF7KtwDtWCCg8L86EYdSmB7fVdz3VmsQBU32hpunbZOlfDi0J3M5YYDL%2Bf5uWmMsp1KhPdHcP2EuPCqM2jE3p%2FkSU1%2FDXtbHqpifXnzPuG21T9weROY5bsT20x95HFy67WDbm5nYVcj0OgpXjZYiuokEgfVeeRONJazArDsEakKM5epRm4GwDc%2BfRLUaDyDA93PpFk3KBUeFEjAlvsu1hiKSosK3%2BprBNp5ypRf981mgGCsKw0MxVmCFIuxuW2N05Tyf0WEEzWrnCldk8rKggX%2FM%2F6v7VKvXoPie%2F54EP7xKE1z4JyNQD1BlwwUduTt%2FxD0dIrXnWrRv8b7Jsg4zvlF0iRmuB69CtovSu%2B9pQa76XLNr7cRq87y2exOHTwO8DRYaHxTIe7SgGIHE5b%2FX1xMzGIYkWgTtRRekUPcctafwGlRdFzpV2yrUACeSsVj7kpMM6bCyKpmtDj9Z62oo0SHobFoCgEasE%2BTN4IdiXwrrD2Mtu4KU2aYMR%2FLDhDz826ws3XVSZPFBAL1iNbemPBySnEMTF4my%2FIngnI5pwjyOujts%2BfPpGFRAQqMiYsc6kQTGgM4Z4FmMMVXrTdBNMhhnKtW%2BRiUPJkXq4HHP8BefB9b37WGALzQl1%2F7hgspJIgw77TmvgY6pgEuNCpfpWrN1ib6sfhPk0PzuT%2BTs1g6opox3IEQsH9Z79JbVVNzMidbuPz9iJt0%2BCVJekOVQ6zehstGI2Qnyed%2Fr61Qly58dzLy%2Bmoi6GihLitY%2BI6vC9gdEZiGrOK32VNj4JXO3S0X96eQnApoTAx5a2LIrFcveieieSZggmfWz5r0IDFDJj15jxB3O6%2Bp%2BKxJalqjld1b3whcGplqNAJaHHLbcOI%2F&X-Amz-Signature=1a57cc255af89b6f70301830fc41d150598893c73b87cde57ef546863d0db0e7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5JVJJLO%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T161005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQC9CMIG%2FQJXrylejR26YlCOajYiuochfKD%2Ft9EEAIF6wAIhAMxeoGWNRvMzYnMAzggRyS%2BKbSIdytYUDfeUiaVTDH7tKv8DCGAQABoMNjM3NDIzMTgzODA1Igwq897IXqdzcIhlNGAq3ANXDRZ%2BrAgS0QMPYIRn%2B61Z1DPL8FPkJmbWBEjeXYMC0154jrQ0L%2FGdE900s7QBrJfduXT2mp2cYVlzDgl3is2qtDXovDsVn0fUGCXVELAyUtlbAOry5IhRPtorzdBktr%2FpAWA2DS5eUn%2BeQpNpAQ7gx%2B%2FNyZpcNMBFxVQ%2BHqK6RXzA5aTm2%2B0eMmgGWa5moYPR%2BKw%2BQ5da6Gb5IjnhN18NcJ0QZsTpl8uEkL%2F8hjFSG68AY6ge8MMD3%2BVaz%2BALFq%2FcMxuntA6ZBEEneB4wyyB0i8YXn2hfuYMtTQR3%2FRqBF8Wz%2B0PchoQsPtxrAC4xJpwCXaXTvOo0VKFDOA6FtJY1g2Y7gv9aOpshTZrQN6s121p78NqDS%2BS6nTzfLGUU4oMHZmDhKyFwoTewJtSlpKtbjAHSSwl%2FyvjnJheDKyu9GyAn3XNFH2Sw949sWtFbug%2BWTbTdJBCP4f7JmPfdW5Br6DkdFDLK4OMZaopdrarmEW%2F8IsKTbJCRHMAb8d8ibSkEqbtp8GPM6GNj1HbqFPys8%2BVNSc3OqGdtx%2BtAgp7ygW0qL%2F57uIBmhkYY8NiyeKhLW3H50pQ05vImrtO2CJDOIhOT9%2BfLU9it%2F4S7fpuHCONoL9%2B17FDbXmG74DDYlOa%2BBjqkAaPYrubeveSuWff%2FDK0HrfHHEZ6fZvOq1X9f5lQNM%2F7MdL0gBaBr%2FhUrkhyJuiw5z1R76KnbAFXIt51fKYH8vPC9uMlt62ZGC%2F16Jz5ZL2VkvC0iPoVbk2xN0QXkyAXt1xtjCrrWg%2ByABxtsfi2zNjlw16AoKxQBDuwOd6BzDAqRaK6DQgV%2FD1NAdTMT0IcbqH2GUBqDita4xv4yj6qrogZ7Vxt4&X-Amz-Signature=2733be107e5def079571aeee36259f0674942ce2130aaf29c03911eef7473f06&X-Amz-SignedHeaders=host&x-id=GetObject)

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
