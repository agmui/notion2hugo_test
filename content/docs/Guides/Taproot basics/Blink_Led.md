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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXOABSMZ%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T061129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIFnNqsUk8z8PdWgPHuzJ0amxnBfaFTOieIt1y2LZqGUiAiBfQvbF7TlK7G6Lvmb2BSioX68sr1AjaV9S4K7jOOOHrir%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMPQXIswrUKVEiEHnuKtwD2%2BbrcSwWGfbPVtsVWD2HAkAHIQBOquDb8k%2FAqIeQT%2Byj8%2FvQ5MPPfM%2BRlQNtdCHlY07H3IVb1rfLNnVPWcmrEagDPPZIgHvDLt%2B124bNw4qxSdG5F8WtY2xDFWwmHaGZgMM1y37LJSAg%2BGfuaK96m0SloLJYogSKz4C8pzZG0K1iWyVlNUDn3nc2UETHD5pHwfNnsE25BKvzOPc3T%2FYXF%2FXPhA%2BtImJ1zZL70%2FVjttFRVrL1inVRtSHxP%2BRmBWKgrF5o%2Ffi9H9gXv86uBesHbUSMfnqDp1jtobPi%2BfGqT9y0fwg3UxZ2WYomUJjpwDotknXvTgKxZ5V1QLvAmyeTeUIaghPCKlF7S0Bz30%2BeEve%2BzaLI%2BbFrsbFlckvhMJ3Y6VgI4uewwMG%2FITM03eETpp6yTrWoHbjT9x7HeWrHKmXD7FJbvOn2ivWWdtez5XW52yDhbtMLiAcLJ%2Bd2K2n9Nzmz2jtDhE1Eq%2BAl3O%2B4wOtuLlgvddOjYIHcinRTaXYLXIFgQ35MS4z%2FsPsHIl0%2FobxbXlZIY4d09aMIfO57FYOm9N9FHv2DvE6EHGV2qp94O0ydPZ0ByVmjVKCOPLIxNY%2B%2F7keFFas4ccKvvCbjmiCHdx3SHDaVJujn7S4wyu3%2FvQY6pgGTA2DhwvGC1UVZ8Vg%2BsPgCNRq3ZhubQKFOaYlWQ2o9DbecyPIwusP1sp24lWDD1CJWfIGbxLkCVvHhDiDweMW95p7S1irUxSkV2rD0Q%2FMz5%2F%2BPhD9ANzjRMO11KhOuZgIi2u7KJmeayJ12Y%2FGN8SB%2FCBuieRw%2F1sDt%2FlTk6Bpv%2BUYEYhcAD4K76RYR4NPo7Up9i%2BI5sM6QwsGwtcApjaY8UQ7vReHS&X-Amz-Signature=9df7b946d459320099a6e0e5d41662a795408d7b2a2f58f8098a7a81eeaa94b5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634YOMECZ%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T061130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQDkhq3YjzAWOFslTRQp2isDozEKylyWi1Zx6lTo%2FmbHCgIgCRzKtJp40NdEbUjniwAzSzgOBXlCK1Dbb7gawKV1bZIq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDNbI2v%2BpyETSHBZffircAz00HUGZUf7xcxOH8xvGHoteCCxN58yWAOGRzBnS0SkGeSLv8Sp7V1speMoxKbAS7g4h39PJ9tVKJqoDvTPgrNmGmVz5467S0GP9ohMpLMTn5U80XamkyF1WfCrEf4qomVWqNwikAToXJEtGkwB%2FgINJGwnPJrZV9mypqlrjVV2eZbBdvUj0HaRHEqzNf4e09RdWxNwbgq3hCCyyJyWnXVZ6L6n5I6NNKjnmvNPb95ooEG%2B6QQkBIRF3XDdt%2FAlR9%2B2Ia1Nh7EuDH0%2BmXXlXawF424pJJZ2bHP0J6siag%2Bgl%2BiQN7LKEj9cYkxVXUojdRyOfJrCkHPqx2YpjekD%2BLh6ZI6f8u1FVTBthCWUjunPuRVTyTV45DsdZL6Hojo%2F1rdHNWyd26LnzeziXRZBsq%2BCMgdLtZQKyKJDcA%2FlUyjXE%2FT1OWWtR%2BTGH7GQ9dnsBHuFSmAZ0orBjQJuNlHenVt79Hd3TqOQkUbVBnx0hWGwH6IfABa5YBAwqAI0weTrZrznd54%2FBC1cCZUlEjGJ04NVDE%2FGy%2FkItDwRlQmuQMGxSlBZFeWCpEH85SQy40x8XZ7y676usFUMJ%2F2sA3b7Lit8lT%2FVvWkg8oSglKa2HlaqDdCObPYQX8kRSIcOzMIXu%2F70GOqUBNNDq9yiqMwCcBYiQNGkZ748F7iVpeudX2hHV9Oa%2FNJChRwJcJAmKqqVeXg43lSnpNV0G6yFcDMQMgqfWHOKgmiCy3qGxDOq3fPQYasWWQtql9jvf6%2FCSyECpEu38FwHjTaIhcw9kOD6hrykqWmWD5ln82o0bUbD40mmKbjJ014fpzK4RkhLG5qpMYOE3pzUV6Y9n8X3r7TsS%2FXSTt%2FDZDvHwPUdK&X-Amz-Signature=171ddaf29643d56c18f22c58e04916c7410960a1fbc81202e3f563e07e7ba3a0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
