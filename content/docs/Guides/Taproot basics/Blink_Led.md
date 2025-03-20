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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TN6QUOG6%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T003728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIG9xetOsSZn4HCFc2rPkDCfn3WPD45tT1h20LHASmi%2FlAiEAm9UUx5UXjoI%2F61luD6KyJ8PAyuDFqOq6ujGP5gB51bcq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDFB25g2bIFfQ7A2MoCrcAzwPMPm7QimMapE8bQn78BiUVfD%2Fmh9qsq3epd5QEUqesxR2micVAwB%2Bw8L%2BNXp2Pl%2B2m%2FWv9kDSuaxprCabQL1lRRhi8mZoER1xB%2BLemTe7Plq2Xrd6Ra9ig6z%2FACD95j765FlqRK2OELj%2BYXmhWCkzgCPqfVkozl%2FaeStacxdNSkUWutV9KW1u%2F19mpV%2FIGhz2rRAlCkH3uj5dppuChWwcPkDqrlQYhNJMgjA1DwRhAEc9g6voVOdFrGJ0A%2FtW7mWk1muJhLouYN50ZNHc71IF6jf5FXnRXxwGIe5s5mEmQRBn1ge3FyyrwRLP7sWtZgVk2Bk%2Fgy0ozqCwmw6QB5rQuaCcb4cm6xkjmhqtaeN4M9i1ilYq2hZTyh3PMJvCEjbkI5c55CIvbHIE51QSRj%2Bl1vtHEGNaylgF%2BDuTrkBSnrK%2BnteFiQ8K04V70v7UCs4KAda%2FNpDyKfU7RGHE%2FpDC7pdLaaM2oAzX2qv%2F90IEwhwNMHrGVldTsur2KN9bglcOJy67k5FjFMVuZBx%2FVVD51dzApxTaIADgo7D4h8topwxQsUTjQlfakNqAnSpdPlrkelwm7pOyr3StC3oDkvpyFqoFxTm1XY93n%2Fjr8%2F%2FipRLisBJldIZ%2B7besMO3Y7L4GOqUBJnncVko3TaUNUM5KSxnOHUaD9thxedbU6Y0GbtCK%2Fw%2FBKSiCADnDgxwvFvGv8EuAdH8OTZrPGlc3GggBQa151kNsQvDBbf9PC3mtnP603Jyd6lmT8osI8mmWLt1PaZWE4ZEc7ZLyhljckJqx7O68kE9WfoA4LsGUlRUi7fz7RGz11XO%2FDqHBRBZ3b8j1A0PAo%2F7BMYByNB9T6CNDuaWT5L5lG90v&X-Amz-Signature=0b12da8940936a7c9e7b5e49734261c0b7decb1850382b961cb8e259b3f9079f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJT72JTD%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T003733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQD289t8%2BalwmJe2OYDtQB5%2BAQsNvn%2FMN3xy7Z%2F7dDD9AwIhAPIpHhrCh%2BlPRdixiYWatL7Snlws3V9NAdGQ2YxJHLQlKv8DCH4QABoMNjM3NDIzMTgzODA1Igw8XZouE7w6PnQ5ZLIq3AP%2FtVOtQP2%2BszeYa1LeDZrY0eoyDFmz1ffBwGn0UzyL2%2BttpgFkBRrlU%2F%2FWsFfZIhLgA8CwSaW379XNrdQ3FAEFXkseLzi9ZUWBRoSmwnLjl4JQrEUGVQS9VBO75Mr8xDyoWUAja1CIqcRp%2F36Y0I3vPObXkT%2BuHpBxd7EpLQN%2FHAAhk%2BD0ACIXJ%2FbRmemrRb0hI0oFSCTgHKSASz15myWeYLLo4bE%2BkoVcz9y%2BlxZq43t53nPvjxX%2B2wrVAbBR7B3DxnPMHxu2bTv7RyaIhjBUAR%2BSB38VlywoooviFhNShzg6upRHxspT1JzaaOP4fmA%2FqWAMBVlTUcCxm4oQkGbO3DhC%2B4mTHgd0exMKzht75Dv61LyrutSUzWmJjdmiPtCOr1vfD8ykK1Ftov4BhMoTAuCVrVBFzx6aG0jtgNq0q8VyOH95RmPVKHgJtL121EWnSJIRGutkTJ0%2BvUiIey3Ce1gkkfVkN5pD0EuBS4J6GN%2FjBsZMJh1Q880kuAw6E7rdBfFqZZN9OgHM2qepb%2FyzCHUoh3zPrX5ivSrM992010CUHMgXeUXM0GLg4zBvN0xf0f32KvEwSuM5fPYUMNhsQov5sNLW%2F6Prul81%2BryMNkuezRvqakOE1VJkvDDJ2Oy%2BBjqkAfOOzAAgrl4OuiSASGWyi%2FRZEd1tMQXBJEEJTgwFHJvPpKuytZSh4ldV5aT1vfj%2Fmg3El7APKCP9%2FlcxbC0sCxGb0%2FmcJuocOJ%2B9vPz60LQRsskNwQUiH63i45BPRtx9Rka0JbZ7hk2Wp2CZIqENDKh2wPYzgwuSgwCuBq3pxpdrbCorsP1tY%2FW7JboLpuMQRrprSYmaORrXBklzM0U0ne5h%2FHzM&X-Amz-Signature=d92340e46523e9ec8efa6b3ce771b8d24a0dcab612c5f12e813a274181cedaa9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
