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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUCW5SLX%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T200821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIDCxMAlcgmoxJT9aMZTTzMrcNtyYzDV19wkIwW7rp2ZtAiEAkfC5o702e%2B66ZxCketJnVSmn9C3RQxrWjNDxsUxjuF0q%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDA52w6eCPZwtYizi0yrcAxaHNawxoDHaQLWdqhAfGwzYuRrByxxopxCtrR9tgGu1N2tXRZzSVtxMc0M%2F%2BcPP1Dep7kIcD2HijkVvjCgxzfGHwZUZgMc6OsmcPhhTrN1pe1cYiFBD52%2B5zIQrY9VMU1Dh88G2H9firPmTRKdvQRf8e11uZD46y4ZRpFXzhek4bfgkJoMY0kd3Rui3NnUHIxghmN9ox0bLy19mcDmjTk%2FWwHYYhd33%2F6WUHYcShi5eTgDiDVYiWIwf%2Fun7lDqx0Ihs4tP6HsTwDhlQWrlqMY9ruAotUaSwi5S5URagtCbr6%2FVpFfg3lX%2BnUe%2F2pHWfGEDmTxlRdgrgbBm%2FaKK4ybx4eCwt4pdmLJJmpQeTsIDmqgNeukv81qfdtEpwnU4kLJlz9bMS%2FMXzDZ5ExBtlqbkuMVJfMkcI%2FfbY4qJ0njqcsATj2k0OETZ7JuLg9AbADQKNmGMwl8Om5AIYOGy7MIFiobGWOLZt4ILUCZUyGH2zXrm1hIQyeB2DzIutGsoZ6YH4h%2FnPkrtx6u2BO4zRfMxcbEPqW9uAIrh0xv8GBaL52zj9US8v%2FXD1aM1Qmagu6erNL74h2KOkmP1q6vwP6192x613RxPl3i5%2F7JuWGMFrLxY7EIwKLqzXZ3KnMPK1vr0GOqUBH2iEX8bTOc8xSnWammvlOJAuoVze6McpNiW1rct%2BWNGDph3voXF179Cfh1cPBflzP3DWCRR30hSTbLXlMDkFFfxhA37h2k6PMJ%2FxeZpjxhi4nLsk6qmLtCrbU2jTuKdRGMRbibCA1iICD1Y%2Fv%2FcM%2BxHQgQnSdFQISqHca3TVfnClJOb%2B9FJ8IjH4Tzj%2FPfUyZrqE8Rq2hPwpi9%2F%2BpAyEDcfE4Z8T&X-Amz-Signature=89b07a9e8221b6777360c442cf158990200291b01bc0163f5526acc1e1779b3d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UATKWHY2%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T200821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQDO7nCb2DghIw%2FIPB8gubGwB39Ngg06DpmayxH%2Bdu50SgIhAI9rl8V1ti7okfetQjDzjvLi%2FHKFkeIkvLV2rp0KlmZNKv8DCDUQABoMNjM3NDIzMTgzODA1IgzkD9om9e7QQ4ct%2BV8q3AO1lVMI2QHXIRdP0pD4tpbvw3pXUBH7DbFMmF35ltlEiqkx%2F5wTMgJWZ5SLbTUPXzWZFJO9ds4ij4RaPZgUG2UiuUhyYvZTtUexZ%2FmbM43cYteqXWtfSuz1DsjCpyhmho08gvxjIJ2PwV9ErqB43v8xVcTYnWhBMfflLD%2FJw3LikNoTtHYIZcTxbYUjvA5L7Hlg%2FNLQIByVSXtZsix6cTUZGkOUZ0J711rd0%2F0AWM%2F9YfPC8JaZQ%2F33WemA8zPCuV71vIFfGY6PlEGt3H4GpBj2j6Q0CJkOkaCZ2FVcv5r4Lkn81b3xXadEAm1t3SIbmeHM4TMMOG%2BA6fEKB0lOWVJ6b%2FCe%2Byzxj%2FnxsIzK3XXmvma9SUbOcHPluMS7NK18xJCm%2F5ut8fiQY%2FrdJFK27ZQatRA%2BOnKmBVA3y%2BmQGGeNartx54zhjZPIjHwoMt8cpHn9IUhYyqPJYyeJOfpE2ULR5oZQ3ewV%2BogsIiBeQZ4eW%2FChPLNB%2F13%2Fn69yr%2Btg5OyENtlEhM%2BZN%2FM0LIO8k0WNiLbtKMVrhrdbYJ1wmD7Wy3dXQRM79vq8spSdfitdvdjtZ3RHCdU%2B7HbSa224vuN7clRdEuU%2F3SEPxuEZS%2BMMSbR%2Be7JXoQrKyVGOWDDctr69BjqkAetj5GxNkNbxARdyBG89Jw3us8ZXfJyACRmvVFEe5UOrmPPFPCtQruu7iHAcWCxDyBNKIzoLiqPWdad1DZRdBWK5a%2F9EfTRLbXqtL1qOjprulHjT2QtyX5hI%2B7NXz2yPI4%2F815eS9HYUUaNX2h25LNsNMa3Zi1b2U6oxrhWWeGCoqdUO0Xgg9A3hdgIsij7ZqvVrJLyjIzqmgqHF4PlGst8VbjL0&X-Amz-Signature=683569948f2582b90563a6073ef02597174ad05bf81689e63067c1b1d0910586&X-Amz-SignedHeaders=host&x-id=GetObject)

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
