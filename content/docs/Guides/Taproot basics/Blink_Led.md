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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HPHQTXI%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T190136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCoPGdyNNjMwsHyZnUvVbeminsWEBh8wFEIOqIzHn95gQIgWIcVIF7rzKTZ6gtfxvDY40knh7SArLe7tG9UIZvc5%2BAq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDJXi485LbEEi%2BzSCPSrcA2UViaWWpF9pZMtu2Hs%2BZTb0pHvFaGn%2B%2FxWTC0dEoJgucOrZo3ZYqvMQt9S9t4lxnUUI%2FLQ4m7qt31IGgmp%2Bl0BmC%2BaFpxE60Wb2x1A2n06HmV5y6XZkV5LhqD%2FfRFfIDzTsoXmsZZKrUXJJ2zcJgMDep%2FFTxA28Tsh%2BkesYxr1GkBauv3kqo3RodX8JU7Pai6zIq2uZ7ooHHqE8HnPPVvLBBeRk%2Brlir4hLjM%2FXJoW2AlO4LeMMmYIXWoXhfGODmfBSnYmbN9M%2FQtoLZSOqr6sJ6fUE0KItBBY5ssOQ9AoO%2Br2lorcCjbTrDMNxDiohNJhrnDx5MGX5DQWL%2Fkps9JpbjBWXGtdcKOtE9Z558H%2Fii2rx%2FjVK5d8J%2FkxzhhawX9mFxbksJAyGLz8OUvLXnsUYCMi7K0WSLDegFzIiLwBRrR6RjTB8EuTVaeqUne7mQSKC%2FVsn0542lzqv4fRsZNItDBaRQ4lb3mfe%2BdX%2Bpu9drrRKWK90PDvKAwVTR83QOFoslgvnXrT5EjgROQ2bdZoMDhHjxzQbTxPp0gSmp0e6tcKmU%2Bv6sl2V86pHbgNU%2Bf4lr%2F1W3jprOD47Sb3zqhNW0A3YvjGJb83wjJNly%2BeFYXD%2FAw%2BwqBsGdKqSMNicvr0GOqUBqpsz0dD6ex1omBKtX8LLRcB8cFEbcM%2BXdgc6dQ%2BZQ09r4Jd2Rny37VS1sxqlCZtJ1yL0HG7vVkOvwsUuKzeGFI55uVCgM9yiXCq2i0ZnR5%2Fjr8KdFs8gBm7bLOSrUCYsgECJs9HDwrFuLvKSzEzD%2FkWTDEee0VqBWtauZHfyKq91edCHOvryWEgWs7oPSQQfgnQ4Rn7yJA69DI5c3NmN9TE0Rs3h&X-Amz-Signature=a2d8c1320dfdfc806de6c18ebc11a2c927c3d542b8df80f40f0a097605cf2ada&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3WCRAVD%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T190139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCqqHLrQ9wdtrQ8%2B6YWWJYC%2BRQ8K8yicRA38JYR9OchmAIgFhNZ8rJ25wxe%2FeOmfHAK2qTE1h1ady4DJNRWe4pOAQIq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDKou4b%2Byc2KNioGJqyrcA2CIme5IOCFT2laWojZBggw3fnYnIU7JG00WrMfLaWcu3zok6TKnLXx4ubR%2FHRriobhqzHDPI13jp4uFeYF%2B2HyaBA7Eb8zUujcOfUDLT6nwmPtUtWWS1HdYovw5ZszFuEIAGb%2BdIYPdkMtKNfhhnXs6WieGYND1%2BvCZy03YRcCBQoiVWCQdCkuibaytew90MTl4YNe7Lvr%2BFNoDad0vwPrxvWiEdx5WFt72Lm29B8Cpmgc1H%2ByYaNSCUcXO1uh4Ce3wp3CNzIMe%2FKaGmhczJSKEc9j1PLjggyxahiORWM6tbQFoLP9OD8xR5v4Uj%2Bo6CG2DW0t430iBbuNf6yCzNK%2Bb1F368wqL6jjlzj1YSOlqsO4pfL2bURSCKnGCGh9Tp4xoGPGiS5s3TLacmrwlhPLYbqCwGhSQveIA68IZjmt4yDM6JI1XwKEzILAHiebGkCO5FY%2F7A%2BPqH%2BQEwgesNAL0WSOo%2F59fXr34cLfBzDPts8cubzKx%2BHBpo%2B2NJyXesHGYJ%2BlY4y6oUU2cfanfYURt0WlCTcuWKOvk6%2B6xoxoAHI0kXKfYhpU%2BlcGdZVTbmYMY1jcSpeg6JeWAUvL0I7k3zZedBGmfnp95DhJbV6rTFDoCJ1fImdtIt3BAMPWcvr0GOqUB9ONeTBRJu1YN9UO3fgA0nsGg%2BPDJumBJsCF81wSM%2F8b9If7veqSFfX1zIAKL%2FHIXPzoyo6i9vaWXL1%2FSjaqExsDBILCer7XymlcVxTu9bkXPOh04GrXIsh3fc999Khi7cj0f%2F13JUC1G9XAZrR3c3tSLMC8bpSTToih%2Bb3uRpQR5fEor%2FEsAg8tg0ILZwBb5ysdydJxcVnHCwoMDQ3VkIRlBrx1P&X-Amz-Signature=ad6a16dbf764e32b70743715f96c964a93f987e72571547e76c34cf6934b68ca&X-Amz-SignedHeaders=host&x-id=GetObject)

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
