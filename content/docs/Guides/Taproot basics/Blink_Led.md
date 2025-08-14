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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622T7GFMF%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCID7qNGQtOuZiHwu0ZTFFJOIihLkOcI4Ng4F%2Fxq8mdQDpAiEAlCSsNVnDFfmglpgRsEI%2B1JYAKdICrELtWsSmjjKNVJ0q%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDF%2FmflgVqmSXpl1PUCrcAxlZrmFXQNVuxP%2FkfEtPPqWhTE0gtJI4bGPq7BV5Gv%2BEtezmgGubAp1vlFPWw9G4TPwW2BV18Plo4HlbZSoI5Zi4g9r1FCF%2FtLe%2FnNRuEpQCMzUolhaYSZbsltyZ3Ljpypoz0c%2FBlKBF1uuXPqPC6ySBkkCEIcdt3DPqYpPgaK2mK1FRG%2FKk6i6BY1XIEmZR1aQuj73XejSKJsD9BtGTQ9sdn8BTiLg2ZOjqtAKdHwPcn%2B5u362ED2yjAGBDdZrIoqSnR5oajgfG%2FQpW4e0bRJlLfhZ99Pk8oyvAm9%2BTxZhMkUSoQdQr%2FzwDswGInFtFvNlQcMNa6I6vByq%2BWJFreBlw2lsF7decDNw0cl1Ug7ZMKZo21VncjN%2FU5XL1Lm7tP7Ud%2FxFikA4%2FGOVG9NvzwYupyZsNvqS2ps0OvrE1uokjPxDHspASXJmsVs7xdT2wBgeuhzpbDLAOAbwEpSlrSjGReE8%2FXQIp1cyE9Y8hpTdl44vHqyyAWawjSbiuvWMVfFGbYtZtJwG7Im3Xty8RNsVAqnzIiEWe79RfLCa5y3diq9F710ZN%2B12tLmpYfPxfIv56mblmdWNeq6zjtsIZ5e9HsSVaAXEhs%2BtZFeE5Z2XydqQ5rOWRytLxucy1MOuM%2BcQGOqUBYjqs%2F6G%2FfTiMxpAxce8gLVmRX%2FQGr5ZmQAsHwFPo4TjFZEIh2QrSuXpuqcvdxPmyzK7uK0TVPjqG8L21%2BlfSuUCJhTYmxLTGVa86A9iSLlqT9zORN80%2FPkEEmPmFhjndJWYqfS%2F4TPyR%2BVmYSOlFYlA1VEfxTl8JRvCVxAqYHinaWm%2FZN03tdOjPyrlsaz5wlFQVxWemc9qft1JV4NDjrypQVoWs&X-Amz-Signature=ce145b8c2b7e20cf278feb0199bf401f881c14e1059886dcc1d30e56c5f97ea2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656RJMW7I%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQCLWCxhiFNifbj8G3SA8ebdWASxDWY%2BHum27xgSsKCjDgIgdZZYtANcwR0MA%2BoiN3X7FUBCFC9XneAUaf7dlm7bVHUq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDLpTa7or2lssVlKUnSrcA8fvN%2BSAZ%2Faq09w%2FR60ocbSBjP5W%2BZw5vJoJ9NASGXdN4olPkFHNJnybhXD89VNUs25CeZRTCUNMByv6L083nM5KR5oTIPo%2F1q67an6MdzgISkd1Bllb17meLxUTnLpTMhenJue4Q5k9V16Pc1ZCu45XWeFDwIO87PJkCrHJVbk6nZRzcI8%2Fk2tPIAmuqp%2BVyOUX29l8iXTa9ATKHMDh6goY%2B%2BwTexI%2BKc7n7E7X0zKU%2B4QGsbIfT9ihdzVShxE%2F3SLTdalgTvVyzGnghCBBmi9mwg0jWqqn0Jwee9%2FPU%2B8F78%2FEnMzHkHKqKlubvKnKrDeRqA9W2PTFEOBxlxzhIONDJog5QkBg3iJE4U1722EGnILuaHhWNzDQ5Q27NACaHuq6l9z%2FcytELdFJ049OdCYNo0tLmmdmWEOBPEtbEuzOnud2UIJHpQZk50f%2Bh7clrzWuHvFV1cvI50n%2FJ8Ab1VOfFFJ7eSKcVdcVYPJ2aRE8XpvN940%2Bl8LNcUy2iDHFlkXynlA0l%2B1A26R85AWTp22W%2BeHd9jcxC2Kx%2BhdQpH%2FKESLJdfvJqsAAB%2FRl16%2BXjVB72qNJTHeM5e66J9uTcL0%2B4JUfFpZY6J%2FTQlSbK7o%2BWiqiSapetu1aGxuTMM%2BN%2BcQGOqUBaQ9JfxFeX9avLNpNcRaPPcActZAC3aqq78dMuj%2B8NkLcJijsbbjpqt7TZKvyJqOvdTwMplGBc6lrj0jZ53AG47HpdCJugfNPhGNikrfWRhbrqj51wg9Cx%2Fazy2UBmNv2Ymr3NAGzE8UPTVhZbXvFQzw6YEGLfnWQEOdxi4KoGAsCp4hrc2dZARQ6oHWlJPZ%2FZNP8lKBpLdWW945GUxt55ykfa%2B4y&X-Amz-Signature=4ba312a3b0cd268687897a88f6cb5ffc96dfd4b53043b51dc22451302ab8d209&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
