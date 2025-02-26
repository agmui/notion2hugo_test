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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPMEIZ2P%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T121417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQCZc3jk%2B8MVLJ%2Bb%2Bhm%2FHAA7%2BM1H6ImKk5pHjV%2F3ekQxGgIgDFqwmfjuRt74e8kdcquUqfn7Cdo%2BUVcnuvuh4uBgtXkq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDKv9UhNrruIdwyqP6yrcA4yXqKjbkY8JGrWuvOBVcFfMlsChAcwC7Y0YnzxXuqPCsq5nw4S6IWx6ARyV8zH%2BhddWP3vuPbNb%2B13g6PEGSrsNPtYjY56wIGABgSuVjZf8ux3CYHk53wM4swFFPfod%2FBy2KOhfTAiUZ2cMhGXWTAD2%2FuG9Gzm5pZzLhz6lt4zYv30RutwsQ7vWAv%2Fkm287TlBddooX0W8hFuy%2BhW7wM4OVMmIZza3%2BEumk4W%2BoTr4NFGXA5RNAJV7rTUy3pmMHXjf3hYeUu6Zsd7fAiGeMCL3a5Gh2%2FqlYk47CWg4z%2Fid0b8y6kO7cY3m49WZJu1wJMTE%2FUDOKVMm5Vz%2BgJvGaG6QPlMwirBdVstxooAMbuyJkWW6MioqKP%2F1lyvVDVhpUmsi0Il5h5mXDtuR9FKSAOxvkFmfgZfR1aND2YIjfty3HglDTAOL2Gg71vAEJTmZL0gkfok6HK3MU45IQudtZ1wue3i0eYAHNrLJJepXI1Vlc6XFm1h%2F3gHS3l5ikNwI7m3rD4xUIAgSmGo%2Bl%2B1R0p1uaaOrXpnMvtNZ2KKF1%2FzYTYfJ6v1pUkWG09HBlVM3ul0sAD2jipQttFToWoo0SmvvMj26S5xa2CgHvGkK8uGEZQV0jIRhZzWcWJvymMPiH%2FL0GOqUB0zexnAdDa%2FuNpF0j%2FZxkullTUwLl7BaylBZCLJDZKJcoxbCTlp8eXPSpg1hadAxjorfWwZGYW9t6qofhOBVUj8kzJ0VllPB4dbvJ%2FyTqVkcWFkoqCy8KtWGSXinAPpS64C66acG8L%2BH4EjFQQuNswEtbaQ%2FRa38y6Gx2Eyjj%2FJBQ422RXehrSOpzsb%2F%2BuxrNtilWUlbgfBER%2BN3AozQxTX%2FKFckh&X-Amz-Signature=864135afc892aaaf32779844aafc2f985ed6fb4ee90e88acfa6068a21e0898e5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3CS4ET4%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T121417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIB%2FXrKiIzMn705qbk4C5mQFu47sMNPO8dGBQu5UaPiFXAiA1Gv3UoAEVCRf3sBYemyNLVEqNn8PGa6ZlwzGFIPtIoSr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMtKvaxxyrbXC10cJZKtwDT3OpttXwyyO2j32oojAm7rrY%2Bar60ArAemGnIfsA4SmzepTt4QxLxyH7k31wUHwV79jSzkKkRS8Om%2FSI%2B40SmrwZEdI7I6O%2Bl9CqZDOOhZQ%2FSqNAuMlLVbec5pGqJv%2FJMqR%2Bw8Q7q0DZ3hTkZjy5h0EpHuuZQhugz5%2BhnVB5nBN6KjcjY%2BfuU%2FZkEM4eRe9QKjMH%2BByyMSXOl%2Bs%2BBJSselL7pMmFwvqzjWF8r1wR3ce9TeWP0XicWkIqD6slmOAgkpc3oonenRVQ2Gka6iF5bDzivEY4Ea1d%2FJpM7bBJBIVE3wB1L9QvCHvYGAxMSF9ZrAmaZ2KN7rR4eTjMHZn1z%2Bz7tM9q7%2Fh34gKgn3g5wXuD0Ai%2Bhy0HHpAgZMD1kyZLn1tLj4RqJmmE%2B1fPxDr3uW6Nhj4WKKWv2Ml%2F4oH5H8nQvAxbnAGM9KO4P0WkRG%2F2X7c9FeIfar15RORhxCaiu6jEh4oM5Ev6bgHxogKX%2BDaFwlD15AKd6%2B5WS1qpYhFuWtMZmYUUCl3Dpy1RPsIkK4fFS6O0khgYODmxMu400IzpsWZCqK3NPsnTCbGwWJfFRDf1mxEQVbObQFRTeey%2BACc%2BMKKIFB%2Fpup%2BdoIkVslldsEZmpTSJHvdk7HQwnIj8vQY6pgH%2FktCIz5%2BDAblDsvi0ZLnNTSdl6n7Vk61w6dkR%2BbJCuYb74CXjUc1BDm56XQXM1V%2BqggI%2FehMUAp5ger%2By%2F%2F5GDPVq7veCbJ2nsQ0uwaPBT9MGRsuVy8ZbemuLDtbjj4DenuaO5TO%2FyuNhyhpCD1t%2B3LGuxhIL5PJlEjoQlAlGGXnndERqerpc0htOrjKXHTJhV9T8keAY4u0ZBW92YUO8nSfI4oO1&X-Amz-Signature=56f2ba3922ebe28bd130f22ecc5828d16f4a4f04bd8c4212c8256e793ceb9ee1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
