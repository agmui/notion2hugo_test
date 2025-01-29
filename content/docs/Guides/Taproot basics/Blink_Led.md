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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6GVBSIO%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T150737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICbE9UcHUr0Auis%2Fc%2FcQMW9tpIypw2P9FTiJqFsOLriqAiAl2T1Q3k30nZ%2B1bKtgHJ715Vo%2Ff3069nhVOkHzdXRbOSqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKG5uKoplor4ghdT7KtwDdYj1FbdkroFIhwgny9AEV%2FZMIqtZwnNX1%2F2LSfILNBDpC5NYlJ%2FsKYOZctL%2FP0XCIgejGoii8GNYUtGrsLiFeoqlhQvFWD4UeW8Hbr8EeAR7PhPFoDREu%2B8f4WutY49W1ARBgcjZKq3HW%2BLfSGUkY3yvl1zeffouc7CFzIGpMSJp9LvO8SEouCsM9rOTOobGRdBF84FXkbGQTAxqEYoTiEgbYKRod3n43cpVtQuSUskZNz2vgauhMy5soffBpwQr0vj3f3in2sM36X%2BAwbQ9FtwUQPsRwGPy%2B9wJe4EShSFFPQKTvUbFmMkHt%2BbVlCu%2F2xDHcGxEBcVDS48q%2Bpp3HjBHmMUU5LWPwdkvCzB2gaXd6%2F8gv%2FPGOu4InIjP8Qqabw9%2BYNLMkg65C63BHYMKUEz%2BN90P3tAYPP3rpKiyzImOo3siEHIM5rqpo1ZJnsCPHEeP0ilN7ovv00fYSKkuySADpFV6f6p5%2BeIMPo4YrSpMECftXz5ka56PpESMUGBK1Mrt%2FFg0VM2osWYadBd14ZO4aU4IJUuQZ5GVwoq2LGV1NGVCEuN2E1XWXCZo3DsdYqyjQVBmIhKxT5RfxCpjAQZmfacK%2Fmqg6F0RF14%2BaLNTu21JxNp648wq3U0wjYXpvAY6pgGk6Y7xHaDX8N0tDVbUBYnuswtFys6jLFtmRzqgb%2F%2BNY782zpS%2FVYVtIiBWLYW6Dpd79dLjWZfyIQsKkPJQVO4R1dWv17mLlRI2qjVtU6jabg%2BrDjgXsSW0JxSnJahZ1TkKB6V%2BFvgeZmDsPNl42Mndr4dZPd2BxRVrKAvYfoeWktceif9Tja0OySrlTijpPg6kCrHY4KNWAFKr%2BftCOiWySTVvznxC&X-Amz-Signature=52102581a8a0fcce3b6666aa0bf5d0e7aee20c39155ea0186ac6a99c9912734e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQZCOI2F%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T150739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHQMzRN72em027Nauoq%2Ba2nHnSHIzXJxf3GR%2BJixddHzAiEA7HhVcLQsBgcw7d1l57umfRRCLf81HLY3k%2FqS9B573lEqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIp7WM6AYpixuAYYUCrcAwlPM4Yu5aXJoks%2B3V5ccEj12IvzP%2FuENEVQt1WE1h9XNbZ2nKI%2BrDOnTNl3RSS%2F%2F89omCXqlr%2BVbzWC41kwoI9rKzr3%2FLk8MHGFnx6140wTJ2sSynDeBi5m27A43lkahhC%2F2oxEH7QV%2F3eppW9Yt%2BxeoPm3ou2C6mDT5vPS7fEH25EX%2FTybOFwD%2B6F0lIopPXf5%2Fe8nWluyxKaYd0RXZGlbrq3OH4GF2JeKUVApI88RR535tmlee0kQwnniGwgOV0gIO0cdd6uDT4ZS6wgY3l803a0rG9anRVeUT95ZIRLnf87V12diCwQmzT32hvrk7SjsZUY454x%2BgQGrXsg3ZAsIYPii90yVsgTtfixMD%2BXsDpPLmWdPNt4R10mSzw75t0HHwszmkG1EAjKynS4Ov5z2IiWYpVMAwRI%2FH0v%2Bh3JKP36jP23LWq1sBW%2BqpolNFz99yV3sq7A3VIPWEU7z2EPG4H19Es%2Fvl3tdkpJyfL1Gej3w8BZW0diq368qTPy%2B3rdgh9x5Tl2O77U29KWcyrAwmgovsQWHxJKmMOX6mTbVzbJdk6mtP%2FNnJqbH2ozg6bHDWzxSGQxLWTARVlhwS3f7CGw71z8v427iYI5h%2Fzowro93YEFPQwfam3FcMI2F6bwGOqUBT9QsBVw6PDEmPnZbZ9LTkxfWCUxYdHlfLTKXVhyW1gwtAoki3TzC9pOZS0lnzRuBfrVBhga3RCpcqkEiSR3y%2Bvg0%2FK3NrKNLt3OOOMdVJXQoKGAepuUIp%2Fq%2F%2BEkU5AI0u7vCzDn%2FWaQIX%2Fenakha%2BKw8KpZFAS1%2FnMhNQtXvYe64wD4hKl8gpqO2Zi0g1ItQzIZn%2F%2Bl14p3du%2FbJArh0enKkofO6&X-Amz-Signature=2688f3cf55af62f9503941bf1853dfa8f46c7adc5347677b0444f09a1063961f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
