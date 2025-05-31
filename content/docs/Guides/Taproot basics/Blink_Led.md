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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V64MXDT3%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T160854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIZq6vaS%2FFJe9nk1t2AMty2YfAvcQ0aGtnLaNwW263cAIgEo4BDAWXZHQe%2FuON%2BRMaKsGyzejsld1fLk2%2BAScF2ukqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL8SS77Mtqx3d%2B1HYircA4Q%2BzKMXTTFebC1QL%2FQgILNNgdrK2j2qXz%2FzQdlkbHVGC6qi9GRr1oOaz2N0uFtK1fne7smDOxKXCjhUA1VP4X0iGZ%2Ff17x%2B6FLmCgjlAo8LpxfR4QfFDk350chvxLc407eJl8flAUIIlaGm4fUlPPKhr2NrbPVTb2pz5TsohLalpFlmWzZ6LbhPwHsRpLsJ2VUA2qfzX%2FpWA6P%2BpFUzy6WNjsCynoBVhT6%2B3KLdp57kUAAbcjVox2d6oRb8LfnPDdLvWhXrdw0BZjdrNtQV4UHHR%2Frf%2BKN7YgNsfdC2LWYGrxHHwvqMkisqu%2BrFaEY2kDqCzWcLqDxjpR9Ilsp%2B%2F6%2Fxz8cCtcSrBeUuy%2BAnR%2BeZvgQYv8tqF6q035V11ICfIf4OJHlVR4EdBU%2F%2BM1XKFqfJra21H66YhPcOIoYs0T1VGXtz2YZaisUTUsQbHs5fEEd7ME%2Fyik1zNK%2FbqXuRfP3%2FKBj0oixh2w1uZWxshobNJtnhCuYyMLpBatzpozul2h1Qi0VkX%2B2ls5R%2FBrNEa%2B43iRAfrrW4cuLgFO%2FRPcLkC0LxHaZQ8GN14rRraqFT2Y7JuFQPK0gzKOb3GJaNcFY62yS92n8U7HZmnRRuWxIVvDv7aTJR7WyRhPrnMLGo7MEGOqUByxWehc03kcHw7%2BemM4k9uEnT0Ku8EvWoq4A0VfjFW9%2FFhq685P9luhNsNtY5kL9Fc3aHDdD%2FMrn7uqEiJ0%2FxoUOzByFgNib2aH28QYTMm2bHepZJvPdvsMYaHaOqlFpav%2Bp9Ecwm0zDLwpGQ6%2BvWF24KAGyHD3DgEiKMsVjUWY0oOOgl6wMoTpPHeC92P27WnVpclrqrJMUZGEU2JT2neq6oznFZ&X-Amz-Signature=9bf47dfc0727058ca3eeb76d6301f2aa9e56353c79fbb90a00fc778c4f1df139&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666E2VETK5%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T160854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzROAmQ8U5hWbvHYIhnnxDggAZuX4CIblILpvqCNl2hwIhAKCsbfH7O66SUDQretOHuR1ps1Yt8bjwWDb17%2FBYYEQDKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgylbTIXGotTmTGJHksq3ANMmAOMyCd44yB52sHX0phtDmgxm6YbTxskrw3uPEf%2FduuHiveebVrzT943mrUy68d6uLIL%2BgRS7vlgrEAlk3bpxoNcODug1eYzn9RMtayjuHhwI28OTADktl2xss6JELoctw5D%2BmWiNgjqSRo%2BvuhXJwW61sfWItl0HuTXRzXmJHHXy49WrkmmE4xF5IIpJcHkgw4gj0yO62wUHpkFdoO%2BAUY1exBZbxwHQ0wyCb0VYIr74s2uSkr%2B7QOHoA4a2cDtyiiZEjdEhPaJFx8%2FLNabiM9DhB2DFkVGOT%2FXi2ppyPoI0PMJSOoTZtN6QzDqKULqSgkSOBxQ5aFX7mVaPvaZQQvfLwIguJMQAf3sGfjGF8%2BPMWobPKSSU%2Fg18ih3LNrCXu73w8x7IOqjzaj%2BZ%2Bkxg1UPJdKgaMymQgslRWe7agYVMuFYS8FpyKeILc7Ac8Wh2d2MOZdvU%2FdyzSTvtRu4e%2B4Ky%2FnbU19JfMy2E1cHVN1qg%2B9brhlDSZddP8ACCmyRTLxCualJWnHLab%2FEFI4VPP87vdgIRJ0IRP%2Byv0v4HowPwkJRRL8RyW8MSLbZWE6iUXRyYG9N0ViDxINRxxyW5YQQZdVo0Z8q068QSNu8P7JyJgHxTEItuz%2FAfDD88uvBBjqkAcSyAAwDcHU1bGxMJ%2FR9tSZnYbqhtVGG%2BbWngKFqOB3QpTNhWEYg%2BypVaGCsfLIQ2AwTLRtoD0KT0e5xbTH%2FDdTXBDPS2N2cYTG3rza0lbbRbGm3hms8aLHuexlLWFxyjgdHZCmJHxBgYug0a9Tu%2BMUD5gWLJbKyhoeFarMKFhF5QuFHFP8IdlrxQ8ZtpSXw%2F%2BAtz3Mqn3Ngl8HUtur6lKCZxdw%2B&X-Amz-Signature=1d3f4345212a20b74dab603ad95445b159b782c39bafa331399c49bd0b498ea2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
