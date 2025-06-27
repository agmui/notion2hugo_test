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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U37QY6WM%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T004340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCICJZQq1%2B7iEktrGsSDtR3VNrnvfpVB1%2FNCnROH0ZHn83AiBrtbGlimTQVJ%2FOIPgygPPgOO17avgGQdAYB1zjH3kNsyr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMpy%2Bb2jASO78LQeWKKtwDP5Xobqzt9Evf%2FHjTQwtmE8Xf2w%2FTbfut3Al1BQe1hEFwJA7aKkkBgyTo7BrMQ3uyNdRRdR6j%2FwMPpocTahkJYczRpOm8ojJwb8rFdND0xirAy1VK202YYRybIjZucjgYpndOIjBDs%2FQuvFZd%2Bf27FiYToF7yKZVkAEsoRdadN5DOSoX7w9g4AFaAFi8bWorHX53VUkcEPfpzEJ5gUyC5FI%2BqnVr%2Bw33LxobHNK33VKXvMFR9f0nM1PPr%2BlkCF4jj8GetZJn5KCHUVaagZ9Jy%2FyYRgj5lI3YWXhH3L2x2Gxnp969JhDiWRCDbAOFMQ0Uabkgr2S7opNXr2ouiAbg8d6eRiFrb2RUlUA3mYgldtaJIFpRCy%2BXQmTyQVKoxSOugRRP8osgRZpRiTin8%2BwlSWvKpxfaOaf5dqlD1cUfnJkMG17Zz7F0tJn5wfRoUlIuWydRm7gn4hyNYfdH%2Fsq6OgbDcCxMTzC7Q86Z%2Br0P%2Fls%2FhubBeAM3N8uIVlbhcezMCAi4uHnkaO5G2zCa2RD8VInmXqwDJK%2FnAIMT1%2FyQuhM6LrgfNjjbUUcLqFc%2BOcK0GTTkIh4gWjJ59ufRx8VmEyfyXxhe97dtX%2FYp5j1c8meVxYybLjb2hLffvG8Awgcz3wgY6pgGZ6TX0OZuBPHRZS5kbaiQfpMyLkuX5sTS8mUk%2BuxrY4%2Ff8YryET5%2FYgjFQo94vMnBGEsvZLWCHO9KBvGGgNOwPXGyFmCcKt0EmRbrtCjxp8ZmyhM%2BE9l3GIITO0T%2BDEYqKMTC8%2F0FxpdlcQdqU4hB4ky7oKJiDDN3duic5X0F7JxA1RwwTMDP%2F795I%2BZjD3Q0wxizy101%2BJvTz1uNa73Cu2%2FCuEg3K&X-Amz-Signature=b969ff9da40313ea08138afc7edd82ad960244e6abc16c44d69c6b0fc9973ba1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE625WTX%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T004341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIA1oPC4b%2FjZjaA133oXB9R1ex8EQH1ZQOrI5ZVvK5rVzAiB1kv4BJAqsu5kSnO0ZQI2E90t0zgum2gCtmxlRr%2FQAaSr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMsZnUC7yQTX5OOFzVKtwDBb56c6LPZrOG4C00HuarZPYDQZ%2BvU6CjJITbRHK4YD3cZzGioZ3K%2F4fmczK4%2B5RQ9Gg05PXhMXlpzr88yY%2FGziD9B2ljNbJrVzvX9BAAi64E6Rm2J2m5qt3iQX6S0HzGHjUXrnt8aWjeEOzHNeAEzQvr8FSMCUtbPxuSdp9lv8khsELo8HTcqdwamvlY52CJsRhP1UwOoeNX7Xa8nAzg9esUaKNfKcBfwmxCk5GBvDhr4DlM5FmN8AwqTB1GJ6hnZqX2VrOqsKMaAAJdF%2FCk%2FUglb%2BvuDa7BT1TRogzRIXMHtzqtMcBGi%2B0omlB0v%2BbvM5lNn5TyR%2ByKfPnt4YYs238M%2FM%2FsioqEWpH59Jn3qwdFJGCLinld3PpGpPSGSbF4Sj7MyJTAXzFHdkBYIchvX20yyYrDV9PNlnNf3jlzI2M8O7%2FpFRHFyr2hXBvKXD3IcOa7s8OuFXsni4BXuv%2B4XHRb5jXdx0GIoa7ulODyr76IHX5PhvqA6tTg%2FFwj9f27yJuPznPPtcVxtjtesR4XLW7Hz0bYMknDOBfOMMtOhIJZWqGaFfPq7%2FsnN1o5d8ZRUfSQp8vUvtnSRgxLnBNkqF6W3UODodrCDb7Dg5mq7qK4BrDk%2Bkgis%2Bts%2Fhgwgcz3wgY6pgG98CYLaCObsCDcHLYvDDsG69%2BTn3fVk0CCnCNUELunAj2a6t2iWBAW9e8pQUmb1DdC%2ByDxQ8rDkFT%2B4ce97PfuGjCxUY0CCAoYetI4pRtYdBJ5gAZXWjyEVoyqKTmTG2upTlXwLilCgP5oOzzlv0ME1NejHlTfnLwU9Zx8Pantmz2W3iEF7QBGC9hA1dqJ8%2B1WvjExacQZW7Q%2B3CEz1iPOajkeDofq&X-Amz-Signature=8caea62cf4cc623f281323ed87abf7d48453a8caadecd06461358b32d7c49925&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
