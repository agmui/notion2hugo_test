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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DQNSYYG%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T200930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICLUAX5YVQp67jWxeLUa0mm0XWaZKQ6VcsIbOhkAHbqqAiBH0AFomOxxDSPBaDJ9ZgafcOs%2BcBgQcfmCMIH5a%2BatECr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMsFqRIoVdMfYZl%2BoTKtwD1lB%2F86qmIXOJQazuKl5ykzGNan59JmQadhvSe%2F7Bul7mAp7Js6j0lN%2FH3OZPDF5gecgdaWpPpWUM9%2Bucq4vRVzIN9UZ90i3WaeYU2ZmsnI6h2Oowz9M%2Fr9Q5MPyiA2fG87pc4hv9r%2F3VAsoVucROG3uGsT%2FIuL67AsM0siaYbuhD35lEsLObPCfawYRjJ0cco2yXxu%2FajuXNsDovlJqrxRCh5p2SRKyQZZSN1igrx4pOYJU8ao85KOtRdd9efTg40yYMrMeoOOc83zcI8kllMl17YUkmn1x%2B9Rm%2FpYdktN1pG0tqpZS%2F2lsRphPDF7TET3xBPasunhEJI%2BHFXAdMWKU%2BtGlZ59r0JqsfGOyXGLF2FWHWKnGoaFA7W6lIV85AZGUoL%2FfgnI1ooBsxsnnRZtjrXhCa42tT5PqFAUHVlmhNoykwCmTmSRCt0C9AXcUfAwpr7%2Bq4LY8qjdRNVnVekzRC6rBwd5xWohMDTzegQz58G%2BT0BMOKCjSSxnczTK%2FSOtg1a0zHGbKMTyOnPvkMa0giY4t%2Baww0aIoaymQaKSUP7jD7GjivH9x%2Bqxi09Hr7TSmY6MVa2zzl3qVkiwQgE2mJsMoZrnEIPPxhzyU9vAYwXjN3vWjGqzwCqxkwkJCewQY6pgEatc%2B4Hni3oYi7F46cbaMWrQjnlPnfhwzV665EtKRM15Ft15fp8%2ByutGEHKzIDPsDqKRwhm9bak%2BczbcRON8VZiFw7fUktvjKt0Xn70nkWdBjESeOBhFURHs8KZPIqOuSR3zph2UGYiSoZIRP%2BM%2FZAxP2KPrLGO8NbI2lPlSU9AJQoskhMgjd7pAV95ZKQ2SzOsKffo43xM1kKybp7GSTgea886elf&X-Amz-Signature=e98ae3d8688d00d610a2b84cf532e201071b16c5247587a956a4699000801abe&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YKCAFDT%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T200931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhX75p1GFV3GNtkiBmsAgPQaQTZJkMIsxWrKIi%2BD3JuQIgfuN8ibblKBHZbeZ%2FWQ%2BEfqogTmzIGosS0j2k5S2V3lUq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDKon3N8o3X1SBfz%2FwSrcA2kz8PLU4aAUOi1sMrPO3SiXGPSps%2BzOpsHt1f3gas8sNMjK452Rgb9%2FVOQgipSwn7pp3Zzy6WAXD4RXGFkONBACOGXQr8rjNMpGCSoyX%2BBeXcimj4sdd%2Bzp7WYt9TOTWvw0lBu7Yw9%2Ffishk%2BVdNuvpJidDHwTrJkR9M8uqBMT2%2Fj%2FJNMKecdTx5IOfCfbvKayCOYpodRixhFGqKp0BU2rIcj0u6aBHMek7YYq1AmVwmKdki7BJEiO1CfTvklzW2RDHL%2FHEb5fIfJ2gAwy8t60VofLHJGyISUVdKizR7EFAgfHly%2FQ%2BNIxhfNk8RO8bzgow94PZiiQNS11zLylqn86ED9DX5Q5ukE56%2BJIfdwBE0IlsR%2FhceneEOKQL%2FabGwYu3GClC9%2FAVRYxzMWQLo6y7VVP9b%2FBBLVnRwXnKIxTGhN324kBo37sclxiCQWHxAidXclShPplpKtBiWMCqQ6NSSRH%2BKzUG7q43%2BkF4mN9hpI2US4749RHOyPZCmf8Ig4mD9rwN%2BVJGp6wLHooSWnGZpxRL0Szxl1adj5OJTGRbKL0wVNGq54TWJ%2FI6PYtG4C5%2F2Ec1godUa1GJA4Pf9SrGGDHgzD%2BxN3PZFoniwNx7h1tNlUSY9PZ3TXK9MJqQnsEGOqUBALkEyN1t%2BnFWcDG8bXVz5mXScquAKUv%2Fn6zlXLogYTJY0RGwQaT9nS0CpbLFvq22vEbxR3HKcs1Dnhmz%2B709KTpAw5URy1zPFtlnZ%2B24XMne%2FLsQZTsAWnxx07hOWLY0q1z8APqV3z2%2BEu3Q6NgVIohfGotPlVURx8LHl1XfjbqMFqjNrs%2Bv4hQFGQzQ391wdAcHEY2%2BUEFnEUo8Zo4S7USu5POA&X-Amz-Signature=04d30ae2458d1ed90f96b59d982cf06fd8141fe0d6b3e44add035b90a38d82fe&X-Amz-SignedHeaders=host&x-id=GetObject)

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
