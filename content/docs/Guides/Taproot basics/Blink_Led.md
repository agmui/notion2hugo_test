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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQ2FVVXT%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T121548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIHw04ii3r0Tz3Ut021lK9xJsB5SgIamCNEVdZIdBJD5bAiEA6ICOlG19FfgW9l%2Fo7LPeuTsm2xU%2Bz2ZruWkMoglQ8wsqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL7kBhmp76J0lF8aIircAyLPHDdoZOEoWbHOe%2Fn60ere8n5W2qqQkrbuQ44C8ww0AWIU2WDzS299kJjsL1hE6s5brHsYR7E%2FrNPPYxwQpriXofOKUuSaefnTrpIhY2WNN8LTqCUeosIluzIHm87KRjGWWaOjlCEhxc4FAIXWPc6lgPt9%2FwPcYYWi78EEuNAP5yBAtWtOUiNjC9PwJHW9W72zl1HgtXeFTn3KFNI55DZlMalm0ORQgemTz5gUDXQv3wNq6EV37FuLsfikWlvDj4XHA8iHgLt%2F2hVOl1FHB17mKGWsKCb6c0y2uHloJxW8bGWpuzngJLyUMUrIrdheAEx6TX9L82Pbef8L5gKDR%2BKtS4z6xBj0IgCDB8gJFjkl6gFigih%2FYkPkobwc5GajM0%2B4gJFpX6acU42pmyffPbPF6e%2BPfAU1BuvxodVi3QVlDvck%2FbutbHRvpNRg%2BOlHH2HXoplP7m1n5rCGfmYK9hgaAr%2F7FGHIikAbbFbJR8z3NAJcjrWVaAHQ18ifJQ8r89zh%2Bt%2BMNkTNYqx9Ns2j2CMPOacVz7b2k4%2Bk%2Bw%2F2Crb0ZEWF8hkBHwLOvPi5s%2BNAGlVtHoWUoctGb105m2Vw8l%2B4vZYPQ5SJKD1CpAQT5Va96nmFpI%2B5ucGNhtsrMKDIh8EGOqUBbaM1Qmd5tdH4VGf30nyc2FmYUMXwuFAGc%2Bu9xQ3sm8BKKlZqkzcltN0pOgl%2BAUBfmnMNWsxiBy2Bz0McsBmu%2Fih6nReHgQIiOM3Z1KHi1UN5JGHk7VVQAMsi4owZRIEZJ6L0PZ09wGzeGh1Gdn5SI5jl4MFtBTE7iMG%2BGXaF6JiMJnSQhXNvZV842vKhWNP7QTwDSHzSiDtOtNzcoKYDhp81ToGP&X-Amz-Signature=70870451785b0b335522aac55f3fc9c2934aac96b62999b6af708e7d231e233c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYLYNTNF%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T121549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIAutdQ7zuSjD2kotE9g8VfNtLL%2FO5xj%2FR8%2BB5dfictBXAiEA7RHEOjWhj0LbD13zdptN6qELDNgk440LWD9zgl4UEi8qiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFmfQ72keVzrs55hzircA3lK8S6vNkINk9wX43n3qUAp9uYFBz5NLF1ZF3tq2vPnM1ZSC87Lr6CsNny8zPW4MjletMOdFmia%2BAxEaD%2FxX9ouesIiidA7LENZAwwNjilo0n5HtgwP5X2BvsF%2BOG5Ie%2Bl1Ytypep03swiO47aus33koZvKSyv1F%2BqIWrkEogfgRlrcIy1TRDWwnQrLe3lXPMNn%2BUv688C4PBk9h49N7fumpwE93rwTNr90BOIvHm4dWggxliDRRPuxBYrSSkvld5DlrygDpchLeCA9B2Pg04EV1iXxV%2B8dZUJXkXNIiA2kJJ92Mx2lFBJZmk6bMZpDrOxmcMvRtuesl6gpPcA93Odibt3w%2Bt3QPED7HOkJ2MASOrBdHqwFUcxHikDSt7VcFIS84%2FJNYo5glH7FOLRnKC%2B8xwTgu6CBpGGrQkYKHUmmzZ%2FKf9arKKhvgZ7iJn59KbsZiBbJUW35AYgm2v4SfUAfEESE%2FpOVECEx5dUtgQ09E5oG1%2FHCknyBxh%2BOsFQN8MqRFsBGv2l8OIFlp%2BHjgCi77sktufOP4z36C0L6pR32ij6x5vpLKxwerIvJVj1cVqz09txlOkXwbj0dP2VpWPB6DL%2FF%2FJm0bd23A2rVMBTbWfpiPN2k9IlUhMD8MK63h8EGOqUBm9FHnEeIZcbyrJt7%2BZse2%2BZCpcZDbTaD%2Bb0oJPXK1YKYNpWu4uHsNTwI%2BK9g6vNEL5AR29VSYe3sNGAcnf4vieeYZlBxHS8HJmKPnSgRGYdqHt8HyZ7AZw8xEsLf3S5WzV%2Fah4g8u6kvE9AZ06taeG6iXJfp5FVHoHXvwv%2FOe%2BWoMRot0gaorXx%2BabYuGg9mHtRZojR3hsVCa0%2FnE4Nl%2FPy10oLb&X-Amz-Signature=86698497101cfb19cbb4357ed19c1275a2d5add76e85819079e70e403af0a139&X-Amz-SignedHeaders=host&x-id=GetObject)

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
