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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665PUPYTC%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T131619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDaPRlfBpNXdTJiie7P90WTEfkKXMxHD9%2Fys%2FTDLmbuXQIgSIuN%2BBnekhp%2B4Ts4CT9tBYB5AWcGCtsEM0Ra7RaoqbUqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI7%2FZhGnup%2B1aAiDLyrcA3hRd8fuDrWCAvwX7Cc9J1tsQH40BNn4EGJoIspnuQVYOH2V6neRiOxw6v%2FYeQFzPzRH%2FQhTt0mjdetaDjnb8SgYJYkHo9aIQv1VsTPHOckc2K5MgKt9NdO8UThhGvInAoedaThT7ZJaLjM%2Bc64RLZtr2cteByQsg5YRaSlr6hZgxFYnWgZ%2FieedefLgH6Jy3LDIsGRw4xclK1r%2BSHMPUz8vDPVjr6B72PMpvcv9USmBqbAMq5roJ30RSk%2Fb6Yy7jX86Th8aIDpLmrlCxU0bmfbC%2FyqDo78YCDJF7jyzzD0t9S2zSWwaohBsYMSONg%2ByjgAFL8Sj6lVuj6fTUXb1kGjNgFfpEdtr0F10g58I1O0SQl2lLhyJXiLDsrT4dVZVFuRFh77ZFoyF%2F0CQHQjxYIxwT7%2BnUsK6Ymp1AlpDvdeF65od5dgyX7iJzkvi2PjzTSF%2BBfs6wA%2FszkXstwPs%2F8cCd1Y0qcHXT7C16hBiHTzk8O%2BllwOWiPqnJB52FvIIjC4ngsoDkJyZlyLcQ%2FxQoz8fSTN2ATY1dgNkh2Fa5z7w4QIT6bfYb%2BkMm6Npc7DtaoEIZRbp8ew2j%2BHamtbHtSU%2Bk1ZEWXVj9IAdqSmzkrD5pjcA1DPOr3bpA89LMKO5gcEGOqUBhJJf6KKLXoEX%2FB6SV7aLioOEwg5QA%2BFFa9IRAjQ2QJiq9z7Mvbsb5CBhEUEqPxR3wGiLriZ%2Fm%2FXHwoIMnWXPgzNcZHxV3BH0crN%2BvoL7rJgC3079A0g470QSVKZ5ble8%2BR7tg2TWp8pSP58TazmH4Iw%2FOuquBNEZaVHBhyO%2FuEZokhaogNRoQf60wPg2QjvMk%2FhpeeZ%2Bgreyd8zPvrePpH%2Fap9M0&X-Amz-Signature=973cebed91bcd09a492b72a0ab1bb82a22b7a6be215c78fc908ae00705e4020d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBWWW3AQ%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T131620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIGPBSP9sKMnupn2u6DprWXkZrby4hnBivOve62EpM9vKAiBTRaKgnFXtC%2FbM5EACBvWjgFz%2BEZGgE6%2FFDeZasZ%2BnoCqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjET0vo6zGqYvCzWFKtwDQyTSlkjT%2F%2BO%2FP24xE44an27X3ECuGpJaakiSJHQnmQfPo7PINARgaDEjq01cU2T5STB6U7M7YXhqR8xwkjOO5vOnf4DDg9tqX5j0juzM3t1FqBdbWp7BnizWdVfbTiEDSry9Fk%2FH81ueTuEvDMVNMZq55Rw%2BLiFSh3BSOIAKbZvqYCwKEJUAsUmg3F5MVJsnuIU7mLYJUrl3l64WXxdxrFT0egHrkfdVaBqBAuDHvl0itG9ba9fmR0AlPOZPGg1Gj8KB9Af5x7WO42IUUFSIzYS%2F0AP1BDPdI8Bj%2BCVfPWNrsKmJB9IyTPRmFnM9e%2BAN8amcUZ9bxTD1CbKqcr1eaPE1Xr2VaTBYSjcyePWnwUEK9LUlMeQvx%2BoF0IXgPnFCBAA7oIjoh7YGY7EwtdsKfPNOQ5JQVfmVNW11dzMgL26iUWwNsGhuh9YK9X73zVS7ElkFqmys3B4EMAwp3LOvJVSIkg07rY%2BqfTrJ%2B4S17%2FzydCGvzet7hoM16e0jzTGY1b44s7pYL4SJlu6U46RSU8AjV%2Fj%2FdAofw1HAwZb7akWbPbVGcqvbN44XPsITcRTaQkV2Ez313p9PhK%2BxMM1cwQuPsPTP99tv%2F9Ds4IDUSG1DHOBO%2FS%2FjNNeTaIQwl7mBwQY6pgEvNkoo5bpiCbh1xgitZwAd6n9Q9jpGoiOHAc97hEucWsy9IAdlMavvLizVpKJj1%2FaXC58wGxAcf%2FzJEbkQHHamjEAEl4Q4o10215PupevW20Se%2BXxBEIbav90mNLGr7LtCYIr2cvgNuinS1RTmmDtRanc3thznsflN7abZGnLWkRVE7sHfAx4A1PLEF0wNTD7n6%2BxChvCHTmMeqkF0JBhGpxCSZ9E%2F&X-Amz-Signature=605e7d865c7e694147dcd1ba616f093d38beb54d1d9b68d9ac13bf04d3b19c0b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
