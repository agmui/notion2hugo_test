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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YDASW2R%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIDzOXLSZyAQe6mu%2BacFNpDq%2B0qZ8in0Naz04u6rAE80zAiAOngTLOdhwVy18KoSqPrlDBqwE7R5tHeKxKhxgm7O%2F2SqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWbu%2Bo5Y8IzSBiEVAKtwDf3unuaGWf2Ao%2FJR9FfKqhkMoLI1%2BAIHZmJ0n6zxKbglylNLGdNjH94ur1ZTH2GJxntHyor9HM5b7uVYZ%2BcOyuBIA1ramI1MuV6WA3VFv33Yhlg69cXQm0XOGxAIc0aM9YZ5ro%2FXj1CzoB2kU8C2IQYZq8sSwEAbtwo9iwyyT6KuyqiKbBurGXdWw3H1%2Ffsx0yw7MpeZm09eP71f39yPLufyGARj4cET3u%2Bz4ga6Ze8FtwJueGuFBX7avHzpTNdB6%2F%2BDGiU8cEEPJWdZ%2B9Zo3fz%2FP1qXfUB9rW3Zr4q%2FtTRmfO1fqBeIzSGPL42rvp0XVHka2c1suVBmY6dy8HSQSnacUjqQKcpCL4HJ9Z%2BHm1qyoMlogwaG2X7BVkupXR7EyMU9RMF%2FBAjd57K%2BC9bZhJktRevEkzfy9EvAh4Sj04OyGlxI6P1eBEi6rrdc83Jw4LuIxaugczHPgg5%2FYIKzqtjhsxyHU3qvyWiOcVyL9jDFT%2BY19zT%2BmRKaqq%2F%2BWqZqnOGLn6g7FlCJ1WKDtA1t0QyTSBoC33PZOtvHOAk%2FlJ4aX5YneDduA1tfLYKdY72RwONQXL1AADmupPP32vyI8hshm0WmGEjFXuYflgKXgsXr0OeSycGsjS1zc6HswgJijxAY6pgHLQY9%2FwcE8Lea8rsQAX60JLc0%2Fi03pPtn%2BN14e98w1pKYabb9yPtR%2FGOBsGnWHy1vedKrZQ1c9UMOduWsgR9QP4P4e6ViWnDDQUXpjGFfnSzx0bzuYcBboeQ9jkIMilFlPIL9fMX0nWO%2Fb4PF4XnS35SLyqCHX5ZT0dsmvTBZVBoenmBmTx5PZ131K8IniyktS4erSXRrhC3mQ0FN1xI2yGdfwDH72&X-Amz-Signature=c98bf22468a1d4afd0b1e028a8646bf64d2d6f02a3582742654d9b07c0922976&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJLJD7R2%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCWiZ6vRkA%2B0tV2EqPg5B17i%2BWYZ5FOxx0uFngTlvMBbAIgJe3BuBHc6y6B5gZ8pf6Mj8FP3Sav%2BvfnHDaEabxPL0gqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPzBjhRfKto3RGWLsCrcAzIA%2FPzNSPmoIX4iiX4OqXgJwqoYizLYAzcFM4FY8fr8uHekl0IcGS5yaxiMOjCHhyz2uatbiy7%2B15YQ%2Bee77nsBkHopKX3MwqXWT3V%2F98N13j22IreNVsaOGS6lIWy7hA6X1lZp%2Flhdim%2BbpHP2DG%2Bhh4z3a92GiY4evKGcb1W4pCYjQoOyaHtdJ5zaUWvYhEoQ1s0swDFvJA2NMNxc80lez6FpZTriBWY8rkPJUVYZvgOcnHZ5LeAmqZ1C1%2B6B4Frq68XRddZD8BItbUtgLfUKsmN6jOKIcmqUx4s4lvh%2B5od9UWHTw3J2FHOGe56o4wddEZWrSEh5RXBlMiv9ZlbnVRtjvniG5BKG4wTyvvyFyN%2BC2W4m2iKau0ATyNNr%2FdwaU1X10A7KzyfOw51HfkMffeJthk5dVoWkLYUbVRPwRS58JWhMTp0gsohrdfjIzn3XIaAvV9uzyW%2BGLgKHHKR%2FDvN0vK5WjxcdAP6NxeGlni10Ej759otA2OacVWfadRnPHqgU6ZS5j7ASM3wldvfrW0AL23fcIndueHfLKbjndEzVRuPaAHUA%2FQwgUo7yzztxaOnmroeEmJyZ%2FpwK%2Fu%2FMLQNNgzhjgF%2FHvuHBpRgZMUzr6XJne%2FtfRdCgMN2Yo8QGOqUBXG0M13%2BsGWAtUNk14ZOZ4j4tjjhf9NTNbNzyYlrTl9nfcHkW9vuUQzHsX%2Bz6Ls8bMTRlvq4Hq8Lf30g5gnDSF7W8SAdYEbtKX5vn%2Bwp5fzjNwLbE%2Fjnx56ol2%2BmRzd2w8NdL33hxrs3LoXXQM4CJWB2FIV%2B9O%2BEdSlwiEKhzrcLrxoFUS7mNoGQuPL03jpxXGcZoJtgRDy6jHrVCm%2B5qn0uNE6Ql&X-Amz-Signature=faff4a20904aa6e99799bc8b2a76101cfa1f9635a2cf168325676d2fa9eab515&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
