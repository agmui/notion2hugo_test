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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623Q2Y5MH%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T121733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFSJyc2jh72FtAVtAP3sh2WT4AjJ3NvlvMdHbyw4SnacAiEAkn3ryNwEzSfBPeCXEQ%2Bp7H6Qcae8iIgDZXGNzdni124qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFZJ08lM7x%2FqZGUUmSrcA1OlA1y1vJjYKlJC5twNpKG0TNbPp1oPuXaAuYsB64kDTWTBDTBcCLCnOAnSdl33TsoLnotC3Z72Oqk3rfCSjSfmdvaNgIeeXoJ2IsIBKoXmHSSnWIZs3uB7%2FcEWTwJg2kFKlSwpFHysoJzwZufy7gI0KcD9nMdfJLQK%2BC5W6JIyY9syjhcS7EmvNmzL4hrU3y5%2FrSdR8kJNPBbdPjtbkPvX2X14hC2FzhIFsMU0GZMMT6valr%2Fy77w40mf5ILM4sfg5VC4humB1Sh56HTzbj3K7v5NAzKg%2Fx8E2oLDg2LtWAc3CdI7u5Vg4t7AuYrf3zTRs%2FadIDccJjDXcNyPH4aBtKOT%2FMSKyUPS5sOIh9kHNqbMir7pzIVQ55nIi4gnn91AtMv1eK5%2FDyN0ugRxdox%2BY89aNay7jlJYsBhc7Pcbt441czWzR4nGyoamqlKUJGfKoti3zDHLE5qkxe607Csl6XjqROY5Z2AUUqc3xYxMw4qiRfZIhx5KXJJuXhnpLqCelfW0%2B1SjmERfpAW12Bo8CdCg4rC8Je769epEq5mTH5UZN6aKfRsLqAz1zlPEQ6iYnPx2yWfaG59a%2BHHLizOzODRJWAswdw92VZxWwES5NNHeJL8X%2FBNS6nXyMMNu1ssQGOqUBPRIUHq85OT1tfduVg3eRD3HpMQZOkCfoJnNBhQnQCR6V6A%2Bic2pCs2IurwBlAuigwaP9ZRMx7QKMIm813hBTpqib9YtrPCsfReB8bQxQUoPUgBjNMK%2BMTWZ2r0ivjVhdYwsvtKoRZUaPbENwvIo3iSpC8yPlF15Wb4cbBdBTjQY5DQCQNb7URidDFCiT1RmLrA2W7MKQDs7Rq7MEuFNMhed2LP76&X-Amz-Signature=5ba3a4f168170af4be2bf5b561bd78b6b04a88b632041f00673d8fd3bfe70e05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EQ2WLWA%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T121734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmJnd6FFvbkDq1UjQUZtsLjrnG0wAh3jeTIsuJMZL20gIgRZOhnZcZQtFz1%2BvCouIMjbxOQCcWZrU2oqNciSuth%2B0qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPG1Hhbptj9Y5AzpJircA7M9VUwhaW28yGYAm5kVJdY7fAdq2gdIvqidnU%2BodfaB1MruQ1490kmDwmJBduoveTinXn8qXsRRIhVwzlc6Fq%2Bl9Q0PE%2F%2BpyoqRDec9Oq%2FSFZNbJa7VC0OLjjE2cPb06EbjHSj8kjVx8DOtoxvqFU%2FTYGlooeQGmV2oMDqPfu55mBKfLEDp2SepNMBICqzaVA9IOZkQV%2Bbw%2BvXHQP5Yjtc4uLrocNlfGfNQ9N1nzoP9kUR8nsAroiRf2V%2BP11Q%2FNC7RUSlTt034gBBx2rEFrrD8dqrPIP%2BiiWFezpuvWASOeeE3o78SU501NVwmzqHz4DqRDazhGkqA0HAlKqoSo8EO4KY%2FvRHvARhUswyptogDaCJshrtVvYZsxPHqLhQiUEDyTLekSDZmkxkBXAO1H15GBETecGspRpwwIPyHMG3RN4z4e7LST19%2FiXVFxvzSh4MCHT3Hr5gDtkNbOzbHuz2tWWgM6oKd0tbAivpkUOwXq5n1C1SMzwRGT%2FfW3FDwNFsZUy0R0aFeaAcPL4mG0C1Kruc9InEDekOwACsGMsTdSTFGUK6CqsTc%2BWormARhuGm2aGoVa71LnkMfdpbLjsWR1wN%2F7IXoIptNb99DVHH%2F9KOufY1K%2BUdBy0ppMNy1ssQGOqUB8iVT9c2GToGC1kMaDFtoaEFneFYkuG6ROPpE0J1ctc%2FGShp01PWGdaCHtLNtedCHI3QfD7%2FxJL%2FwsiV1haAkK3wVKPb8yCaideSrRiDZkPnaHF6x%2BCkUPZ2A%2FnRCTf0gKEd9SEY5HAuimdPzzjoI4nfA5awc9Qruqfx3oybaHWZVKfnVHzS5J3RrLxgA7HRnBJWXWuvVSIzf5npA7wYIfF8zzLs8&X-Amz-Signature=85ac11202ad8cd4ec0a963b4b10996643b02151cf990474b37be7023b793f14f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
