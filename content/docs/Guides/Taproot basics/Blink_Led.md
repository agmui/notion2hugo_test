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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHAV2NPU%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T110647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCICJZ3KIPwCAT419D3u2os3TA7cfFuGtjULj3ALlCeTQ0AiEAiDKhpi3yzwKNo66h40a4kDx6WAIIZLuPA4d03UBD89IqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEmTHzQ1griySf4qhyrcA1TTBGfzE4lxodBzSas7A1CJ655zNbTKNTNJVXF2FWxvwI2jL%2FDmgJZvwBvNIQ%2BHU0bt00C9uTWAu1%2FdHp%2BXU%2FZeuSKzpOm%2F6yfjA4CxSAVHNBvtTjbb8y4B68hWbHuAkPGmuD6yWj%2FBVOQCbddmfR0Q%2FojLbjBhv2ukuTfHLT3bky%2FdcwbJxqAvJ3WFvBTywDO9blv6GQv4vbZSkeIFg1i%2FDUPSIcW1dVyOUGWY24L9szOTtBVMGK1ozxmET%2BE2WvGHhmyZqOUbE6Mx3pwvN%2BPOW4i5O0w5EefdOqeTGteOhkeM%2FZEKFcA63%2F9GTNHPbhSYyI3ILWsdT0IxnQWw4ULM13cgCqpqWyCNcRxEE6F74HVHSaUaBc2VSucOIetCnyxFaOb%2Bbkiac2lT%2BR%2Ftz1V34ir0gPZoJK0sEjtNaVqVf61H05%2FA7FZz6P%2BPoNCEK2Z%2FKI9eWmOoSuYxc0SQgCPvvQ7OPtvSYuvDSNImxqMnB8iVptC2LCVVD4KkHni%2B5bfkbFSlkj4C1nmWSqmO8aa3tgua2xghOmqQxHXPZp%2Bf0hH10Rynfr6h8h%2Fmbc39djZx%2Bn%2Bnc8P%2F9vnEJlSJzUfO9TvqMyoZmnyunHd8Y5Yibk6%2FKNvOry8%2BB8SlMNeShr4GOqUBGBLlpJ4jA2CUtW0rmwQDgIvBxiNJb%2FlKGJwOViAkzhe0f%2BELW2eJ1oJbn7xwm4Z6E5fi1IEP0nywj9RUyC75InRJDQvJmic7xYfHnfOOuE63FWUfZLIoYwgd9g1vZO1u8qP2U4yF3d3yYPw984GWfCvcWH2Dt29cr0sgHS6z9Gimg%2FgUIvBGoOWF5qj4eQeQOvUDtn07HDI1H2DAefikunuwqXB2&X-Amz-Signature=547c7ec3ebcaae0784cd3760f9500121e48eeb9c3321d140a5f38422a6fac79a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622SBWJ4P%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T110647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDSSQOF8ijhxF4uPSKf5RZYbjfh2xZ%2BxvDmE0Fb8GN%2BpgIgGkoB3MpTnVO%2FzW33Cy6z81mjT7aJ3gcJW9mY1OY2%2FxgqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHYP0D%2BuxDqknYrFWSrcA9vzavoSlzrsPNDUFAD%2BerLlKbcP8PQPo4BG9D2FALcYfSLuzM%2FddI2kcWthNxdMZCEohPzUJwxBZ3PD9PSadW2soJ4g1DYeBwwsw7%2FmUvvZIG7y2zff1Pm6iSwZPmKPgrzX7s96IUEooG1HNxktn%2FKWxnYHaypjoh3YCfuAiZH8NU4DsEtAmfHjm5jZdCLEKe7yWJcIqOP%2BMv5x8Rvvmh5GJ6F8PhUZwCpGqyBABT9b1IUskyMboZCeBGlxcMDJ%2FFTLKPSq2ZyZIP%2B741e9UwaEiFr8DUC1l3gSaM%2BC6cRyYl1XX99mHocXr1PyL6wxWuv0vQJKMOfg2GcrEnnJ2p30DxPqz3k4qmrPzDlZ50XdWdmgHXMiDbZcURr9HbmbSXaL8nDVpOi7WL0fy2%2BKb%2Bf4EbNeH6yr2EdK%2B2p6xLUmHNatJOJv%2FwTPcvuMNEbifeUKqdPJgYNDNL1qIrmhT%2F99xrbqOeAFEzTGM0tJGUtwCZuCVVN7%2F0tsNNKRV9L5td2yJEaFkrAb%2BN3DgH344ah0c%2FwyEbiSB%2BCen%2B8ZpeMqhk3tGnMpHjeSLP%2FUoCUNvHn58tLJr%2FK7IYl6pzIpekuqr22%2BACpMD5B%2B6Z7Tz8Z2YE1os%2F%2B6r77V32jbMI%2Bxhr4GOqUBMza%2FRO1gsFsaPJqk%2B94eglV85s7yPJqvlbpEd%2Brk5pcoG3aPUZsUjhJS%2FNH9b5jVTEcfqja2x%2F9stjp%2BaZOoe26f%2FkbwwrUM7KAHtv%2BSAcSzwmj5uXrPbNn7yecygllC1bNZq7M1hQcQSufJPZq1rqI3Bw1zRanH8H%2BEt9LvPW4qHImSj53VjxgD0oq%2FMid8bbBq8LDxfFxrOQiR9Te1%2FwSHnQDW&X-Amz-Signature=2c8c24b3fbea1f6d5ab8250feeefefa044b8ec3073864e9a10d0d63a360fb9c4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
