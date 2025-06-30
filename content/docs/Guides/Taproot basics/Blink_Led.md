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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DN6LP7R%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T190108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAIKxbSWteDo%2FHDXIR%2FSgszM2zSTFANifCYdUTIhlFhHAiEAvjGwozNLnwXkEf4rPTOwFar6NoHsov74OsZBmZPUxlsqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMl%2FLWpdeFnlVFnd0ircA86P216e0h%2FEuvRLp8lQOVfgPx0gAG7o%2FaLkpbBcJlOXaBmbWXcWpRtKx81aUVFUsp6WGF2sgu90TPVRHapFIzQE91X%2Bm1QN0BdQs2cIoCCpQ1f5MGP3jG4rXMnFKRBt2fsvA2pJe1gu5Jh9tbW%2FdFEtuLykbB4gxjs6SVDKCY3j1oeT%2BWsjGfQSF5DWMnOo7wIfybysu%2B1PhXHWGwWgGT9i%2FzlNYf6quPWnlROfuTYOQv%2FMaE4GZUA7Cc4gfbi566%2BG69RHPpzWkC5dBn9VJb5tciaqdYdecX51sM43P5YYs773iem8nJ63vtaYAbjLTcQwOA7EdahjCdIMnDFeW1QZ5z8sQp2zYFe38VuxjCk8uDFdIENP6Uv1QJZIPJM9HF3LGSc%2FqeJ3I%2B0%2FlFaRGkmjnokEpppwvd9vBVoxVW5BD%2FAelRxj63Vl7JdE2NyES8JZ3VMIsnAmxHfvW%2FC%2BnPhfxDrcOBErKSiuIGz3Kl3DVFZ%2BPu8HLPc0Yo5VRKNZkB3KQnvRx6BzEAtO5VBBHmmmyA9FdMDxRClzp%2FPuAR8oTOx%2BgkiXZhgvzAPsV%2B%2B3GBiSrRnyepSRCK4DYDo9pQYK3hLhi72yswqbVvRrAnTHhDIxC5o%2FeCu9Rnv9MLyki8MGOqUBiLTQSOyWw7vSut4KKw6xleU0JlARCfmm4Wj3%2Bmad3PoItpulEkD7Ac7CLSKr73oGii18RGSmToXDI9XnudaBACpkbL9LrroWhPHeKCE%2FY0BooPD2b41AA7w6aJ2WYpUjUPtz1j6tBDCFkSSunxdvO5WITLoiEo%2BoGe6FSx%2BhLLiPXY%2BGrqaZfu7nZQn5V09lmcWk0nPEd9wpaOiGyPcZR3pb9mHU&X-Amz-Signature=722c71a686164e570df2bca7219863ce4af618bab332ee52c376c83c88fc891e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSMIQWGT%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T190108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIALHKfLKCbtHevUWBVKuzIU28m9qVybSwgHEUQBfyf4GAiEAjhigY5hdeCrVePWp%2B9zsuAoT9u5DDnPqnN8z5bxK%2F8kqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAdC9FUvsxVjFs858yrcA0bTdXoiLWzFgcd%2Bep%2BbYgGJXMpPbQZnZnuveFbsT%2F2YwI18QODH0MNPYXF0XoMqLevXDW0O7h3rC21y1pg2keIo%2BgMinxZ0GM%2B9AuxJLiEhWf6eTmDRsWstQxrs%2BDWtHandwSskrPXlOeq2106yeYVN0PaXtcObA%2B8JT4bmgdzrIrf1XIcAxLJpDMqxt0Qd5svg5EYrBS749hUW%2Fdv2LR%2B3pbdFiM4ey9vKF2KUynKKqgL7QL19Lyy9akb%2Bewa6wZyWUw8NCm6yJ7zxgtRYnru12W6wkegWIEsVLM1F7pxPbKtFcOuv20%2Bl5AtPl9fgBUkcou6OkK43HQM6qv6t8Wyi%2BWTBXmPrPAf6ckZOvgRdOQRy8I11VOeo8ePvD4vCjfcFj6RgelqX%2BO19dl8hoA68g%2BsAQWOMHFQyjH%2B1jnVnCXBk9cyX0Rj8GzmiQ8efXc9U9zYb7TwONmxoHQxseoKkWiJ92X0Pi0rluynuaErGlMc4i%2FG0g27eMrKLU%2BBnaXrWZluXZacNXIF623iI9tJ%2FPGuE4peyZSLibBwGiH05k2nnW34p5x7G7hSCrhR8597VgkdGoKa0WN%2B2GqLhSTGERNTKT61AbZYv1PvnMQyj78RvGGNEJkNQwx1hMJKji8MGOqUBh8%2Fuea7Ywp7VViSzdc53pIUpE4Rq81%2Fula%2FvRvxsq2xPjpPsCyZuVVPU8U7CdWin6FXlDduKQPJsXOMMdS%2FYGsz%2FRpbbITu0ujMwvktZXsADIQ4noXaiTReDvl04l3FXh5qySRkBEmPfIfYqbkkm9QOvZLFAL3spLsVg00gfF1me%2BLba2Ai3qYjCpzYnGDxPBsyagDwSmL4qQMbCpBgEaZDBgt7I&X-Amz-Signature=808fa0dbdfffd57d468d6955fd2b576ebf536d962249edf70f6943810892b971&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
