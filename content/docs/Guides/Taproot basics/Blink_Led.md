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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662P7E7KP2%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T220726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIHi990N4H3uewPFSdStp0uHQrh2yDlorNuFp2He7i5UrAiAlIdOzFy5upCuDyhh1ZOEMW%2BiZzf5ybqF9v%2B6Ee1QSFiqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9OZXbC9MUOPINNxXKtwDYAVf%2FuMroHPfHXPbYMtJPvvey1DtTh9AH1S1C7mIRgyP2tkDeIXqkuGMpnDUX%2FqPWiSu3dAJUm0AdWSa0yXfNbXVN3v5gEYMTemP5qGLGTJ00JpZrqD1eJm4Xvd%2FkZJvRJj9VVlHESDaC5YD%2FlTDdkeWvMn6H0IoKA1vWqZsWwwDMKuWkKQ37rabcAGdM7g9Moh7MWwAWqEN697dWyH%2BzMc0zVumUepSD6Qbbz84G%2FZmhiwrRA8ul4XP9yjO9VVygSDZ4X2VEJz%2FObKDO8vkCt2FjAsam5jrXwpS0nEGOod6fRgW2SPYjRSdxBni%2BI9rpn1YCM%2F%2Bn6iPP29lv0DXUTIXNDEOEOR%2B81rbxqlZyUoUV8jLHgfqgNgmY4hsRmotxweNTj%2F2gSnZbR0dIYxbmravF%2BaOyruasQT7a4GduLyGUC3hhXT5U7krwf9j2SG%2BzUFBsPsF3K932cy8MRm%2BoaarEORpqWV2STBG6%2FU6Wr3RVwJV0dFGWPxnJTaRlszJdF6irG2fnG7IQk4smhXrjZLMJkGqRuta%2BEk%2FUP4qOZZxFqwUDdcCx%2FQQGOqrlrJrtnfITM2e17rF%2FmWFbfdOJVhTRMIJINY5G60rylyq1zUpWhpTLcqOIE8YcR8w3a%2FwvwY6pgEvrCTUcysRz5dhWo5bPgrTXlafNa%2FAAiBHAyESA%2BBpKFpqKrVq1bsJ6k0%2FT1YCtLZIsj2B3EErQG8ASRaIxkVCD8ob%2FU7KRu0d2FzjoP%2FR%2F4fvoNQcn9EQWRDFHNBN%2FPYwDe7iD%2FOwdxkmTxleEz1BUNoAp3EWfxF51LdU78Q%2FiuwQr1GN1LxAKqGD%2FGAUHB8NE7aq6E3AmW7IZJNbaHK3zusWpjZv&X-Amz-Signature=229d71b9b5f26f5d9651221df3623a6532dd7da1e78913dd4058b981597dd985&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDC4PUCV%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T220727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDbgE29tJsIfwCebYNrAxnJmLcKRuLHd55qT6NSdCbfpwIgcKBS0IB%2BBd0vlnO6xE6P484zj9Zznb43gWkmmYfohzMqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIdvzgXyV1p9dWqFXSrcA%2BJ7rpe2fhyDv8Beln3qt%2FRV7Pc4bEA%2Fnel%2FvSGwg9dfcpzRDjoFe4PBk9uKlMwDfaPt94yfw1ax6KXZhnSSMlDPUHyZ%2FQ1PmdiraqVyFj8ur9LfNgHoW5x79JffvBJrV7yVruH8PH3XEdhn2vVyb2ufbbIjY6LVdzZcW8xvUqnP3%2FIuh8LAZZz81qql6dlH1S1bgPdrf%2BWKnqqT6JNEqcMHAuyYV9XDUudq%2Fm2owMmSFCar20xY8vbQc%2FUTyX7QQnhgAHEz8sBQxpzRM2xc1yz91PBiOrMHcxBv3cm6ukDbFnJMkA1RLEVEyZHEsJdDzNaAwPa4mfBsN7clx%2FG2CF6OPlZyfkrRniTr7MtV9oDffmFOnCAMq9g2k9qVQ7So9YwihfmOTRI7PYZqt2eVOr3Sj%2BWJZQVjtO9yDEvklukIdsVUQQZ3i6T56f%2BiKLjzvj%2F0nkPKwZFOB9Da9b7RP3jCD8KDXgn94uNcCSdnIKoTfFqjXeWCOv2OASdo3%2FduLXE%2Bd2D%2FOh2SsEkBzqIztVZRZo%2B3wgSEv%2BL6GvGRt0XfR6yXklDOEfTI7ZNhocDYuIXXsyU8229IVcmQUg%2BRe666VVpMIQGBi4ZTXSau31xgm1F3oyJRl9XDSNM1MIGw8L8GOqUBgtveqlRwTsAt42UK2ccrwm6dzs7V5wYciZQSMJK26D%2FqxTaxz%2B0wm3lRQ%2BrgCyRWuweIE6HfXdiKzBMM%2FdVxOHTgbwbjceBs9fl%2BTOl5%2BvHtwrwbnPrUHUcB7E7tBgUu%2FTrtF9%2BOtRY1o%2B597vRTfuX3aSsmbud%2F6VIzSA7NaMCl2ubz3ONtKIpgwsArpq2TmgIaYrJOuXmFjUQ%2FUkqEicALD95z&X-Amz-Signature=97e928d8ea8fd2d05c4cdebc63e6d2c0a8e7c71288206e2d757d78e7f3b2bc40&X-Amz-SignedHeaders=host&x-id=GetObject)

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
