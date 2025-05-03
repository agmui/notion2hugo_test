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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PMUH772%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T150719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCID%2Btm5o7dE%2B9sTYRQ56ZAyntQFZi4nUhFKzQ7BPObyJcAiAoBVWIOWc6ZcX1t8dCnPUXjpIq7MtjNVlTM8Q%2BHCA5CyqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmQ6DXLGzEtTX35WLKtwDIwTzC31AHLHA6Ut2CM0uIrpoT4VZagy%2FFrb50vdlP1jZPluP61HKT6rFUhgFDcnFxcVgS8p6EdCUIDYfSz9xFCpEozwAeNG%2Fg0aObaWaU3Kf2HNiCS2ZHN30cjrqd1u9btsMyh64%2Bx9m4l3HENiBZfT9kszQP5xZa9mNetQ7L84%2FgqtlHRSpn9njJQp6qS24yYHD9j0hXzFESP%2F7JAZCEee8XHrSXKjM72P0D8HWC0JQ8YTpvqtbCdNDe1znW%2B8MCTSztsQECeNMebX%2B1Mm%2FTnIQqTnk4OxGkAMMSF2tUztVyVUxo9mqpkc3OwjfOXGIGX9eV497vwUA5LihZPTiGbb1SDv%2Bm1GasCqTr0Z1r4RCpavOu4XWm%2FAhhf44u3y2Q67dGuyhFkX2Vxu%2BlRU2uGF0e0LWZTomo4t1OiR0x5gUh3WdzFJTkKHPjlAfvPoplelBYcJw6DbNW2y%2FXckBeds%2BaC7QhdRYZFYihCI4udUbO1Kkb4uYLYCF4%2FSYCz00mFumz3CSop%2FrC9nR6urzOSf98szuKgYONpVjld5zxZO%2F4o93Ax6PJqSVMiXp6FaXBF72uMEOle0Z037lKt%2FU9C3gJNHVTU0qcnDa04rnFV3U8qhfrkxaJxd2vPYw3N7XwAY6pgFb%2FTZzlcwEVtrHGo46iHWWMx%2BXjJMFVF6%2FVSuxB1s%2FmFm2jQ0AKve8e9vqHwH02DvT%2FA1aEgXK%2FTIO%2Fzxa5wYJZqNjskDFHIs6OPX3r%2Fl5wKSp9sVZkCz7ryZzZmO1kaV6lHvAR2dA%2BQMsSc10UWGI8yA4n4hYHqmgvslWjIoEJIC67LvHRijR05tviUShmEatpdtyI%2B0LvFSqo5YaGs%2B%2Fso%2BzOeHR&X-Amz-Signature=3762f551160b2631f60f6269e75718db71098374f6c39d3c233b8dfee09ae83f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674DBJLDD%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T150719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCICGk8VVwMVIjeJZw%2Fp7jPdqLVsLejztL4WH0w8a8w92iAiAzehdKhAf3PezCs%2FIz1SuB1Xoneq2a6U54CEd8bRxcaSqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5w2FBulCpyI2BqXEKtwDdIScnezDkS3B10wDPOCrw5t0Ru5XpnBFTLJTMVab1BYO9A9bf53QzvFEID178uf1eDzBjmDiKQGgcL7%2BVzuDA0cAefDj3MVgJaDkaxZcboMYsbTy%2Fq6tN8r3D7RBZhewCmf%2FfjR5oBIMASGk6r2VvfGXc5poLzGL%2BqQsleJulq4DTFwR8aTNMuLYf%2FzDHVi%2Fp2h4C%2FhiRoWmXT2UzZdN6w3VjgCkBG3Zgee4%2FRMhcSemBWihOf9JteA5kri%2BqKZrzLBfRO1hsCRSI5tmNfKGAK%2B8eP3e0f%2FX5f2o9iqoEY4CY0O%2FaJ1FZl7hONvHVlfvDZWKeJjLOcDsmLknPQGJLJg%2FiVNuPIG%2FeWB%2BaB5jyg050LuleYEUkDqcGdRQ85eQLpyCkgGr3xXO8sHZ1Dc6z6LW7Adzs7wMXgXyy7MpT8DgzfzTz4RIA06jH7%2FENyseugKqCx1Fa%2F7WMQ5LXVblmqfeOOCNh6JOvCtB%2BUhbYu%2B%2Fjikii3vRRODzlmPc6dkaxSPliu3Vqrjyh4Ei97NhGSl0KrLh3YhvwtwXa%2B6YTFDC8UyWAqqXDkAAMX6jIRfqdxoOU%2BLnqRa3DJjIUfdZCcctFaACM7SwJvJ%2B2rXe%2FuD9qpb6YVxkVUNjTYUwj%2BnXwAY6pgGEoe0YFeU%2BmPtUFZHqnxHcJ5hikZzje%2Bj7148G7X7TJ8dZdrbzR37Xb2Kc45wiotujX%2FDZnkupagTfATM%2BwAxnRiSjm%2BYSiaRKR3qzrv7Aa50Ke9H8nAtkDlwC5S8bZmadr1SF6SOBCXAbgDqMOUHoe0mRjecp3x%2F4Cd9GGuIHjQTPhRfzHzx9DTkN6LO5BRW5PsBdoVuyKC2Kfx9ejkml7Cd8HzUt&X-Amz-Signature=20bfd5d58e8093eadc4322d10c2dc62af462169a58b99552b781ec57e0764345&X-Amz-SignedHeaders=host&x-id=GetObject)

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
