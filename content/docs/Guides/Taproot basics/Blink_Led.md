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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGWKTNQA%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T100925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQC3eRDaX8IGXmrOfWXiKSfuX4wqYOr8gfKoRkHVfB%2BKUAIgFpFnWGLNylcfWFruAsd04MoJJo17nwc6hd9kgIGFl2sq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDFti6CgIllkvqwaaaircA1lTV5ukWCMUoKHHXNCln%2F5zXbSjq7S9Ajmd8346q0NrKEmUh%2BuIwAWu5dKVc%2BFpLZyRG3PVWerCvCF6VG1OXw8rZBA14zCDNlGQc5ljtopqn6Gg1E8%2Bp09sEHo2JXrPgiJHFhE7jAiZnV%2BkHUnULi7NxmBNTRTg7%2F27MCRG5UQGRe5mOpAQ0%2B7VaPeqWJk2LGFNSg7CCHoKiIv4qMLsJivaOOd7dZ8ez5mrKNutLND%2F0NswAnPArK42SHTqVWTX79Hkaw4ABlALXp8m6WurSGYuIL3Vh9t7Z%2FKxXUunpNSfAzbA%2BAWX36Zo%2BEKz7MhKhIFLVARES9ZEsIEjtmth%2F4zA%2FBjq0uZRaJvfMguq1Iu%2Fe94hwsbZFDdEcHK8%2F9Ep3P46XiRsfmsGbt9w8idmfCxkvEBBwC3RSv0sbPAKtrvxeb4jSGkq2L7kxfoow7idlcuO87eAFrp0AJGisOsYjzRnJn51sSef%2FIs8yvPwcdjG8c%2BWMiRJgly%2FcK3ugZqDXCw%2BwiY7Wi9d4uhRdocy5Jxe2TGMbbEyJurb%2FZHDaOoJYntqITKdbSlAElOdQmepcjGxEJdq2wmIf%2B9RVWRA8w6b5wRZhRVHjYZlcAq4bA6YVYQSUS6wrKV%2B3Ic2MLOW9MIGOqUBqiTPY8pJkwoe%2Biro%2BNquZzphcdk937r%2BBuO3uU%2Fgen6zj%2B0r6SbtWyLlkhemnaQXSd%2Fk2K6E%2Fxd2JVqyAVLKy3jHZ8fLuNI9aQhaNxtv4w23QcJ3ewcMAJn04jzzallT7vq05tW1G%2BR7FUrp21oF2phb7zNQE8qqZmbiMJRTNCQgmfcNINgrI46WQRHOhLogvGV%2Ff40JnhuuGyWpaucTI4tS7F08&X-Amz-Signature=b454ecc025657657f27d597053bf9008477b45d59c9826bb3d5143521c4e3a87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZY6SKUN5%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T100926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIAbIEZXlrcrSFpq23YFWQfT3MEB837FLVTOyFA%2FfM1lKAiEAvWXzPuJNrcfT9IT33lLuWRPoDXRQ9V4VqY1kI02eVQEq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDIQNvl%2Brsw7cy9AdkSrcA4o4VXYU58tP5juFwL5KncEmsoT%2FrSwpsMaqRTss1meVUYb6XRl17KW7VF79jaH%2BtnvHiHh%2FyRl6Pw4USyEu7%2FO3AUsYvduYqOqgPLhDiO%2FWGNzWIKlQ1bNECHtPLBUShpYmgH9Xh%2FDOSDig%2Foh67C3uESyYAcpGKk74gSbWS6yGnmj49n6uhlciG5apsn1QAKoUTVk7MsIZ9G5gY3sY3AX0nLsQdHCdsAmhwJJF0rufs%2F2IjkHyuUUMFoN0Hn51i0uo4a0uwSZmI9xvRYGFJUJlCkJusGLiLEfDD5FJiidMCGUajAFbNADXp9x2iNzgPx5Km6Txq9QN8d6KbTIWkpHi4HDmx8xlrm%2FqDPbqFD7Hrk95XtBKyqZ4AFF1JIv9TmS6x1vqwfGQbIj1CC6qtxA%2BXv0OdUf41XaFs4FDi%2B4vS0jYu1Fmil%2B9Aj8s%2FMwnMLVCcidp9ZfvAuB4jDnMcP1Xn5bcyuemOdmtY09ICcG8oGNpZKBgbHLOmtvAXjaMidblckybRNiu7EXwmGfzUvZfhJkORD7RCxn4QTFUeQH9SvYWq72rZu4vDw2hajN38dqjrs6Xr0C7M77YyRjYGj1xSNaxTOYbIpAwnqWg9M7MBabEUYS%2BaxDSpYxXMIuW9MIGOqUBbTozaM%2BwV1AVqPRk3D9EuuDeiSb8jCs8M%2B%2FX2Uaw99HJ0s%2FI9aC6aPr2qq4GZ7Q1O3w0FekVvuObuTvUznuPAVkCCfFO4F7yGeYtjHYE4MR2ZuOUdbeAubHRFMX%2FUho2ynpwj7KF%2FBy4dul1j3We8Ov8afD9QlGku6Bb3XtUAJLLDq7OV%2FdlwBoWBaNilEom%2BJUxzEHp6Ubrhd4J5%2FY1Zktolr6S&X-Amz-Signature=700caabaffb9bed71e2bfa9fc15788e35fa9d33f2ef72b6de9deba6a22e57158&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
