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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VG5XNIMI%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T140149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD88p0xqmiyt9SLtavXFaYzAFOQ%2BgTsYGxx3DGWUUQsBAIhAMYKI3%2FDdQfVMhkR2yMwtP%2B5vk7oHSIHuQa6VTXGS2AzKv8DCBQQABoMNjM3NDIzMTgzODA1IgxWH6EKWxG8HfRUisAq3APzDHlr3nb6%2FMz6eNP%2FWCYKGQCn8cnDRBlB%2Bf%2FMRmenEgDt8ndQfi4eKsJgA2KLFRtaU0KEg62WlVBJQLnUd%2B%2BO2AowSoNNztwxDfBvKusdK3Hz%2B4IoXQoEsj4w8h4cEfjT2MaFa5WmsdANXzwdujYbZbO12qaPvQ50dhtS2S7tuPCU9lUzvGt6u%2FvGbrCl35tMwluQJuZWYHDosjzetTmEyQLy8Fl8Iyb05vF5sAE44ftVNzQL5auug5Lmfa3U2iUQbb1yynZKXlfscIlWJlaSnQJ9Fc68Z8jgPa0YyuZVXdAdeK2byjsjha9QQm0UJ7c%2BNWcRxkMSuzRtBDwFmGJmB2E9sJXi2iIkuLWsLIIGXdS2EoqO%2FOybIlngeU0rUjNnuqwpuQi7opFQDeM27LTZwTsomEophL7xAn8wV42bSM2J%2BveY6peIxb1VPgNxpUPG%2FUuRMPfi%2B6EKqJt2SyZTv02jxtVOKVZcFXTjhxNaNBXBs%2BB5UXRAvTmHo22i%2FnC%2FPfJQRlqmWs2SpbtAoUXmIZvhbZxsb67AEH9u2noNmnwVVI4b%2F2FWSGr%2FihoP7dNG7ifg%2FX00z8L9XQzwsqKt%2F2AL6uUiDUYSVTztEtJZYPKM%2FgFq0tiI2PEcbTDp9uu9BjqkAdYMpejsI2KTZrQZvUD4x7ods0WblyqUzJe0q001NO1JflOwIIeBPmt0ObON40dg991dnTVeaCL3nFP2nGr1ISai5D1EkaEdZjazgk%2BbS29c79QCAd54WAR4lbET0TARugjrHPMDxV%2B8e1TWQgVfu%2BnLzqXJneXs82T8PJtnPzgaoodZXHQJ8D9C76ty2eabQ5NLdbj6cZYqfyiVHmF5lMBkAQWy&X-Amz-Signature=61a0f495fb4d566e74d402b77efd03382840ef0cb8260fd1278ba189bf13c02f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LB5IRJY%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T140149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLBm%2FMim80MQSC7QfgbVQenB%2BWg16JCDg7qedrNbXudQIgSIbuTc4ydlG4s%2BKCpCG6ldyJU0TK06doNfv1dqosXi4q%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDNoF%2FLSM50Ux4ZAStCrcA4T5uqRCCVAe0N9TkCccKwt9NQnbq0ebyJnLwj5t5FL42xB3pbOP2cIBVXyaKYO%2BYQApUvsO9sGXpsuE0Sh1jkkrvzenmAEa4lipyjgP%2BpqJ7Q9RCfKzOIRnPcKNnSagfAWSL1OTBixDdSjg3kiDx1XE%2Bcnw2ksRCQw0luOE6HiktILKa3lu5zFFGlMgKP1v3CujbIrGvaytzAEhpSreVjxiSA0gP6HVI%2BIVRSF%2F0ldKErZdLxyQb44SmyRsra3yz0Tk9NFyARgVd0GsQDW6vNE5u6aVxFxQmzGwK8dbGLOIxPfsNG%2Bqhv4AaQgHbSlvnj%2B4ptjTideKBuCxC%2FjLx%2FMGcbliJ%2Bof1ALQVioflZ0e4hHsQggToyyCCs0HoGtbyjnxRjJnOGGyE8m67pnjDnAKwZHetjHAZ5VKKn5j7OUfFU6r23isAj7pBX373%2F26X8tn%2B1yWyZR%2Bm4z9fOw6TPuHdY1pTBaJ7sINOgGSHzrBblXruOf0lYeiCca0aqwI5Z%2BD2fC4lq5%2BUqp7e8SN9uCLByj3ivZ%2Bu171FEkvru4G65z3u5BkT%2FCxW8Zl%2BDSJ1YEECrNqc9Bq4e2i16IcoJzj%2BJvH2RYZnJvLJFXyiRZQwQWY3APh9padUiENMLb%2F670GOqUB6YGM0lWZsuxpHdjt9%2BEVkROgphu2%2FXGlPGQV6IHDUOBbImSb6LcPhyW0%2FycVe%2Fmqd6HnE%2FR%2F940HshDxC7wMilaRJQLddNnGMCDzYo8yc7VLiuYnDAynFzTNIUG8sc2bOBqPl0N47K096GKcoY8%2FP%2BPqDG2JX2xASbTbiwMjNVA%2BHkhzfnDK2BtXNDifkMO263%2FYm5oP4ypEPedt2NGEcR%2Fy56Hm&X-Amz-Signature=d9b742cc7283dcf1f6cf3b03ee5be300ba71cb46b5438acc3a651d3e51fa0eb5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
