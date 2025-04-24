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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EWFGFBU%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T181037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF4EOOBtOPsxlIXUmGhCWG4%2BMyWfF3%2B1JuJ5FaArut29AiEA8JtG%2FnAav1YJD5I3jKHzQpLiAEMOjnkwoKA63JB7lioq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDOLjH%2B3BRD7lMrHmoyrcA2KlvGpVTbqgG97S7EPzTL5wQTGrwKeC3FN7EQ5BioqfAYQY6FTAxo%2BClRxr1GtHWgP264EyJevFJlLGfynnpkjj8YS%2BBCq9O5IS1CmyKEQIMJsN2aFfcJN23%2FtaL1rzSrb7NF2p%2FZXkcRT6uL6e6eVgnuRd5QVWoHczbeBlWyRjO3iJipnSY9M3Lv7w7mrYb0wghJFGwbfJv7VUoviLobSaeixV6sanZ3w9O6iPP5ItZRN71iWmXvVZsJHdGvot40IsNHAUrWh%2F67NFIGk1lcUCJnn%2B8G6uOCld8EA%2F0%2BmFJyDlphhAhbedN6qMJidOxeaJZ578OmUHSUSy%2FI5VpXnDGUrXkEuglSBhQNlxGwRxDH6K%2BTsJga3UGDNOIK%2BP12OJs8xQcJaCbFIiHHKQ559IALzUUpI7WeqFmTND6PKOGsSemLJk142Gz2wo6rbMkP5kZOrRBGUzc2Bi9EvgDcosFl%2F%2BQQM5722BPJJIUhZku9h8SJJIY6wdcUg92Jutgjo6jUyM9YnhwPVgZK92L5T2vVkgT1Cc7pgegFP1Iy5wswJYmWCCsejldHAE2mYx4B1bJtsY4VAtk5YU05dps8%2BaBVrR0a%2BtxymvtEPVWS8jcMgv7eOkawVWdgu3ML%2FxqcAGOqUBQf40VpouDOgQ0zwBBFpE%2BreEjrXqQS%2F9I3Pp0ost9M7sCMYrIz6%2FZUH%2BPCbof2QiPrWBwH8tIybN5Mt2WP7M0cehSdr%2BqBEHAEVS4jWbGVi%2BznkRiULeiMrb72SUEuthI%2BuIMnRUm%2BIIscjdCucEhjh06GktGDLPfeMEN4yssl0irUmBZeUjpLXQ58NrUYSZwRWIliV8ZIG2odUn9Tqx8lBswPP8&X-Amz-Signature=e8bbcec83d41ca67be8c46faa7baf309b94b8d143fb576c6cb05dec5381453fa&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EE5OPJ5%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T181038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG9MFTjG1YYUS%2B7c8Kd%2FZGU8fC6kUU051rC30NFv3fpIAiEAhmHqk5Ndopnou6w2%2B8%2FfGeF26NzljOu%2FKbdo07lpA4Aq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDPW%2FUb7RsPGBhvxKVyrcAzQUv2nPPiKQtFUlp%2FY5uqcsSRke%2F2ljX%2BZUGz%2BkZ1XB5ZkazPMb1HxnSJKZJCN5q7WpUr6hOw8W%2FGRlUn2Ta0k9bTNan8wlL8gN%2FKnjyBEpzOMD2NS8hOPz4Q%2BehqOAdkHEqa%2FZn1mmai9wsvXzZGH9j8yZre%2FuqN1y1RIqKxrSCv%2Bq11%2F2IbLEHQmMiVREZJEQm7H24i9ls1yHnJ0DZapWx1fLq5bnpK%2B8jaakvEXyS5PDXBKF7MTqW0L0anVrZtknSOpFYLqygxEwCAp%2FFxHQShZCIo0XaEssKBHOc6%2Bu90lG8tUlhr8HCxMkoq8IVPxdehQQPyIyi2yrJWcsy%2FOpD5Gu9iGCmhb%2BAGPtRzMbApJzTI7cBv70l7kqVlubdjMwVekqj8CxwBYzvg6KXHBLtqAvNqvOzAeZGlXEMWipmjphNdwuadM5wuxRg0%2FGZGgNDLLIB6WgmB1zmRituwEk30OpcuGKvWaYspxGoaK%2FTrL8CScLl%2F1MjOEsOpiJOJgNoqSvxodUMzbciQ3cUZ3JLFLJGNlr4nlMgso9Dgf1SykuQehCa1uSctkqqwYRg262gscDAGiIYw71FvJZ4eW1zzN5da8VvJfJrdxrIZgZ4X7M68p1b223gu5QMJTxqcAGOqUBcggWSRUosbHZaoJP3bGioJW499s7AePCYPK0FzJIaVmrcJN57sztplZOv7DjY3Qbqr1hZtFLn9grvgf8auQ0Q%2FLBl4lsFlKLySNl3MXKxPcDsRkHEPsPltkF1DO9gdN32gqpI0YSbNz3aLBwiZvtxZyHBRFQl3e4RMejkbWY0imHdcdMOxQKwoCtuWW%2BGxfSig90K7XfhohjByxaR0C4nreKx63W&X-Amz-Signature=ae12302d7fe3439e30fa2f85e7262eb6b095e92f001c863fe849481143d44498&X-Amz-SignedHeaders=host&x-id=GetObject)

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
