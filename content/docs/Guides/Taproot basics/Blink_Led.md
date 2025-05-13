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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663G23FABD%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T090935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIBMzegiYye%2BskSARhpv%2B31uAEyqLG%2BlC875KS7%2FWDXEzAiEA4kdd3b6GxyA%2FIB%2B8n%2B9eaUJdWdfJi19Cm37SkeMLbdoqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLK8TYuCUUx6KQ%2F45SrcA27gEZuos44SLMikiJmmfuUGUDps4dACugmEDQHTX1exB71wwUubDivNwiO8GCK0nrI8FL7RAI%2FwTvURlPPc2Z60GM5%2Bj3QCWx2DEikTuBcyYsynKKAz9%2BlpDAGE4x0FnnK6DzRPQYQtZeFfaupRfROMYkIR6xB4Xk4pTwGIrK%2FYRxp9VpTeI6EzDkfHRLPpOUGYs1EVbk%2FaEW3eauso0U0itwBWSjFW2I2PzfMPX%2Fyy%2BKFWvlLvznzkG9WNOJiWOoQKiAavsBiFZghCwpCgWRQuJb3yK%2F2RIcpU1byv70P45t1cdG4GNuhh6c25OsIXRQbe0FgZ2gPVoUSCfT%2F2wQx%2B7Gsy2MCMNOJSgetXkFjP1SF9uD%2FKovuEkgcVjHu%2BOQ%2Bx568EzdsG4QxD1fRa9xwrHRMiroxtmMNRID9QuHmgWCJjUTEdNTp0%2FiZv8Iyrs7HtfvazGRn3DAYespIbQQjhpyaP7bEE2doDtXGCIrf4JyZ2karpDd1%2FF8dhRVuBU48uL0JAMizze4hjXxZLw7mCbPcSHEnndcQVmBNOekG5X7SKLL0RHPHVSrzOIhWpJmK30%2BFU1Q6Gi7w%2Bhz31sIO4B%2FA%2BrK1%2FkfOQ6WJBfMkfVvBGtcKPAA4SsiUEMOGJjMEGOqUBJ7h%2BJF0fto%2BUB1SMhNiUfWblBRuqQRFA7PWGlr%2F1n1qdTCduzedjitNcQ%2FgPy792Lr2albryVinETIi%2Bu%2BjBY5ltBeBa6vTgpcJGDYpcEXM%2BmSPFQw7EHvH%2Bg1qCCzYt9bBj7Yj15mAoL%2BYCP7NnQ9JHQXcQ3h9hGKLC2mURmUChZ%2FfMfBLsXR4UXP7GwWKIL3tQKA0RhpKmH6mPjjPfkub%2Fiis3&X-Amz-Signature=4f6e72e0849e14a6789f23aece6438b1cb9a55574da9f07e2c55d9fa4e4dcd9d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEEZ2FW3%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T090940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQDIdD8OxUlZEQMKG6DcBRHMDDzIXwyDfqYzkm5ftd0eZQIgBYxCzvJK6dH7oBeAWnxXsCVv4Foa5pcgtJSmE%2BcSwKsqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCxHGSfKstG9V7tPoSrcA%2FEFcErqTNAEsSVnQgLEk2eQc6C2LX8XSUbezdiJSZXQtksgKywSxLLbKyILMuyi43U3g2wI3YZLI5PulpKEr%2Bqq24KY1hvVq3OolAOtoZvUp5uxQdLL1Uk0p1t5gfxf4xhqNYS0tWI5nMpcQIVUyk1U62eqtIC8%2FyNkyO%2BKpPg3ObXWlXq1vHGdBFQvFUbnAk4o95addA6PJb6X15ZxCwnEheC%2Fvi2r%2F2xj%2B84EjLv2G5yDUOldwR18ZgDgQBXJ28%2Ff7%2BPU8NrjP8BJjGmz%2FRRLbc47WlrBrsj1cc1S%2FP01MmeAVzO797o1FeylMO1yNlEMgeokKwZB5vzzKVTB2J4RkLYsTyum7W1zrgHY%2BRVrzeIrHaqiRizACBala0MUhvxZtx2KFfHNz4MQOD6yPVKcLCTPQzQiBC9qQpVqN5KMyz%2FBpGWB4XI37V1ogV42YV5hEzsg9RLRwbXwgSe7tiidIrECq94QW3T7CH%2BVlCZA8DJA7vruB%2FVBYVtT%2BPijeyggb5hGr2Sw34Bzk%2F3podLs0ISaBDYSqsj5z8UTe4yjBSiqqRqPtAFOg6xWGXljGoOVmPxU1yYZ%2Fck1uRREvK%2BH0jAJwoQSZgxcjHIJqkBM6%2F9ul90TQiDbkwgUMLqKjMEGOqUBj59X%2Fzx7mMnS0o6aEL%2Bvv8ygTAPmGoEy%2BDAGt%2BUw8p2yFgReABGK9uduCRH3h5CL%2Btndw4fe%2BwLYyLGe3oExCUTYHwIYXzpgfuhztzXUBegsidJLr%2FgWstUxGL9uxLVf5NLzgu9b%2FS4zcuwDw8JOvYk7%2B22%2FOv25qo7l7KkmnTuw2EMtvx5Y0gj8UVwVieYJzNmV1TQJ9KdLlx02%2BJI84nQoCJZG&X-Amz-Signature=af24002a669c69c918732e0cdb387e6a9f3ad25a3974895c1d681016f75033f8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
