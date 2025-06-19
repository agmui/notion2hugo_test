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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQTNW4LG%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T041746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjX8O4UtUgUelaaUHtLUdUVcQcUW5YTDdx5f76DHH5lQIhAKUccqafr6GzI8wM%2B%2Btp%2F2NJpTlkG6LxT14vApiviD2MKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyAsRNSBBjYkoTZ%2FZgq3ANT8xwnQA9Hkd6MmbP0%2FZuPP%2BIo7W4nIY7oRFyXqWeDaAkrzXmxxoRAiNuUx9i7ekfKQaNWiO8SRTq991g9bkMuMqI42tMVrrO%2F6B7qozYrq84GpmhAtBqWIV4FNxe7iKEkMSG1jXaQ%2FC%2Ft97BIdncWJuFUZ7EzWF%2BZ3fOuCkpfB4BtGb1azcbxM0z%2BEDRzOyNrVgK0jPWFoQ0i7QierrPX2B%2BLMLn4qkBg9egWsT%2Fa25RQUJGw%2BH9GMqJXeMp03SJb%2BjOROTz8cTepI7otaaVNcrAG7BRIinC18ddHAq7UgUi6SksMuQLCIZ7lyNkqdM%2BlQgTam17noxKDTewHLNAoyKRO4TozocAoE1N2J1iGoH2woH3LAbTo06dUqtvKam6%2FJjImBO5OKMenRuzpgWD%2BQnza%2BtrUZ4cZmRDIQvis0HaX5vPkV7H%2BVxzyCoU2pfVbITV7SWnuMcuRoNTqoRIzQuCmfNehDSIJWiGlL48LoS6QSERVk9IgTk%2FVmUQGlQlzfIaBMxCxJNPLW%2ByQseML87NROSEAy%2BACHv7XoEq0fvlGAymbzYbP08f4tlMk4AZ6I8VoUInSSW0z1cmfAeCIytXa8RAuSGAHND8A9TQeSkRCaTWhr7OcAKhvwDDxic7CBjqkAUEdBbrLo95GPQ84sS1ACPSnDh1Av3cLptoO%2FGpS6B1HBUxKG8T5ryvnc5MJaULZjio8Gwd6%2Bh%2FhHeszwwhYN9N%2ByeWhdcVjaEDUnimTiR9Kw2Z1bMAuYJ98AntEJJAng4q2WaHIIPadsf0uiTeNZ5IpQ%2FLQnSbfa1wXH4puOfgggSC2gKGRruzT7bApHdh8x6VebOqJ7CPlaLCoNZCPKYJwxp2s&X-Amz-Signature=df05431272ac6de40386f8d12047c0d7b0355534d868e0e8ae661da08e536b57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJEQ2ZSI%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T041747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGDbzQ5aPd8Jl0Razr9Gk0K0W0GH7gFOcRA8yJRDzbwgIhAKcoX705BxzuZp3U%2FW3igFIZ2pk2j6o0jm%2BwoBw%2FesEnKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgytoN6ej4sL43Qgkmcq3ANIyE3KVOolHjdnucNulmBs1VQMfwp0dIvYG8h8v4ZPz1sBj7lcePWLEQ%2BfiAjHOsJvY8rtVaX0IWPUZxiYECsHgRti0k8m3f4OxrIPpzOXwa61EeQgzfYU1lo58C1aFxN%2Ba5UiUiJw5fyK6IceQ8%2F7d%2BPRPcZoYU%2BARmZW1ZT13fuxG%2FgejdorcW41LGQj%2BRj8SI4%2FTiecUpGAXEjr3XMXiOqaVO6Kzb1kSVdyGj0AjkeI1clsMEftvTHrZLAPVNmNQ%2B%2BLBIHQ3BEyWdD2HqKEcxG9iFPN9azoMLBYZN7OuAaPjFKQ4ZU0QB3s7K6kk%2F75wMZSI8TcFA%2FZS%2Bgv%2BgTftAEAClZ5RUdb6d07AL2ubyaZKQonh7XsH%2B8de6Makk3HqettLQ%2FzgltSy0omDyQjMvCwCdYvDWojqsGtKArlXY8BnirT4u3AkhVs%2B3Kt29CWwy87Qo28JfdFRHDhquZdotsQBQ47gP7NbB3Te8XQif6o1jiMpqojLG9FpOabx59AFnHS84oZtjbVvrBmeajPcKxALICuRuxVH3QcJMD0TjHVeMjFCIiPj5dVR3%2BnWcdHyHkeYVEt9Nc4vzYyjqR59W0dqboEJM9XTlARnlOzx4QZ6t8TNhhuwY0otTCVnM7CBjqkAU8X0bnhzsxP1Q%2BpM3p4AZuO7b2tHdZCDla3Il28gtnboUTjZNp%2Fj68vLdAQeqjZpX1O%2F7bjhv5akyz7XKknKRiUhRRiZ9HKqpcY%2FUz82KG9ptPzrR%2B3iPtcHxRffeDAMwyMYIG3sp%2BtQQOR9Z1WEF4Vc3WvU2khpcqU6Smz4VByWUScBmepAO3veSPN3Kqi%2BNR1Ph0vxhzb%2FZ46Q8rxHf8AQsuv&X-Amz-Signature=a7e50b5bab0bebe149685f81892b0d2264ca81c5630d0afd3ee485332bf7f20c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
