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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PRH7XBB%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T090740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFvZZ3Fcc0cc2bCUZw2cg%2B7Z8TyrYPy%2By4Xdvp40HvxgIhAKUzsUtesGc9UGHytGQhDC7YcPMVzdCP9rtDbwrnXqsOKv8DCFYQABoMNjM3NDIzMTgzODA1IgxHZf3JygCCDYHvNv8q3APlI%2Fo4kX4WApvA2hshyxFEJA%2BxDoA3d5VUWs3ds2DRFyUU9VZX%2BXhYspLQEuQERkWNPu6feYVTabimBH2HbSY4jH6bVFa5kKVElqeuFxcpf9cwL5O9caH5rkZpdXim5jhu%2F%2FoyK2fkoth%2FOqn0UZu5j8PdxGhZ9MjRMO%2BuhqZ4pqXx728wOWNAyAH3mSXohAesKGO%2BK9u%2F7DAcGMKOmLTeTtPrm43mW1QuMI9tgnEsg2JS25%2FPgk8uidxlji2b6Oy66AaBAvMBYmra1vPeWsmpyO1xGKU%2BW7SBoOJYoGNpvPnANMm%2FSaJcYAuRRBaypKtkVFXg1XAVd2i2P8O550FCUzjn7y%2Fheu%2FMQxlLcLn8Q04vKoyyNKIH2aJqSdWUYbvAumpMmDFRLS8OmYED0A%2BWTY20VbVYpxTPv8zViguXx2aWmb8dp8jo4Vn8ZcfFWGwwmeirKrzJ4R09in4dTRzwZoyTsox9lttfIUlGQ6Ktf3A9RxB3lRUoSLJNTLglJm8%2FUx1uKjUOJySt3az%2Fde2REJA%2BYZ9Tn2y2fQ7dqQbeGY%2Bp26zsuBLs%2BWd7QMwOHzeMyiXTtTVnwu520bDFQkmba1ToWiUqSf8i%2BhHXZ%2FN%2FUIHkZdgaMvZ6XZdRlDCv7bbABjqkAbP05QBb9m5AqCXCiYHz3qwGE2tvOL7chlBjeo64p1BWIup5gCpjEcMCsy4FoDcmKSjvSNtQacPUAGh0NoWg3%2F%2Bk8F8LcvPRxrBe1Dde18q22Nk6F7U3M368lKXojfYQ7dikH5xVH1EULC4rZsb8zLAse6SX%2BnXhU9sBExo6Rttj%2BotppBfEWSMPiSMGq4SEXpXt%2BsVgQxZMsi3jq%2Bc29F8%2BouZL&X-Amz-Signature=f8ae216611cd88a2adad223aff368bf3e5daac89107f1e180b57cc34a9a61fe6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZN2JRTFH%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T090740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAoFJvBv4jSR5V0LJkQpTysh%2BSApcBLtBtPtAtcYCKurAiEAqX7g7ArIrKyzS0GvN5lS57xNp2%2B0wVV2zDgMuP79xv8q%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDJk5%2FmBCybcp1eowGCrcAxyzUvDKOnDyzuAAkMhiw%2B0lPXvMWQE%2FyBYaf02nikbBSx9bjzcEE8WLjzlEv9iiIccPdZoL8jcPosFaFKvXHw%2BLJlK3X6vey5KUkOccgJwBtlc1%2FDApUXJEOw3XGpaJc3ypir0W1hnN53hhpOTaT83MJT7IOVnJ0DPX1jZw2khXEgNwAy0Bhukz9i%2Fr6oLMjK9MOQnA7QwP8Hk65kV3pLrAUWKTsrbzDzUKUeMn8%2F9qbmnFVgRMrcijOmQs%2B%2FtaoFiR1EGkSALbq2rljMkxH12PUwAY4AG0YAcVR2p9rnmNXdYP1W2sSJ4qF0YvnDmDWl3Wd5TkuFyWiIatzET%2BzKsvdk81T6KfyURO9xctHmrS7VW8UM%2BXQsi%2FVgwyGkbk16gl56pltPB%2FMwxDTjjhQpOvD5R4H3pmODlqpE5ikTn5s5f5qdRBTjYJp%2FUV45AoEZ0Dg6242djGDSH5P969zRZPAuo%2FF0IZOa6luioP9ZW7fXjOHWUBPBdrtsD0RMvBNrBZ9Q%2FsmUzCrb7jBGhJSsOiZuic4ffBiixSik%2F%2BXt%2FHpXO0HZGb7%2Bii%2FgRujaUTpSvPhdA3gCtxMjsGsR2nrSlT%2FyHkR%2B0Lqgqe4v17MBrfSF4IVeXED%2Fu%2BQ1T%2FMIPttsAGOqUB0tH%2Bx3FoCu6VsCUXbgfuRmM38KrZOEUSo4dKoeXicomal741miVR%2FLg9asZ0D7BbwhcsKX8JLdndGJtAihfs9DMOfuOiG89OVJIXvwOa8gEZtz1RWhutkzUcbvWv41GPwGgfBibKR2AE7agFnpp7eQe%2BIxEHWFssaIamlO0z%2FWlA8VZrlgwdPu%2FL9DOUrEvEV11wioeGuez7LsNQg0pUthcGChDd&X-Amz-Signature=39eb55d60e5f1bed8254904553f21bc62e919a0ae7cf78c2dd1af1b1678625ac&X-Amz-SignedHeaders=host&x-id=GetObject)

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
