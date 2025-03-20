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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQ6S3QEL%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T200854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQC9HImA0bF%2FPYQCF5zOIVqYtKxcp3Mi9eqLhrgSWY%2FsyAIgZ1b3RYdAW2DXFDqOPWjs8UjJxUtVdJRVynyOFmoehpoqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDPNVwWYqfVnL%2BNjZCrcAxlZ8nMZdt6xq1aJEjfXETYm%2BtxfNGp%2Faa2xktuDgVeo9pIuNfBtfdsx4rf3qe9mMlIGZf2VUbyPGQeVuX3mymwX8mwXqGkVkiGbgDiXwsryyWuKB7oowlC%2FL8sZDVyDHVcp%2Fop%2FT%2BUPG3zG1tEfDRQay8WHIOo0Wm2lHg%2FW7WzHBNLDA%2FsDHjc96ATlkEUla9jAQoIpYgCpjb0k5%2BVLr3quEOpxvrMKEaUVXu1mye1FYJKpJ9AhGlrvOH0BbDE9FZH1CDY%2Fl7ch0eWA5utdG%2FXgsiFFcnQnP8u2Xhr4a3gzAjfCiIOZ%2BlESwDosRmVU9Zf6FYkYVS0rjfNff0VpOH11VQovBiyf9UJShqGRqyIqUk%2BNGglydJD%2Fakxyv93%2FHbQWbI0h4kL9mmnDHtlH6RIPlZPu85ERYZ6AIQL2XwlIqjEuKaqVgOTf9MmgkM%2F%2FdDFzS41VTGhujhHf%2BgBAP577%2BE9YjIp0qJj8Z5HTLaIcndtirdbOEgeZBbfDGONzzpcBk2RaTP0No3FqK65awfwVYLPEbr2YS7oWzMulpE4sG%2FLQT8jl01S3LLAYap60fQ3QEviNx5YGQ9CuFCmlimTTY5l7goAPVzER4QUE1DYHregzKTaYZ97tdQ3UMJ%2Fk8b4GOqUBfI8zW1QF3faKPigTgbf9l8Uul8NQdntHJr5h4xNsn0XgleFwYOnzZFmRf6LejwtuETRXj%2BInehPytqBTcJ2Cv3eWz2%2FLjHdwxgslY1v47bK5BuUrjKusEbHASdW53CDgUkcBElUDFlw2fM%2Bsv50BkaSnxAWThEzd7D1%2B6qjkczfUz8JHQ6uya5b5bWKdsFpXeOm6Pm3hkNqa2CsPhYzpTh7qx6A1&X-Amz-Signature=282a5cc1c3860f60cea43d725156a9c5734955cb60ad7fca8d634e9292f36de3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LMBUCUV%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T200854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIB1NpYf59FOv34xPfX0sewt68pM2naYp6Cm1nR5qiJf9AiEArPJCei6UoQoa8%2FqDOCGXv%2Fco1iJLoxVmlf4r5S55oA8qiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPIWepoWqtiB5DKIiyrcAxG3v0ISO6VunoQn1VRw1N4RUr1yhuTxQNc1jS1Lxp5NJ%2BbnRCyA3qJyOHdmpMq%2Bf7RVRgnAv%2BrlrdDW42QuvspS5f1dc8%2BKLTGhSihZstA%2FBNL0HS1jS%2BydP4B%2B09UBuA61UvETwyMQLXyD0Z%2BSkWhx8%2B69RikKUlwaX8duZ4d2ygWTCr2BLEr1%2BqHpyu2PMN%2FAXrDmcXb9tDX%2FWqoYZUB%2FK7spN2u%2BkyPKi%2FUDmmrqk8xz%2FDO6e50FzoitZFmC4e1aFTzrm%2FpZeUlT2U6D9svE0Gk6I163z3KdT77zOvOJ166E8Kkc97lNGpVr94MEjrzZ31cTk3Tq4FAwituGtfsKs9pprh2tKCNjON3i0GL%2FrgZy0IsTqULbg6vin5K5uX%2Fn9tvlklq9Oui7NWfC6ThIA%2FZfUOFpB2Jb0cBOBAuVO%2FVQvzFfDGABeeug00gY%2BlA4Z0hBifS90%2FdqfzXe69QstvkyZV2jxXeZ8BXn0wX%2FeVh4OwU2aqQ1kaqtROzQzWx4uwm2rf%2FqcmSuPLvMgBEHfGeBuAdv0JsAugPO%2BdE8inAiih1S6%2FHFFVnTYWse8RB5yIopMIvT85Qek3ugAP%2FI20f%2B%2BY2UtYBmaxYiafaVA5XeqwtMnvyzTvM6MLvl8b4GOqUBRTw4z0Vqp97KaqBb%2BITleHySKG%2FMEjUpowzU1fJwVhcGn%2FCosyuCECHMfrNSVeJlejvpcnsWilPR%2FuHFx7eC%2FdNpFsw9uW9660dVaXHCmMHMUeYqwUUMOKlhxSyocImeX7DD0JhremXNUuJiNLvh1bEatyNcFwx9PoPeT0%2BNd6zlNwKa9UgJzLkgvB5jg%2FzrvcueSnDtLRG%2BDGa9k0BMrytj%2BlCL&X-Amz-Signature=cadb302847de3cff0712f9c3e9005a352770cdba39f40c9730cc0a2ddf7fb4e3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
