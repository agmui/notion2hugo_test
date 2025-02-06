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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UIEJD46%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T050801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQDkmApOX4dQTPlbnO7Cgi5vwA5kF4FgSvB1v1GMRSjC7gIgZZwIpxg1ugjWlzUwyWqeQJsvsEvsqie3G4DQGcbyHZkq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDBEnexjaKyepgGWyOSrcA4zAa7YEyZ7ZooqBq%2BRTK2bw%2F069VkUSJhMxop8CMKUHOP%2FSYO26obQh0Y%2BSgM9dVD2N2gPo%2FlWLz3AwTlWbiorvnb4koSVZzynrJWSaJEgqt6lrU3bluZ7rkdpG28T%2B6FmFt4S5MbQt8a5wRHMJosxTtSaZFPLdU3gSIvqunJ5rSAiyWW4NhbX3kUws3A0dDmivA3d%2B%2FtYh0A%2F%2FG0o1LXEax%2FQMRQasiQHQOvrSL1JU6M4AMUf5e%2FZjYQLVfrz61RBxygT7RDQgheG4mns0CypLol6r6gyMcBypV7f3%2BazrB8iVqNvETCeQ7QMRA%2BhMb1GyUYUuFqfVh1ua%2FBup7%2FAcIBIz0MhTLpSCWtQGr2y6jHhp59kK5oDqep%2BWKO2jwlz8OhC6zYMWGqWwUVsNUcXfDqbn3IeDMEeLFq3Xn%2FUnM1Raj769hp02NBRHK77pUhfJmyDW%2BFBS2VBmREEt7IWlC%2Bk%2BMsGYEL7hSBs37HFg8DydByoQT52hNF%2FxKB%2FUtnQ%2BWWALHRdoucUOTbAIof2kQXH1EoVPIQq2A5LCsdBc1asTPIDDnjymeCCqWXo0cEcGqnpnOXDHjEudEHl6FGnMSslEkEINhTlCA9H%2BclLBG%2FkEE20QJg8ku6tMMOH9kL0GOqUBVNYE9669AApvW3Q%2BqX5t%2B2Sp92TeiwPU%2BALLL3hiAIqQeV20H1LGP8C0WDPrqIazx46RovdMQLSU3O7OaH6eSakMDxwJEUKvEq6IPo7qC9LmtJcSwu%2BYiHqVmqm7zrCU54h5LnGhTF6zAwQ%2FK0jG31Cc2so3qphfeLClClaXAF7JrlkC6ECL2Sj83f6UF2bSZHmrLcxjNKTbF6jvsIPtqhr4Dw4g&X-Amz-Signature=f81f7ce9461811bbc3a507201692931a6a643739d60297275d0b23f21dd27c9b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674U65C4B%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T050802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCICIiiTMvFK5iLOWovgTgVgRb8Y%2FAzwLGesSsNpdcf4gmAiAvL8P2ocinOh5rllgG8B45zGpWpQvtICFnKLNDA%2FkazSr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMkpJ1%2BSLPTpKNrP7GKtwDheywzbXB0XD5384wOATBgRoowP5RJ3159Ofgxw%2FVtQVBfwwJKjMInp212IjmcYb0Rb%2FMdbtc3sogVe1K1NIYVTeUY%2BUvfa10xoEhKpoz3OHF30U1pjVTkBdCM%2FQ8EdluRd9189fvrymcDhB6adiMwlxTaqF3TJdMR%2FEcm3t88dd%2F0hocZmScoK99%2FwwEnyip5aoV9Wg1gxWv8eGodIJsjHIHNC6%2FatlPrJh3PSATSPTcq91HVz7kzpeO1dj2S6tCZ0YuXqHcLkXxrlnRyDRvzZSEOpYJPRYhQ9VWHx1nnGUQ0DFvsn%2FaQeS47187sQ6ZEig6%2FDywYzQRaS%2Fhmy4dSBweN574%2F%2BAOm4XiFft%2FSTV4Uz5rzMAOFJ71002%2B7%2FkI5eomUbJJ5icU0Ba2l4vp1hsRep6WtkL%2Fzhod46EuLTqwbxofhc%2BUZtgyXY%2FBAoDkzojVYkPosUsdyJ45chp3VbF8G8IuMlJGY4u9pFkP8%2B1cemcZY0cjPmdzDW7QNfdLTsySiTkTwQJJmZgPRXipgLKxxYuRDGr%2BYI3IBEwkLisgwvOFV40pPUjldQpi%2F1MOj2N8IzjI%2BphyZ1fRA07eWANVsg36g8uRp8pO9PNif6jFIwp4fZYzNF0ttSMw1P2QvQY6pgHnc3oOoTu%2F1V4K5FGFx2ETtHg2fxX0G7emCiJ5ZFYmXBHUDlu0f1rdUg7IELcS9jF2fwHRXjLMmdgpTzytSdZXcaVNGXDzH6%2Fcj%2BH3RU7uULs2pI%2BOExKYgr%2BwKQ21W6qCbgQERb6PnvDywR9YCG21r5OVX5M%2BtBimm4gTII9jRpVYf6LzYZLgKiAwoCWwZQKIlvaj8aL%2FVPbeLrOoo%2BL3DsCvg04N&X-Amz-Signature=e653ca1817b658a505c0c7c7f892d4285e425e4c5b731d5953bb1bd826b4de08&X-Amz-SignedHeaders=host&x-id=GetObject)

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
