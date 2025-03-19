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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSM6FCXH%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T210713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIAkv33uw29x6T8MUT0E2Gfgm%2BDO3qF%2FVzuF0zW75e0I8AiEApWUwNDM%2BiFqcGNw5JRfu8QET%2FJfCPvUrZK6UhzT0PQcq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDLvgbfF9drfQijmRlircA495yvUkEtAZ8CCezbzTEzA39kGXvWNpVCsnuSeB%2FQsZ6VM6ChMrTPPAN4VePkM5mIgnhnvBBjJgAWExUFW97z2q3fEEMCk3S1G65%2FBfEYJhl05vpIOdjngLSl5vKmoBRsclwWFF8fQ%2B%2BUQzANkEi9vIECl%2BZrIt2UMbaKc01wzhB5pbsch%2FPfXgR3eUMk61KdsmJ7lOWjmJJ214zTxoeW703P4YMx%2BbHqFJnRU2bKiqw8crJoCIw5fhjsu5Q5uR%2F9GxYbhcn8gFAx6u5II0QNFK30U0jdSrgAbpKAFwqsjNVIkhuwxeHjyY1KgPvwC2bc8WKfs0%2FhOBUhqqq%2BgSyzdZqzdDFRpxrsYjbyAJjj8GUWBrqmO%2BFdhzGaVdI1pFX8Acx7rLM9R1J8mwm9TotY%2BDtTSp8uLDD42R7cT75H0uwUZ%2FyhpjwD%2BUufZ9PVxkJuodOP2UnDo%2BevQEYm4AvsjQl%2F%2Fr8%2BJmF%2FqS%2FZ4t1nKGW8fOukkljFjDlPPh%2Bs5YtSjxdVZxPzvDLlqKCiHlL2Becx%2BF8kPFrq%2BiKiMgyYA0s9Wp%2Bz95ie2bdBiqd8VEdM8ctVgqx5V0zo7wvyIPWud3xWfeSoi4kLu2CDPEGEML25E4amOm3W9%2BZgQxMOXY7L4GOqUBdX0V7Wa2%2BSNpL6bSxzl6gT%2BIiYs%2FJfSP%2BRllnSfFSUVzpDXoDybq5TNAAAOvfNZSCmC7ODgWXY8QtE5oiTITcUtSAR9HECglFWt4rkr22YhTae9lh0tIwB0H5RXTkONLiqA3zfFI0bhJ6nBG8sSmu%2F84xkh3ovq%2BiYQCvVM%2BZfvCsl2KQiNQkVCw6T0CY9XSjH6pI0Pk4crCSoR7SfBVRFhCKY0F&X-Amz-Signature=23eb553706c0226ff52f3c5f16d6d69acdd9e3bc0b8b4584fa7b9d6b51dc5c3d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7YEZ4H7%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T210714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIAi%2FZusJyCTqsSrB4j6P%2F9mwLAbBd5XD3RKYywKJkUrMAiEAy73PrqkKgcvV82b1gVIpPutg%2Bb3aLuHd%2B1x95lAadYsq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDIfLYw%2BCmJBP0D7wQSrcA7GL55LKbAxszTopXXPCy%2F6YslU%2BRDD1wfvvDMI2y%2F24vJNzGuRaR2Truy9jdgyxGlZMjSPsEgb7vXO6InItNTHibu23SGF0aAmUo5UFvmtj0MqZH8O5x%2B318PladIBTJx6iJIYmBgaGsj64NzvV6FamdLoL2NxFkqP9S9ToPGU0HtXNZiqoZbZ%2FSW2wAK%2Fy2zlfw02%2FuEYXH%2BvOxFK84wYAQsUNh3R%2BqLsWHvcFhrLngmIzt%2F2Jq1bCTO5t17440mf1co%2BWMqLa6RXmUH%2F%2FGqLCeVZ7Si90vCPjBpsDgqQIS8Zi8EiptReezu5ojfL1DoBvyzCJVUw2HdvHXdsN0GYGOVCQHedBP%2FxlTKntvkT%2BEEPmkUUeaVeubrgIvkvmAgKTT2ox%2FfhJaHyWMCjIlDRF1M2rHjw8sMAcTSR%2BqiVw4%2FFzkFvHb42TEdNRwDgmn0z%2BPMOBH5TZ2qg60vDiAY30%2B01uRab2tiAvcxbTishfL7n0%2BNXM6b31MbQUgZw7KIgW4kJxgxQZ6Q7u8VtEtPaz0tL%2BXO5e7jezgpr9pgPgBHk8DtCBG3S2NPWKI9fxx0wH0zISXuuheHnC1MLFB0A0%2BULxqPXT0hnFKVJCgBarM%2FhdHMwao%2FpFK%2FbLMNHY7L4GOqUBQCGdRpe1pwZZxPgh%2Fp0acxXF5WFA3pZclafuEEJazzRbJbWu%2F%2F0GHuIFkYSi9RNjh5X6swPviKhN0kXLY4B3pMR6d44UWNs3zs8SbA8m4zCOFUrAlPRPmTozDyI3VvMTcgvQD4Gz97syd5MugvqinE9iiMYy%2BkswDtknGuunuhFXrLu1zYZZwZVtrXDjQaF1xWTCJCVh6Xcx30MVDENuaNzERDb4&X-Amz-Signature=709f7f03513c24dfd6a8e2f9786e5837e495001526466b19705bc54d40203734&X-Amz-SignedHeaders=host&x-id=GetObject)

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
