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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMYTG43U%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T110711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF2cVKK3ZY9k4%2FJotxO1XQAOIaZLP%2BMJO8SpFY%2F%2BAtdNAiEA2E9Q3kzwYQElj3tAvH8fzTInTlelJv8%2F0XbBQ%2BBGpwUq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDFNP51zHpiU4gdbgTSrcA08hzomvFz6jNuRnz4Xy3G7nfRKLxLOlRELsc1Pk9V8O%2FRFZUR09yBTqbh5bkqB6joP0d2g79DFFJaxdwDuCE4tEWYmsLPq4izyBL0Oofq61D7HWElTUACEqfZwlXXU6Bn1E%2Fz17%2Bumn5CEivjduBl4PE%2BtGUdIqMHR7%2FE3SjfNeNSO3F7jiUIr%2BfLewlxiouRx3iHaOMzRSgOsIjYYjFp74nc7ptoo4A7n%2BUzhAb1SN2EOXS0n8LrwGpv%2FTKnqAtPU9KsxXYrMjLCzdGIAGiwZIlq7lmZcfhCoLV6Ztv%2FI7eL9%2B4P6tc8G2ybyDVekVOa7j1xlJj9gbhFrxMjUArlj1UK%2FUd7hmLoo4oMa6EvydmDQ9LeQDoMhLhOyXrQ5TUDuzNNRv2QhpFWGVbGXnDMyWbPabL6pj%2FILTX%2BMu0Z29PZ%2FPYcRHPtRBXJtnupPaKoiWdsCW%2FNU5tkUXOZgfgXZeOgqovyTQ%2F%2F1AR2vVHe8Jc5O7arwEXRbPM2fRCgXxK%2FGuMEtQNkTHdiDaiPdp3KklzuiX8xuCM1mI8pnY1pTdxJdsSaZLnkP%2Bj10DAIIIIJZnM5NUvPRCAScrIUs2mcUh7Hi60Ipj1%2F3KXwmrgWFhsrgbSgR0iZm96ayqMPmug8AGOqUBuFH2OIAsPHkLRefCQzOPO%2BrHWZQdfVq3BY%2FYJB6MeCF%2BnYHacd2c%2BMbeX1OUbhkuaJTXwNRl7nH%2BA3eoLfkYBGLyzY0BllEKxOWtE6liE9rTy8ONFHdBg3zZxDym%2FHHB1ToG0w%2BENmZEI%2BDhYdXU1DFlbaxBWr6nOnnXDBzH6jHbMVAlcLWr85ggJ6h9XfqFGyNHGUuA%2BmpKKCTYn69%2B6KG1rpfR&X-Amz-Signature=1099f6a4cd11e870c02b84b92a3f93c4b0068db0bce54778d92176571b0b2e01&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOCNWEQZ%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T110711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAaHBzZZ7%2FT6bSo%2BOw2ShxLtVsDFCHtNBcWcH272kAfbAiEAvTp4j%2FzAr6y88tMQGpnmrViS9fCNbSZb%2BXaOmHxNFVkq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDMvEjy09oSCCJesSOSrcA3R%2B2yPwuinkANwUrtm%2BNlGF6XZwJSA%2Bc12s8DHOAssl6QvlVYKIgKhJdsnljPwnkc%2FqacpT0tCCVa8HsyS8bla1FnhhzZjta9knUotJW4BAGIrF2pe9fsjq%2FlsaE75E6%2F8Bt3dFNaEqEIFNn0XUOijfoUXUVhpMwwRDMTk777m1caE5EQJNFP%2FC1Y5yzf84%2Bktilu5YFYplIsVmEZqhOOyQ0fzftoN09LqTAAaGGkc%2FDxInClhGxiA2BVmJxSszGUKyEt7i1sdJtWkzSqLz7GlkC%2FDly2YQjbOtKf9PZCX5BLpQtK4mAKbVHcKe%2BklN58vjpL5KZ%2FVvYIIC7gmHCuoykygwMUCsaMOWFrY6APPEtOiLl6qE%2FmOt1Gbc5fFVhYpyOVis9WCrehBwcSTRFeuMKiIuBJE1iEeqnqvcIW875BZSEk86bzFnMFhoYuuLpg00770O5g4iEGutGkomiKvFBNX3eURPkerM49%2B54zj8omgDEyZsLss5InjRBooUFXwgGW6VbfEnps2JgxNProAPR9xjj6WkvPmi8qZj02x%2BO4IrOUJwUse9M3V9uGplI9euBaNLam4dKujblaYRoulCPe%2FH4TPLZAe8rPl6HCDbm8f2ILFW8wyrv6PpMPaug8AGOqUB%2BW2ADu78lT9jA3wbQXq2e2PNGjJTMlLyXuw%2FcDmnhQt%2B1Cz3H4%2Fv0WXyNbEHcmFsZYPO4I3YcA0tzeJcw7uz8h%2Bj%2Bl0dkvMiXJBwQPciZU7H93KmulGB13RyAgQp9vSFJJBRIDjF1I1TJLgXbV7ubnxNZoCberui8002F2jEyjvG60IBeDnyVFyr8p8qcTu6KApr3qsENBjxv7C%2FcjrNQikRAax1&X-Amz-Signature=7c7e1bdefa8f7b4f7bb51c5ae57157460672ac6d3c4255065c8cc7a50474f403&X-Amz-SignedHeaders=host&x-id=GetObject)

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
