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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4UP54VH%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T110115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIjVJDaZbd8xeC%2BjKpf35%2BTHZtCVWGhJBRb2E%2FCEr4ogIhAIYnc4lk7Fp%2Fuc7Kva6zpEazaIsfEr46t%2FGoMyqD4y6GKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxC1mGw6ECwnO1GU3sq3AOdVX6FHM8IQkpTCIBiARwsPyoYr92fwXUbrjpE3FRUxTAKkUbeC26lNdOFYM1AKpWsaI2nYZSSLIid17tY%2FxMA%2FlldaNc4LUoR%2BJd1Y9BJcuwn%2FUVuTlCT%2FZaA41S8ST4S2IycWpYz0nJzhDhIvxUnyE2augkYRlmhjfLuO4e%2BnzAgm1Ec%2FpJLFDDzv74wUvL1szvAv%2FDDcwV2UiHPqk8pETOmFOkr1E3NqQgIIlIRJ8XdFpMwpQPo8h7oVNADfYO0PXtOj2fP49vq11YRAA0R4W00A7F0arzjO7h24dwVIANdjT9uoMJbSk%2BlzJInEzIfwH7QBWm6NeQiNXp8I6JvNZW78p3lGrETGMFEv311tmb80o6TmnxPLDER2pNBq%2BZzZcsu9FF01N8L0fk2Ef9PQHfnPhEuSHDgOJn3qpCWp0aSjkKpuxmJqVt1oDjWloLpD0PpGx5VudOipRkUvp7x53bw72M3CeIP6adge6eTc2m2spbRjAfa62gyu1FCrpbExgDffCT%2FxHd2Z3MyN78Z2juCRoHI8G%2FZJGuhPscqpHIWiO%2BJJxvYHAdmslhwlE%2BpQeTxwy71PExqz2QWFHqYXcFe4IUPqnvQwJc5sWU%2FFUi7FvFc4Oiph%2ByKHDDGyOW9BjqkAeUTFevqBtX3YMqEGqaABk3Y5njRfk97Bmp980BSQrdMQznL0Gzk2Oi0kygvYD7UjXy8evxqD8GSOCPm3WsFM%2BKIweMzQ2pnAMY%2BJIWtPDSfZdYI%2BF9paqDETA%2BJ4cN%2Bmrn8E8dpBjfeyughX0Yb%2F8OJHUPkhS7wDvvwPXYYujZZRPFTJ8PCvenlRcEPfsuWdK8MjLZV2fbdWZxTxNvZk4RSRoqE&X-Amz-Signature=b6a710f29c1948d7f9353fdab800768002299945b9fdd20e0195fb6e2cca864d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SCULRHG%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T110116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDv5C17RTvtZw8BJ2O%2F7XBqvGSYTYjfR402p7X8S9V5eAIgYZbF2UKZEGJiCYDHls5ApoIkb%2FV6VBvSQ9jaNt9Rv6EqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBmVCQ%2Bj04SKS4wnwSrcAzbUwDNNWgrHgG%2FtmR3fy0DUMJ2A92GhcbTJYlaOCVvYsqcTSp%2Bt2n8hbFPQuyn%2FtVznROOQw6q6dUw5iq5z1numZYw9RijwW0OnsXXZsc2JXMeXP%2ByFuCepfRQaa0%2F4g1%2Bu839PzMhjXveZmSprL8nu7a0NXG8RddXAJZDYjaxKJZYNiZ5wrBglcHy2GcO4hkZs8RxeMwsQFgprlofK8ltDsDCm3jHeimw8LQ%2Bn1QuHyK5%2B%2FVQfVLCvYSpH54YG%2Bz1N9YsgcI7FDlrogAqybOr7K4zhW%2FfWk7texD4ETggRI8HS4KCf6y8SR%2FO%2F3DMQoD3KWpNUpvpvzccP5SRC7wVRCQ7C2JLAFhN7Z6LDwf9HGI8jf934%2B8RWXKeILU4jV25guUn0sILJiKi6HZ80YqDiQhVPsYtgX4AN8X3isUM7Bz8o1UykHpiOhq8SR0n02Y8gE55MHJ02zcGs%2FifkIvVVBuLsYlWMRNU6Y4aPRyzf%2BNT4du5ZxSdwrKm4fwZiJARXFyZRlA1BxM4OfDjYYRlAE1ZlYYhiH6szbhN8OEbtxJQQQCqncaWGLeKuIq%2FXLX1FZy7pBGy7Uc4RMihQ04D%2BuAZPL3HjaWPGCSjTSgI12s2KDd330O40ngK6MIfI5b0GOqUBXUylpqUQBSNjnC71ua9cI3Mr9uk5p9LGo3tb%2FOxMOOLTGMiIehWsuWwcppkyJtUXzeu7J1IaTBntfJSmWCD5AUFGKbitq4UkEOfTJBccquNZUjhR4c%2FN2AYgCxTp%2Fzz%2FNFAuWN5m9dmQnwffLSJWhCPI96uD2krq%2BSxID4gah0XUQsQ%2B5Nr5EsV019%2FG0%2FfB9AMP%2Fa9HKFgMmOuueGUmcDIQ3Ql0&X-Amz-Signature=04d5a890b6dad22761f46ea46373de627f5b35ebfed4a4f223d120a6d0db8750&X-Amz-SignedHeaders=host&x-id=GetObject)

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
