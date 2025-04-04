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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNRHQFNF%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T200906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDYgoGppoKYfQuGUaA87tXVIVxSd0OLTNL5JDIPmiAeZAiEA2VUWmdXlMCCsHinEniSvPZzPC4JVFzpf%2BLLGmZkim8Qq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDFj%2FxzEOTX8niRcNOyrcA%2FUp9DE4oDLI3Fn8r2YpSGT%2BfHW0fZNs4jTxlB7w3vBMJkU%2F0aTRsVNiaThnaArV0h1TrZdKnl7m4hsrh0zn9FV%2F%2F%2B6ynE9u0H9cVyTGKCf18IMmv2Agx53HHHHPPmHr%2FsRzbhsErzfmTeMKX%2BShVnFlsAWoTHnlHZCu9x%2FT44QzBLKemXb72CNaxPC9Zp4eWb4oFf%2FLkNpgqOCUZDWLjjX3rt8ytPeXUCQkslhqHLcTxPyzuxaohBxqFO%2B9DNnl85FpXCnTZ%2FYuw3XgF%2FvNjHwYQl3wYtz%2BGOXxTmmC7SAVHarusGEVnDCdGpxIBmJpBjPxBQ6lGjL35cCT6F4jdYxQri%2Fl%2B0jIq25jgiMOfL2hYpMalwA%2FxPf0fj%2F1onlLYfDkyT%2BdnNdKlyidAcU0HHdexa0RgUZ0GhX9miQTPTWbPY46Gca2ms8tOHL1UYvcBJiV6ao%2BfgyrjaX315rxW25ejg37UmJCNOC2jJi9kdkH4nf337S%2FTP6phOwT%2FLFE6NS8iX9aucCHWsvt%2FKmovSYB4RvMGVOEBgQX%2BVPN%2B3cHnR4G2TIl0mUBfoHlIfvZ3%2BwPDTYysoQoFvLpb31Ta5J6GMO7UhiuKG9f03YmEl9Vv2w1iBwf%2Fkph6Yp5MPbtwL8GOqUBtRgZ1a6lkQItR7vpY%2BDRjESmvE%2FeqUIpEiPwApu1Y7CVuIoE%2Blhzmh9WZbB%2FVsXtwDnAAvKL0hbHKwzxeSFuiCU5gE1%2FdorSvQvVNXQ9QQXMbFHkrTf9NEK%2FqzadzYI3hMvVrLUY5%2Bo3FK4AsbodOuvtZoitEJFQexPphRbBulUqka2njDaR%2Fl42xN%2FsnpKbYum2x16MSbkNVuYb%2FDjbkHylZr9C&X-Amz-Signature=a04cfc95ff8d794cc8057bad480e9e53ae5351423ac56b4a7e1f67605d44658b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWJSHWKS%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T200907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICqxSAK8%2BvarBNuoJv%2FtmG3%2BJYJVB5K2ZWL6PBW2rgB7AiEA9n3Gtimyl10BpA1LoMzcT3hdret7KP5XIMHgCupnZKMq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDKDZgLgfBv9g8EPl7CrcA9R9R%2B0zM%2FwvwZwiw34ewLxUseu%2BLPJB9qmkur2%2F6PGTqhya88LuqPuwN2jQlN%2FdRk3xvnBmIUtMRtkfz3ExqVC%2BjLSRcb6eA7Q5mZyRoqf%2FZK3OWsj%2BIswVtrZ%2BgX%2FUmTrt0DIzUvGlsPaxwls9Rg77zkB3MZ4cca%2B95fW5%2FRhQi2cwalVSsZo3HSgFGoW9vhUVidq1s4XT2OGlt8%2FqdOoi0pjhDJABI51lC3OdIkKC4B2wf%2BmTQEtv9A8JC3i5CwmRoDUL%2FNQsNPzevUsuMv0%2FZlFknlw09Sz9njntjP7WqvbYA%2ByBWK8FUoD5SsjG2AexujK0wohRPddAKsTcWuELOT%2FUvMKqxCWoiK8YMDP%2B%2BBY3LTlS2MwxHgIyRKUhRJ%2F%2FDu9DIPHaXtJcWPT2Yawp9BEKWffmOiNeVJ7wEKpB2OQlCWV95Bq1hg4kxdcD820YfD1P%2FV2g5yby3%2BV3OfoxFbbPV0wDcioB1WL91wc%2BIR0FGDsWnAp4kXJnFFQ6SDYX0rvacr52Mjj9nCd9%2F48kTUJpTFAJqJSvPA7plrpy8WiVdNQnv6eXp37Qf0FZO%2FDaBDUaGlOnjzwkQV9b4pOaYIFJPdL%2BXjBsQ%2FxHKHI5MP1c4mET3ff9HfGuMN%2FtwL8GOqUBFHV7%2B34lyoE0kykdbjc0sGMUs8mMK5O7myex1pqgkC0q82cFdDkoQn0V66O6BqYmOl0G14z0U2n2x91jdq9cX8v7AiZMCQjLRB9s2Z4xwaodthTlrUJwMoWm9bHOEwKzq5YWK5YoQFYoCWtOzEKZjK8AwG%2BAVfOD0gF9cq4RyNC51k5v2mJgoEH5N8zzp8cKkeTPtz7N52YLuW5TusMGRjGWkWI4&X-Amz-Signature=f9a96834c4cd0c20fa9a0a4fc33d275ce3ce8dae8f3ecb4ffce593e36721e92c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
