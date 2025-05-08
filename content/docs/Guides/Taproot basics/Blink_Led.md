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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ2G6QSE%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T050934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICzOfCHfAMm%2BaAZr5g8VezLy8I5UbUz4tPVO%2BTL0Rj7JAiEA2ywcjOXyVLaz6TWb4pGl2YVom%2FrCRR4xvAAapx1kLIsq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDEGNNhlgytBPO4O2RCrcA3UU0n6iUp9%2BZuPePAxYHiJuAm0HEpzo9r2sPgG5RT5%2BaQlk3iYAMm2AxyRwCEQV8YIW5JALBpHN2zADPrGo457wY42KboZ%2FVSFf0iIQv5qHMsPElrE0CbxZH5vDCmSpECYKE14OyM3B7bzBKPpY5hy5GiNgPdXqq62ggy3V%2FBQiZVvqfz1JqIAHUqfYbAS5YRNXmty%2B7W5EbqOgGUISj%2Fi%2FezEn0aKr%2FJTVZtozu4dcN9xYVp195ROB21ZJBtRGdE9%2FwaozUB3HX0uLCWn3R33XotBZUiMZR0loU1RRHSNssGgQlDoXtb5oN3CRByZp1hGQ%2FGPKEwYY%2B3C8F5OIEQ4E8DZdfgZtqtucNz7nVzjj3%2FOdm4POMnrxTR7Vi9u2rkM4D3CuBz42Rwk%2B17eWBZi8YjCk7vIACQ8rr%2F4UGuR4AgDcKjHwLFPXGXetNdPhA0tMOKt2Wj6dwqZykyOgi0kYyEAwcv3M%2BWNi872dgZ%2FOuXbhe1spWFn0FAKcclDYc24DMYn59kwoTlfrOZ3%2BADDQJajC6iYht8lf3eBdC37e53RDP53eJfgOPQntwiRedQmfRk79Fz0u%2BZ5JUF31%2BTATgZTM%2FABNowVjgJv%2FisZjVhEORaLix4eKNNQcMPDB8MAGOqUBl0eU7sohAHYei04Gq0N2FSiLL0leHePZEERlFFeItKvvsyh8%2BlKcByBvaQyfmHbYjtOvGTaM5Ve1wZ9loAz8KlylkgPoU95sBXdkaADntbf0GTmmPL5e9zevhsa8Dv4iegVu%2BFEk%2Bc7tAY5kPUDQlTpHdFTTxn6lYokV4YVwwDVROR09XW7o5P3J4uBp6ZshHCzZr6uGi%2B3WCAhc4Yp1%2BqJT5fxE&X-Amz-Signature=9ebc421491b5a194ca0824679862ff4e3a017c385e75f54983a20a8b79d6bf41&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KC2XG3V%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T050935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLY%2Bnxy72dAnlNRc8DGI3uFEMDuACafGhytZs%2FQJWMhAIgJa%2BzfNRLP6WVFMhCASindhnC4wS7HIod1XyJuQ%2BSaKMq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDN1rGZS9qF%2BE4QBU3CrcA3XwZXRC8Usg0WazNbOxNQIg3AfxPT%2Be7%2B8PrBnPT%2BTqg25yoUP3JSi4ZGiKUyo4NXm9sqhcRGo6vfvuMZuaX422DV0jadaRZlBpvVctjrNKGgkS67ZRFEGcW4q0nUJoKJ%2BMfDcAeutpIk77adFK9qZc8twamtNVavQfHQri4AVLZ2rFTb23TPfXOelaMZ0GdctCZpPUdmf3cMu4k%2FUM0c7vz8XFBTqBx6V6xJpar6rd4g5jEqkh2X4BqqZ5JzCk98zrhcG3PT3oB%2FgiqisASgqcODoyPYiv3eFxjGGGDqywBMBFosQXFnfDln%2FjY8VawY1OXYEpW8QcIufIqT14Gp4MTuHT%2FH3vdj%2BLEHrd29x4NMoSdSMyYqLphllMgZV5x7Fe3RqXFK9PWHEQa%2BbwT9VK%2BQvf3Q2wFKt%2BplYsgkjq7chmGNohRsynBhEiucOYdQZhr72wl9ZdB27%2FrLUGiSjv3Fpocpuj2hYKCAdf36QbPaf8scU8W528hgQnoot5XDKGIjh87nDT%2Fl8b4EpYeaeXGawJIhQ7IlRsqqAq25VPjL%2BIa6kHX2PDNfZfi3FO9%2FlwBOfLnPWLloEPuXM0TLWQ%2Fl%2BlUqp%2BHQBzldWze5oSM2sKSopLhBxj%2BimPMLHC8MAGOqUBi2W2BLcAr5SleH9aIO%2BpY4fpqPls5%2FxhbhWwq%2FXuXfXM%2BkwnFVBLTEHXx9Ar1L1%2FU14LoOM%2Fotx6eQ7zWoBl1clKDP%2BD8ORlyAQQM7Oq%2BzxPYdo4ZS44RyaTh0Zgck3XstuVYJDuM1mytyuBEYgnjTRpuiA3DC3WUWmsaBWg2obYG%2F7AJgh0vbhkqZDx9jrUCl21mRbxrUrSgiWZ2zWvdwJNCdjw&X-Amz-Signature=f3b62b0e3c705219b76765fb47988f8f22b66424f6ccbb4dd17440694b67306c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
