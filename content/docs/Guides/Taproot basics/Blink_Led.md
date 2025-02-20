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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNX2CQ62%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T050807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpV%2B6F3zvFVyU%2B1O6Z8U6B5DNQIwThDojOilZWPif4ywIhALNXEp5uEnSE5qRuo8cK%2BE6ad95fvUSzXp%2F6Jny9JLufKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzqB12wkvxyAdqFPlAq3AMeQO1PGx9%2F4r2AxpWqhR0GcELPP1IxyeLqBYG4TMrEuZ8hs7Jmaxj8fWPrr%2Bc%2FHzmTNGvaLObtlpEDG%2FsHQlJLxNlHpJ4jMofjitddwIWsXj6J%2FAEa4W421toym49%2B0ElnCTNV5j2gcYN7WZA%2F6697qGGBeQzuYkxXNvaa6Tt2HFxOgvRg1k9DGyOCuF9ycZ%2BLZ3GyIg%2FP7Kr5SM9L4RHdyaT6QxbktwSsLrRm6SI0jWul1Bw8rxIRTsNODtxbirmTdQ2uo6b1o5R8sKRsd2v0HZteDh%2BJpAJ48kN1nqy6TNfviQbQae0QqhLcq5POCSA%2BLKVfAsdaJ8xFU6AEBev77v3o5T2fLXiaaW4ZUdavXUxKrzabphdYDE3kpyvr46dqfa0rzypPAlY2NA8oEzNuUrjIqnFJ6KHNsE1F%2BK94qbhNotUa1buOcTbMi57HQo%2FJdxC5Jcc31KIM%2FwqcGGYBdGH2pGE13%2F%2BMxn4Uv0q0FxgJjbbR2nI5hikth3nqw8I2BwoXbnJpvIWO91hAOP8GBTGt95QIkY556D%2FvZQ07FjPAfEhvTbQxUN5sbwG%2B9ELSpfpxB%2BczVaUah1NKwI%2Fhke2p9n2IOPvPwe657g4OY7LIO0Q%2FESmrpf1LxTC539q9BjqkAQv8DRzdCvx%2BeOjUO5zYD22i0bwpyp%2FQw8YGUyHNJPvMoUmpekXuQs7%2B0GrB4%2BAbjNZ2%2BNBSXdi%2BtIq35uAzOsSQh7CC3lMGUB8Mm6c1YVh94ogete%2BN7cjWc3XJh2A59KX2Qqk18dBfAOSugGyC9jrZShAouP%2BcdG%2BLcoZ2lOCGIttk7vsgDTXKB%2BrRBKzGUP1JyD0E7ZrCkVc1UngLdh4QRCPb&X-Amz-Signature=41b2be5cd6ee9a33d1e985397bbc49a9d936d25b38ec8d87876e783e873fc512&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUKXQ7PG%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T050807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2FpEw2ZjjbSRi96S6OttsxfJ7KqKNDpuXSp%2BUWimVoJAiEA4EdHZkAPdwvHjGWaNyQIqA454Bax%2FvBoEk%2F88luQ%2BxQqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNuJrOumwQYz7mfq%2FyrcA1YEH2WDmxOgtynPQAdWBgXRmPfoFUn4Idf0pOFpZP%2BRTb8uSMaSrvtwH8cBBeHNyTVjfGgVnKDP0YTNTJo9NiABE5lTi%2B46srG1O9f8h64hCyDcHxVeYLLemE0s2GhkejW8GRckPSnpoCLi49EeNZfCbhmNr%2FrBAFRDYOe2MnLjopHbjMlhqDKBoDuRaOL3MHwqVXWUedipiKoeShCG%2BmwaO5un2SrD4uPQ%2BOFYbdCdrOfvym7HF6J%2B%2FHOuATU1qnGhOWGlaXKI9hgtZEpCs2F%2FnUnsQIWmTVHmnsX3eFIHRtpvDu1wcSxE2JBTTjNYzHJLtph7QFLwBllcfxNupWzF3ANEqNTcBzZKsJAbEPRUaq9IziBslWXxBUcvepLMqoSsDMwiT47jzQyv0oarq7cX%2F7H4cmbTipZVXbFyKglLWXmb1drYxSbc3soQnL9k72t6cvLJl32NWXQl%2Bu%2B1djljFNomqT4kapjGJiO1ERoMbhdhW0FGfI%2Bp92mTsR5dobAdosFQfCl9Mot5n33L3TnGKWy2IfJvONMH8GRz0ixsXX%2BamBw%2BBKFKf0YabQMARaiQeYVQTLiRAa80dTQcsVMCVF474cyijLFDRWvR2OlzlncF77W3EJ2O3LqKMN3e2r0GOqUBpsRh7cFOChd9jjmzO2t2AKVNv0U2BMgdJbfRsj7Qs3g7%2Bwq0ptg8efYixmeScU4mqCU77PjvUTYBX9b43pzdNoxHYy%2BpNKU3f1w%2BcBo4qABi8BzE7sjIUF6WnCCgUEdfGZ9Y8PY7z82AVE6U87z%2F80zeOt7fcLWpxO%2Fz8L2ZmD5ocAHMYSOjhXt8kvPTnRcGh1ODuzyDk3a1MlWYHyL7X6Xx%2BPu3&X-Amz-Signature=1449b75bf6c452c7ce72578ff1a79d430205cf0d390109202a524643cc44588e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
