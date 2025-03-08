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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UE5T5G4K%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T040752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIHoBDZEHLMKgEmgkl6sGTKzy%2B%2BbIz4u3ZsIGDRGe3Ho%2FAiAoXYe3IF6vvjfkHdWUwrmEmuWasjEy392bDFSk4Rhc%2Fyr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMSD4n6dAqnriXhAzwKtwD%2FN5McH7GAO98WOT8qtW38g2q0kLhdNdSsqn5qViLqbFHqr4vJSRruBTeOhtNX32Y9mgjEVqXr86g8ZaIN33EbQbEEn2YPEp1noBoPsc9Xmcx4NgNKAIFLP9qC00xBB63lBXC4tJVKYMNOYDB%2Bd1djjF8SZJ0QO2u5APmNaPctIzxaKPmZELF6SIvlLJuxgsjpUrnjKkevQleaWUKZuI9MNAkmGXgKep6MwbBgpdvZUAjDz1rdZx189mJk3ELSwfvACFJgGvviJKj1hW30vyXQGGcLzMWm17QrDIvUVHlPcGwi8%2BTWkSjXv42b2tKWwGmzkn1a9v6Z%2BUw2A2txxO76g4QMdNCu4EIwiqSinU4l%2F8a%2FnGlpYKBoFPa2dnjuAkeAP8VNhHN6M0TqkuLW4EFzPYbb2zRsbPDaov%2Fss6x8KvLiEX4p9ZRdn1Ne3ETngHvunBS%2BnQeQGoZ%2BAcqIxhaB%2B%2BUN6Ef3lSRqhHytyZ4nY6L6xKZzOShfGnFK0uo9rzSAzqZxP%2FovNZgZHpd06VKBrE2QeC%2BP%2F1Snf%2F9EZxbmF0Wf7RgEIo%2BWwH2GGgO7W4AQG3hiyNQModGJqfPExbHJp6gl6zJj9aPd5dcsJ9pVd8Hpqw5U5vccOkoDvcwr%2FuuvgY6pgE0ziRsz3nEvAGR0%2BZMDBRaHPX%2B4FNrnDQrpXdYWokiRgdIAyFsqMIHYI3ImSw1DCPqkgjMytFJZitZm3BVJTVkJA30AG7frxFUgHyqIR%2FOWXGLJw3yvMu2TdBnM%2BrePE1ex9cwY2%2BDp316oTEN7a3IYSyvImifIYupr9oS9roZQhEqRO6slgDu2npuVWdvhRJrcp9CaatG5rVgT9JANRgfxw4klVYi&X-Amz-Signature=ea752354feecda3f1f5df82cbe2602110bcba66dc48e59702cdf348ce691fd67&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCYZA2KR%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T040755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIC5JmK%2BYBacmslv%2BYT8ik%2Frc8YiVDIsYi56nwn69tiDXAiAkiqrAi0dyLf3D5DYGCuSxTEDr3GECAf%2Bof1eY%2FjQLEyr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMiLEJ3Ofu%2FuSoGsFnKtwDLTD%2FGgiEilpKMZCSXKhxKA0cA8angUNNBVFPLTmVJqBVwnsbV1bI2qaM%2FQ1H4kLvoAl45dZHhOnqXi0cMe%2BjOV2gZ9XIXRDkZ4yexZY%2Fx6qgemNx%2F6V1RzMexU2huPYV8s72UI9FabkKpzEQG9lhCi94B66oUjxQfELYkjIlt8JtQBLo46zKI%2FI2SdNSGFwtSyBhJi7bW9jSlNXo4LC2dOUxRK73KxsK7SeahNAuft%2BeQHnZaM%2BuDPVThI1bXiGWkTgAhBU3DdI8KsuXFYCZs2TkCqfyz8fWjpV%2BIEtXPZP%2B2dYT7%2FO9%2F%2B0QY4emW%2BjO9UUy4bDV44POnw89rOANj0erBDrP2kyXJ1FrvU3q2uuB0ARHSwFM%2Buc7SXKewaMAhg5ZbvFspnmTdidooFckmhH5UTagaC1VMIU2x%2BT4CyEomE52DFag7ll4NX0pjMrpV2Q3Ecck0umYH6ikPc1dFf0m5KB82hN%2BVdhNFoL5qpsnKGJ8kuaYdeL3DK%2BEERMWdySOjTdPXRQxgbVhAShXa4tLJho85v8VyMi1O8mPX5M4OnvJuAplBW%2BWt%2FrYZrKFLquGrJc%2BFuhdhWKdBg3cnmGcbOUDxKLE24kPqJkXTJS9%2F0Kk%2FrMiwgNDTGswjPuuvgY6pgFqwrCHuL4U%2BOOebXuSHSo8apUddC8q2urH7nzmPcjr9m4wYScjvTjGUPmDl8H7Gq%2ByJzE41WJIqLfp7BngwebmZrQy9onSyH%2BT6j0uZHuhJiShx0akeWn2Hbz%2Bim0%2B2ZKXQwSoIaDeNIWF9vaEx01%2FpQ4EaNynoiLG7xF3NnCpvYefIIRXheCFqZmAmUBoSCvwpYfiDNO9m4TZsOPIZEjzEx862VZv&X-Amz-Signature=f0b985dce950781a0c3ee6f0f040f90c5e2e890bd5e8c16b2f6a75c287f83d2f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
