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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DU63MJF%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T160903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCn3hg2YWaruDjrzx1IYiDaies8bXoO5olRNKGcGp5i3AIgNqnlnbmJzz%2BwOLmEy5UNYJOy7dtZZ52FeyTjEJ6x2A4qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJYO5ZFXpJksmMmf2ircA9YpVj%2FVWKTU3LrEENsN5a%2BSR8UaQDN%2FX8M3zSuZFRcSQ4l32u57yfuKxOrraRagxmuaL8mVLQoQfLakZw4S2yneMGvMZIBuiaekO3YUIdLevFqchOxdgVwvnbfBbUzc8chNUq7V55KefzvDXcOTg0Fv2rLAjuTCGmHFgT4uaZtm5EiOyyKeN4lGjy69EP0UXs2XTv8vhVGQMCL2nZNeEnlKZeoOpmTU%2BIeubh5aBZZrULp5ZVCylaHU%2FmiZmlPNaG4lMIppiwDIgsZQwoKaGvBbclMJAUSfTEfx4YW8HKMVfjtTd7URnnxs%2Bn%2FAap2Qccio45mQ3ZRKRJiX6EE9E%2FaEHiT9wZn0lOr%2FMQRS6Bb5O6qN4rRu%2F1YZBI75ZMt2Hu%2FNNCie120Qh19bxM%2BRQA5dx5odKHMwqkgmiyz8%2BXltfGzRULTklFGDmktNm%2BiZs0AAzOqdcS6qgp8ORoKXgXOWBPiY1PsVMB0B693jvNZqr8os0bdadWiZwazjv0%2B9vcLtJxnLT1O736QYxWTMgBYu7G1HIKhs2cApYeGSs68ohduX7qax0q66Gq7RC9fK%2BoA0G4cB7tZ7WbxS3zme4y3clieiHzKi4MD%2FUskztzeuJdxhj%2FRiXAE0LCu5MKiLgMMGOqUBsYFTGwo8EdPCpPdpgBT0xOv3NY%2BUyVYVgd9I4ptvxp0M6DGQllmoLXdghYrlqSBtNzE7D0XzXkc8miSfc4JgWPOOUIm1jEkwsaoHZQGGA0kcXmaizwqckEVENn%2BLV0dc7EhLl0Ns8FgU0cYHeExyzWe9MWDVzYZSFAzQ7tYu84Fga2wVPSUMveyJ0gq7zgp3uBL3WCr1lgLtujDMN%2F%2Fcr3O7HhvW&X-Amz-Signature=f6728288b281ad18f1f7f006f1c2ac17408e97093bad9828c1e5565278fbc4b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDSBU3PB%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T160903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCGUXc1L%2BOdfEvAwCymnxShyqNobfuPMo%2BnwJD7K37XgIgQAMwI6G4K8Hty0FDBm6WDSFrgmvEj8uMwh%2F7Xzc%2BIFkqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMtxe5MgGc2TcF0TTCrcA%2Fj5q%2Bo1HAUS%2Fwu0IqrO0UN3mMNq83RXzDG1tIw9cdMUTN%2FuS93NK%2FnSmvItXcn569eVjK7PaowK4TvJO%2FzpDAs35SmyjCxWAE7rrs7jcLS0DgJYN0wOiYL2MxUr%2B8fxaXwSZP7lRp8WE3Ptw6%2BxK04N2J6iSjwwQG0WdzDk264pKX08YJE7wLQMkbnPlOhaR6qkB4H2C%2Fh8jxzl7yviNBPh5AwB6O6DAuxTYMcUaRsVm8HwSTX6fpKSCfR0Wtgw4JzNFxJWLLNg60ZPcSonsuLIC5OKPAWgQtCDTQQfypI%2BAR5u160D%2F9Mo4vIYIKX%2BAXxFKroxwN2oDBfeX6cS8Vu2jpHSc1EbKiXRtbVMOWgXzYBXj76Q13pXfmciKSnlJ6r0pj%2FYdREf1zNYXAj1hmv6Skl%2F7pX3Enh2F00SJLTmXdJTyjyxlxeBoAuUmDsYv5VGhG9v1y9PtLPGm3v%2B4uOjzLFN%2BpDGeHqLIjcyc4vHSmMcH6Wh7LTLmQ1jYdexrlL9cuc%2F3giSgCGxqC1SYhpI2EnvFrsPm4AcnZcfUx2eSoj6EP6Odiwfkfa%2FtHXuQ%2BB6xI8ZSpOqp%2F%2FAXXm463YW16PoFpO1QTuPiecNbE%2B7dFY%2BSuFM60npImuPMLmKgMMGOqUB4F2j1B62BjbRZq6%2B91HrT6uX3zezXc4XzJEyidUg8upZG%2BIfgnNhMZtAy7usytbmYbqJD5c%2FsgS4QsszXlVYtgKsG8J6bdxs%2FEFI5ZEaJ%2BnLHlKSELktNWtexnmDZhBs5KfYDy%2FFyLhV297KYiN9aM0Fi9T2ZcNrxXq6WDd0iQeoTBpZ7bRiAl2Ug%2BJzcBWl5uCJGVbquSIlkX79uGOCcbipuwjz&X-Amz-Signature=30a0885f2c485f8e1f3298d28dea324ca26825618b17642845a1cf3349e7a584&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
