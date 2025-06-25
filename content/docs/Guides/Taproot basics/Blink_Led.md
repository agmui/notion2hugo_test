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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TE3ZTTWA%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T042036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIAir0lpG5VoWITvc%2Foo8shNgMviYv1Rn%2FMwTck2QTHNTAiBebpa3yE7JMSFVfw5hcczFLoaF0GGBKq%2Bx1q08kLKHbCr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMjlTDTLFxQ12u3gtJKtwDV%2Fop7l%2B0rdSDOWkgdxOHCmQ5ZvtzSAAMHJmcZBI7MgTS4jochCzDcjQgO2CpPdUDaFJrVjRXPk03iQwY5qE0oWHeKlRpyl6jeWj%2Fy9wYUSwsAa%2FlWvPlWqKvf9ejtPRak1Ulryg0%2B4VoTDKmOxSdTUZBhJYtVsP%2BR3i8%2BBW%2B2D9wTtZUgRJb%2BslWNRQRBKl9lyPMt7lpkoCqGk2ZGlkhcU1CNiXH0yaMKpc1RevHxi%2FRx2WLRE507KIDvPYGqPkcJZ271TIhKInnpdqEmkq1aZ4WxLS7MNBTYc6vPKptWoSGO6rbSVjhQVdzUM%2F1%2BlIWIEHR8Vy9aT%2F3wANpI004R03IIuExtfJ0fkIzBVHa5EEJ6wUkYsDQIubufjnEVM7zo%2BrNLY2TC2WCRtftlp5W8u0GLnFtHoe7rGLKhNjuzirPTrG4J7AXR8YUceE9ZjJElTkGf%2Bfr0GVvxcwDaSkwLNlVBLQzFHyfv%2B%2FN3Wuk4Ci%2FpqRWbVi6R05NXsAt8naX4E1eiG7HieushSTZW9C%2Bm2ELXO5bMvnuHORft8L5b2jbqanv%2B27id1ui5rD5bhKCz5GhtJcfiIU%2FpIWtGT9KFuMfT8GCTfap2ykKZrXBuoUQbsE4eKKX4Nxv2QMwtcLtwgY6pgFmNFAVqi4%2B1Hkh8ZqI%2BH1qELF7SBPFYpcq%2FW9G2Vmk0AE7W1Yp9LKktz811VyhuRl%2BFiJbVGvoGIY36tknulynDRCXEIRsO5fDnvQOY4dPOUnyw8zXLG3v5AaiSyTRRSk4a5mMOpFhU9HDwsSroC3n4E38rMB6CHpNW6OQONtEqJ%2BnjroQ2zPOnbzQF%2B9gbWcCN9ZR%2Bi84y8E8BxaGtBbJFWj4xe01&X-Amz-Signature=8e829add48f29764f5c96e18bb927b140eea4277045f7c310fa4754f856b5925&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TDYJL36%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T042036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQC2w1%2FDESImegUZr7KFv4p%2BhrNQgE8ZgluyHXeB%2Fu7d2QIhAJUjMx0%2FsCoCTraXV%2B9PzfZeGApFJfh4%2F4XgCl4sozBeKv8DCDwQABoMNjM3NDIzMTgzODA1Igw0Ib1eYoN%2BX2twdicq3APcBxUncKTGiSfDwtmzqnd%2Bk1nz46K3MmY%2FOuf5LAuVWR%2FjGnm52LE55lvXze5WgY9ktkIbiCGTMBLu1iayPq5Syfe%2BiXXi84xkkG9moocdFGNVguHaCtbhUPWl2mZB3r8NrEsB0mvXF8WH08O26kQQPpulq4GR8ziweDBMZbsxfabkgJOPRO2LvO%2B8e7aXqtP3Cyr0SoZf761UXrN30nNNe1aYIT0X80Lv3tMbTq000lINeB4A90xUjHXmdndNmsfUtEyDqZGLiuZe2uY1KxzLXpg883xCm5KB3NNGoISnHjU4E1Lw3ogL%2BYf4Ztyo7osGGjEXjcSnA1tlZNwSmdfWrFb67lOOv3A2CzcBn8TWrn6UPNXwiD69TbeS8GlGlhzWTOVInE0UkzJBw4GNHyZmyH%2FMH%2BGMrnzdAeIvI5qiCSBtMvAwCLj0%2FqxHRwztv6FhnXJDllNNVuJGrrmBtrv4ZxxZeDku30g%2BKwUAQkARFk0EMxdfvfqXrxiirTwMtfORaHbh9gWC%2BUUWpkN69hH6XSxenb1XJKoVDb62xwc6XmUyFZ7TSnTYwRalO4bxHlBxtx9v33Z6y3prJaFByTkS1Pl09rUrYe1fhGPA5bTbrO3zDQhD%2FcvO7w4x5zDyye3CBjqkASRlk5mRJcLMh9yjstW5Tz%2FGAFNrmF16W21qWEgN01q2iB6A9AWZtCI90%2FV9xFPsb1MWUDX3oF2qYH5xwO7%2BnaAB%2BGe6g1a4aOoCniwK1uoW%2FNPsPg1leDY6MiCH756MJioOKSP%2B2MyWAztF7GxBJOfaiX18rYUB3KU31nxy%2Bv7nCIwbLcUbc8XmONc9SrgtOFngGFimDDHOkDM9nn7mak64vpYC&X-Amz-Signature=e7485766172136831800db6299e2edd97eda49d27f97f84497864a34d0cddcc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
