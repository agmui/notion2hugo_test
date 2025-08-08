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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBIZMJ32%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIG8cJWApVykox1lQzJ4UpCJ57PJFHX3QtbvHDgdhinCbAiA4XE0QQ4EBSj3lHaD3ul75jD%2BS3qh1SvupeeRVh3pVbCqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM51ESqaczIbd%2FhKBhKtwDk5%2BAt%2B3XYA8IREuMJxL9LIa3eXin1gGShItr30O%2B2ZA3D0%2F8T7B2iF01dFVga9xnUzrv53%2FszpR5QcMNQdXD4i%2BrrmeDF1%2B9%2FzNlwGlQ%2BcPTfXOFwqJdUOvE95BIXVaOPlkzNQf9gXT8JeTvXhMaCLo6%2FXhXbiXQLE0yw8pm%2B97M3iNP93CvIf%2BefcuwGUMce2OZY9gPJlrpdge0JMRujvN4lQGaTvkvHbCmYLBcHbDUR6cM2pQoQrJgOVn5JCnzEhBdnNw5HxB0iR1LtnK9CycwPlzgLPNXz7aYTmhWlYZnsdxEm%2FsdO6s4zHX0%2BsEsTwAivN%2B9DBazD1%2Bkh%2FR6WnLwoBr41gQWfKm0%2FkaMxsylNsHFHJSN7MEt%2Frr0E%2BecwvoShLgWV48lzFIfTH4OMHPyTEijVZ3G4Lj%2Bz9lL2gxVx%2Bt9wIrAitE7qDaHYlnwzESE6%2BEB6SWnC%2BppVzWagrLHqqKIrrqcQXDm3SyPZ9olKe2IKxugAHUijKWq62xxIY%2FYfv%2ByJyunLDjbAFXsMyV8gUD91REzH%2F9zizqnmULVP0aNLu0t8IHfWLEYG5BCCfVeq9XHYC8qbCWRf43iHyiEtLhVdhoowPr4y3WORXME8QuwGYPIqULb1VMwnfrVxAY6pgHVgOPotUJyX6xKTYXa9BDnkjRw2Vm7obnexAbBmGwMQsW620cMWZ8cmyJ%2BVUUPGof%2FuhABahR3C3nOOeAgTf4NfQX9ABw13zqu3zppJXNdpYu79PZzBZXSnqCV4cbGLHKihv8UF05rH5NghQTmBgwYbdW%2FuSXvVCCdOt0EEui0EEYAYzlsvB9p5d9SIWfWaDWhAqx2XJLsUD%2ByBOkw6crkSn3%2BQDOT&X-Amz-Signature=aa850a5db143117a34ceb40450c669cbef35b78404ca62d5ff27c61bf9a7311a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XSK6OD4%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCUNePIilaThALMNFkWyk3kzWJx4v6Fq%2B0h5RrZ514UvgIgaMJTPY1tKhga28Jzw6rbCTe%2FCIo9L4BhYU%2Bp6sVMKlkqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDOQVM0ecPnFsEXWRSrcAzKw8YVrQ7SaV1U46yb3Nnc0AT9ccYLj8wWJEuIsZhC97%2BAfF3P0eGtYFR2PhUFsSBhp6G2SB5dzm%2BM6w7OAb33%2BWDl8vFPvjzN%2BqF39pKlnfpG6kfEr9ZIXpVvQ8c%2BVm1yHniaecyupsXEo8n%2FpfM2oWj%2FTiX0CSrlW2pzFC62bBM1lInhfMLtiL%2BBNJk26JZyxMKAestQib%2Bd2KHWH6Tyjd55c63SXpxTdobwF8xDvjBTxSzxk0y9xVsD0PcpW8xKFXEwzKexrrFpAYngGGtG2ZmseZEWna0YpaNhnIdNcaWHR63erCrDGtoz%2BwjCqjyn5yFgjAb2XzW2lmt4n9lehRpieAIpwlkF%2BhLJESQhENOF7Z4nODkEmhLHc%2BkOex%2Bln1PuqdA2ZYSz%2FSYlMkhJWbb1482%2BAktYNZTLNaxz%2BjQW0Wsjny%2BYaDgLGj%2F53FQwBVJDsIUzmsBXvFNjOX%2BodhZzQ2mAVTu5za10n3zrUVDR%2FdZSMiOUscmJIRyHhqCzRZq8PkWgZslesf%2BTIfOvaPdOltzpEYmR216MXbinZlo5Ddq%2FlIkzedKtftzw9MobwWZjGRAdR%2BH6bx4VIKwuJqUioRu9ABc4plLGfgyCHOcC7wvwKnq%2Fc7YlUMKn61cQGOqUBG%2B0l%2FGDWFBpWfzetGXM1TzKf9cQ1UMpoEQirnHMG6mT3%2Fno7E51lXO2kxBELmv52V3irNg7YylaujSza89bHo%2F8MLAIV824r6MBEQcR%2B%2BH0KxUKb6YRhh%2FwuQsjQTByOTnYMnuUaranKEfzFWGITfLFjJC4hNDjYVI3J5AbBybaN6Ww3CpW7McBXipEGHo%2B%2FevDVuUD9VJ7EDcgxgF2qjiJ2mehJ&X-Amz-Signature=69ec1b3b873d738f8a9a617ab3e7bc6e417351b794d7deaad0a32e8307be0981&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
