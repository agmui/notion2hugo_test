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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSBZC4WN%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T040831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC5zqGuFWx2PeqC%2FqYKj%2FoUwFCzbcoe4ptWB390XQpRFAiBrqd0c4Bys3%2FdFxzH7mgdQuY7L05ICMpcXgVkjx6h5KSqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMBk%2B0Ut0Uq6PHGRiKtwDoZBe3w3Pm%2F4poISuktTeSnrfldB5SDWh%2BouVvqDvzJDX2UN02mWHWcPicE63EA3gCQCI00rqAsGbDoLsuXY6SR1lrO9klTJTMB%2BX6p8VasP1RtPU%2F8UVXbtblHpRWGc%2BLSFzaa%2BJOsOYDByrk6d7ElhcShWUKGvoJpL6%2FkUQZuYq4Ek3MAJA6GIFbhpHybZ3g24EemT8%2FyMvZT%2BMgV1FIIpucLCQBW9uGgtV4c9GjkTjxGTO6LGNMZDX1RQGAd%2BiLgw9p%2FGKinhgcjikvzS%2FvvSulxGL58ociwKDHMbttQEV6ddY8SJmom8xKC9k0T78qE3ZFiDmjZAfFmzdHukFuOViHTbIB%2Fk8HKZjc4GbEvb31TbOxwbdVqfIoE0fJfXr1FqgLdyg%2BpGfu6GfeZFc84mGpc702JjLNcSIPSBRGuC3nLJLmwT8d3uJmuVXLlT9zs%2BBacsQ8mNPzvWWD9qBdT4olES15Nxyjz05C6SUx1FPDAwZmHvcgo5z4VZquKKEBttuzfmbfXmOinmlGO0lTgvMKoLy9kY%2BGJhI2zznhqxWeodLrEiffY%2FnIpp%2FVPF3cOh%2BahLx34t2JzZvFrgfde7dBFrofze14K1Uz%2Fs2imrdaMNUay6It7jEPa4wvrz7vAY6pgFMS8BS9VAu6z9E%2BaOzyO7lrSOk9vDa7vXbwrL7II0DFXvX1fO3BVD267IUXud5FVLjjFiX%2FC7isnhzcAg24ACpjGzagUZXfFC2h8fLETPJqjDuvulKPcz%2FfO810SZgRuWG0SHHB2zMvXoyxX9ErK4EzBfCM%2F2ZC9wEqqVk62Pu0syiS2YU9fyEAaza5lZFr8ksGRieKNZ9DnAUA%2F2FIYcGBebylMU6&X-Amz-Signature=99ed2d91f78bfc55d9a69e21d36a0a711034dd3ffc5b4e543aa9a486466cb471&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CK5VWO6%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T040832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDA8Qed69GejP52gYQd%2B45DCB7z7X%2B6%2F3XRTKI8YYlsoAIhALmgTobyeYWWkHrcQ8hU60urwXrWHb%2FfsAAujG%2Fq%2FR51KogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxGELjgBF1BLR8wW%2FYq3APxtE5ZX5raDg%2FwPQU%2BsLHctDF2Sn5DN2XQdKoEhZ0gfwx%2FFb0FNCb3myxUqUeglJsjTZdzeWhpOxGx7j5WRWvGAbES5ZgLJdnGsjHz2X8JYaa2x2z4ijFEUhexHBuIez1PRGQJmOv6myp8nLuNG2BpHZwNZitFnhCADxUiJcFsRD0%2BCMD%2B7gR%2F0JzIynugJUbB9Y5MAFsN0DTbKgXReglEMCBs959%2FLMyCCXFRKwYH1PVdEPwhADcIK8zNuwQ1%2BAevZOtYPavF2F2D0RyomSFUQDooMn7iXNHSSftrJhEygCJO1dG2D9%2FyeDxgUIbruDcJyyIjtpcTafwwiCYOjLLysgYGSBkQ8t5ernlgRqsiCb9vmwddhQL1icbtobbZOnBW%2FAhf%2FlhGeoDeaMKnekU2miIfor195nwFcmJNvF7Aw207hV%2FqR%2Be%2FeO0OkzKZ4XZ8g1NsVLiSnSRA9O1zXGq%2FluILdBX10M6BVviFcyCKcDVNZT60xM45kwnF8vngMqVAekO6J2LCsXQ1910R8DuFd2BjS4ssk39nscNvyfmhxmiLf%2BfcH%2BulTSQy9CPqUlBZSuEV8%2B00zObInPN%2B%2BnS50xy%2FI0qAuUbSaMt0fRHuTdJwhR%2BWKGIVHCj1WjDXvPu8BjqkAaN6qiNmG5z1hIVwN3j52C%2BV15q9UuFMpIjMoKL1Uh7MYmuygodFEg4MZwzs%2BcxO6hrPTbdcCjtnALUABSfMLI5R%2F2WOyUrJ%2Fx3XZ20pA487bKc7EVXT%2BCI4hfmLycTODikt2FPcbd7g0M2IEu73DMtQBJT2WqG6C6h7PJk2QgFjFT3005nZRoWTx6l7sPJDquPOQMyanH%2FumLwLglUKewTyovAW&X-Amz-Signature=87d67f3a77cc57988213d2147b73c8d68e2955acb12fe6207a86eae16c1aeffa&X-Amz-SignedHeaders=host&x-id=GetObject)

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
